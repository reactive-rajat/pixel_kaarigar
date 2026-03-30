import React from "react";
import { getProjectCategories, isVideoPath } from "../../../utils/projectMeta.js";
import "./ProjectCard.css";

const ProjectCard = ({ project, layout, onProjectOpen }) => {
  const isCompact = layout?.rowSpan === 1;
  const categories = getProjectCategories(project);
  const mediaSrc = project.image || "";
  const canPreviewVideo = categories.includes("Motion") && isVideoPath(mediaSrc);
  const isInteractive = typeof onProjectOpen === "function";
  const categoryLabel = categories.filter(Boolean).join(" + ");
  const layoutClassName = layout
    ? {
        colStart: `project-card--col-start-${layout.columnStart}`,
        rowStart: `project-card--row-start-${layout.rowStart}`,
        colSpan: `project-card--col-span-${layout.colSpan}`,
        rowSpan: `project-card--row-span-${layout.rowSpan}`,
      }
    : null;

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
      className={`project-card ${project.size || ""} ${isCompact ? "compact" : ""} ${layoutClassName ? `${layoutClassName.colStart} ${layoutClassName.rowStart} ${layoutClassName.colSpan} ${layoutClassName.rowSpan}` : ""}`.trim()}
      role={isInteractive ? "button" : undefined}
      tabIndex={isInteractive ? 0 : undefined}
      onClick={handleOpen}
      onKeyDown={handleKeyDown}
    >
      <div className="card-media card-1 card-hoverable">
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

        {project.badge && <div className="card-badge label-tag">{project.badge}</div>}

        <div className="card-default">
          <div className="default-text">
            <span className="default-category label-tag">{categoryLabel}</span>
            <h3 className="default-title">{project.title.split("\n").map((line, i) => (
  <span key={i}>
    {line}
    <br />
  </span>
))}</h3>
          </div>
        </div>

        <div className="card-hover">
          <div className="hover-content card-2">
            <div className="hover-top">
              <div className="hover-heading">
                <span className="hover-category label-tag">{categoryLabel}</span>
                <h3 className="hover-title">{project.title}</h3>
              </div>
              <span className="hover-cta" aria-hidden="true">
                <span className="material-symbols-outlined">arrow_outward</span>
              </span>
            </div>
            <div className="hover-details">
              <p className="hover-desc">{project.description}</p>
              <div className="card-tags">
                {(project.tags || []).map((tag) => (
                  <span key={tag} className="card-tag label-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
