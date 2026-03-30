import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Brands from '../../components/sections/Brands/Brands';
import HeroVisual from '../../components/common/HeroVisual/HeroVisual';
import StatusBadge from '../../components/common/StatusBadge/StatusBadge';
import SectionHeading from '../../components/common/SectionHeading/SectionHeading';
import { aboutSkills, testimonials } from '../../data/about.js';
import "./About.css";

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
          <StatusBadge text="My Story" className="about-story-badge" />

          <h1 className="about-title">
            I design experiences
          <span className="primary-text"> people actually enjoy.</span>
          </h1>
          <p className="about-lead">
            Hi, I'm Rajat — a Senior UX Designer with 7+ years of experience. I design digital products, and I also code. Which means I know exactly what's buildable, and why it matters.
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
              {aboutSkills.map((skill) => (
                <span key={skill.name} className="tool-pill">
                  <span className="material-symbols-outlined">{skill.icon}</span>
                  {skill.name}
                </span>
              ))}
            </div>
            <p className="toolkit-more">and many more...</p>
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
            <p className="toolkit-more">and many more...</p>
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
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className={`testimonial-card content-card${testimonial.highlighted ? ' highlighted' : ''}`}
            >
              <p className="testimonial-text">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="testimonial-author">
                <img
                  className="author-avatar"
                  src={testimonial.image}
                  alt={testimonial.name}
                  loading="lazy"
                />
                <div>
                  <p className="author-name">{testimonial.name}</p>
                  <p className="author-role">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
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
      <div className="works-cta about-cta content-section">
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
    </section>
  );
};

export default About;
