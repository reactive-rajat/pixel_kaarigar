import React from 'react';
import Brands from '../components/sections/Brands';

const About = () => {

  return (
    <section className="about-page container">
      {/* Hero */}
      <div className="about-hero">
        <div className="about-hero-text">
          <div className="status-badge">
            <span className="ping-dot">
              <span className="ping-inner"></span>
              <span className="ping-outer"></span>
            </span>
            <span className="status-text">Open to work</span>
          </div>

          <h1 className="about-title">
            More than just <span className="primary-text">pixels</span> &amp;{' '}
            <span className="primary-text">code</span>.
          </h1>
          <p className="about-lead">
            Hi, I&apos;m Alex. I exist at the intersection of “make it pretty” and
            “make it work.” I build digital playgrounds that feel as good as they
            look.
          </p>

          <div className="about-actions">
            <button className="primary-btn">
              <span>Download Resume</span>
              <span className="material-symbols-outlined">download</span>
            </button>
            <button className="secondary-btn">Let&apos;s Talk</button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="character-container animate-float">
            <div className="glow-overlay"></div>
            <img 
              src="/src/assets/brand/about_avatar.png" 
              alt="Friendly Robot" 
              className="character-img"
              referrerPolicy="no-referrer"
            />
          </div>

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

      {/* Brands */}
      <Brands />

      {/* What I Deliver */}
      <div className="deliver-section content-section">
        <span className="section-label">Services</span>
        <h2 className="section-title">
          What I <span className="primary-text">Deliver</span>
        </h2>
        <p className="section-description">
          Strategy, design, and development tailored to your product goals.
        </p>
        <div className="deliver-grid">
          <div className="deliver-card content-card">
            <span className="material-symbols-outlined">strategy</span>
            <h3>Strategy</h3>
            <p>Define the purpose and map the journey for maximum impact.</p>
          </div>
          <div className="deliver-card content-card">
            <span className="material-symbols-outlined">brush</span>
            <h3>Design</h3>
            <p>Craft crisp, intuitive interfaces with clear hierarchy.</p>
          </div>
          <div className="deliver-card content-card">
            <span className="material-symbols-outlined">code</span>
            <h3>Development</h3>
            <p>Build scalable products with clean code and smooth UX.</p>
          </div>
        </div>
      </div>

      {/* Toolkit */}
      <div className="toolkit-section content-section">
        <span className="section-label">Toolkit</span>
        <h2 className="section-title">
          Digital Toolkit &amp; <span className="primary-text">Power-ups</span>
        </h2>
        <p className="section-description">
          The tools I reach for to design, build, and ship polished experiences.
        </p>
        <div className="toolkit-grid">
          <div className="toolkit-card content-card">
            <div className="toolkit-header">
              <span className="material-symbols-outlined">auto_awesome</span>
              <div>
                <p className="toolkit-eyebrow">Core Expertise</p>
                <h3>Tools I use daily</h3>
              </div>
            </div>
            <div className="toolkit-pills">
              <span className="tool-pill">
                <span className="material-symbols-outlined">draw</span>
                UX/UI Design
              </span>
              <span className="tool-pill">
                <span className="material-symbols-outlined">modeling</span>
                Prototyping
              </span>
              <span className="tool-pill">
                <span className="material-symbols-outlined">deployed_code</span>
                Design Systems
              </span>
              <span className="tool-pill">
                <span className="material-symbols-outlined">auto_graph</span>
                Visual Design
              </span>
            </div>
          </div>
          <div className="toolkit-card content-card">
            <div className="toolkit-header">
              <span className="material-symbols-outlined">workspace_premium</span>
              <div>
                <p className="toolkit-eyebrow">Certifications</p>
                <h3>Credentials &amp; badges</h3>
              </div>
            </div>
            <ul className="toolkit-list">
              <li>
                <span className="material-symbols-outlined">verified</span>
                Google UX Design Professional
              </li>
              <li>
                <span className="material-symbols-outlined">verified</span>
                Framer Certified Partner
              </li>
              <li>
                <span className="material-symbols-outlined">verified</span>
                Adobe XD Expert
              </li>
              <li>
                <span className="material-symbols-outlined">verified</span>
                Interaction Design Foundation
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="testimonials-section content-section">
        <span className="section-label">Testimonials</span>
        <h2 className="section-title">
          Kind Words from <span className="primary-text">Awesome Humans</span>
        </h2>
        <p className="section-description">
          A few kind notes from people I&apos;ve partnered with recently.
        </p>
        <div className="testimonials-grid">
          <div className="testimonial-card content-card">
            <p className="testimonial-text">
              “Alex is a rare breed of designer who actually understands how code
              works. Collaboration became effortless.”
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">JD</div>
              <div>
                <p className="author-name">John Doe</p>
                <p className="author-role">Product Manager @ TechCorp</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card content-card highlighted">
            <p className="testimonial-text">
              “The attention to detail in the interactions is next level. Highly
              recommended.”
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">JS</div>
              <div>
                <p className="author-name">Jane Smith</p>
                <p className="author-role">Founder @ StartupX</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card content-card">
            <p className="testimonial-text">
              “The attention to detail in the interactions is next level. Highly
              recommended.”
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">JS</div>
              <div>
                <p className="author-name">Jane Smith</p>
                <p className="author-role">Founder @ StartupX</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="timeline-section content-section content-card">
        <span className="section-label">Journey</span>
        <h2 className="section-title">
          How it started vs How it&apos;s <span className="primary-text">going</span>
        </h2>
        <p className="section-description">
          The short version of how I got here and what I&apos;m building next.
        </p>
        <div className="timeline-list">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-year">2018</span>
              <h4>Discovered Flexbox. Cried. Learned to love it.</h4>
              <p>Spent 4 hours trying to center a div. Humbling times.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-year">2020</span>
              <h4>First Freelance Gig.</h4>
              <p>Landed my first real client and shipped a live site.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-year">Now</span>
              <h4>Building systems &amp; obsessing over details.</h4>
              <p>Creating scalable design systems and full-stack products.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Dual Cards */}
      <div className="dual-cards-section content-section">
        <span className="section-label">Approach</span>
        <h2 className="section-title">
          I&apos;m not just an average <span className="primary-text">pixel pusher</span>
        </h2>
        <p className="section-description">
          Balancing expressive visuals with systems that scale gracefully.
        </p>
        <div className="dual-grid">
          <div className="dual-card visualist content-card">
            <span className="card-tag">THE VISUALIST</span>
            <h3>I craft stories through visuals.</h3>
            <p>Every pixel has a purpose. I focus on hierarchy and emotion.</p>
          </div>
          <div className="dual-card architect content-card">
            <span className="card-tag">THE ARCHITECT</span>
            <h3>I build systems that scale.</h3>
            <p>Robust, maintainable systems that evolve with the product.</p>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="final-cta content-section content-card">
        <div className="cta-inner">
          <span className="section-label">Let&apos;s build</span>
          <h2>
            Have a crazy idea? <span className="primary-text">Let&apos;s build it.</span>
          </h2>
          <p className="section-description">
            Tell me about the vision and I&apos;ll help make it real.
          </p>
          <button className="primary-btn">
            <span>Let&apos;s Talk</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>

      <style jsx="true">{`
        .about-page {
          padding: 10rem 0 8rem;
          display: flex;
          flex-direction: column;
          gap: 6rem;
        }

        .about-hero {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 4rem;
          align-items: center;
        }

        .about-hero-text {
          display: flex;
          flex-direction: column;
          gap: var(--space-lg);
        }

        .about-title {
          font-size: 3.8rem;
          font-weight: 900;
          line-height: 1.05;
          letter-spacing: -0.02em;
        }

        .about-lead {
          font-size: 1.1rem;
          color: var(--color-text-muted);
          max-width: 540px;
          line-height: 1.7;
        }

        .about-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
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
          top: 0rem;
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
          bottom: -1rem;
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
          color: var(--color-text-muted);
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

        .brands-section {
          text-align: center;
        }

        .eyebrow {
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: rgba(255, 255, 255, 0.75);
          margin-bottom: 2rem;
          font-weight: 800;
        }

        .brands-marquee {
          position: relative;
          overflow: hidden;
          display: flex;
          padding: 0.5rem 0;
          max-width: 900px;
          margin: 0 auto;
          mask-image: linear-gradient(
            to right,
            transparent,
            black 15%,
            black 85%,
            transparent
          );
        }

        .brands-marquee::before,
        .brands-marquee::after {
          content: '';
          position: absolute;
          top: 0;
          width: 90px;
          height: 100%;
          z-index: 2;
          pointer-events: none;
        }

        .brands-marquee::before {
          left: 0;
          background: linear-gradient(90deg, rgba(7, 6, 10, 0.95), transparent);
        }

        .brands-marquee::after {
          right: 0;
          background: linear-gradient(270deg, rgba(7, 6, 10, 0.95), transparent);
        }

        .brands-track {
          display: flex;
          align-items: center;
          gap: 2.5rem;
          flex-wrap: nowrap;
          width: max-content;
          min-width: max-content;
        }

        .brands-marquee.is-scrolling .brands-track {
          animation: marquee-left 40s linear infinite;
          will-change: transform;
        }

        .brand-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
        }

        .brand-logo {
          height: 80px;
          width: auto;
          padding: 0.6rem 1rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .brand-logo img {
          height: 100%;
          width: auto;
          max-width: 240px;
          object-fit: contain;
        }

        .brand-name {
          font-size: 0.8rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.55);
          font-weight: 400;
        }

        .brands-marquee.is-scrolling:hover .brands-track {
          animation-play-state: paused;
        }

        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 1024px) {
          .brands-track {
            gap: 1.75rem;
          }

          .brand-logo {
            height: 72px;
          }
        }

        @media (max-width: 640px) {
          .brands-track {
            gap: 1.25rem;
          }

          .brand-logo {
            height: 64px;
          }

          .brand-name {
            font-size: 0.7rem;
          }
        }

        .section-title {
          font-size: 2.6rem;
          font-weight: 900;
          text-align: center;
          margin: 0;
        }

        .content-section {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1.5rem;
          padding-top: 1rem;
        }

        .section-label {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.35rem 0.9rem;
          border-radius: 999px;
          background: rgba(127, 19, 236, 0.18);
          color: var(--color-primary);
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .section-description {
          max-width: 680px;
          font-size: 1.1rem;
          color: var(--color-text-muted);
          line-height: 1.7;
          margin: 0;
        }

        .content-card {
          background: var(--color-card);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 2.4rem 2rem;
          transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
        }

        .content-card:hover {
          border-color: rgba(127, 19, 236, 0.5);
          box-shadow: 0 18px 40px rgba(10, 6, 20, 0.4),
            0 0 25px rgba(127, 19, 236, 0.25);
          transform: translateY(-2px);
        }

        .deliver-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
          width: 100%;
          align-items: stretch;
          margin-top: 1rem;
        }

        .deliver-card {
          border-radius: 22px;
          background: rgba(10, 8, 16, 0.95);
          border: 1px solid rgba(255, 255, 255, 0.08);
          text-align: left;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          height: 100%;
        }

        .deliver-card span {
          width: 3.5rem;
          height: 3.5rem;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(127, 19, 236, 0.2);
          color: var(--color-primary);
          font-size: 1.85rem;
        }

        .deliver-card p {
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.6;
        }

        .deliver-card h3 {
          font-size: 1.25rem;
          font-weight: 800;
        }

        .toolkit-columns {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          width: 100%;
        }

        .toolkit-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 2.5rem;
          width: 100%;
        }

        .toolkit-card {
          background: rgba(10, 8, 16, 0.95);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 22px;
          padding: 2.5rem;
          text-align: left;
        }

        .toolkit-header {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          margin-bottom: 1.5rem;
        }

        .toolkit-header .material-symbols-outlined {
          width: 44px;
          height: 44px;
          border-radius: 14px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(127, 19, 236, 0.18);
          color: var(--color-primary);
          font-size: 1.4rem;
          flex-shrink: 0;
        }

        .toolkit-eyebrow {
          font-weight: 800;
          letter-spacing: 0.12em;
          font-size: 0.7rem;
          color: var(--color-text-muted);
          text-transform: uppercase;
          margin-bottom: 0.4rem;
        }

        .toolkit-card h3 {
          font-size: 1.2rem;
          font-weight: 800;
          margin: 0;
        }

        .toolkit-pills {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.9rem;
        }

        .tool-pill {
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 0.65rem 0.9rem;
          font-size: 0.85rem;
          font-weight: 600;
          background: rgba(255, 255, 255, 0.04);
          display: inline-flex;
          gap: 0.5rem;
          align-items: center;
          color: rgba(255, 255, 255, 0.85);
        }

        .tool-pill .material-symbols-outlined {
          font-size: 1rem;
          color: var(--color-primary);
        }

        .toolkit-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
        }

        .toolkit-list li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.7rem 0.9rem;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.04);
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.9rem;
          font-weight: 600;
        }

        .toolkit-list .material-symbols-outlined {
          font-size: 1.1rem;
          color: var(--color-primary);
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          width: 100%;
          align-items: stretch;
        }

        .testimonial-card {
          background: rgba(10, 8, 16, 0.95);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 22px;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
          text-align: left;
          height: 100%;
        }

        .testimonial-card.highlighted {
          background: var(--color-primary);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .testimonial-text {
          color: rgba(255, 255, 255, 0.82);
          font-size: 1rem;
          line-height: 1.75;
          height: 87px;
        }

        .testimonial-card.highlighted .testimonial-text{
          font-size: 1.15rem;
          line-height: 1.65;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 1.1rem;
        }

        .author-avatar {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(127, 19, 236, 0.9), rgba(173, 146, 201, 0.85));
          color: #fff;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .author-name {
          font-weight: 800;
          font-size: 1rem;
        }

        .author-role {
          color: rgba(255, 255, 255, 0.55);
          font-size: 0.85rem;
        }

        .timeline-section {
          padding: 3rem;
          border-radius: var(--radius-xl);
        }

        .timeline-list {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          position: relative;
          margin: 0 auto;
          width: 100%;
          max-width: 600px;
          margin-top: 2rem;
          text-align: left;
        }

        .timeline-list::before {
          content: '';
          position: absolute;
          left: 1.8rem;
          top: 0;
          bottom: 0;
          width: 2px;
          background: rgba(255, 255, 255, 0.08);
        }

        .timeline-item {
          position: relative;
        }

        .timeline-dot {
          width: 3.5rem;
          height: 3.5rem;
          border-radius: 50%;
          background: var(--color-primary);
          background: #261933;
          position: absolute;
          left: 0rem;
          top: 0rem;
          box-shadow: inset 0 0 0 2px #4D3267;
        }

        .timeline-year {
          display: inline-block;
          padding: 0.2rem 0.7rem;
          border-radius: var(--radius-pill);
          background: rgba(127, 19, 236, 0.15);
          color: var(--color-primary);
          font-weight: 700;
          font-size: 0.75rem;
          margin-bottom: 0.5rem;
        }

        .timeline-content{
          padding-left: 5.5rem;
        }

        .timeline-content h4 {
          font-size: 1.2rem;
          margin-bottom: 0.4rem;
        }

        .timeline-content p {
          color: var(--color-text-muted);
        }

        .dual-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          width: 100%;
        }

        .dual-card {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .dual-card.visualist {
          background: linear-gradient(135deg, #1a1a1a, #0b0b10);
        }

        .dual-card.architect {
          background: linear-gradient(135deg, #0b0b10, #1a1a1a);
          border-color: rgba(127, 19, 236, 0.4);
        }

        .card-tag {
          font-size: 0.7rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--color-primary);
          font-weight: 800;
        }

        .dual-card h3 {
          font-size: 2.2rem;
          line-height: 1.1;
        }

        .dual-card p {
          color: var(--color-text-muted);
          line-height: 1.6;
        }

        .final-cta {
          position: relative;
          overflow: hidden;
          padding: 4.5rem 3rem;
          border-radius: var(--radius-xl);
        }

        .final-cta::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at top, rgba(127, 19, 236, 0.25), transparent 55%);
          opacity: 0.8;
        }

        .cta-inner {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 2rem;
          align-items: center;
        }

        @media (max-width: 1024px) {
          .about-hero {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .about-hero-text {
            align-items: center;
          }

          .deliver-grid,
          .toolkit-grid,
          .testimonials-grid,
          .dual-grid {
            grid-template-columns: 1fr;
          }

          .hero-visual {
            order: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
