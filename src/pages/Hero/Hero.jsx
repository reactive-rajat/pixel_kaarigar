import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import StatusBadge from "../../components/common/StatusBadge/StatusBadge";
import HeroVisual from "../../components/common/HeroVisual/HeroVisual";
import projects, { featuredProjects } from "../../data/projects.js";
import brands from "../../data/brands.js";
import "./Hero.css";
import {
  aboutSkills,
  aboutSnapshotCards,
} from "../../data/about.js";
import Testimonials from "../../components/sections/Testimonials/Testimonials";

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

const Hero = ({ setActivePage }) => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [isProjectPaused, setIsProjectPaused] = useState(false);
  const [startSnapshotCount, setStartSnapshotCount] = useState(false);

  const handleHeroClick = () => {
    setActivePage("about");
  };

  const skills = [
    "UX Design",
    "Design Systems",
    "Figma",
    "Accessibility",
    "User Research",
    "HTML & CSS",
    "React",
  ];

  const showcaseProjects = useMemo(() => {
    const projectList = featuredProjects.slice(0, 3);

    if (projectList.length > 0) {
      return projectList;
    }

    return projects.slice(0, 3);
  }, []);

  const movingBrands = useMemo(() => [...brands, ...brands], []);
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
    <section className="hero-section container">
      <div>
        <div className="hero-grid">
          <div className="hero-content">
            <StatusBadge text="Open to work" showPing />

            <h1 className="hero-title">
              <span className="gradient-text">
                UX Designer <br />
              </span>
              with an unfair advantage.
            </h1>

            <p className="hero-description">
              I design experiences that solve real problems — then bring them to
              life with code.
            </p>

            <div className="skills-marquee-container">
              <ul className="skills-list">
                {[...skills, ...skills].map((skill, index) => (
                  <li key={index} className="skill-item skill-pill">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div className="hero-actions">
              <button
                className="primary-btn"
                onClick={() => setActivePage("works")}
              >
                <span>See My Work</span>
                <span className="material-symbols-outlined right-fix">arrow_forward</span>
              </button>
              <button
                className="secondary-btn"
                onClick={() => setActivePage("contact")}
              >
                Let&apos;s Talk
              </button>
            </div>
          </div>

          <HeroVisual
            defaultMood="focused"
            onCharacterClick={handleHeroClick}
          />
        </div>

        <div className="hero-lower-sections">
          <motion.section
            className="snapshot-section"
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            onViewportEnter={() => setStartSnapshotCount(true)}
          >
            <motion.div
              className="snapshot-grid"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
            >
              {aboutSnapshotCards.map((card) => (
                <motion.article
                  key={card.id}
                  className={`card snapshot-card snapshot-card-${card.id} card-md`}
                  variants={staggerItem}
                >
                  {card.type === "stat" ? (
                    <>
                      <h2 className="snapshot-value">
                        <CountUpNumber
                          value={card.value}
                          suffix={card.suffix}
                          start={startSnapshotCount}
                        />
                      </h2>
                      <h4 className="snapshot-label">{card.label}</h4>
                      <p className="snapshot-text">{card.description}</p>
                    </>
                  ) : (
                    <>
                      <h2 className="snapshot-value">20+</h2>
                      <h4 className="snapshot-brand-heading">{card.label}</h4>
                      <div className="snapshot-brand-marquee">
                        <div className="snapshot-brand-track">
                          {movingBrands.map((brand, index) => (
                            <div
                              key={`${brand.brandName}-${index}`}
                              className="snapshot-brand-pill"
                            >
                              <span className="snapshot-brand-logo-frame">
                                <img
                                  src={brand.logoImage}
                                  alt={brand.brandName}
                                  className="snapshot-brand-logo"
                                />
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </motion.article>
              ))}
            </motion.div>
          </motion.section>
          
          <motion.section
            className="featured-work-section"
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
              className="showcase-shell"
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
                      <span className="showcase-category label-tag">
                        {activeProject.category?.[0] ||
                          activeProject.projectType}
                      </span>

                      <h2 className="showcase-title">
                        {activeProject.title.replace(/\n/g, " ")}
                      </h2>

                      <p className="showcase-description">
                        {activeProject.description}
                      </p>

                      <div className="showcase-tags">
                        {activeProject.tags?.map((tag) => (
                          <span key={tag} className="showcase-tag label-tag">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <Link
                        className="showcase-link primary-btn"
                        to={`/project/${activeProject.slug}`}
                      >
                        View Case Study →
                      </Link>
                    </div>

                    <div className="showcase-media">
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
                          className="showcase-image"
                          src={activeProject.image}
                          alt={activeProject.title.replace(/\n/g, " ")}
                        />
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="showcase-dots" aria-label="Featured projects">
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
            className="skills-section"
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="head-group skills-glimpse-header">
              <span className="label-tag section-kicker">Skills & tools</span>
              <h3 className="section-title">
                A quick glimpse of the tools behind the work.
              </h3>
            </div>

            <div className="skills-bento-grid">
              {skillHighlights.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="skill-bento-card"
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
                  <div className="skill-bento-glow" aria-hidden="true" />
                  <span className="material-symbols-outlined skill-bento-icon">
                    {skill.icon}
                  </span>
                  <p className="skill-bento-name">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </section>
  );
};

export default Hero;
