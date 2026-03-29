import React from "react";
import Brands from "../components/sections/Brands";
import StatusBadge from "../components/common/StatusBadge";
import HeroVisual from "../components/common/HeroVisual";

const Hero = ({ setActivePage }) => {
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

  return (
    <section className="hero-section container">
      <div>
        <div className="hero-grid">
          {/* Left Column: Typography & Intro */}
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
                Let's Talk
              </button>
            </div>
          </div>

          {/* Right Column: Character Playground */}
          <HeroVisual defaultMood="focused" onCharacterClick={handleHeroClick} />
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

          .skills-list{
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
          }

          .skill-item{
            background: var(--color-bg-soft);
            border: 1px solid color-mix(in srgb, var(--color-secondary) 10%, transparent);
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

          }

          .brands-section{
            margin-top: 2rem;
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
          }
        `}</style>
      </div>
    </section>
  );
};

export default Hero;
