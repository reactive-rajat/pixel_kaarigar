import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Brands from "../../components/sections/Brands/Brands";
import HeroVisual from "../../components/sections/HeroVisual/HeroVisual";
import StatusBadge from "../../components/ui/StatusBadge/StatusBadge";
import SectionHeading from "../../components/ui/SectionHeading/SectionHeading";
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
          <div className="hero-grid">
            <div className="grid gap-7">

              <h1 className="">
                I design experiences
                <span className="text-primary"> people actually enjoy.</span>
              </h1>
              <p className="about-lead">
                Hi, I'm Rajat — a Senior Web Designer moving into UX.
                7 years of designing digital products, working with dev teams,
                and understanding what actually makes a product work.
                I also code, which means I know exactly what's buildable.
              </p>

              <div className="about-actions mt-3">
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
            description="6 years of full-time work. Now looking for the right next step."
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
                  <h4>Freelance UX Designer & Frontend Developer</h4>
                  <div className="timeline-details">
                    <ul>
                      <li className="timeline-list-item">
                        <p>
                          Designing and building my own portfolio in React — learning by doing, not just watching tutorials.
                        </p>
                      </li>
                      <li className="timeline-list-item">
                        <p>
                          Taking on small UI/UX consulting projects — from
                          Figma designs to working code.
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
                  <h4>Senior Web Designer | BOLD</h4>
                  <div className="timeline-details">
                    <ul>
                      <li className="timeline-list-item">
                        <p>
                          Owned the full design system migration for ResumeHelp — rebuilt colours, typography, grid, and components from scratch. Used by internal designers, developers, and an external agency.
                        </p>
                      </li>
                      <li className="timeline-list-item">
                        <p>
                          Reviewed designs from team and agency partners — making sure everything matched the system before it went to developers.
                        </p>
                      </li>
                      <li className="timeline-list-item">
                        <p>
                          Designed and built the BOLD India internal site independently — UI, content, and publishing.
                        </p>
                      </li>
                      <li className="timeline-list-item">
                        <p>
                          Managed design reviews for internal teams and external agencies to maintain brand consistency.
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
                  <h4>UI Designer | Avalon Infosys</h4>
                  <div className="timeline-details">
                    <ul>
                      <li className="timeline-list-item">
                        <p>
                          Designed data-driven web platforms
                          for international NGOs and UN agencies across 130+ countries.
                        </p>
                      </li>
                      <li className="timeline-list-item">
                        <p>
                          Built reusable HTML/SCSS components — saved time on repeat builds and reduced inconsistencies.
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
            label="WHAT I DO"
            title={
              <>
                What I <span className="text-primary">Deliver</span>
              </>
            }
            description="Strategy, design, and development tailored to your product goals."
          />
          <div className="container-lg deliver-grid">
            <div className="card card-1 card-md card-hover justify-start h-full">
              <div className="icon-heading-header">
                <div className="icon-heading-icon">
                  <span className="material-symbols-outlined">strategy</span>
                </div>
                <div className="icon-heading-text">
                  <h3>Strategy</h3>
                </div>
              </div>
              <p className="text-muted leading-relaxed">Understand the real problem before jumping to solutions.</p>
            </div>
            <div className="card card-1 card-md card-hover justify-start h-full">
              <div className="icon-heading-header">
                <div className="icon-heading-icon">
                  <span className="material-symbols-outlined">brush</span>
                </div>
                <div className="icon-heading-text">
                  <h3>Design</h3>
                </div>
              </div>
              <p className="text-muted leading-relaxed">Clean, usable interfaces — designed to be understood, not just admired.</p>
            </div>
            <div className="card card-1 card-md card-hover justify-start h-full">
              <div className="icon-heading-header">
                <div className="icon-heading-icon">
                  <span className="material-symbols-outlined">code</span>
                </div>
                <div className="icon-heading-text">
                  <h3>Development</h3>
                </div>
              </div>
              <p className="text-muted leading-relaxed">I can build what I design. No handoff confusion, no lost details.</p>
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
          description="What I actually use day to day — not just what sounds good on a resume."
        />
        </div>
        <div className="container-md toolkit-grid">
          <div className="card card-1 card-md card-hover self-start h-full">
            <div className="icon-heading-header">
              <div className="icon-heading-icon">
                <span className="material-symbols-outlined">auto_awesome</span>
              </div>
              <div className="icon-heading-text">
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

          <div className="card card-1 card-md card-hover self-start h-full">
            <div className="icon-heading-header">
              <div className="icon-heading-icon">
                <span className="material-symbols-outlined">workspace_premium</span>
              </div>
              <div className="icon-heading-text">
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
              How I think about{" "}
              <span className="text-primary">design</span>
            </>
          }
          description="I design for clarity, not just aesthetics."
        />
        </div>
        <div className="container-md dual-grid">
          <div className="card card-1 card-md card-hover">
            <span className="pill card-tag w-fit mb-2">THE VISUALIST</span>
            <h3>Every pixel has a reason.</h3>
            <p className="text-muted leading-relaxed">Hierarchy, contrast, spacing — nothing placed by eye.
Everything has intent behind it.</p>
          </div>
          <div className="card card-1 card-md card-hover">
            <span className="pill card-tag w-fit mb-2">THE ARCHITECT</span>
            <h3>I think in systems.</h3>
            <p className="text-muted leading-relaxed">Components, tokens, rules — I design so developers
don't have to guess.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
