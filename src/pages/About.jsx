import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Brands from '../components/sections/Brands';
import HeroVisual from '../components/common/HeroVisual';
import StatusBadge from '../components/common/StatusBadge';
import SectionHeading from '../components/common/SectionHeading';

const About = () => {
  const navigate = useNavigate();
  const [expandedTimelineItems, setExpandedTimelineItems] = useState({
    freelance: false,
    bold: false,
    avalon: false,
  });

  const toggleTimelineDetails = (itemKey) => {
    setExpandedTimelineItems((prev) => ({
      ...prev,
      [itemKey]: !prev[itemKey],
    }));
  };

  return (
    <section className="about-page container">
      {/* Hero */}
      <div className="about-hero">
        <div className="about-hero-text">
          <StatusBadge text="My Story" style={{ padding: '0.5rem 0.9rem' }} />

          <h1 className="about-title">
            More than just <span className="primary-text">pixels</span> &amp;{' '}
            <span className="primary-text">code</span>.
          </h1>
          <p className="about-lead">
            Hi, I&apos;m Rajat. I spend my days designing interfaces and bringing them to life in the browser, preferably in <span className="focus-text"><span className="material-symbols-outlined">bolt</span>Focused</span> mode.
          </p>

          <div className="about-actions">
            <button className="primary-btn">
              <span>Download Resume</span>
              <span className="material-symbols-outlined">download</span>
            </button>
            <button className="secondary-btn">Let&apos;s Talk</button>
          </div>
        </div>

        <HeroVisual defaultMood="relaxed" />
      </div>

      {/* Timeline */}
      <div className="timeline-section content-section content-card">
        <SectionHeading
          label="Journey"
          title={
            <>
              How it started vs How it&apos;s <span className="primary-text">going</span>
            </>
          }
          description="The short version of how I got here and what I'm building next."
        />
        <div className="timeline-list">
          <div className="timeline-item">
            <div className="timeline-dot">
              <span className="material-symbols-outlined timeline-dot-icon">rocket_launch</span>
            </div>
            <div className="timeline-content">
              <span className="timeline-year start">Now</span>
              <span className="timeline-year end">May 2025</span>
              <h4>Independent UI/UX & Frontend Developer | Freelance </h4>
              <div id="timeline-details-freelance" className={expandedTimelineItems.freelance ? 'timeline-details expanded' : 'timeline-details'}>
                <ul>
                  <li className="timeline-list-item"><p><span className="main-text">Product Development:</span> Designing and building responsive web applications and a personal portfolio using React, Tailwind CSS, and AI-assisted workflows.</p></li>
                  <li className="timeline-list-item"><p><span className="main-text">Client Consulting: </span> Transforming complex requirements into high-fidelity Figma designs and production-ready UI code with 100% design fidelity.</p></li>
                </ul>
              </div>
              <button
                type="button"
                className="timeline-toggle"
                onClick={() => toggleTimelineDetails('freelance')}
                aria-expanded={expandedTimelineItems.freelance}
                aria-controls="timeline-details-freelance"
              >
                {expandedTimelineItems.freelance ? 'Show less' : 'Read more'}
              </button>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot">
              <span className="material-symbols-outlined timeline-dot-icon">grid_view</span>
            </div>
            <div className="timeline-content">
              <span className="timeline-year start">Sep 2021</span>
              <span className="timeline-year end">May 2025</span>
              <h4>Senior Web Designer / UI Developer | BOLD </h4>
              <div id="timeline-details-bold" className={expandedTimelineItems.bold ? 'timeline-details expanded' : 'timeline-details'}>
                <ul>
                  <li className="timeline-list-item"><p>Led the UI/UX migration for 'ResumeHelp', creating a modern app interface that significantly improved user metrics.</p></li>
                  <li className="timeline-list-item"><p>Acted as the technical bridge between Creative & Dev teams to ensure 100% pixel-perfect implementation of design systems.</p></li>
                  <li className="timeline-list-item"><p>Developed the 'Bold India' site independently, adapting global design standards for local performance</p></li>
                  <li className="timeline-list-item"><p>Managed design reviews for internal teams and external agencies to maintain brand consistency across products.</p></li>
                </ul>
              </div>
              <button
                type="button"
                className="timeline-toggle"
                onClick={() => toggleTimelineDetails('bold')}
                aria-expanded={expandedTimelineItems.bold}
                aria-controls="timeline-details-bold"
              >
                {expandedTimelineItems.bold ? 'Show less' : 'Read more'}
              </button>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot">
              <span className="material-symbols-outlined timeline-dot-icon">code</span>
            </div>
            <div className="timeline-content">
              <span className="timeline-year start">Jan 2019</span>
              <span className="timeline-year end">Sep 2021</span>
              <h4>UI Designer / Developer | Avalon Infosys</h4>
              <div id="timeline-details-avalon" className={expandedTimelineItems.avalon ? 'timeline-details expanded' : 'timeline-details'}>
                <ul>
                  <li className="timeline-list-item"><p>Designed data-driven web platforms for international NGOs and UN agencies across 130+ countries.</p></li>
                  <li className="timeline-list-item"><p>Engineered reusable HTML/SCSS markups, significantly reducing development cycles and UI regressions.</p></li>
                  <li className="timeline-list-item"><p>Built mobile-first layouts ensuring seamless performance and accessibility for a global user base.</p></li>
                  <li className="timeline-list-item"><p>Created visual branding assets, including iconography and digital illustrations for diverse project needs.</p></li>
                </ul>
              </div>
              <button
                type="button"
                className="timeline-toggle"
                onClick={() => toggleTimelineDetails('avalon')}
                aria-expanded={expandedTimelineItems.avalon}
                aria-controls="timeline-details-avalon"
              >
                {expandedTimelineItems.avalon ? 'Show less' : 'Read more'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* What I Deliver */}
      <div className="deliver-section content-section">
        <SectionHeading
          label="Services"
          title={
            <>
              What I <span className="primary-text">Deliver</span>
            </>
          }
          description="Strategy, design, and development tailored to your product goals."
        />
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
        <SectionHeading
          label="Toolkit"
          title={
            <>
              Digital Toolkit &amp; <span className="primary-text">Power-ups</span>
            </>
          }
          description="The tools I reach for to design, build, and ship polished experiences."
        />
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
                React.js
              </span>
              <span className="tool-pill">
                <span className="material-symbols-outlined">draw</span>
                Tailwind
              </span>
              <span className="tool-pill">
                <span className="material-symbols-outlined">draw</span>
                Javascript
              </span>
              <span className="tool-pill">
                <span className="material-symbols-outlined">draw</span>
                HTML/CSS
              </span>
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
            <p style={{opacity: '0.35', textAlign: 'center', marginTop: '1rem', fontWeight: '400'}}>and many more...</p>
          </div>
          <div className="toolkit-card content-card">
            <div className="toolkit-header">
              <span className="material-symbols-outlined">workspace_premium</span>
              <div>
                <p className="toolkit-eyebrow">Certifications</p>
                <h3>Courses &amp; Certifications</h3>
              </div>
            </div>
            <ul className="toolkit-list">
              <li>
                <span className="material-symbols-outlined">verified</span>
                Meta - React
              </li>
              <li>
                <span className="material-symbols-outlined">verified</span>
                Meta - Programming with Javascript
              </li>
              <li>
                <span className="material-symbols-outlined">verified</span>
                Uxcel - UX Design Foundation + Typography
              </li>
              <li>
                <span className="material-symbols-outlined">verified</span>
                Uxcel - Color Psychology + Wireframing + Accessibility
              </li>
            </ul>
            <p style={{opacity: '0.35', textAlign: 'center', marginTop: '1rem', fontWeight: '400'}}>and many more...</p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="testimonials-section content-section">
        <SectionHeading
          label="Testimonials"
          title={
            <>
              What People Say<span className="primary-text"> About Me</span>
            </>
          }
          description="A few kind words from people I've worked with."
        />
        <div className="testimonials-grid">
          <div className="testimonial-card content-card">
            <p className="testimonial-text">
              “I had the pleasure of working with Rajat and was consistently impressed by his talent, versatility, and reliability.”
            </p>
            <div className="testimonial-author">
              <img
                className="author-avatar"
                src="/assets/testimonials/danielle_bain_thumbnail.jpeg"
                alt="Denielle Bain"
                loading="lazy"
              />
              <div>
                <p className="author-name">Danielle Bain</p>
                <p className="author-role">Creative Director @ BOLD</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card content-card highlighted">
            <p className="testimonial-text">
              “Rajat has a remarkable ability to translate complex concepts into intuitive, user-friendly designs.”
            </p>
            <div className="testimonial-author">
              <img
                className="author-avatar"
                src="/assets/testimonials/abhishek_kumar_thumbnail.jpeg"
                alt="Abhishek Kumar"
                loading="lazy"
              />
              <div>
                <p className="author-name">Abhishek Kumar</p>
                <p className="author-role">Director – UI @ BOLD</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card content-card">
            <p className="testimonial-text">
              “Rajat could understand complex briefs and translate them into clean, effective, and visually engaging designs.”
            </p>
            <div className="testimonial-author">
              <img
                className="author-avatar"
                src="/assets/testimonials/jeeveeta_agnihotri_thumbnail.jpeg"
                alt="Jeeveeta Soobarah Agnihotri"
                loading="lazy"
              />
              <div>
                <p className="author-name">Jeeveeta Soobarah Agnihotri</p>
                <p className="author-role">Chief Programme Officer</p>
              </div>
            </div>
          </div>
        </div>

        {/* Brands */}
      <Brands />

      </div>

      {/* Dual Cards */}
      <div className="dual-cards-section content-section">
        <SectionHeading
          label="Approach"
          title={
            <>
              I&apos;m not just an average <span className="primary-text">pixel pusher</span>
            </>
          }
          description="Balancing expressive visuals with systems that scale gracefully."
        />
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
      <div className="works-cta about-cta content-section" style={{ marginTop: '0' }}>
        <div className="cta-glow"></div>
        <h3 className="cta-title">
          Have a crazy idea?
          <br />
          <span className="primary-text">Let&apos;s build it.</span>
        </h3>
        <button className="cta-btn" type="button" onClick={() => navigate('/contact')}>
          <span className="material-symbols-outlined">handshake</span>
          <span>Let&apos;s work together</span>
        </button>
      </div>

      <style jsx="true">{`
        .about-page {
          padding: 10rem 0 8rem;
          display: flex;
          flex-direction: column;
          gap: 8rem;
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
          font-size: 5rem;
          font-weight: 900;
          line-height: 1.05;
          letter-spacing: -0.02em;
        }

        .about-lead {
          font-size: 1.1rem;
          color: var(--color-text-muted);
          max-width: 540px;
          line-height: 1.8;
        }

        .focus-text{
          background: var(--color-bg-soft);
          border: 1px solid var(--color-secondary);
          color: var(--color-secondary);
          border-radius: 999px;
          padding: 0.25rem 0.7rem 0.35rem 0.4rem;
          font-size: 0.9rem;
          font-weight: 500;
          margin: 0 0.2rem;
        }

        .focus-text .material-symbols-outlined{
          font-size: 1.1rem;
          vertical-align: middle;
          margin-right: 0.25rem;
        }

        .about-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .brands-section {
          text-align: center;
        }

        .eyebrow {
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: var(--color-text);
          margin: 2rem 0 1.25rem 0;
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
          color: var(--color-text-muted);
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
          gap: 3rem;
        }

        .section-label {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem 1rem 0.4rem 1rem;
          border-radius: 999px;
          background: var(--color-bg-soft);
          border: 1px solid color-mix(in srgb, var(--color-secondary) 10%, transparent);
          color: var(--color-primary);
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 0.8rem;
        }

        .section-description {
          max-width: 680px;
          font-size: 1.1rem;
          color: var(--color-text-muted);
          line-height: 1.7;
          margin-top: 0.65rem;
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
          background: var(--color-card);
          border: 1px solid var(--color-border);
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
          color: var(--color-text-muted);
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
          background: var(--color-card);
          border: 1px solid var(--color-border);
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
          text-align: center;
        }

        .toolkit-card h3 {
          font-size: 1.2rem;
          font-weight: 800;
          margin: 0;
          text-align: center;
        }

        .toolkit-pills {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.9rem;
        }

        .tool-pill {
          background: var(--color-bg-soft);
          border: 1px solid color-mix(in srgb, var(--color-secondary) 10%, transparent);
          color: var(--color-secondary);
          border-radius: 16px;
          padding: 0.65rem 0.9rem;
          font-size: 0.85rem;
          font-weight: 600;
          display: inline-flex;
          gap: 0.5rem;
          align-items: center;
        }

        .tool-pill .material-symbols-outlined {
          font-size: 1.35rem;
          color: var(--color-secondary);
        }

        .toolkit-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
        }

        .toolkit-header{
          flex-direction: column;
          align-items: center;
          margin: 0.5rem 0 1.75rem 0;
        }

        .testimonial-author{
          text-align: left;
        }

        .toolkit-list > li {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          text-align: left;
          gap: 0.75rem;
          padding: 0.7rem 0.9rem;
          border-radius: 16px;
          background: var(--color-bg-soft);
          border: 1px solid color-mix(in srgb, var(--color-secondary) 10%, transparent);
          color: var(--color-secondary);
          font-size: 0.9rem;
          font-weight: 600;
        }

        .toolkit-list .material-symbols-outlined {
          font-size: 1.35rem;
          color: var(--color-secondary);
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          width: 100%;
          align-items: stretch;
        }

        .testimonial-card {
          background: var(--color-card);
          border: 1px solid var(--color-border);
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
        }

        html[data-theme="light"] .testimonial-card.highlighted{
          background: var(--color-bg-soft);
        }

        .testimonial-text {
          color: var(--color-text-muted);
          font-size: 1rem;
          line-height: 1.75;
          height: 87px;
        }

        .testimonial-card.highlighted .testimonial-text{
          font-size: 1.15rem;
          line-height: 1.65;
          color: var(--color-text);
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
          object-fit: cover;
          display: block;
        }

        .author-name {
          font-weight: 800;
          font-size: 1rem;
        }

        .author-role {
          color: var(--color-text-muted);
          font-size: 0.85rem;
        }

        .timeline-section {
          padding: 3rem;
          border-radius: var(--radius-xl);
        }

        .timeline-list {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          position: relative;
          margin: 0 auto;
          width: 100%;
          max-width: 680px;
          margin-top: 0.25rem;
          text-align: left;
        }

        .timeline-list::before {
          content: '';
          position: absolute;
          left: 1.8rem;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--color-bg-soft);
          z-index: 0;
        }

        .timeline-item {
          position: relative;
        }

        .timeline-dot {
          width: 3.5rem;
          height: 3.5rem;
          border-radius: 50%;
          background: var(--color-secondary);
          position: absolute;
          left: 0rem;
          top: 0rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .timeline-dot-icon {
          font-size: 1.4rem;
          color: white;
        }

        .timeline-year {
          display: inline-block;
          position: relative;
          border-radius: var(--radius-pill);
          background: var(--color-bg-soft);
          font-weight: 500;
          margin-bottom: 0.5rem;
          border: 1px solid color-mix(in srgb, var(--color-secondary) 10%, transparent);
          color: var(--color-secondary);
          padding: 0.2rem 0.7rem;
          font-size: 0.8rem;
          white-space: nowrap;
        }

        .timeline-year.start:after {
          content: '-';
          position: absolute;
          right: -0.8rem;
          top: 50%;
          transform: translateY(-50%);
        }

        .timeline-year.end {
          margin-left: 1rem;
        }

        .timeline-list-item {
          position: relative;
          margin-left: 1.25rem;
        }

        .timeline-list-item:not(:last-child) {
          margin-bottom: 0.5rem;
        }

        .timeline-list-item:before {
          content: '';
          position: absolute;
          width: 0.4rem;
          height: 0.4rem;
          background: var(--color-primary);
          border-radius: 50%;
          left: -1rem;
          top: 0.6rem;
        }

        .timeline-list-item .main-text{
          color: var(--color-text);
        }

        .timeline-content{
          padding-left: 5.5rem;
        }

        .timeline-content h4 {
          font-size: 1.2rem;
          margin-bottom: 0.6rem;
          margin-top: 0.25rem;
        }

        .timeline-content p {
          color: var(--color-text-muted);
        }

        .timeline-details {
          max-height: 3rem;
          overflow: hidden;
          transition: max-height 0.24s ease;
        }

        .timeline-details.expanded {
          max-height: 40rem;
        }

        .timeline-toggle {
          margin-top: 0.8rem;
          padding: 0;
          border: none;
          background: transparent;
          color: var(--color-primary);
          font-size: 0.88rem;
          font-weight: 600;
          line-height: 1;
          cursor: pointer;
          font-family: inherit;
        }

        .timeline-toggle:hover {
          color: white;
        }

        .timeline-toggle:focus-visible {
          outline: 2px solid var(--color-primary);
          outline-offset: 3px;
          border-radius: 3px;
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
          background: var(--color-card);
        }

        .card-tag {
          font-size: 0.7rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--color-secondary);
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

        .works-cta {
          position: relative;
          margin-top: 8rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
          text-align: center;
        }

        .cta-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 300px;
          height: 300px;
          background: var(--primary-glow);
          filter: blur(80px);
          z-index: -1;
        }

        .cta-title {
          font-size: 3rem;
          font-weight: 700;
          line-height: 1.2;
        }

        .cta-btn {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem 2.5rem;
          background: white;
          color: var(--color-primary);
          border-radius: var(--border-radius-full);
          font-weight: 700;
          font-size: 1.125rem;
          transition: all 0.3s;
          box-shadow: 0 20px 40px var(--color-primary-glow);
        }

        .cta-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 20px 60px var(--primary-glow);
        }

        html[data-theme="light"] .cta-btn {
          background: var(--color-primary);
          color: white;
        }

        @media (max-width: 1024px) {
          .about-hero {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .about-title {
            font-size: 4rem;
          }

          .about-hero-text {
            align-items: center;
          }

          .deliver-grid,
          .toolkit-grid,
          .testimonials-grid,
          .dual-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .hero-visual {
            order: 1;
          }
        }

        @media (max-width: 768px) {
          .about-page {
            padding: 7rem 0.85rem 8rem;
            gap: 4rem;
          }

          .about-hero {
            gap: 2.5rem;
          }

          .about-title {
            font-size: 2.6rem;
            line-height: 1.05;
          }

          .about-lead {
            font-size: 1rem;
          }

          .about-actions {
            width: 100%;
            flex-direction: column;
            align-items: stretch;
            gap: 0.8rem;
          }

          .about-actions .primary-btn,
          .about-actions .secondary-btn {
            justify-content: center;
            width: 100%;
          }

          .content-section {
            gap: 2rem;
          }

          .content-card {
            padding: 1.35rem;
            border-radius: 1.2rem;
            text-align: center;
          }
            .deliver-card span{
              margin: 0 auto;
            }

          .section-title {
            font-size: 2.1rem;
          }

          .section-description {
            font-size: 0.98rem;
            line-height: 1.6;
          }

          .toolkit-card {
            padding: 1.4rem;
          }

          .toolkit-pills {
            grid-template-columns: 1fr;
          }

          .testimonial-card {
            gap: 1.2rem;
          }

          .testimonial-text,
          .testimonial-card.highlighted .testimonial-text {
            height: auto;
            font-size: 0.95rem;
            line-height: 1.6;
            text-align: left;
          }

          .timeline-section {
            padding: 1.4rem;
          }

          .timeline-list {
            margin-top: 1rem;
            gap: 2.5rem;
          }

          .timeline-list::before {
            left: 1.25rem;
          }

          .timeline-dot {
            width: 2.5rem;
            height: 2.5rem;
          }

          .timeline-dot-icon {
            font-size: 1.1rem;
          }

          .timeline-content {
            padding-left: 3.6rem;
          }

          .timeline-content h4 {
            font-size: 1.05rem;
          }

          .dual-card h3 {
            font-size: 1.7rem;
          }

          .works-cta {
            margin-top: 4.5rem;
            gap: 1.4rem;
          }

          .cta-title {
            font-size: 2rem;
          }

          .cta-btn {
            width: 100%;
            justify-content: center;
            padding: 1rem 1.25rem;
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .about-title {
            font-size: 2.2rem;
          }

          .focus-text {
            display: inline-flex;
            align-items: center;
            font-size: 0.85rem;
            padding-top: 0.1rem;
            padding-bottom: 0.2rem;
          }

        }

        @media (hover: none) {
          .content-card:hover {
            transform: none;
            box-shadow: none;
            border-color: var(--color-border);
          }

          .timeline-toggle:hover {
            background: transparent;
            color: var(--color-primary);
          }
        }
      `}</style>
    </section>
  );
};

export default About;
