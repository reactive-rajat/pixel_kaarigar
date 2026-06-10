import React, { useMemo, useRef, useState, useEffect, useCallback } from "react";
import {
  getProjectCategories,
  isVideoPath,
} from "../../../utils/projectMeta.js";
import "./ProjectCard.css";

/*
  Unidirectional flip state machine
  ─────────────────────────────────
  idle        → hovering  : animate 0° → 180°  (flip to back)
  hovering    → leaving   : animate 180° → 360° (continue same direction, show front)
  leaving     → idle      : reset to 0° (instant, no transition)

  Description expand state:
  When user hovers the clipped description on the back face, an overlay
  fades in covering the full back face with the complete description text.
*/

const ProjectCard = ({ project, layout, externalUrl }) => {
  const videoRef = useRef(null);
  const flipTimeoutRef = useRef(null);

  // "idle" | "hovering" | "leaving"
  const [flipState, setFlipState] = useState("idle");

  const categories = getProjectCategories(project);
  const mediaSrc = project.image || "";
  const canPreviewVideo =
    categories.includes("Motion") && isVideoPath(mediaSrc);
  const hasExternalUrl = Boolean(externalUrl);
  const categoryLabel = categories.filter(Boolean).join(" · ");
  const projectIndex = String(project.id || "").padStart(2, "0");

  const domain = useMemo(() => {
    if (!externalUrl) return null;
    try {
      return new URL(externalUrl).hostname.replace(/^www\./, "");
    } catch {
      return null;
    }
  }, [externalUrl]);

  const layoutStyle = layout
    ? {
        gridColumnStart: layout.columnStart,
        gridRowStart: layout.rowStart,
        gridColumnEnd: `span ${layout.colSpan}`,
        gridRowEnd: `span ${layout.rowSpan}`,
      }
    : {};

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (flipTimeoutRef.current) clearTimeout(flipTimeoutRef.current);
    };
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (flipTimeoutRef.current) clearTimeout(flipTimeoutRef.current);
    setFlipState("hovering");
    if (videoRef.current && canPreviewVideo) {
      videoRef.current.play().catch(() => {});
    }
  }, [canPreviewVideo]);

  const handleMouseLeave = useCallback(() => {
    if (flipTimeoutRef.current) clearTimeout(flipTimeoutRef.current);
    setFlipState("leaving");
    if (videoRef.current && canPreviewVideo) {
      videoRef.current.pause();
    }
    // After leave animation completes, reset flipper to 0° instantly
    flipTimeoutRef.current = setTimeout(() => {
      setFlipState("idle");
    }, 580);
  }, [canPreviewVideo]);

  const handleLinkClick = (e) => {
    e.stopPropagation();
    if (hasExternalUrl) {
      window.open(externalUrl, "_blank", "noopener,noreferrer");
    }
  };

  // Card body click does nothing
  const handleCardClick = (e) => {
    e.preventDefault();
  };

  return (
    <article
      className={`project-card ${project.size || ""} flip-${flipState}`.trim()}
      style={layoutStyle}
      onClick={handleCardClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* ── 3D flip scene ─────────────────────────────────────────── */}
      <div className="card-scene">
        <div className="card-flipper">

          {/* ── FRONT FACE — pure thumbnail, no text overlays ──────── */}
          <div className="card-face card-face--front">
            {canPreviewVideo ? (
              <video
                ref={videoRef}
                src={mediaSrc}
                className="card-thumb"
                muted
                loop
                playsInline
                preload="metadata"
              />
            ) : (
              <img
                src={project.image}
                alt={project.title}
                className="card-thumb"
                referrerPolicy="no-referrer"
              />
            )}

            {/* One-time scan sheen on hover entry */}
            <div className="card-sheen" aria-hidden="true" />

            {/* Badge */}
            {project.badge && (
              <div className="card-badge label-tag">{project.badge}</div>
            )}

          </div>

          {/* ── BACK FACE — all project info ───────────────────────── */}
          <div className="card-face card-face--back">

            {/* ── Normal back layout ──────────────────────────────── */}
            <div className="card-back-inner">

              {/* Category */}
              <span className="back-category">{categoryLabel}</span>

              {/* Title */}
              <h3 className="back-title">{project.title.replace(/\n/g, " ")}</h3>

              {/* Accent rule */}
              <div className="back-rule" />

              {/* Description */}
              {project.description && (
                <div className="desc-container">
                  <div className="back-desc-wrap">
                    <p className="back-desc">{project.description}</p>
                  </div>
                </div>
              )}

              {/* Tags */}
              {(project.tags || []).length > 0 && (
                <ul className="back-tags">
                  {project.tags.map((tag) => (
                    <li key={tag} className="back-tag">{tag}</li>
                  ))}
                </ul>
              )}

              {/* Spacer */}
              <div className="back-spacer" />

              {/* CTA */}
              {hasExternalUrl ? (
                <button
                  className="btn btn-primary back-link-btn"
                  onClick={handleLinkClick}
                  aria-label={`Visit ${project.title} — opens ${domain}`}
                  type="button"
                >
                  <span className="material-symbols-outlined back-link-icon" aria-hidden="true">
                    open_in_new
                  </span>
                  <span className="back-link-label">
                    {domain || "Visit Project"}
                  </span>

                  <span className="back-link-arrow material-symbols-outlined" aria-hidden="true">
                    arrow_forward
                  </span>
                </button>
              ) : (
                <p className="back-soon">
                  <span className="material-symbols-outlined" aria-hidden="true">lock</span>
                  Not publicly available yet
                </p>
              )}
            </div>

          </div>
          {/* end .card-face--back */}

        </div>
        {/* end .card-flipper */}
      </div>
      {/* end .card-scene */}
    </article>
  );
};

export default ProjectCard;
