import React, { useState, useRef, useEffect } from "react";
import {
  getProjectCategories,
  isVideoPath,
} from "../../../utils/projectMeta.js";
import "./ProjectCard.css";

/**
 * InfoTooltip
 * Shows a floating tooltip to the right (or left if near screen edge) with
 * the full description and all tags. Triggered by hovering the ℹ icon.
 */
const InfoTooltip = ({ description, tags, comingSoon }) => {
  const triggerRef = useRef(null);
  const tooltipRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [flipLeft, setFlipLeft] = useState(false);

  const show = () => {
    if (tooltipRef.current && triggerRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      // Flip left if less than 280px space on the right
      setFlipLeft(viewportWidth - triggerRect.right < 280);
    }
    setVisible(true);
  };

  const hide = () => setVisible(false);

  return (
    <span
      className="card-info-trigger"
      ref={triggerRef}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
      tabIndex={0}
      aria-label="More info"
    >
      <span className="material-symbols-outlined card-info-icon">info</span>
      <div
        ref={tooltipRef}
        className={`card-info-tooltip ${visible ? "card-info-tooltip--visible" : ""} ${flipLeft ? "card-info-tooltip--left" : ""}`}
        role="tooltip"
      >
        {comingSoon ? (
          <p className="card-info-coming-soon">🔒 This project isn't publicly available yet. Check back soon!</p>
        ) : (
          <>
            {description && <p className="card-info-desc">{description}</p>}
            {tags && tags.length > 0 && (
              <div className="card-info-tags">
                {tags.map((tag) => (
                  <span key={tag} className="pill pill-primary card-info-pill">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </span>
  );
};

const ProjectCard = ({ project, layout, onProjectOpen, externalUrl }) => {
  const isCompact = layout?.rowSpan === 1;
  const categories = getProjectCategories(project);
  const mediaSrc = project.image || "";
  const canPreviewVideo =
    categories.includes("Motion") && isVideoPath(mediaSrc);
  const hasExternalUrl = Boolean(externalUrl);
  const isInteractive = typeof onProjectOpen === "function";
  const categoryLabel = categories.filter(Boolean).join(" + ");
  const layoutClassName = layout
    ? {
        gridColumnStart: layout.columnStart,
        gridRowStart: layout.rowStart,
        gridColumnEnd: `span ${layout.colSpan}`,
        gridRowEnd: `span ${layout.rowSpan}`,
      }
    : {};

  const handleOpen = () => {
    if (!isInteractive) return;
    onProjectOpen(project);
  };

  const handleKeyDown = (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    handleOpen();
  };

  // For "Coming Soon" on cards with no URL, we still want hover tooltip
  const showComingSoon = isInteractive && !hasExternalUrl;

  return (
    <div
      className={`card card-hover project-card ${project.size || ""} ${isCompact ? "compact" : ""} ${!hasExternalUrl && isInteractive ? "no-link" : ""}`.trim()}
      style={layoutClassName}
      role={isInteractive && hasExternalUrl ? "button" : undefined}
      tabIndex={isInteractive && hasExternalUrl ? 0 : undefined}
      onClick={handleOpen}
      onKeyDown={handleKeyDown}
      aria-label={hasExternalUrl ? `Open ${project.title}` : `${project.title} — coming soon`}
    >
      <div className="card-media">
        {canPreviewVideo ? (
          <video
            src={mediaSrc}
            className="card-image card-video"
            muted
            loop
            playsInline
            preload="metadata"
          />
        ) : (
          <img
            src={project.image}
            alt={project.title}
            className="card-image image-hover-scale"
            referrerPolicy="no-referrer"
          />
        )}
        <div className="card-gradient"></div>

        {project.badge && (
          <div className="card-badge label-tag">{project.badge}</div>
        )}

        <div className="card-content">
          <div className="content-inner">
            <div className="content-top">
              <div className="content-heading">
                <span className="pill pill-secondary category-pill">
                  {categoryLabel}
                </span>
                <h3 className="card-title">
                  {project.title.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </h3>
              </div>
              {/* Show arrow CTA only for cards with a URL */}
              {hasExternalUrl && (
                <span className="card-cta" aria-hidden="true">
                  <span className="material-symbols-outlined">arrow_outward</span>
                </span>
              )}
            </div>

            <div className="content-details">
              <div className="details-inner">
                {/* Description row: clamped text + info icon */}
                <div className="card-desc-row">
                  <p className="card-desc">{project.description}</p>
                  <InfoTooltip
                    description={project.description}
                    tags={project.tags}
                    comingSoon={showComingSoon}
                  />
                </div>

                {/* Tags row: show pills, no wrapping */}
                {(project.tags || []).length > 0 && (
                  <div className="card-tags-row">
                    {project.tags.map((tag) => (
                      <span key={tag} className="pill pill-primary tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
