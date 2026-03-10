import React, { useState } from "react";
import Brands from "../components/sections/Brands";

const Hero = ({ setActivePage }) => {
  const [isAboutPageActive, setIsAboutPageActive] = useState(false);
  const [currentMood, setCurrentMood] = useState('focused');

  const handleHeroClick = () => {
    setActivePage("about");
  };

  const skills = [
    "React",
    "JavaScript",
    "HTML & CSS",
    "UI/UX Design",
    "Design Systems",
    "Responsive Design",
  ];

  return (
    <section className="hero-section container">
      <div>
        <div className="hero-grid">
          {/* Left Column: Typography & Intro */}
          <div className="hero-content">
            <div className="status-badge">
              <span className="ping-dot">
                <span className="ping-inner"></span>
                <span className="ping-outer"></span>
              </span>
              <span className="status-text">Open to work</span>
            </div>

            <h1 className="hero-title">
              Designer <br />
              <span className="gradient-text">who Codes.</span>
            </h1>

            <p className="hero-description">
              A designer who learned to code, building interfaces that are both visually refined and technically solid.
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
          <div className="hero-visual">
            <div className="character-container animate-float" onClick={handleHeroClick}>
              <div className="glow-overlay"></div>
              <img
                src={`/src/assets/brand/avatar_${currentMood}.png`}
                alt="Man working on laptop"
                className="character-img"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* HUD Panels */}
            <div className="hud-panel mood-panel glass-panel">
              <div className="mood-switcher">
                <div
                  className={currentMood === "relaxed" ? "mood-option active" : "mood-option"}
                  onClick={() => setCurrentMood("relaxed")}
                >
                  <span className="material-symbols-outlined">
                    sentiment_satisfied
                  </span>
                  <span>Relaxed</span>
                </div>
                <div
                  className={currentMood === "focused" ? "mood-option active" : "mood-option"}
                  onClick={() => setCurrentMood("focused")}
                >
                  <span className="material-symbols-outlined">bolt</span>
                  <span>Focused</span>
                </div>
              </div>
            </div>

            <div className="hud-panel energy-panel glass-panel">
              <div className="energy-header">
                <div className="energy-label">
                  <span className="material-symbols-outlined">
                    battery_charging_full
                  </span>
                  <span>Energy Level</span>
                </div>
                <span className="energy-value">94%</span>
              </div>
              <div className="energy-bar-bg">
                <div className="energy-bar-fill" style={{ width: "94%" }}></div>
              </div>
            </div>
          </div>
        </div>

        <style jsx="true">{`
          .hero-section {
            min-height: 100dvh;
            display: grid;
            align-items: center;
            padding-top: 6rem;
            padding-bottom: 4rem;
            gap: 2rem;
          }

          .hero-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
            width: 100%;
          }

          .hero-content {
            display: flex;
            flex-direction: column;
            gap: 2rem;
          }

          .hero-title {
            font-size: 5rem;
            font-weight: 900;
            line-height: 0.9;
            letter-spacing: -0.04em;
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
            background: rgba(38, 25, 51, 0.8);
            border: 1px solid var(--border-color);
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

          .primary-btn {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 1rem 2rem;
            background: var(--primary-color);
            color: white;
            border-radius: var(--border-radius-full);
            font-weight: 700;
            transition: all 0.3s;
          }

          .primary-btn:hover {
            transform: scale(1.05);
            box-shadow: 0 0 40px var(--primary-glow);
          }

          .secondary-btn {
            padding: 1rem 2rem;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            color: var(--text-dark);
            border-radius: var(--border-radius-full);
            font-weight: 700;
            transition: all 0.3s;
          }

          .secondary-btn:hover {
            background: rgba(255, 255, 255, 0.1);
          }

          .hero-visual {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
          }

          .hero-visual:hover .character-img {
            transform: scale(1.05);
            transition: all 0.6s;
          }

          .character-container {
            position: relative;
            width: 100%;
            max-width: 450px;
            aspect-ratio: 1;
            border-radius: var(--border-radius-xl);
            overflow: hidden;
          }

          .glow-overlay {
            position: absolute;
            inset: 0;
            background: radial-gradient(
              circle at center,
              var(--primary-glow),
              transparent 70%
            );
            opacity: 0.4;
          }

          .character-img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            position: relative;
            z-index: 1;
            transition: all 0.3s;
          }

          .hud-panel {
            position: absolute;
            padding: 0.5rem;
            border-radius: var(--border-radius);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            z-index: 10;
          }

          .mood-panel {
            top: 0.5rem;
            right: -1rem;
            transform: rotate(3deg);
            transition: all 0.3s;
          }

          .hero-visual:hover .mood-panel {
            transform: rotate(0deg);
            transition: all 0.3s;
          }

          .mood-switcher {
            display: flex;
            border-radius: var(--border-radius);
            gap: 0.5rem;
            overflow: hidden;
          }

          .mood-option {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 1rem 0.5rem 0.7rem;
            font-size: 0.875rem;
            font-weight: 700;
            color: rgba(255, 255, 255, 0.5);
            cursor: pointer;
            transition: all 0.2s;
            border-radius: var(--border-radius);
          }

          .mood-option:not(.active):hover {
            background: rgba(0, 0, 0, 0.3);
          }

          .mood-option.active {
            background: var(--primary-color);
            color: white;
          }

          .energy-panel {
            bottom: 1.25rem;
            left: -1rem;
            width: 240px;
            padding: 1rem;
            transform: rotate(-2deg);
            transition: all 0.3s;
          }

          .hero-visual:hover .energy-panel {
            transform: rotate(0deg);
            transition: all 0.3s;
          }

          .energy-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 0.75rem;
          }

          .energy-label {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.75rem;
            font-weight: 700;
            text-transform: uppercase;
            color: var(--text-muted);
          }

          .energy-label .material-symbols-outlined {
            color: var(--primary-color);
            font-size: 1rem;
          }

          .energy-value {
            font-size: 0.75rem;
            font-weight: 700;
            color: var(--primary-color);
          }

          .energy-bar-bg {
            height: 0.5rem;
            background: rgba(255, 255, 255, 0.1);
            border-radius: var(--border-radius-full);
            overflow: hidden;
          }

          .energy-bar-fill {
            height: 100%;
            background: linear-gradient(
              to right,
              var(--primary-color),
              #ad92c9
            );
            border-radius: var(--border-radius-full);
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

            .hero-title {
              font-size: 5rem;
            }
          }

          .brands-section{
            margin-top: 2rem;
          }

          @media (max-width: 640px) {
            .hero-title {
              font-size: 3rem;
            }

            .energy-panel {
              width: 200px;
            }
          }
        `}</style>
      </div>

      {/* Brands */}
      <Brands/>
    </section>
  );
};

export default Hero;
