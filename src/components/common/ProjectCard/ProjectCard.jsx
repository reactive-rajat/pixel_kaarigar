import React from "react";
import {
  getProjectCategories,
  isVideoPath,
} from "../../../utils/projectMeta.js";
import "./ProjectCard.css";

const ProjectCard = ({ project, layout, onProjectOpen }) => {
  const isCompact = layout?.rowSpan === 1;
  const categories = getProjectCategories(project);
  const mediaSrc = project.image || "";
  const canPreviewVideo =
    categories.includes("Motion") && isVideoPath(mediaSrc);
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
    if (!isInteractive) {
      return;
    }

    onProjectOpen(project);
  };

  const handleKeyDown = (event) => {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }

    event.preventDefault();
    handleOpen();
  };

  return (
    <div
      className={`card card-hover project-card ${project.size || ""} ${isCompact ? "compact" : ""}`.trim()}
      style={layoutClassName}
      role={isInteractive ? "button" : undefined}
      tabIndex={isInteractive ? 0 : undefined}
      onClick={handleOpen}
      onKeyDown={handleKeyDown}
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
            className="card-image"
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
                <span className="pill pill-secondary">
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
              <span className="card-cta" aria-hidden="true">
                <span className="material-symbols-outlined">arrow_outward</span>
              </span>
            </div>
            <div className="content-details">
              <div className="details-inner">
                <p className="card-desc">{project.description}</p>
                <div className="flex gap-2">
                  {(project.tags || []).map((tag) => (
                    <span key={tag} className="pill pill-primary">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
