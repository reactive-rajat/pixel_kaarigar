import React, { useState } from "react";

const VIDEO_FILE_PATTERN = /\.(mp4|webm|ogg|mov|m4v|mkv)(\?.*)?$/i;

const isVideoPath = (path = "") => VIDEO_FILE_PATTERN.test(path);

const ProjectCard = ({ project, layout, isMobile = false, onMobileCardTap }) => {
  const [isVideoPreviewOpen, setIsVideoPreviewOpen] = useState(false);
  const isCompact = layout?.rowSpan === 1;
  const hasUrl = Boolean(project.url);
  const isMobileTapEnabled =
    isMobile && typeof onMobileCardTap === "function";
  const categories = Array.isArray(project.category)
    ? project.category
    : [project.category];
  const mediaSrc = project.image || "";
  const canPreviewVideo = categories.includes("Motion") && isVideoPath(mediaSrc);
  const isInteractive = canPreviewVideo || hasUrl || isMobileTapEnabled;
  const categoryLabel = categories.filter(Boolean).join(" + ");
  const cardStyle = layout
    ? {
        gridColumn: `${layout.columnStart} / span ${layout.colSpan}`,
        gridRow: `${layout.rowStart} / span ${layout.rowSpan}`,
      }
    : undefined;

  const openProject = () => {
    if (canPreviewVideo) {
      setIsVideoPreviewOpen(true);
      return;
    }

    if (!hasUrl) {
      return;
    }

    window.open(project.url, "_blank", "noopener,noreferrer");
  };

  const closeVideoPreview = () => {
    setIsVideoPreviewOpen(false);
  };

  const handleCardClick = (event) => {
    const target = event.target;

    if (
      target instanceof Element &&
      target.closest(".video-preview-overlay")
    ) {
      return;
    }

    if (isMobileTapEnabled) {
      onMobileCardTap(project);
      return;
    }

    openProject();
  };

  const handleKeyDown = (event) => {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }

    event.preventDefault();

    if (isMobileTapEnabled) {
      onMobileCardTap(project);
      return;
    }

    openProject();
  };

  return (
    <div
      className={`project-card ${project.size || ""} ${isCompact ? "compact" : ""}`}
      style={cardStyle}
      role={isMobileTapEnabled || canPreviewVideo ? "button" : hasUrl ? "link" : undefined}
      tabIndex={isInteractive ? 0 : undefined}
      onClick={handleCardClick}
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

        {project.badge && <div className="card-badge">{project.badge}</div>}

        <div className="card-default">
          <div className="default-text">
            <span className="default-category">{categoryLabel}</span>
            <h3 className="default-title">{project.title}</h3>
          </div>
        </div>

        <div className="card-hover">
          <div className="hover-content">
            <div className="hover-top">
              <div className="hover-heading">
                <span className="hover-category">{categoryLabel}</span>
                <h3 className="hover-title">{project.title}</h3>
              </div>
              <button className="hover-cta" aria-label="View Project" type="button">
                <span className="material-symbols-outlined">arrow_outward</span>
              </button>
            </div>
            <div className="hover-details">
              <p className="hover-desc">{project.description}</p>
              <div className="card-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="card-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {canPreviewVideo && isVideoPreviewOpen && (
        <div
          className="video-preview-overlay"
          onClick={closeVideoPreview}
          role="presentation"
        >
          <div
            className="video-preview-container"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="video-preview-close"
              type="button"
              aria-label="Close Preview"
              onClick={closeVideoPreview}
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <video
              src={mediaSrc}
              className="video-preview-player"
              controls
              playsInline
            />
          </div>
        </div>
      )}

      <style jsx="true">{`
        .project-card {
          position: relative;
          height: 100%;
          min-height: 0;
          cursor: pointer;
          transition:
            transform 0.35s ease,
            box-shadow 0.35s ease;
          border-radius: 28px;
        }

        .project-card:hover {
          transform: translateY(-8px);
        }

        .project-card:focus-visible {
          outline: 2px solid var(--primary-color);
          outline-offset: 5px;
        }

        .card-media {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 28px;
          overflow: hidden;
          border: 1px solid var(--color-border);
          background: var(--color-card);
        }

        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.6s ease;
          transform: scale(1.02);
          filter: saturate(1.05);
        }

        .project-card:hover .card-image {
          transform: scale(1.06);
        }

        .card-video {
          pointer-events: none;
        }

        .card-gradient {
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: linear-gradient(
            180deg,
            rgba(8, 6, 12, 0.1) 0%,
            rgba(8, 6, 12, 0.25) 45%,
            rgba(8, 6, 12, 0.8) 78%,
            rgba(8, 6, 12, 0.95) 100%
          );
          pointer-events: none;
          transition: opacity 0.3s;
        }

        .project-card:hover .card-gradient {
          opacity: 0;
        }

        .card-default {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 1.6rem 2rem 1.8rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          transition:
            opacity 0.3s ease,
            transform 0.3s ease;
        }

        .default-text {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .default-category {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: rgba(255, 255, 255, 0.65);
          font-weight: 700;
        }

        .default-title {
          font-size: 1.6rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.2;
        }

        .card-hover {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          gap: 1rem;
          border-radius: inherit;
          background: linear-gradient(
            180deg,
            rgba(6, 4, 10, 0.15) 0%,
            rgba(6, 4, 10, 0.7) 45%,
            rgba(6, 4, 10, 0.92) 100%
          );
          backdrop-filter: blur(6px);
          opacity: 0;
          transform: translateY(18px);
          transition:
            opacity 0.35s ease,
            transform 0.35s ease;
        }

        .hover-content {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          gap: 1rem;
          padding: 1.6rem 1.8rem 1.8rem;
          border-radius: 0 0 28px 28px;
          background: rgba(23, 14, 36, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.35);
          backdrop-filter: blur(16px);
          width: 100%;
          height: 100%;
          max-height: 260px;
        }

        .project-card.compact .hover-content {
          gap: 1rem;
        }

        .hover-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
        }

        .hover-heading {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .hover-details {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          width: 100%;
        }

        .hover-category {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          font-weight: 700;
          color: var(--primary-color);
        }

        .project-card:hover .card-hover {
          opacity: 1;
          transform: translateY(0);
        }

        .project-card:hover .card-default {
          opacity: 0;
          transform: translateY(12px);
        }

        .card-tags {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .card-tag {
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          color: #f0e7ff;
          background: rgba(255, 255, 255, 0.08);
          padding: 0.3rem 0.8rem;
          border-radius: var(--radius-pill);
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .hover-title {
          font-size: 2rem;
          font-weight: 800;
          color: white;
          line-height: 1.1;
        }

        .project-card.compact .hover-title {
          font-size: 1.35rem;
        }

        .hover-desc {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
          max-width: 100%;
        }

        .project-card.compact .hover-desc {
          display: -webkit-box;
          overflow: hidden;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
        }

        .hover-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 54px;
          height: 54px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.12);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.14);
          flex-shrink: 0;
        }

        .hover-cta .material-symbols-outlined {
          font-size: 1.5rem;
          transition:
            transform 0.3s,
            color 0.3s;
        }

        .hover-cta:hover .material-symbols-outlined {
          transform: translate(4px, -4px);
        }

        .card-badge {
          position: absolute;
          top: 1.4rem;
          left: 1.4rem;
          background: rgba(255, 255, 255, 0.9);
          color: #1a1122;
          padding: 0.25rem 0.7rem;
          font-size: 0.65rem;
          font-weight: 800;
          border-radius: 0.4rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
          z-index: 5;
        }

        .video-preview-overlay {
          position: fixed;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          background: rgba(6, 4, 10, 0.8);
          backdrop-filter: blur(4px);
          z-index: 1200;
        }

        .video-preview-container {
          position: relative;
          width: min(900px, 95vw);
          border-radius: 16px;
          padding: 0.9rem;
          background: rgba(11, 8, 18, 0.98);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.45);
        }

        .video-preview-player {
          width: 100%;
          max-height: 80vh;
          border-radius: 12px;
          background: #050407;
        }

        .video-preview-close {
          position: absolute;
          top: 1.3rem;
          right: 1.3rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          background: rgba(10, 8, 16, 0.85);
          color: #ffffff;
          z-index: 2;
        }

        .video-preview-close .material-symbols-outlined {
          font-size: 1.15rem;
        }

        @media (max-width: 768px) {
          .project-card,
          .project-card:hover {
            transform: none;
          }

          .card-media {
            border-radius: 22px;
          }

          .default-title {
            font-size: 1.35rem;
          }

          .hover-content {
            padding: 1.2rem;
          }

          .hover-title {
            font-size: 1.45rem;
          }

          .hover-desc {
            font-size: 0.85rem;
            line-height: 1.45;
          }

          .project-card:hover .card-image {
            transform: scale(1.02);
          }

          .project-card:hover .card-gradient {
            opacity: 1;
          }

          .project-card:hover .card-default {
            opacity: 1;
            transform: none;
          }

          .project-card:hover .card-hover {
            opacity: 0;
            transform: translateY(18px);
          }

          .card-hover {
            opacity: 0;
            transform: translateY(18px);
            pointer-events: none;
          }

          .card-default {
            opacity: 1;
            transform: none;
          }

          .hover-cta:hover .material-symbols-outlined {
            transform: none;
          }
        }

      `}</style>
    </div>
  );
};

export default ProjectCard;
