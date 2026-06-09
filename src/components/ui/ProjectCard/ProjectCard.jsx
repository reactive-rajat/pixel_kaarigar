import React, { useMemo, useRef } from "react";
import {
  getProjectCategories,
  isVideoPath,
} from "../../../utils/projectMeta.js";
import "./ProjectCard.css";

const ProjectCard = ({ project, layout, onProjectOpen, externalUrl }) => {
  const videoRef = useRef(null);

  const categories = getProjectCategories(project);
  const mediaSrc = project.image || "";
  const canPreviewVideo =
    categories.includes("Motion") && isVideoPath(mediaSrc);
  const hasExternalUrl = Boolean(externalUrl);
  const isInteractive = typeof onProjectOpen === "function";
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

  const handleOpen = () => {
    if (isInteractive) onProjectOpen(project);
  };

  const handleKeyDown = (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    e.preventDefault();
    handleOpen();
  };

  const handleMouseEnter = () => {
    if (videoRef.current && canPreviewVideo) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current && canPreviewVideo) {
      videoRef.current.pause();
    }
  };

  return (
    <article
      className={`project-card ${project.size || ""} ${!hasExternalUrl ? "no-link" : ""}`.trim()}
      style={layoutStyle}
    >
      {/* ── Thumbnail frame ─────────────────────────────────────── */}
      <div
        className="card-frame"
        role={isInteractive && hasExternalUrl ? "button" : undefined}
        tabIndex={isInteractive && hasExternalUrl ? 0 : undefined}
        aria-label={
          hasExternalUrl
            ? `Open ${project.title} — ${domain}`
            : `${project.title} — coming soon`
        }
        onClick={handleOpen}
        onKeyDown={handleKeyDown}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Thumbnail */}
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

        {/* Atmospheric bottom gradient */}
        <div className="card-atmo" aria-hidden="true" />

        {/* One-time scan sheen on hover entry */}
        <div className="card-sheen" aria-hidden="true" />

        {/* Editorial index — top left */}
        <span className="card-index" aria-hidden="true">{projectIndex}</span>

        {/* Badge (if project has one) */}
        {project.badge && (
          <div className="card-badge label-tag">{project.badge}</div>
        )}

        {/* Corner bracket decorators */}
        <span className="card-corner card-corner--tl" aria-hidden="true" />
        <span className="card-corner card-corner--tr" aria-hidden="true" />
        <span className="card-corner card-corner--bl" aria-hidden="true" />
        <span className="card-corner card-corner--br" aria-hidden="true" />

        {/* External destination badge — top right, reveals on hover */}
        {hasExternalUrl && domain && (
          <div className="card-dest" aria-hidden="true">
            <span
              className="material-symbols-outlined card-dest-icon"
              aria-hidden="true"
            >
              open_in_new
            </span>
            <span className="card-dest-url">{domain}</span>
          </div>
        )}

        {/* ── Info drawer ────────────────────────────────────────── */}
        <div className="card-drawer" aria-hidden="true">
          {/* Glowing accent rule */}
          <div className="drawer-rule" />

          <div className="drawer-body">
            {/* Description */}
            <p className="drawer-desc">{project.description}</p>

            {/* Tags */}
            {(project.tags || []).length > 0 && (
              <ul className="drawer-tags">
                {project.tags.map((tag) => (
                  <li key={tag} className="drawer-tag">{tag}</li>
                ))}
              </ul>
            )}

            {/* Coming soon notice for no-URL cards */}
            {!hasExternalUrl && (
              <p className="drawer-soon">
                <span className="material-symbols-outlined">lock</span>
                Not publicly available yet
              </p>
            )}
          </div>
        </div>
      </div>

      {/* ── Below-frame meta ─────────────────────────────────────── */}
      {/* Animates upward ("defocuses") into frame on hover */}
      <footer className="card-meta">
        <span className="card-category">{categoryLabel}</span>
        <h3 className="card-title">{project.title.replace(/\n/g, " ")}</h3>
      </footer>
    </article>
  );
};

export default ProjectCard;
