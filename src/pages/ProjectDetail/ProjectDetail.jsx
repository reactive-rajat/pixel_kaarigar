import React, { useEffect, useMemo, Suspense, lazy } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import StatusBadge from "../../components/ui/StatusBadge/StatusBadge";


const projectComponents = {
  "resume-help": lazy(() => import("./projects/ResumeHelp")),
  "bold-india": lazy(() => import("./projects/BoldIndia")),
  "portfolio-v1": lazy(() => import("./projects/PortfolioV1")),
  "graphic-design": lazy(() => import("./projects/GraphicDesign")),
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
        <header className="hero-padding pt-12 lg:pt-16 pb-12 relative">
          <div className="container-lg px-4 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center">
            
            {/* Left Content: Title & Actions */}
            <div className="lg:col-span-5 xl:col-span-6 flex flex-col justify-center lg:py-0">
              <div>
                {categoryLabel && (
                  <span className="pill pill-secondary mb-6 inline-flex">
                    {categoryLabel}
                  </span>
                )}
                {project.title.includes(': ') ? (
                  <h1 className="text-balance m-0 mb-6 mt-2">
                    <span className="block text-sm md:text-base font-bold uppercase text-[var(--color-primary)] tracking-widest mb-3">
                      {project.title.split(': ')[0]}
                    </span>
                    <span className="block leading-[1.1]" style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}>
                      {project.title.split(': ')[1]}
                    </span>
                  </h1>
                ) : (
                  <h1 className="text-balance leading-[1.1] m-0 mb-6 mt-2" style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}>
                    {project.title}
                  </h1>
                )}
                <p className="text-lg md:text-xl leading-relaxed text-muted text-pretty m-0 max-w-2xl">
                  {project.description}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <button 
                  onClick={() => {
                    const target = document.querySelector('.project-main');
                    if (target) {
                      const yOffset = -80; 
                      const y = target.getBoundingClientRect().top + window.scrollY + yOffset;
                      window.scrollTo({top: y, behavior: 'smooth'});
                    }
                  }} 
                  className="btn btn-primary cursor-pointer w-fit"
                >
                  <span>Read Case Study</span>
                  <span className="material-symbols-outlined right-fix animate-bounce">arrow_downward</span>
                </button>
              </div>
            </div>

            {/* Image Showcase + Overlays */}
            <div className="lg:col-span-7 xl:col-span-6 bg-[var(--color-card)] rounded-[2rem] border border-[var(--color-border)] relative overflow-hidden shadow-sm min-h-[400px] lg:min-h-[500px]">
              {project.projectType === "motion" ? (
                <video src={project.image} className="w-full h-full object-cover absolute inset-0" controls playsInline />
              ) : (
                <img src={project.image} alt={project.title} className="w-full h-full object-cover absolute inset-0 image-hover-scale" referrerPolicy="no-referrer" />
              )}
              
              {/* Tags overlay (Top Left) */}
              <div className="absolute top-6 left-6 flex flex-wrap gap-2 z-10 pointer-events-none max-w-[70%]">
                {((project.tags || []).length > 0) && project.tags.map((tag) => (
                  <span key={tag} className="pill bg-[var(--color-card)]/90 backdrop-blur-md border-[var(--color-border)] shadow-md pointer-events-auto text-[11px] md:text-xs font-semibold px-3 py-1 md:px-4 md:py-1.5">
                    {tag}
                  </span>
                ))}
              </div>

              {/* External Links overlay (Top Right) */}
              <div className="absolute top-6 right-6 flex flex-col items-center gap-3 z-10 pointer-events-none">
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-[1rem] border border-[var(--color-border)] text-foreground hover:bg-[var(--color-primary)] hover:text-white transition-colors pointer-events-auto shadow-md backdrop-blur-md bg-[var(--color-bg-main)]/85 flex-shrink-0"
                    title="Live Preview"
                  >
                    <span className="material-symbols-outlined text-[20px]">open_in_new</span>
                  </a>
                )}
                {project.repoUrl && (
                  <a 
                    href={project.repoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-[1rem] border border-[var(--color-border)] text-foreground hover:bg-[var(--color-primary)] hover:text-white transition-colors pointer-events-auto shadow-md backdrop-blur-md bg-[var(--color-bg-main)]/85 flex-shrink-0"
                    title="Repository"
                  >
                    <span className="material-symbols-outlined text-[20px]">code</span>
                  </a>
                )}
              </div>

              {/* Metadata Overlay (Bottom) */}
              {project.quickContext && (
                <div className="absolute bottom-6 left-6 right-6 bg-[var(--color-bg-main)]/50 backdrop-blur-md border border-[var(--color-border)]/50 rounded-2xl p-4 md:p-6 grid grid-cols-1 sm:grid-cols-12 gap-4 pointer-events-auto shadow-lg">
                  {Object.entries(project.quickContext).map(([key, value]) => {
                    let colSpan = "sm:col-span-3";
                    if (key.toLowerCase() === 'deliverables') colSpan = "sm:col-span-6";
                    return (
                      <div key={key} className={`flex flex-col ${colSpan}`}>
                        <span className="text-[11px] md:text-xs font-semibold text-muted uppercase tracking-wider mb-1">{key}</span>
                        <span className="text-sm md:text-base font-medium leading-snug text-balance">{value}</span>
                      </div>
                    )
                  })}
                </div>
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

        <div className="project-nav-row container items-center flex justify-between my-16">
          <Link to="/work" className="btn btn-secondary">
            <span className="material-symbols-outlined">arrow_back</span>
            <span className="text-nowrap">Back to Work</span>
          </Link>

          {nextProject && (
            <Link
              to={`/project/${nextProject.slug}`}
              className="btn btn-primary"
              aria-label={`Go to next project: ${nextProject.title}`}
            >
              <span className="text-nowrap">Next Project</span>
              <span className="material-symbols-outlined right-fix">arrow_forward</span>
            </Link>
          )}
        </div>
      </div>
    </main>
  );
};

export default ProjectDetail;
