import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Brands from "../../components/sections/Brands/Brands";
import HeroVisual from "../../components/common/HeroVisual/HeroVisual";
import StatusBadge from "../../components/common/StatusBadge/StatusBadge";
import SectionHeading from "../../components/common/SectionHeading/SectionHeading";
import { aboutSkills } from "../../data/about.js";
import Testimonials from "../../components/sections/Testimonials/Testimonials";
import "./About.css";

const About = () => {
  const navigate = useNavigate();
  const [isTimelineExpanded, setIsTimelineExpanded] = useState(false);

  return (
    <div className="about-page">
      {/* Hero */}
      <header>
        <div className="container-lg">
          <div className="about-hero">
            <div className="about-hero-text">

              <h1 className="">
                I design experiences
                <span className="text-primary"> people actually enjoy.</span>
              </h1>
              <p className="about-lead">
                Hi, I'm Rajat — a Senior UX Designer with 7+ years of
                experience. I design digital products, and I also code. Which
                means I know exactly what's buildable, and why it matters.
              </p>

              <div className="about-actions">
                <button className="btn btn-primary">
                  <span>Download Resume</span>
                  <span className="material-symbols-outlined right-fix">
                    download
                  </span>
                </button>
                <button className="btn btn-secondary">Let&apos;s Talk</button>
              </div>
            </div>

            <HeroVisual defaultMood="relaxed" />
          </div>
        </div>
      </header>

      {/* Brands */}
      <Brands />

      {/* Timeline */}
      <section className="bg-card">
        <div className="container-lg">
          <SectionHeading
            label="Journey"
            title={
              <>
                How it started vs How it&apos;s{" "}
                <span className="text-primary">going</span>
              </>
            }
            description="The short version of how I got here and what I'm building next."
          />
        </div>
        <div
          className={`container-md timeline-container ${isTimelineExpanded ? "expanded" : ""}`}
        >
          <div className="timeline-wrapper">
            <div className="timeline-list">
              <div className="timeline-item">
                <div className="timeline-dot">
                  <span className="material-symbols-outlined timeline-dot-icon">
                    rocket_launch
                  </span>
                </div>
                <div className="timeline-content">
                  <span className="timeline-year start pill">Now</span>
                  <span className="timeline-year end pill">May 2025</span>
                  <h4>Independent UI/UX & Frontend Developer | Freelance </h4>
                  <div className="timeline-details">
                    <ul>
                      <li className="timeline-list-item">
                        <p>
                          <span className="main-text">
                            Product Development:
                          </span>{" "}
                          Designing and building responsive web applications and
                          a personal portfolio using React, Tailwind CSS, and
                          AI-assisted workflows.
                        </p>
                      </li>
                      <li className="timeline-list-item">
                        <p>
                          <span className="main-text">Client Consulting: </span>{" "}
                          Transforming complex requirements into high-fidelity
                          Figma designs and production-ready UI code with 100%
                          design fidelity.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot">
                  <span className="material-symbols-outlined timeline-dot-icon">
                    grid_view
                  </span>
                </div>
                <div className="timeline-content">
                  <span className="timeline-year start pill">Sep 2021</span>
                  <span className="timeline-year end pill">May 2025</span>
                  <h4>Senior Web Designer / UI Developer | BOLD </h4>
                  <div className="timeline-details">
                    <ul>
                      <li className="timeline-list-item">
                        <p>
                          Led the UI/UX migration for 'ResumeHelp', creating a
                          modern app interface that significantly improved user
                          metrics.
                        </p>
                      </li>
                      <li className="timeline-list-item">
                        <p>
                          Acted as the technical bridge between Creative & Dev
                          teams to ensure 100% pixel-perfect implementation of
                          design systems.
                        </p>
                      </li>
                      <li className="timeline-list-item">
                        <p>
                          Developed the 'Bold India' site independently,
                          adapting global design standards for local performance
                        </p>
                      </li>
                      <li className="timeline-list-item">
                        <p>
                          Managed design reviews for internal teams and external
                          agencies to maintain brand consistency across
                          products.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot">
                  <span className="material-symbols-outlined timeline-dot-icon">
                    code
                  </span>
                </div>
                <div className="timeline-content">
                  <span className="timeline-year start pill">Jan 2019</span>
                  <span className="timeline-year end pill">Sep 2021</span>
                  <h4>UI Designer / Developer | Avalon Infosys</h4>
                  <div className="timeline-details">
                    <ul>
                      <li className="timeline-list-item">
                        <p>
                          Designed data-driven web platforms for international
                          NGOs and UN agencies across 130+ countries.
                        </p>
                      </li>
                      <li className="timeline-list-item">
                        <p>
                          Engineered reusable HTML/SCSS markups, significantly
                          reducing development cycles and UI regressions.
                        </p>
                      </li>
                      <li className="timeline-list-item">
                        <p>
                          Built mobile-first layouts ensuring seamless
                          performance and accessibility for a global user base.
                        </p>
                      </li>
                      <li className="timeline-list-item">
                        <p>
                          Created visual branding assets, including iconography
                          and digital illustrations for diverse project needs.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="timeline-fade"></div>
          </div>
          <button
            type="button"
            className="btn btn-secondary timeline-global-toggle"
            onClick={() => setIsTimelineExpanded(!isTimelineExpanded)}
          >
            {isTimelineExpanded ? "Show less" : "Read more"}
          </button>
        </div>
      </section>

      {/* What I Deliver */}
      <section className="">
        <div className="container-lg">
          <SectionHeading
            label="Services"
            title={
              <>
                What I <span className="text-primary">Deliver</span>
              </>
            }
            description="Strategy, design, and development tailored to your product goals."
          />
          <div className="container-lg deliver-grid">
            <div className="deliver-card card-1 card-md">
              <span className="material-symbols-outlined">strategy</span>
              <h3>Strategy</h3>
              <p>Define the purpose and map the journey for maximum impact.</p>
            </div>
            <div className="deliver-card card-1 card-md">
              <span className="material-symbols-outlined">brush</span>
              <h3>Design</h3>
              <p>Craft crisp, intuitive interfaces with clear hierarchy.</p>
            </div>
            <div className="deliver-card card-1 card-md">
              <span className="material-symbols-outlined">code</span>
              <h3>Development</h3>
              <p>Build scalable products with clean code and smooth UX.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Toolkit */}
      <section className="bg-card-alt toolkit-section">
        <div className="container-lg">
          <SectionHeading
          label="Toolkit"
          title={
            <>
              Digital Toolkit &amp;{" "}
              <span className="text-primary">Power-ups</span>
            </>
          }
          description="The tools I reach for to design, build, and ship polished experiences."
        />
        </div>
        <div className="container-md toolkit-grid">
          <div className="toolkit-card card-1 card-md">
            <div className="toolkit-header">
              <div className="toolkit-icon">
                <span className="material-symbols-outlined">auto_awesome</span>
              </div>
              <div className="toolkit-heading-text">
                <h3>Design Stack</h3>
              </div>
            </div>
            <div className="toolkit-pills">
              {aboutSkills.map((skill) => (
                <span key={skill.name} className="tool-chip body-sm">
                  <span className="material-symbols-outlined">
                    {skill.icon}
                  </span>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          <div className="toolkit-card card-1 card-md">
            <div className="toolkit-header">
              <div className="toolkit-icon">
                <span className="material-symbols-outlined">
                  workspace_premium
                </span>
              </div>
              <div className="toolkit-heading-text">
                <h3>Certifications</h3>
              </div>
            </div>
            <ul className="toolkit-list">
              <li className="cert-item">
                <span className="material-symbols-outlined">verified</span>
                <span className="body-sm">
                  Uxcel - UX Design Foundation + Typography
                </span>
              </li>
              <li className="cert-item">
                <span className="material-symbols-outlined">verified</span>
                <span className="body-sm">
                  Uxcel - Color Psychology + Accessibility
                </span>
              </li>
              <li className="cert-item">
                <span className="material-symbols-outlined">verified</span>
                <span className="body-sm">Meta - React Basics</span>
              </li>
              <li className="cert-item">
                <span className="material-symbols-outlined">verified</span>
                <span className="body-sm">
                  Meta - Programming with Javascript
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      <section className="bg-card">
        <div className="container-lg">
          <SectionHeading
          label="Approach"
          title={
            <>
              I&apos;m not just an average{" "}
              <span className="text-primary">pixel pusher</span>
            </>
          }
          description="Balancing expressive visuals with systems that scale gracefully."
        />
        </div>
        <div className="container-md dual-grid">
          <div className="dual-card card-1 card-md">
            <span className="pill card-tag">THE VISUALIST</span>
            <h3>I craft stories through visuals.</h3>
            <p>Every pixel has a purpose. I focus on hierarchy and emotion.</p>
          </div>
          <div className="dual-card card-1 card-md architect">
            <span className="pill card-tag">THE ARCHITECT</span>
            <h3>I build systems that scale.</h3>
            <p>Robust, maintainable systems that evolve with the product.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
