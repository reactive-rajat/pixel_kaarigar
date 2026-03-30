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
  testimonials,
} from "../../data/about.js";

const showcaseGradients = [
  "radial-gradient(circle at top left, rgba(127, 19, 236, 0.18), transparent 42%), linear-gradient(135deg, rgba(18, 12, 28, 0.96), rgba(13, 9, 23, 0.94))",
  "radial-gradient(circle at top right, rgba(173, 146, 201, 0.16), transparent 40%), linear-gradient(135deg, rgba(14, 10, 24, 0.97), rgba(20, 10, 31, 0.94))",
  "radial-gradient(circle at center left, rgba(98, 45, 172, 0.18), transparent 44%), linear-gradient(135deg, rgba(16, 10, 26, 0.97), rgba(10, 8, 20, 0.95))",
];

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
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
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

  useEffect(() => {
    if (testimonials.length <= 1) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveTestimonialIndex((currentIndex) => {
        return (currentIndex + 1) % testimonials.length;
      });
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, []);

  const activeProject = showcaseProjects[activeProjectIndex];
  const activeTestimonial = testimonials[activeTestimonialIndex];
  const showcaseGradientClass = `showcase-shell-gradient-${
    activeProjectIndex % showcaseGradients.length
  }`;

  const showPreviousTestimonial = () => {
    setActiveTestimonialIndex((currentIndex) => {
      return currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    });
  };

  const showNextTestimonial = () => {
    setActiveTestimonialIndex((currentIndex) => {
      return (currentIndex + 1) % testimonials.length;
    });
  };

  return (
    <section className="hero-section container">
      <div>
        <div className="hero-grid">
          <div className="hero-content">
            <StatusBadge text="Open to work" showPing />

            <h1 className="hero-title">
              <span className="gradient-text">UX Designer <br /></span>
              with an unfair advantage.
            </h1>

            <p className="hero-description">
              I design experiences that solve real problems —
then bring them to life with code.
            </p>

            <ul className="skills-list">
              {skills.map((skill, index) => (
                <li key={index} className="skill-item skill-pill">
                  {skill}
                </li>
              ))}
            </ul>

            <div className="hero-actions">
              <button
                className="primary-btn"
                onClick={() => setActivePage("works")}
              >
                <span>See My Work</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <button
                className="secondary-btn"
                onClick={() => setActivePage("contact")}
              >
                Let&apos;s Talk
              </button>
            </div>
          </div>

          <HeroVisual defaultMood="focused" onCharacterClick={handleHeroClick} />
        </div>

        <div className="hero-lower-sections">
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
              className={`showcase-shell glass-surface card-glass ${showcaseGradientClass}`}
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
                        {activeProject.category?.[0] || activeProject.projectType}
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
                        className="showcase-link"
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
                  className={`snapshot-card glass-surface card-glass`}
                  variants={staggerItem}
                >
                  {card.type === "stat" ? (
                    <>
                      <p className="snapshot-value">
                        <CountUpNumber
                          value={card.value}
                          suffix={card.suffix}
                          start={startSnapshotCount}
                        />
                      </p>
                      <h3 className="snapshot-label">{card.label}</h3>
                      <p className="snapshot-text">{card.description}</p>
                    </>
                  ) : (
                    <>
                      <div className="snapshot-brand-copy">
                        <div>
                          <p className="snapshot-value">
                            20+
                          </p>
                          <h3 className="snapshot-brand-heading">{card.label}</h3>
                        </div>
                      </div>
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
            className="skills-section"
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="skills-glimpse-header">
              <p className="section-kicker">Skills & tools</p>
              <h3 className="section-title">
                A quick glimpse of the tools behind the work.
              </h3>
            </div>

            <div className="skills-glimpse">
              {skillHighlights.map((skill, index) => (
                <motion.span
                  key={skill.name}
                  className={`skill-pill skills-highlight-pill skills-highlight-pill-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <span className="material-symbols-outlined icon-sm skills-highlight-icon">
                    {skill.icon}
                  </span>
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </motion.section>

          <motion.section
            className="testimonial-section"
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="testimonial-shell">
              <div className="testimonial-nav">
                <button
                  type="button"
                  className="testimonial-arrow"
                  aria-label="Previous testimonial"
                  onClick={showPreviousTestimonial}
                >
                  <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <button
                  type="button"
                  className="testimonial-arrow"
                  aria-label="Next testimonial"
                  onClick={showNextTestimonial}
                >
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>

              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={activeTestimonial.name}
                  className="testimonial-spotlight"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <img
                    className="testimonial-avatar"
                    src={activeTestimonial.image}
                    alt={activeTestimonial.name}
                    loading="lazy"
                  />
                  <div className="testimonial-copy">
                    <p className="testimonial-quote">
                      &ldquo;{activeTestimonial.quote}&rdquo;
                    </p>

                    <div className="testimonial-meta">
                      <h4 className="testimonial-name">{activeTestimonial.name}</h4>
                      <p className="testimonial-role">{activeTestimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.section>
        </div>
      </div>
    </section>
  );
};

export default Hero;
