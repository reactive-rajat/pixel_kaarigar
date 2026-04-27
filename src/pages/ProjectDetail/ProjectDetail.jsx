import React, { useEffect, useMemo, Suspense, lazy } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import StatusBadge from "../../components/common/StatusBadge/StatusBadge";


const projectComponents = {
  "resume-help": lazy(() => import("./projects/ResumeHelp")),
  "bold-india": lazy(() => import("./projects/BoldIndia")),
  "portfolio-v1": lazy(() => import("./projects/PortfolioV1")),
  "resume-nerd": lazy(() => import("./projects/ResumeNerd")),
  "behance": lazy(() => import("./projects/Behance")),
  "wedding-invite": lazy(() => import("./projects/WeddingInvite")),
};
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

  useEffect(() => {
    document.body.classList.add("project-view-active");
    return () => {
      document.body.classList.remove("project-view-active");
    };
  }, []);

  if (!project) {
    return (
      <main className="project-detail-page container-lg">
        <div className="project-not-found">
          <StatusBadge text="Not Found" />
          <h1>Project not found</h1>
          <p>
            The project detail page for this slug does not exist yet. Check the
            URL or add a matching project entry.
          </p>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => navigate("/work")}
          >
            Back to work
          </button>
        </div>
      </main>
    );
  }

  const categoryLabel = getProjectCategories(project)
    .filter(Boolean)
    .join(" + ");
  const contentHeading = getContentHeading(project.projectType);

  return (
    <main className="project-detail-page container-lg">
      <div className="project-detail-shell">
        <header className="hero-padding">
          <div className="container-lg project-hero">
            <div className="project-hero-copy">
            <span className="pill pill-secondary">{categoryLabel}</span>
            <h1 className="">{project.title}</h1>
            <p className="project-description">{project.description}</p>

            <div className="project-actions">
              {project.liveUrl && (
                <a
                  className="btn btn-primary"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-outlined left-fix">
                    rocket_launch
                  </span>
                  <span>Live Preview</span>
                </a>
              )}
              <Link to="/work" className="btn btn-secondary">
                <span>Go Back</span>
              </Link>

              {project.repoUrl && (
                <a
                  className="btn btn-secondary"
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-outlined left-fix">
                    code
                  </span>
                  <span>Repository</span>
                </a>
              )}
            </div>

            {(project.tags || []).length > 0 && (
              <div className="project-meta-footer">
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="pill">
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
                className="project-cover-media image-hover-scale"
                referrerPolicy="no-referrer"
              />
            )}
          </div>
          </div>
        </header>

        <main className="project-main container pt-0 mt-4">
          <section className="project-content container">
            {projectComponents[project.slug] ? (
              <Suspense fallback={<div className="project-html-state"><p>Loading project content...</p></div>}>
                {React.createElement(projectComponents[project.slug])}
              </Suspense>
            ) : (
              <div className="project-html-state"><p>Project component not found.</p></div>
            )}
          </section>
        </main>

        <div className="project-nav-row container">
          <Link to="/work" className="project-back-link project-nav-pill">
            <span
              className="project-nav-icon-wrap"
              aria-hidden="true"
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </span>
            <span className="project-nav-pill-label">
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
      </div>
    </main>
  );
};

export default ProjectDetail;
