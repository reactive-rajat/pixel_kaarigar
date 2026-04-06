import React, { useEffect, useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import StatusBadge from "../../components/common/StatusBadge/StatusBadge";
import ProjectHtmlContent from "../../components/common/ProjectHtmlContent/ProjectHtmlContent";
import projects, { getProjectBySlug } from "../../data/projects.js";
import { getProjectCategories } from "../../utils/projectMeta.js";
import "./ProjectDetail.css";

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
      <main className="project-detail-page container">
        <div className="project-not-found">
          <StatusBadge text="Not Found" />
          <h1>Project not found</h1>
          <p>
            The project detail page for this slug does not exist yet. Check the
            URL or add a matching project entry.
          </p>
          <button
            type="button"
            className="primary-btn"
            onClick={() => navigate("/work")}
          >
            Back to work
          </button>
        </div>
      </main>
    );
  }

  const categoryLabel = getProjectCategories(project).filter(Boolean).join(" + ");
  const contentHeading = getContentHeading(project.projectType);

  return (
    <main className="project-detail-page container">
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

        <header className="project-hero">
          <div className="project-hero-copy">
            <span className="label-tag project-category">{categoryLabel}</span>
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>

            <div className="project-actions">
              {project.liveUrl && (
                <a
                  className="primary-btn"
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
                  className="secondary-btn"
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
                    <span key={tag} className="label-tag project-tag">
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
              <span className="label-tag project-section-kicker">{contentHeading}</span>
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
    </main>
  );
};

export default ProjectDetail;
