import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import ProjectCard from "../../components/ui/ProjectCard/ProjectCard";
import projects, { featuredProjects } from "../../data/projects.js";
import projectLinks from "../../data/projectLinks.js";
import { getProjectCategories } from "../../utils/projectMeta.js";
import "./Works.css";

const Works = () => {
  const [filter, setFilter] = useState("All");
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [isProjectPaused, setIsProjectPaused] = useState(false);

  // Carousel Logic
  const showcaseProjects = useMemo(() => {
    return featuredProjects.length > 0 ? featuredProjects : projects.slice(0, 3);
  }, []);

  useEffect(() => {
    if (showcaseProjects.length <= 1 || isProjectPaused) return;

    const intervalId = window.setInterval(() => {
      setActiveProjectIndex((currentIndex) => {
        return (currentIndex + 1) % showcaseProjects.length;
      });
    }, 4000);

    return () => window.clearInterval(intervalId);
  }, [isProjectPaused, showcaseProjects]);

  const activeProject = showcaseProjects[activeProjectIndex];

  // Grid Logic
  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) =>
          getProjectCategories(project).includes(filter)
        );

  const orderedProjects = useMemo(() => {
    const nextProjects = [...filteredProjects];
    const travelAppIndex = nextProjects.findIndex(
      (project) => project.title === "Travel App"
    );
    const experimentalPlaygroundIndex = nextProjects.findIndex(
      (project) => project.title === "Experimental Playground"
    );

    if (
      travelAppIndex !== -1 &&
      experimentalPlaygroundIndex !== -1 &&
      travelAppIndex < experimentalPlaygroundIndex
    ) {
      [
        nextProjects[travelAppIndex],
        nextProjects[experimentalPlaygroundIndex],
      ] = [
        nextProjects[experimentalPlaygroundIndex],
        nextProjects[travelAppIndex],
      ];
    }

    return nextProjects;
  }, [filteredProjects]);

  return (
    <>
      <header className="">
        <div className="container-lg hero-grid works-hero-grid">
          <div className="header-left">
            <h1 className="section-title">
              Work <br />
              That Solved
              <br />
              <span className="text-primary">Problems.</span>
            </h1>
            <p className="header-desc">
              Real problems, real decisions, real outcomes — this is how I think
              and what I make.
            </p>
          </div>
          
          <div
            className="header-right showcase-shell"
            onMouseEnter={() => setIsProjectPaused(true)}
            onMouseLeave={() => setIsProjectPaused(false)}
          >
            <div className="showcase-stage works-showcase-stage">
              <AnimatePresence initial={false} mode="sync">
                <motion.div
                  key={activeProject.id}
                  className="showcase-slide works-showcase-slide"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="showcase-media works-showcase-media">
                    <span className="pill works-overlay-tag">
                      {activeProject.category?.[0] || activeProject.projectType}
                    </span>

                    {activeProject.image?.endsWith(".mp4") ? (
                      <video
                        className="showcase-image"
                        src={activeProject.image}
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                    ) : (
                      <img
                        className="showcase-image image-hover-scale"
                        src={activeProject.image}
                        alt={activeProject.title.replace(/\n/g, " ")}
                      />
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="showcase-dots vertical-dots" aria-label="Featured projects">
              {showcaseProjects.map((project, index) => (
                <button
                  key={project.id}
                  type="button"
                  className={`showcase-dot ${
                    activeProjectIndex === index ? "active" : ""
                  }`}
                  aria-label={`Show ${project.title.replace(/\n/g, " ")}`}
                  onClick={() => setActiveProjectIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </header>

      <section className="p-0 works-grid-section">
        <div className="container-lg filter-container">
          <div className="filter-chips">
            {["All", "Case Study", "UI & Dev", "Creative"].map((cat) => (
              <button
                key={cat}
                className={
                  filter === cat
                    ? "btn btn-primary filter-chip"
                    : "btn btn-secondary filter-chip"
                }
                onClick={() => setFilter(cat)}
              >
                <span>{cat}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="container-lg projects-grid works-3x3-grid">
          {orderedProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              externalUrl={projectLinks[project.folder] ?? ""}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Works;

