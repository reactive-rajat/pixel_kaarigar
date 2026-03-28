import React, { useEffect, useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import StatusBadge from "../components/common/StatusBadge";
import ProjectHtmlContent from "../components/common/ProjectHtmlContent";
import { getProjectBySlug } from "../data/projects";
import {
  getProjectCategories,
  getProjectPreview,
} from "../utils/projectMeta";

const getContentHeading = (projectType) => {
  if (projectType === "case-study") {
    return "Case Study";
  }

  if (projectType === "coding") {
    return "Build Notes";
  }

  return "Project Story";
};

const ProjectDetail = () => {
  const navigate = useNavigate();
  const { slug = "" } = useParams();
  const project = useMemo(() => getProjectBySlug(slug), [slug]);
  const preview = useMemo(
    () => (project ? getProjectPreview(project) : null),
    [project],
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <section className="project-detail-section container">
        <div className="project-not-found glass-panel">
          <StatusBadge text="Not Found" />
          <h1>Project not found</h1>
          <p>
            The project detail page for this slug does not exist yet. Check the
            URL or add a matching project entry.
          </p>
          <button
            type="button"
            className="project-primary-btn"
            onClick={() => navigate("/work")}
          >
            Back to work
          </button>
        </div>

        <style jsx="true">{`
          .project-detail-section {
            padding-top: 10rem;
            padding-bottom: 6rem;
          }

          .project-not-found {
            max-width: 760px;
            margin: 0 auto;
            display: grid;
            gap: 1.25rem;
            padding: 2rem;
            border-radius: var(--border-radius-xl);
          }

          .project-not-found h1 {
            font-size: clamp(2rem, 4vw, 3.2rem);
            line-height: 1;
          }

          .project-not-found p {
            color: var(--text-muted);
            line-height: 1.7;
          }

          .project-primary-btn {
            width: fit-content;
            min-height: 48px;
            padding: 0.9rem 1.25rem;
            border-radius: var(--border-radius-full);
            background: var(--primary-color);
            color: #fff;
            font-weight: 700;
          }
        `}</style>
      </section>
    );
  }

  const categoryLabel = getProjectCategories(project).filter(Boolean).join(" + ");
  const contentHeading = getContentHeading(project.projectType);
  const showPreviewButton = project.projectType === "coding" && Boolean(preview);

  return (
    <section className="project-detail-section container">
      <div className="project-detail-shell">
        <Link to="/work" className="project-back-link">
          <span className="material-symbols-outlined">arrow_back</span>
          <span>Back to work</span>
        </Link>

        <header className="project-hero glass-panel">
          <div className="project-hero-copy">
            <StatusBadge text={project.projectType === "case-study" ? "Case Study" : "Project"} />
            <span className="project-category">{categoryLabel}</span>
            <h1 className="project-title">{project.title}</h1>
            <p className="project-description">{project.description}</p>

            <div className="project-tags">
              {(project.tags || []).map((tag) => (
                <span key={tag} className="project-tag">
                  {tag}
                </span>
              ))}
            </div>

            <div className="project-actions">
              {project.liveUrl && (
                <a
                  className="project-primary-btn"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-outlined">rocket_launch</span>
                  <span>Live Demo</span>
                </a>
              )}

              {showPreviewButton && (
                <a className="project-secondary-btn" href="#project-preview">
                  <span className="material-symbols-outlined">preview</span>
                  <span>Preview Demo</span>
                </a>
              )}

              {project.repoUrl && (
                <a
                  className="project-secondary-btn"
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-outlined">code</span>
                  <span>Repository</span>
                </a>
              )}
            </div>
          </div>

          <div className="project-hero-media">
            {project.projectType === "motion" ? (
              <video
                src={project.image}
                className="project-cover-media"
                controls
                playsInline
              />
            ) : (
              <img
                src={project.image}
                alt={project.title}
                className="project-cover-media"
                referrerPolicy="no-referrer"
              />
            )}
          </div>
        </header>

        {preview && (
          <section id="project-preview" className="project-preview glass-panel">
            <div className="project-section-head">
              <div>
                <span className="project-section-kicker">{preview.label}</span>
                <h2>Interactive Preview</h2>
              </div>
              <p>{preview.note}</p>
            </div>

            <div className="project-preview-frame">
              {preview.type === "iframe" ? (
                <iframe
                  src={preview.src}
                  title={`${project.title} preview`}
                  className="project-preview-iframe"
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <video
                  src={preview.src}
                  className="project-preview-video"
                  controls
                  playsInline
                />
              )}
            </div>
          </section>
        )}

        <section className="project-content glass-panel">
          <div className="project-section-head">
            <div>
              <span className="project-section-kicker">{contentHeading}</span>
              <h2>
                {project.projectType === "case-study"
                  ? "Detailed walkthrough"
                  : "Detailed content"}
              </h2>
            </div>
            <p>
              Loaded from <code>{project.contentPath}</code> so each project can
              be updated independently.
            </p>
          </div>

          <ProjectHtmlContent
            contentPath={project.contentPath}
            title={project.title}
          />
        </section>
      </div>

      <style jsx="true">{`
        .project-detail-section {
          padding-top: 9.5rem;
          padding-bottom: 6rem;
        }

        .project-detail-shell {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .project-back-link {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          width: fit-content;
          color: var(--text-muted);
          font-weight: 600;
        }

        .project-back-link .material-symbols-outlined {
          font-size: 1.1rem;
        }

        .project-hero,
        .project-preview,
        .project-content {
          display: grid;
          gap: 1.5rem;
          padding: 1.5rem;
          border-radius: var(--border-radius-xl);
        }

        .project-hero {
          grid-template-columns: minmax(0, 1.1fr) minmax(320px, 0.9fr);
          align-items: stretch;
        }

        .project-hero-copy {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1rem;
        }

        .project-category {
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          font-weight: 700;
          color: var(--primary-color);
        }

        .project-title {
          font-size: clamp(2.3rem, 5vw, 4.75rem);
          line-height: 0.95;
          letter-spacing: -0.05em;
        }

        .project-description {
          max-width: 58ch;
          color: var(--text-muted);
          font-size: 1rem;
          line-height: 1.8;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }

        .project-tag {
          padding: 0.45rem 0.8rem;
          border-radius: var(--border-radius-full);
          border: 1px solid var(--border-color);
          background: color-mix(in srgb, var(--color-bg-soft) 60%, transparent);
          color: var(--color-secondary);
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .project-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.85rem;
          margin-top: 0.5rem;
        }

        .project-primary-btn,
        .project-secondary-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          min-height: 48px;
          padding: 0.9rem 1.2rem;
          border-radius: var(--border-radius-full);
          font-weight: 700;
        }

        .project-primary-btn {
          background: #ffffff;
          color: var(--color-primary);
          box-shadow: 0 18px 32px rgba(0, 0, 0, 0.18);
        }

        .project-secondary-btn {
          border: 1px solid var(--border-color);
          background: color-mix(in srgb, var(--color-bg-soft) 60%, transparent);
          color: var(--color-text);
        }

        .project-primary-btn .material-symbols-outlined,
        .project-secondary-btn .material-symbols-outlined {
          font-size: 1.1rem;
        }

        .project-hero-media {
          min-width: 0;
        }

        .project-cover-media {
          width: 100%;
          height: 100%;
          min-height: 320px;
          border-radius: 1.4rem;
          border: 1px solid var(--border-color);
          object-fit: cover;
          background: rgba(0, 0, 0, 0.24);
        }

        .project-section-head {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 1rem;
        }

        .project-section-kicker {
          display: inline-block;
          margin-bottom: 0.45rem;
          font-size: 0.76rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          font-weight: 700;
          color: var(--primary-color);
        }

        .project-section-head h2 {
          font-size: clamp(1.5rem, 3vw, 2.4rem);
          line-height: 1;
        }

        .project-section-head p {
          max-width: 46ch;
          color: var(--text-muted);
          line-height: 1.7;
          text-align: right;
        }

        .project-preview-frame {
          overflow: hidden;
          border-radius: 1.4rem;
          border: 1px solid var(--border-color);
          background: #050407;
        }

        .project-preview-iframe {
          display: block;
          width: 100%;
          height: min(72vh, 840px);
          border: 0;
          background: #ffffff;
        }

        .project-preview-video {
          width: 100%;
          max-height: 72vh;
          display: block;
          background: #050407;
        }

        code {
          padding: 0.12rem 0.35rem;
          border-radius: 0.4rem;
          background: color-mix(in srgb, var(--color-bg-soft) 70%, transparent);
          color: var(--color-text);
        }

        @media (max-width: 1024px) {
          .project-hero {
            grid-template-columns: 1fr;
          }

          .project-section-head {
            flex-direction: column;
            align-items: flex-start;
          }

          .project-section-head p {
            text-align: left;
          }
        }

        @media (max-width: 640px) {
          .project-detail-section {
            padding-top: 7.5rem;
            padding-bottom: 5rem;
          }

          .project-hero,
          .project-preview,
          .project-content {
            padding: 1rem;
          }

          .project-cover-media {
            min-height: 240px;
          }

          .project-actions {
            width: 100%;
            flex-direction: column;
          }

          .project-primary-btn,
          .project-secondary-btn {
            width: 100%;
            justify-content: center;
          }

          .project-preview-iframe {
            height: 440px;
          }
        }
      `}</style>
    </section>
  );
};

export default ProjectDetail;
