import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import StatusBadge from "../components/common/StatusBadge";
import HeroVisual from "../components/common/HeroVisual";
import projects, { featuredProjects } from "../data/projects";
import brands from "../data/brands";
import {
  aboutSkills,
  aboutSnapshotCards,
  testimonials,
} from "../data/about";

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

  const brandPreview = useMemo(() => brands.slice(0, 5), []);
  const firstSkillRow = useMemo(() => [...aboutSkills, ...aboutSkills], []);
  const secondSkillRow = useMemo(
    () => [...aboutSkills].reverse().concat([...aboutSkills].reverse()),
    [],
  );

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
  const showcaseBackground =
    showcaseGradients[activeProjectIndex % showcaseGradients.length];

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
                <li key={index} className="skill-item">
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
              className="showcase-shell glass-surface"
              style={{ "--showcase-gradient": showcaseBackground }}
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
                      <span className="showcase-category">
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
                          <span key={tag} className="showcase-tag">
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
                  className="snapshot-card glass-surface"
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
                      <p className="snapshot-brand-heading">{card.label}</p>
                      <div className="snapshot-brand-row">
                        {brandPreview.map((brand, index) => (
                          <motion.div
                            key={brand.brandName}
                            className="snapshot-brand-pill"
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{
                              duration: 0.45,
                              delay: index * 0.08,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                          >
                            <img
                              src={brand.logoImage}
                              alt={brand.brandName}
                              className="snapshot-brand-logo"
                            />
                          </motion.div>
                        ))}
                      </div>
                      <p className="snapshot-text">{card.description}</p>
                    </>
                  )}
                </motion.article>
              ))}
            </motion.div>
          </motion.section>

          <motion.section
            className="skills-marquee-section"
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="marquee-shell glass-surface">
              <div className="marquee-header">
                <p className="section-kicker">Skills & tools</p>
                <h2 className="section-title">What I build with, design with, and ship with.</h2>
              </div>

              <div className="marquee-viewport">
                <div className="marquee-row marquee-row-left">
                  <div className="marquee-track">
                    {firstSkillRow.map((skill, index) => (
                      <span key={`${skill.name}-left-${index}`} className="marquee-pill">
                        <span className="material-symbols-outlined marquee-pill-icon">
                          {skill.icon}
                        </span>
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="marquee-row marquee-row-right">
                  <div className="marquee-track">
                    {secondSkillRow.map((skill, index) => (
                      <span key={`${skill.name}-right-${index}`} className="marquee-pill">
                        <span className="material-symbols-outlined marquee-pill-icon">
                          {skill.icon}
                        </span>
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section
            className="testimonial-section"
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="testimonial-shell glass-surface">
              <span className="testimonial-mark" aria-hidden="true">
                "
              </span>

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
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="testimonial-quote">
                    &ldquo;{activeTestimonial.quote}&rdquo;
                  </p>

                  <div className="testimonial-divider" aria-hidden="true" />

                  <div className="testimonial-meta">
                    <p className="testimonial-name">{activeTestimonial.name}</p>
                    <p className="testimonial-role">{activeTestimonial.role}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.section>
        </div>

        <style jsx="true">{`
          .hero-section {
            min-height: 100dvh;
            display: grid;
            grid-template-columns: minmax(0, 1fr);
            align-items: center;
            padding-top: 8rem;
            padding-bottom: 4rem;
            gap: 2rem;
          }

          .hero-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
            width: 100%;
            min-width: 0;
          }

          .hero-content {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            min-width: 0;
          }

          .gradient-text {
            background: linear-gradient(
              to right,
              var(--primary-color),
              #ad92c9
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .hero-description {
            font-size: 1.1rem;
            color: var(--text-muted);
            max-width: 500px;
            line-height: 1.6;
          }

          .skills-list {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
          }

          .skill-item {
            background: var(--color-bg-soft);
            border: 1px solid color-mix(
              in srgb,
              var(--color-secondary) 10%,
              transparent
            );
            color: var(--color-secondary);
            border-radius: 999px;
            padding: 0.2rem 0.7rem;
            font-size: 0.8rem;
            white-space: nowrap;
          }

          .hero-actions {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
            margin-top: 1rem;
          }

          .hero-lower-sections {
            display: flex;
            flex-direction: column;
            gap: clamp(5rem, 8vw, 6.25rem);
            margin-top: clamp(5rem, 8vw, 6rem);
          }

          .glass-surface {
            position: relative;
            overflow: hidden;
            border: 1px solid transparent;
            border-radius: 2rem;
            background:
              linear-gradient(
                180deg,
                color-mix(
                  in srgb,
                  var(--color-bg-soft) 88%,
                  rgba(255, 255, 255, 0.03)
                ),
                color-mix(in srgb, var(--color-bg-main) 90%, transparent)
              ) padding-box,
              linear-gradient(
                140deg,
                color-mix(in srgb, var(--primary-color) 62%, transparent),
                rgba(255, 255, 255, 0.05),
                transparent 72%
              ) border-box;
            backdrop-filter: blur(18px);
            box-shadow: 0 24px 60px rgba(0, 0, 0, 0.22);
          }

          .featured-work-section,
          .snapshot-section,
          .skills-marquee-section,
          .testimonial-section {
            width: 100%;
          }

          .showcase-shell {
            padding: 1.5rem;
          }

          .showcase-shell::before {
            content: "";
            position: absolute;
            inset: 0;
            background: var(--showcase-gradient);
            opacity: 0.96;
          }

          .showcase-shell > * {
            position: relative;
            z-index: 1;
          }

          .showcase-stage {
            position: relative;
            min-height: 26rem;
          }

          .showcase-slide {
            position: absolute;
            inset: 0;
            display: grid;
            grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.25fr);
            gap: 2rem;
            align-items: stretch;
          }

          .showcase-copy {
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 1rem;
            padding: 1.25rem 0.5rem 1.25rem 0;
            min-width: 0;
          }

          .showcase-category {
            width: fit-content;
            padding: 0.45rem 0.8rem;
            border-radius: var(--border-radius-full);
            background: color-mix(in srgb, var(--primary-color) 18%, transparent);
            border: 1px solid color-mix(in srgb, var(--primary-color) 35%, transparent);
            color: white;
            font-size: 0.78rem;
            font-weight: 700;
            letter-spacing: 0.08em;
            text-transform: uppercase;
          }

          .showcase-title {
            font-size: clamp(2rem, 3.5vw, 3.2rem);
            line-height: 1.02;
            color: white;
            max-width: 11ch;
          }

          .showcase-description {
            max-width: 40ch;
            font-size: 1rem;
            line-height: 1.7;
            color: rgba(255, 255, 255, 0.78);
          }

          .showcase-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.65rem;
          }

          .showcase-tag {
            padding: 0.45rem 0.8rem;
            border-radius: var(--border-radius-full);
            background: rgba(255, 255, 255, 0.07);
            border: 1px solid rgba(255, 255, 255, 0.14);
            color: white;
            font-size: 0.75rem;
            font-weight: 700;
            letter-spacing: 0.05em;
            text-transform: uppercase;
          }

          .showcase-link {
            width: fit-content;
            margin-top: 0.4rem;
            color: white;
            font-weight: 700;
            font-size: 0.96rem;
            transition: transform 0.2s ease, color 0.2s ease;
          }

          .showcase-link:hover {
            color: #d5b4ff;
            transform: translateX(4px);
          }

          .showcase-media {
            position: relative;
            min-width: 0;
            border-radius: 1.6rem;
            overflow: hidden;
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.08);
          }

          .showcase-media::after {
            content: "";
            position: absolute;
            inset: 0;
            background: linear-gradient(
              180deg,
              rgba(14, 10, 24, 0.06) 0%,
              rgba(14, 10, 24, 0.28) 100%
            );
          }

          .showcase-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }

          .showcase-dots {
            display: flex;
            justify-content: center;
            gap: 0.65rem;
            margin-top: 1.5rem;
          }

          .showcase-dot {
            width: 0.75rem;
            height: 0.75rem;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.18);
            border: 1px solid rgba(255, 255, 255, 0.16);
            transition:
              transform 0.25s ease,
              background 0.25s ease,
              box-shadow 0.25s ease;
          }

          .showcase-dot.active {
            background: var(--primary-color);
            transform: scale(1.08);
            box-shadow: 0 0 18px var(--color-primary-glow);
          }

          .snapshot-grid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 1.25rem;
          }

          .snapshot-card {
            padding: 1.6rem;
            min-height: 15rem;
            transition:
              transform 0.25s ease,
              box-shadow 0.25s ease,
              border-color 0.25s ease;
          }

          .snapshot-card:hover {
            transform: translateY(-4px);
            box-shadow:
              0 0 0 1px color-mix(in srgb, var(--primary-color) 28%, transparent),
              0 26px 54px rgba(0, 0, 0, 0.2);
          }

          .snapshot-value {
            font-size: clamp(2.8rem, 6vw, 4rem);
            line-height: 1;
            font-weight: 900;
            color: white;
            margin-bottom: 1rem;
          }

          .snapshot-label,
          .snapshot-brand-heading {
            font-size: 1.1rem;
            font-weight: 700;
            color: var(--text-dark);
            margin-bottom: 0.75rem;
          }

          .snapshot-text {
            color: var(--text-muted);
            line-height: 1.65;
            max-width: 30ch;
          }

          .snapshot-brand-row {
            display: flex;
            flex-wrap: wrap;
            gap: 0.75rem;
            margin-bottom: 1rem;
          }

          .snapshot-brand-pill {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-width: 4.25rem;
            min-height: 3.15rem;
            padding: 0.6rem 0.9rem;
            border-radius: 1.1rem;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.08);
          }

          .snapshot-brand-logo {
            width: auto;
            max-width: 4.5rem;
            max-height: 1.6rem;
            object-fit: contain;
            filter: saturate(0) brightness(1.4);
            opacity: 0.88;
          }

          .marquee-shell {
            padding: 1.6rem;
          }

          .marquee-header {
            margin-bottom: 1.5rem;
          }

          .section-kicker {
            margin-bottom: 0.55rem;
            font-size: 0.8rem;
            font-weight: 800;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: var(--text-muted);
          }

          .section-title {
            font-size: clamp(1.6rem, 3vw, 2.35rem);
            line-height: 1.1;
            color: white;
            max-width: 18ch;
          }

          .marquee-viewport {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            overflow: hidden;
            mask-image: linear-gradient(
              to right,
              transparent,
              black 8%,
              black 92%,
              transparent
            );
          }

          .marquee-row {
            overflow: hidden;
          }

          .marquee-track {
            display: flex;
            align-items: center;
            gap: 0.9rem;
            width: max-content;
          }

          .marquee-row-left .marquee-track {
            animation: marquee-left 26s linear infinite;
          }

          .marquee-row-right .marquee-track {
            animation: marquee-right 28s linear infinite;
          }

          .marquee-pill {
            display: inline-flex;
            align-items: center;
            gap: 0.55rem;
            padding: 0.78rem 1rem;
            border-radius: var(--border-radius-full);
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.08);
            color: white;
            font-size: 0.92rem;
            font-weight: 600;
            white-space: nowrap;
            transition:
              transform 0.25s ease,
              box-shadow 0.25s ease,
              border-color 0.25s ease,
              background 0.25s ease;
          }

          .marquee-pill:hover {
            transform: scale(1.04);
            background: color-mix(in srgb, var(--primary-color) 16%, rgba(255, 255, 255, 0.05));
            border-color: color-mix(in srgb, var(--primary-color) 40%, transparent);
            box-shadow: 0 12px 26px var(--color-primary-glow);
          }

          .marquee-pill-icon {
            font-size: 1rem;
            color: #d8b7ff;
          }

          .testimonial-shell {
            padding: clamp(2rem, 5vw, 3.4rem);
            text-align: center;
          }

          .testimonial-nav {
            display: flex;
            justify-content: flex-end;
            gap: 0.75rem;
            margin-bottom: 1rem;
          }

          .testimonial-arrow {
            width: 2.8rem;
            height: 2.8rem;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: 999px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            background: rgba(255, 255, 255, 0.04);
            color: white;
            transition:
              transform 0.25s ease,
              background 0.25s ease,
              box-shadow 0.25s ease;
          }

          .testimonial-arrow:hover {
            transform: translateY(-2px);
            background: color-mix(in srgb, var(--primary-color) 16%, rgba(255, 255, 255, 0.04));
            box-shadow: 0 12px 24px var(--color-primary-glow);
          }

          .testimonial-mark {
            position: absolute;
            inset: 1rem 0 auto;
            font-size: clamp(8rem, 16vw, 16rem);
            line-height: 0.75;
            font-weight: 900;
            color: color-mix(in srgb, var(--primary-color) 18%, transparent);
            pointer-events: none;
            user-select: none;
          }

          .testimonial-spotlight {
            position: relative;
            z-index: 1;
            max-width: 48rem;
            margin: 0 auto;
            padding: 2rem 0 1rem;
          }

          .testimonial-quote {
            font-size: clamp(1.4rem, 3vw, 2.2rem);
            line-height: 1.55;
            font-style: italic;
            color: white;
          }

          .testimonial-divider {
            width: min(11rem, 60%);
            height: 1px;
            margin: 2rem auto 1.2rem;
            background: linear-gradient(
              90deg,
              transparent,
              color-mix(in srgb, var(--primary-color) 45%, rgba(255, 255, 255, 0.15)),
              transparent
            );
          }

          .testimonial-name {
            font-size: 1rem;
            font-weight: 700;
            color: var(--text-dark);
          }

          .testimonial-role {
            margin-top: 0.25rem;
            color: var(--text-muted);
          }

          @keyframes marquee-left {
            from {
              transform: translateX(0);
            }

            to {
              transform: translateX(-50%);
            }
          }

          @keyframes marquee-right {
            from {
              transform: translateX(-50%);
            }

            to {
              transform: translateX(0);
            }
          }

          @media (max-width: 1024px) {
            .hero-grid {
              grid-template-columns: 1fr;
              text-align: center;
              gap: 6rem;
            }

            .hero-content {
              align-items: center;
              order: 2;
            }

            .hero-visual {
              order: 1;
            }

            .showcase-stage {
              min-height: 35rem;
            }

            .showcase-slide {
              grid-template-columns: 1fr;
            }

            .showcase-copy {
              align-items: center;
              text-align: center;
              padding-right: 0;
            }

            .showcase-title {
              max-width: 100%;
            }

            .showcase-description {
              max-width: 42ch;
            }

            .showcase-media {
              min-height: 16rem;
            }

            .snapshot-grid {
              grid-template-columns: 1fr;
            }
          }

          @media (max-width: 768px) {
            .hero-section {
              min-height: auto;
              padding-top: 7rem;
              padding-bottom: 2.5rem;
            }

            .hero-grid {
              gap: 2.8rem;
            }

            .hero-content {
              gap: 1.5rem;
            }

            .hero-description {
              font-size: 1rem;
            }

            .skills-list {
              justify-content: center;
            }

            .hero-actions {
              width: 100%;
              flex-direction: column;
              align-items: stretch;
              gap: 0.8rem;
            }

            .hero-actions .primary-btn,
            .hero-actions .secondary-btn {
              justify-content: center;
              width: 100%;
            }

            .showcase-shell,
            .marquee-shell,
            .testimonial-shell {
              padding: 1rem;
            }

            .showcase-stage {
              min-height: 32rem;
            }

            .showcase-title {
              font-size: 1.8rem;
            }

            .showcase-description {
              font-size: 0.95rem;
            }

            .snapshot-card {
              min-height: auto;
            }

            .testimonial-nav {
              justify-content: center;
            }

            .testimonial-quote {
              font-size: 1.2rem;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Hero;
