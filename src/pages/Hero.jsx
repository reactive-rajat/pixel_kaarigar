import React from 'react';

const Hero = ({ setActivePage }) => {
  return (
    <section className="hero-section container">
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
            Building friendly digital playgrounds at the intersection of Design & Code. 
            I turn complex problems into quirky, interactive experiences.
          </p>

          <div className="hero-actions">
            <button className="primary-btn" onClick={() => setActivePage('works')}>
              <span>See My Work</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
            <button className="secondary-btn" onClick={() => setActivePage('contact')}>
              Let's Talk
            </button>
          </div>
        </div>

        {/* Right Column: Character Playground */}
        <div className="hero-visual">
          <div className="character-container animate-float">
            <div className="glow-overlay"></div>
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXAgM3CuGXobTplePYNkLUht3XCnJ8I6Ze9SgQUQmaWjUVVrDuVdR_-YbNU2ju0G9xWTTXa5nOeqi9Gy49O2DUtkbW6ab0Qui2TwtS2v2xlbz1f0b6f7NI6VoFzlotYWicY6Wc0HwjrOnlNE0FJhRTYkodqWEBhaQyMekYkTz5xJOxKX5eF0ezYb0e2Pt7z30L9bR21e_PgbdF9Yv9XL5jxn3U-lrqi3Hjh-thI92-HvZKSDH62Vy738bVghDispQMYo-aoAU0N8E" 
              alt="Friendly Robot" 
              className="character-img"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* HUD Panels */}
          <div className="hud-panel mood-panel glass-panel">
            <div className="mood-switcher">
              <div className="mood-option active">
                <span className="material-symbols-outlined">sentiment_satisfied</span>
                <span>Happy</span>
              </div>
              <div className="mood-option">
                <span className="material-symbols-outlined">bolt</span>
                <span>Focused</span>
              </div>
            </div>
          </div>

          <div className="hud-panel energy-panel glass-panel">
            <div className="energy-header">
              <div className="energy-label">
                <span className="material-symbols-outlined">battery_charging_full</span>
                <span>Energy Level</span>
              </div>
              <span className="energy-value">94%</span>
            </div>
            <div className="energy-bar-bg">
              <div className="energy-bar-fill" style={{ width: '94%' }}></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 6rem;
          padding-bottom: 4rem;
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

        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.25rem 0.75rem;
          background: rgba(127, 19, 236, 0.1);
          border: 1px solid rgba(127, 19, 236, 0.3);
          border-radius: var(--border-radius-full);
          width: fit-content;
        }

        .ping-dot {
          position: relative;
          display: flex;
          width: 0.5rem;
          height: 0.5rem;
        }

        .ping-inner {
          position: absolute;
          width: 100%;
          height: 100%;
          background: var(--primary-color);
          border-radius: 50%;
          opacity: 0.75;
          animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .ping-outer {
          position: relative;
          width: 0.5rem;
          height: 0.5rem;
          background: var(--primary-color);
          border-radius: 50%;
        }

        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        .status-text {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--primary-color);
        }

        .hero-title {
          font-size: 5rem;
          font-weight: 900;
          line-height: 0.9;
          letter-spacing: -0.04em;
        }

        .gradient-text {
          background: linear-gradient(to right, var(--primary-color), #ad92c9);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-description {
          font-size: 1.25rem;
          color: var(--text-muted);
          max-width: 500px;
          line-height: 1.6;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
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
          background: radial-gradient(circle at center, var(--primary-glow), transparent 70%);
          opacity: 0.4;
        }

        .character-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          position: relative;
          z-index: 1;
        }

        .hud-panel {
          position: absolute;
          padding: 0.5rem;
          border-radius: var(--border-radius);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          z-index: 10;
        }

        .mood-panel {
          top: -1rem;
          right: -1rem;
          transform: rotate(3deg);
        }

        .mood-switcher {
          display: flex;
          background: rgba(0, 0, 0, 0.2);
          padding: 0.25rem;
          border-radius: var(--border-radius);
          gap: 0.25rem;
        }

        .mood-option {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
          font-weight: 700;
          border-radius: 0.75rem;
          color: rgba(255, 255, 255, 0.5);
          transition: all 0.2s;
        }

        .mood-option.active {
          background: var(--primary-color);
          color: white;
        }

        .energy-panel {
          bottom: -2rem;
          left: -1rem;
          width: 240px;
          padding: 1rem;
          transform: rotate(-2deg);
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
          background: linear-gradient(to right, var(--primary-color), #ad92c9);
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
            font-size: 4rem;
          }
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
    </section>
  );
};

export default Hero;
