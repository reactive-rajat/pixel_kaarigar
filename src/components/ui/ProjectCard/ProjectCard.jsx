import React, { useMemo, useRef, useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import {
  getProjectCategories,
  isVideoPath,
} from "../../../utils/projectMeta.js";
import "./ProjectCard.css";

const ProjectCard = ({ project, externalUrl }) => {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = getProjectCategories(project);
  const mediaSrc = project.image || "";
  const canPreviewVideo =
    categories.includes("Motion") && isVideoPath(mediaSrc);
  const hasExternalUrl = Boolean(externalUrl);
  const categoryLabel = categories.filter(Boolean).join(" · ");

  const domain = useMemo(() => {
    if (!externalUrl) return null;
    try {
      return new URL(externalUrl).hostname.replace(/^www\./, "");
    } catch {
      return null;
    }
  }, [externalUrl]);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    if (videoRef.current && canPreviewVideo) {
      videoRef.current.play().catch(() => {});
    }
  }, [canPreviewVideo]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    if (videoRef.current && canPreviewVideo) {
      videoRef.current.pause();
    }
  }, [canPreviewVideo]);

  const handleCardClick = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleCloseModal = (e) => {
    e.stopPropagation();
    setIsModalOpen(false);
  };

  const primaryBtn = project.primaryButton || (hasExternalUrl ? { label: domain || "Visit Project", url: externalUrl } : null);
  const secondaryBtn = project.secondaryButton || null;

  // Card body click does nothing

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isModalOpen) {
        setIsModalOpen(false);
      }
    };
    if (isModalOpen) {
      document.body.style.overflow = "hidden"; // Prevent background scroll
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  const modalContent = isModalOpen && (
    <div className="project-modal-backdrop" onClick={handleCloseModal}>
      <div 
        className="project-modal-content" 
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from closing it
      >
        <button className="project-modal-close" onClick={handleCloseModal} aria-label="Close modal">
          <span className="material-symbols-outlined">close</span>
        </button>
        
        <div className="project-modal-header">
          <span className="back-category">{categoryLabel}</span>
          <h2 className="project-modal-title">{project.title.replace(/\n/g, " ")}</h2>
          {project.tagline && (
            <p className="project-modal-tagline">{project.tagline}</p>
          )}
          <div className="back-rule" />
        </div>

        <div className="project-modal-body">
          {project.description && (
            <div className="project-modal-section">
              <p className="project-modal-desc">{project.description}</p>
            </div>
          )}

          {project.quickContext && (
            <div className="project-modal-section">
              <div className="project-modal-context">
                {Object.entries(project.quickContext).map(([key, value]) => (
                  <div key={key} className="context-item">
                    <span className="context-key">{key}</span>
                    <span className="context-val">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {(project.tags || []).length > 0 && (
            <div className="project-modal-section">
              <ul className="back-tags">
                {project.tags.map((tag) => (
                  <li key={tag} className="back-tag">{tag}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="project-modal-footer">
          {primaryBtn ? (
            <a
              className="btn btn-primary"
              href={primaryBtn.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              aria-label={`Visit ${project.title}`}
            >
              <span>{primaryBtn.label}</span>
            </a>
          ) : (
            <p className="back-soon">
              <span className="material-symbols-outlined" aria-hidden="true">lock</span>
              Not publicly available yet
            </p>
          )}

          {secondaryBtn && (
            <a
              className="btn btn-secondary"
              href={secondaryBtn.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              aria-label={secondaryBtn.label}
            >
              <span>{secondaryBtn.label}</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <article
        className={`project-card ${project.size || ""} ${isHovered ? 'hovered' : ''}`.trim()}
        onClick={handleCardClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="card-scene">
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

          <div className="card-sheen" aria-hidden="true" />

          {project.badge && (
            <div className="card-badge label-tag">{project.badge}</div>
          )}
        </div>

        <div className="card-preview-info">
          <h3 className="card-preview-title">{project.title.replace(/\n/g, " ")}</h3>
          <p className="card-preview-category">{project.tagline || categoryLabel}</p>
        </div>
      </article>

      {/* Render modal using React Portal if document.body is available, otherwise normal render (useful for SSR safety though this is CRA/Vite usually) */}
      {isModalOpen && typeof document !== 'undefined' 
        ? createPortal(modalContent, document.body) 
        : modalContent}
    </>
  );
};

export default ProjectCard;
