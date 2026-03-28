import React, { useEffect, useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import StatusBadge from "../components/common/StatusBadge";
import ProjectHtmlContent from "../components/common/ProjectHtmlContent";
import projects, { getProjectBySlug } from "../data/projects";
import { getProjectCategories } from "../utils/projectMeta";

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
  const nextProject = useMemo(() => {
    if (!project || projects.length < 2) {
      return null;
    }

    const currentIndex = projects.findIndex(
      (currentProject) => currentProject.slug === project.slug,
    );

    if (currentIndex === -1) {
      return null;
    }

    return projects[(currentIndex + 1) % projects.length];
  }, [project]);

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

  return (
    <section className="project-detail-section container">
      <div className="project-detail-shell">
        <div className="project-nav-row">
          <Link to="/work" className="project-back-link project-nav-pill">
            <span
              className="project-back-icon-wrap project-nav-icon-wrap"
              aria-hidden="true"
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </span>
            <span className="project-back-link-label project-nav-pill-label">
              Back to work
            </span>
          </Link>

          {nextProject && (
            <Link
              to={`/project/${nextProject.slug}`}
              className="project-next-link project-nav-pill"
              aria-label={`Go to next project: ${nextProject.title}`}
            >
              <span className="project-next-link-label project-nav-pill-label">
                Next Project
              </span>
              <span
                className="project-next-icon-wrap project-nav-icon-wrap"
                aria-hidden="true"
              >
                <span className="material-symbols-outlined">arrow_forward</span>
              </span>
            </Link>
          )}
        </div>

        <header className="project-hero glass-panel">
          <div className="project-hero-copy">
            <span className="project-category">{categoryLabel}</span>
            <h1 className="project-title">{project.title}</h1>
            <p className="project-description">{project.description}</p>

            <div className="project-actions">
              {project.liveUrl && (
                <a
                  className="primary-btn project-primary-btn"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-outlined">rocket_launch</span>
                  <span>Live Preview</span>
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

            {(project.tags || []).length > 0 && (
              <div className="project-meta-footer">
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
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

        <section className="project-content">
          <div className="project-section-head">
            <div>
              <span className="project-section-kicker">{contentHeading}</span>
              <h2>
                {project.projectType === "case-study"
                  ? "Detailed walkthrough"
                  : "Detailed content"}
              </h2>
            </div>
          </div>

          <ProjectHtmlContent
            contentPath={project.contentPath}
            title={project.title}
            omitPrimaryHeading
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

        .project-nav-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        .project-nav-pill {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: flex-start;
          gap: 0;
          width: 3rem;
          height: 3rem;
          padding: 0.2rem 0.2rem;
          overflow: hidden;
          border-radius: 999px;
          border: 1px solid
            color-mix(in srgb, var(--primary-color) 18%, var(--border-color));
          background: color-mix(in srgb, var(--color-bg-soft) 52%, transparent);
          color: var(--color-text);
          font-weight: 600;
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
          transition:
            width 0.45s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.3s ease,
            border-color 0.25s ease,
            background 0.25s ease,
            box-shadow 0.35s ease;
        }

        .project-nav-pill::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            120deg,
            transparent 0%,
            rgba(255, 255, 255, 0.06) 35%,
            transparent 70%
          );
          transform: translateX(-120%);
          transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
          pointer-events: none;
        }

        .project-nav-icon-wrap {
          position: relative;
          z-index: 1;
          width: 2.4rem;
          height: 2.4rem;
          min-width: 2.4rem;
          left: 0.06rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          color: var(--primary-color);
          transition:
            transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
            background 0.25s ease;
        }

        .project-nav-icon-wrap .material-symbols-outlined {
          font-size: 1.4rem;
          transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .project-nav-pill-label {
          position: relative;
          z-index: 1;
          font-size: 0.9rem;
          max-width: 0;
          opacity: 0;
          white-space: nowrap;
          color: var(--color-primary);
          transform: translateX(-0.45rem);
          transition:
            max-width 0.45s cubic-bezier(0.22, 1, 0.36, 1),
            opacity 0.22s ease,
            transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
            margin-left 0.45s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .project-next-link {
          background: var(--primary-color);
          color: #ffffff;
          justify-content: end;
        }

        .project-next-icon-wrap {
          left: auto;
          right: 0.06rem;
          color: #ffffff;
        }

        .project-next-link-label {
          order: -1;
          color: #ffffff;
          transform: translateX(0.45rem);
        }

        .project-back-link:hover,
        .project-next-link:hover {
          transform: translateY(-1px);
          width: 10.75rem;
          box-shadow: 0 0 40px var(--primary-glow);
        }

        .project-back-link:hover {
          border-color: color-mix(
            in srgb,
            var(--primary-color) 35%,
            var(--border-color)
          );
          background: color-mix(in srgb, var(--color-bg-soft) 72%, transparent);
        }

        .project-nav-pill:hover::after,
        .project-nav-pill:focus-visible::after {
          transform: translateX(120%);
        }

        .project-back-link:hover .project-nav-icon-wrap,
        .project-back-link:focus-visible .project-nav-icon-wrap {
          transform: translateX(0.08rem) scale(1.02);
          background: color-mix(
            in srgb,
            var(--primary-color) 26%,
            rgba(255, 255, 255, 0.05)
          );
        }

        .project-back-link:hover .project-nav-icon-wrap .material-symbols-outlined,
        .project-back-link:focus-visible
          .project-nav-icon-wrap
          .material-symbols-outlined {
          transform: translateX(-0.08rem);
          color: white;
        }

        .project-next-link:hover .project-nav-icon-wrap,
        .project-next-link:focus-visible .project-nav-icon-wrap {
          transform: translateX(-0.08rem) scale(1.02);
          background: rgba(255, 255, 255, 0.18);
        }

        .project-next-link:hover .project-nav-icon-wrap .material-symbols-outlined,
        .project-next-link:focus-visible
          .project-nav-icon-wrap
          .material-symbols-outlined {
          transform: translateX(0.08rem);
        }

        .project-back-link:hover .project-nav-pill-label,
        .project-back-link:focus-visible .project-nav-pill-label {
          max-width: 7rem;
          margin-left: 0.8rem;
          opacity: 1;
          transform: translateX(0);
        }

        .project-next-link:hover .project-nav-pill-label,
        .project-next-link:focus-visible .project-nav-pill-label {
          max-width: 8.6rem;
          margin-right: 0.8rem;
          opacity: 1;
          transform: translateX(0);
        }

        .project-nav-pill:focus-visible {
          outline: 2px solid var(--primary-color);
          outline-offset: 3px;
          width: 10.75rem;
        }

        .project-hero,
        .project-content {
          display: grid;
          gap: 1.5rem;
        }

        .project-hero {
          padding: 1.5rem;
          border-radius: var(--border-radius-xl);
          grid-template-columns: minmax(0, 1.1fr) minmax(320px, 0.9fr);
          align-items: stretch;
        }

        .project-content {
          padding-top: 3.5rem;
        }

        .project-hero-copy {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.75rem;
          margin-top: 0.35rem;
          margin-left: 0.5rem;
        }

        .project-category {
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          font-weight: 700;
          color: var(--primary-color);
        }

        .project-title {
          font-size: clamp(2.3rem, 5vw, 4.25rem);
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
          padding: 0.45rem 0.9rem;
          padding-bottom: 0.35rem;
          border-radius: var(--border-radius-full);
          border: 1px solid var(--border-color);
          background: color-mix(in srgb, var(--color-bg-main) 35%, transparent);
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
          margin-top: 1rem;
        }

        .project-meta-footer {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          margin-top: 1rem;
          padding-top: 1.75rem;
          border-top: 1px solid var(--border-color);
        }

        .project-meta-label {
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          font-weight: 700;
          color: var(--text-muted);
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
          .project-nav-row {
            align-items: stretch;
          }

          .project-detail-section {
            padding-top: 7.5rem;
            padding-bottom: 5rem;
          }

          .project-nav-pill {
            width: auto;
            min-width: 0;
            padding-right: 1rem;
          }

          .project-next-link {
            justify-content: flex-start;
            padding-left: 1rem;
          }

          .project-next-link-label {
            order: 0;
          }

          .project-nav-pill-label {
            max-width: 7rem;
            margin-left: 0.8rem;
            opacity: 1;
            transform: translateX(0);
          }

          .project-next-link .project-nav-pill-label {
            max-width: 8.6rem;
            margin-left: 0;
            margin-right: 0.8rem;
          }

          .project-hero,
          .project-content {
            padding: 1rem;
          }

          .project-content {
            padding-left: 0;
            padding-right: 0;
          }

          .project-cover-media {
            min-height: 240px;
          }

          .project-actions {
            width: 100%;
            flex-direction: column;
          }

          .project-meta-footer {
            margin-top: 0.85rem;
            padding-top: 1rem;
          }

          .project-primary-btn,
          .project-secondary-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default ProjectDetail;
