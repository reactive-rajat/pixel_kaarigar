import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import StatusBadge from "../../components/ui/StatusBadge/StatusBadge";
import HeroVisual from "../../components/sections/HeroVisual/HeroVisual";
import projects, { featuredProjects } from "../../data/projects.js";
import projectLinks from "../../data/projectLinks.js";
import "./Home.css";
import { aboutSkills, aboutSnapshotCards } from "../../data/about.js";
import Testimonials from "../../components/sections/Testimonials/Testimonials";
import Brands from "../../components/sections/Brands/Brands";
import SectionHeading from "../../components/ui/SectionHeading/SectionHeading";

const sectionReveal = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const CountUpNumber = ({ value, suffix = "", start }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) {
      return;
    }

    let frameId;
    const duration = 1200;
    const startTime = performance.now();

    const updateCount = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const nextCount = Math.round(progress * value);

      setCount(nextCount);

      if (progress < 1) {
        frameId = window.requestAnimationFrame(updateCount);
      }
    };

    frameId = window.requestAnimationFrame(updateCount);

    return () => window.cancelAnimationFrame(frameId);
  }, [start, value]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
};

const Home = ({ setActivePage }) => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [isProjectPaused, setIsProjectPaused] = useState(false);
  const [startSnapshotCount, setStartSnapshotCount] = useState(false);

  const handleHeroClick = () => {
    setActivePage("about");
  };

  const skills = [
    "Wireframing",
    "Prototyping",
    "HTML & CSS",
    "User Research",
    "Accessibility",
    "Figma",
  ];

  const showcaseProjects = useMemo(() => {
    const projectList = featuredProjects.slice(0, 3);

    if (projectList.length > 0) {
      return projectList;
    }

    return projects.slice(0, 3);
  }, []);

  const skillHighlights = useMemo(() => aboutSkills.slice(0, 8), []);

  useEffect(() => {
    if (showcaseProjects.length <= 1 || isProjectPaused) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveProjectIndex((currentIndex) => {
        return (currentIndex + 1) % showcaseProjects.length;
      });
    }, 4000);

    return () => window.clearInterval(intervalId);
  }, [isProjectPaused, showcaseProjects]);

  const activeProject = showcaseProjects[activeProjectIndex];

  return (
    <>
      <header className="container-lg hero-grid">
        <div className="hero-content">
          <StatusBadge text="Open to work" showPing />

          <h1 className="">
            <span className="text-gradient">
              UX Designer <br />
            </span>
            with an unfair advantage.
          </h1>

          <p className="hero-description">
            I turn messy product problems into clean, usable interfaces — and yes, I can build them too.
          </p>

          <div className="skills-marquee-container">
            <ul className="skills-list">
              {[...skills, ...skills].map((skill, index) => (
                <li key={index} className="pill">
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="hero-actions">
            <button
              className="btn btn-primary"
              onClick={() => setActivePage("works")}
            >
              <span>See My Work</span>
              <span className="material-symbols-outlined right-fix">
                arrow_forward
              </span>
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => setActivePage("contact")}
            >
              Let&apos;s Talk
            </button>
          </div>
        </div>

        <HeroVisual defaultMood="focused" onCharacterClick={handleHeroClick} />
      </header>

      {/* Brands */}
      <Brands />

      <motion.section
        className="bg-card-alt snapshot-section"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        onViewportEnter={() => setStartSnapshotCount(true)}
      >
        <div className="container-lg">
          <SectionHeading
            label="By the Numbers"
            title={
              <>
                The work,<span className="text-primary"> in numbers.</span>
              </>
            }
            description="7 years. 50+ projects. Still enjoying the work."
          />
        </div>
        <motion.div
          className="container-md snapshot-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {aboutSnapshotCards
            .filter((card) => card.type === "stat")
            .map((card) => (
              <motion.article
                key={card.id}
                className={`card card-1 card-hover snapshot-card-${card.id} card-md`}
                variants={staggerItem}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
              >
                
                <div className="snapshot-content-wrapper">
                  <h2 className="snapshot-value h2">
                    <CountUpNumber
                      value={card.value}
                      suffix={card.suffix}
                      start={startSnapshotCount}
                    />
                  </h2>
                  <div className="snapshot-text-content">
                    <div className="icon-heading-header m-0">
                      <div className="icon-heading-icon">
                        <span className="material-symbols-outlined snapshot-icon">
                          {card.id === "experience" ? "hourglass_top" : "memory"}
                        </span>
                      </div>
                      <div className="icon-heading-text">
                        <h4 className="snapshot-label">{card.label}</h4>
                      </div>
                    </div>
                    <p className="snapshot-text">{card.description}</p>
                  </div>
                </div>
              </motion.article>
            ))}
        </motion.div>
      </motion.section>

      <motion.section
        className="bg-bg-soft featured-work-section"
        initial={{ opacity: 0, x: 64 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          },
        }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div
          className="container-lg showcase-shell"
          onMouseEnter={() => setIsProjectPaused(true)}
          onMouseLeave={() => setIsProjectPaused(false)}
        >
          <div className="showcase-stage">
            <AnimatePresence initial={false} mode="sync">
              <motion.div
                key={activeProject.id}
                className="showcase-slide"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="showcase-copy">
                  <h2 className="showcase-title">
                    {activeProject.title.replace(/\n/g, " ")}
                  </h2>

                  <p className="showcase-description">
                    {activeProject.description}
                  </p>

                  <div className="showcase-tags">
                    {activeProject.tags?.map((tag) => (
                      <span key={tag} className="pill pill-primary">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="showcase-media">
                  <span className="pill showcase-overlay-tag">
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

          <div className="showcase-btn-container">
            <button
              className="btn btn-primary m-0"
              onClick={() => setActivePage("works")}
            >
              See All Projects <span className="material-symbols-outlined right-fix">arrow_forward</span>
            </button>
          </div>
        </div>
      </motion.section>

      <motion.div
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <Testimonials />
      </motion.div>

      <motion.section
        className="bg-card"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="container-lg">
          <div className="skills-section">
            <div className="head-group skills-glimpse-header">
              <span className="pill">Skills & tools</span>
              <h3 className="section-title">
                The tools I actually use — not just list on a resume.
              </h3>
            </div>

            <div className="skills-bento-grid">
              {skillHighlights.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="card card-2 card-md card-hover text-center items-center justify-center"
                  style={{paddingLeft: "16px", paddingRight: "16px"}}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    y: -5,
                    transition: { duration: 0.2, ease: "easeOut" },
                  }}
                >
                  
                  <span className="material-symbols-outlined skill-bento-icon">
                    {skill.icon}
                  </span>
                  <p className="skill-bento-name">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Home;
