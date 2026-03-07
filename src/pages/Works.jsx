import React, { useState } from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className={`project-card ${project.size || ''}`}>
      <div className="card-media">
        <img
          src={project.image}
          alt={project.title}
          className="card-image"
          referrerPolicy="no-referrer"
        />
        <div className="card-gradient"></div>

        {project.badge && <div className="card-badge">{project.badge}</div>}

        <div className="card-default">
          <div className="default-text">
            <span className="default-category">{project.category}</span>
            <h3 className="default-title">{project.title}</h3>
          </div>
        </div>

        <div className="card-hover">
          <div className="hover-content">
            <div className="hover-body">
              <span className="hover-category">{project.category}</span>
              <h3 className="hover-title">{project.title}</h3>
              <p className="hover-desc">{project.description}</p>
              <div className="card-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="card-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <button className="hover-cta" aria-label="View Project">
              <span className="material-symbols-outlined">arrow_outward</span>
            </button>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .project-card {
          position: relative;
          cursor: pointer;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
          border-radius: 28px;
        }

        .project-card:hover {
          transform: translateY(-8px);
        }

        .card-media {
          position: relative;
          height: var(--card-height, 520px);
          border-radius: 28px;
          overflow: hidden;
          border: 1px solid var(--color-border);
          background: var(--color-card);
        }

        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
          transform: scale(1.02);
          filter: saturate(1.05);
        }

        .project-card:hover .card-image {
          transform: scale(1.06);
        }

        .card-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(8, 6, 12, 0.1) 0%,
            rgba(8, 6, 12, 0.25) 45%,
            rgba(8, 6, 12, 0.8) 78%,
            rgba(8, 6, 12, 0.95) 100%
          );
          pointer-events: none;
        }

        .card-default {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 1.6rem 2rem 1.8rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        .default-text {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .default-category {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: rgba(255, 255, 255, 0.65);
          font-weight: 700;
        }

        .default-title {
          font-size: 1.6rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.2;
        }

        .card-hover {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          gap: 1rem;
          padding: 2.2rem 0 0;
          background: linear-gradient(
            180deg,
            rgba(6, 4, 10, 0.15) 0%,
            rgba(6, 4, 10, 0.7) 45%,
            rgba(6, 4, 10, 0.92) 100%
          );
          backdrop-filter: blur(6px);
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.35s ease, transform 0.35s ease;
        }

        .hover-content {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1.5rem;
          padding: 1.6rem 1.8rem 1.8rem;
          border-radius: 0 0 28px 28px;
          background: rgba(23, 14, 36, 0.72);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.35);
          backdrop-filter: blur(16px);
          width: 100%;
        }

        .hover-body {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .hover-category {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          font-weight: 700;
          color: var(--primary-color);
        }

        .project-card:hover .card-hover {
          opacity: 1;
          transform: translateY(0);
        }

        .project-card:hover .card-default {
          opacity: 0;
          transform: translateY(12px);
        }

        .card-tags {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .card-tag {
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          color: #f0e7ff;
          background: rgba(255, 255, 255, 0.08);
          padding: 0.3rem 0.8rem;
          border-radius: var(--radius-pill);
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .hover-title {
          font-size: 2rem;
          font-weight: 800;
          color: white;
          line-height: 1.1;
        }

        .hover-desc {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
          max-width: 520px;
        }

        .hover-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 54px;
          height: 54px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.12);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.14);
          flex-shrink: 0;
        }

        .hover-cta .material-symbols-outlined {
          font-size: 1.5rem;
          transition: transform 0.3s, color 0.3s;
        }

        .hover-cta:hover .material-symbols-outlined {
          transform: translate(4px, -4px);
        }

        .card-badge {
          position: absolute;
          top: 1.4rem;
          left: 1.4rem;
          background: rgba(255, 255, 255, 0.9);
          color: #1a1122;
          padding: 0.25rem 0.7rem;
          font-size: 0.65rem;
          font-weight: 800;
          border-radius: 0.4rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
          z-index: 5;
        }

        /* Size Variations */
        .project-card.large {
          --card-height: 560px;
        }

        .project-card.medium {
          --card-height: 480px;
        }

        .project-card.full {
          --card-height: 600px;
        }

        @media (min-width: 1024px) {
          .project-grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 2rem;
          }
          .project-card.large {
            grid-column: span 7;
          }
          .project-card.medium {
            grid-column: span 5;
          }
          .project-card.full {
            grid-column: span 12;
          }
        }
      `}</style>
    </div>
  );
};

const Works = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'E-commerce Redesign',
      description: 'Making online shopping less boring with immersive product stories.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgpq3zlGQhytiGf2i-J4kwgFUDXE2xQNZO5j3V5kXRKdakNSW0abGV0NjcjksETUptZeeFSzRdUsBFVltanhJ8Q5aMPVJ50dfpieIrwX-ZWiSLXTM3S6mT90zSprSMy2TDrxJnbF82edElnNlJn96cFR5OZ46BenBbd1YODjVOiOSIZEDGoFK8bpUBmNK1xmTznOr6qRssIBxX7cqsynvolh1d2vPl6A1_LTW2xgC6NtPBaPr8bsfA5068l9SOQYaYgvA42lhtQIk',
      tags: ['React', 'Figma'],
      size: 'large',
      category: 'Design'
    },
    {
      id: 2,
      title: 'Portfolio v1',
      description: 'A retro-style portfolio playground built with Three.js.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwT-pEBNNYmXMeFV0H5LC4B01-psJo8kFfwJiqNgPmdZidyrAfM_C364v9b1WqZ4e6Ge1bXJh9MVb4Y4KIn-AiPlB3BFrzdWMU9hZLruSvlXbgo0wkFR_FTN7GgyLAtO2D_zmAT04IXPEW65_4M1HCM6cjfbWrRou-41UfoIQ77-dgS3rhVzp7LNJFqRfWH7Tdq-LBV4mUo8seq5uKVhi7_kfEo2341xHn83sukiRHKKk4f6tt6SBlMEjd4p3Fb7aiGo-hfCRp47A',
      tags: ['Three.js', 'GSAP'],
      size: 'medium',
      category: 'Code'
    },
    {
      id: 3,
      title: 'Crypto Dashboard',
      description: 'Real-time data visualization for cryptocurrency markets.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLJLmBuQpSVIkdoim79_8KvtnE0qiPaNGtcAv89wzI55Arlbbx3RtIZp6lLN5EGCyNJXcE97Tner_5cRiQysXFOqdhaLPJkcAE5Ea2YOu6s3I0Aud-Xtc4F90XjkotyUPhBz909JOryBhGii6zuF59YWTCeV1S_wiikAxCdh07Bf5npJayTgszzp4ehxn9PMERqcH95wTObxKXtBXJLB2QY_wSTLAh_O1H1vR09VlsEckrkTrTafS5CpzKjqLEY_SEhK1Bh1oD8CM',
      tags: ['Vue', 'D3.js'],
      badge: 'BEST DATA VIZ',
      size: 'medium',
      category: 'Interaction'
    },
    {
      id: 4,
      title: 'Travel App',
      description: 'Exploration gamified. A new way to discover local gems.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCD0bBlXw_WyzuMH22LLq6mg4XWQKnuMWQhWBDQNkrsiqkOai7I0_Vsbs4jKfQmvAAa93rFH1sxbQlZtZbQLsPhtNsSXQCfB4nqVEFfyNx7kshu3nuzIIoV0VzmK-cDKbp9V9IokLgW70EWyztFHQ6giWxtV4mf-WKXYneTzbzX5QcVqbHnX3HIpVG4y7AqXuBfWeLgu5ZPljsRg3ks0clgPI-JGjKe88X6l8B6bnNrNmDOhANlvM3QCETxAps0n3q3OfsBzbpvzw',
      tags: ['Swift', 'Sketch'],
      size: 'large',
      category: 'Design'
    },
    {
      id: 5,
      title: 'Experimental Playground',
      description: 'Where I break things to learn how they work. WebGL, shaders, and creative coding.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnyRb_6716v_0aYnI93T-3iUBcor1TYqrg1UD0LQC1TZoYzveqfcxKhqC0oINYgpQSd-mePmGZ_3jjqaa3WtgW8TQoXMrjYLI6ZInuKv5EyJcca54GSRF9pllmvKeryKAAeWMBdtZKmmCR-PQ51dm8cXAlUszh_n4seF1PKvJAwzA3CaADVnHMxlDCWYJn6ufgCrjFfHw5WJI_ppR43Pp16UiIdeLjKMdo81sevXH_n0exRbawgNHN2C0neeu-C3e73qxwknZFCic',
      tags: ['WebGL', 'GLSL'],
      size: 'full',
      category: 'Code'
    }
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section className="works-section container">
      <div className="works-header">
        <div className="header-left">
          <p className="section-label">My Portfolio</p>
          <h2 className="section-title">Selected <br />Works</h2>
        </div>
        <p className="header-desc">
          A collection of digital artifacts, combining pixel-perfect design with clean code.
        </p>
      </div>

      <div className="filter-chips">
        {['All', 'Code', 'Design', 'Interaction'].map(cat => (
          <button 
            key={cat} 
            className={`filter-chip ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            <span>{cat}</span>
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="works-cta">
        <div className="cta-glow"></div>
        <h3 className="cta-title">
          Have a crazy idea?<br />
          <span className="primary-text">Let's build it.</span>
        </h3>
        <button className="cta-btn">
          <span className="material-symbols-outlined">handshake</span>
          <span>Let's work together</span>
        </button>
      </div>

      <style jsx="true">{`
        .works-section {
          padding-top: 8rem;
          padding-bottom: 8rem;
        }

        .works-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 4rem;
          gap: 2rem;
        }

        .section-label {
          color: var(--primary-color);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-size: 0.875rem;
          margin-bottom: 0.5rem;
        }

        .section-title {
          font-size: 5rem;
          font-weight: 900;
          line-height: 0.9;
          letter-spacing: -0.04em;
        }

        .header-desc {
          font-size: 1.25rem;
          color: var(--text-muted);
          max-width: 400px;
          text-align: right;
          line-height: 1.6;
        }

        .filter-chips {
          display: flex;
          gap: 1rem;
          margin-bottom: 4rem;
          overflow-x: auto;
          padding-bottom: 1rem;
        }

        .filter-chip {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          color: var(--text-muted);
          border-radius: var(--border-radius-full);
          font-weight: 700;
          font-size: 0.875rem;
          transition: all 0.3s;
          white-space: nowrap;
        }

        .filter-chip:hover {
          border-color: var(--primary-color);
          transform: scale(1.05);
        }

        .filter-chip.active {
          background: var(--primary-color);
          color: white;
          border-color: var(--primary-color);
          box-shadow: 0 10px 20px var(--primary-glow);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 2rem;
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

        .primary-text {
          color: var(--primary-color);
        }

        .cta-btn {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem 2.5rem;
          background: white;
          color: var(--background-dark);
          border-radius: var(--border-radius-full);
          font-weight: 700;
          font-size: 1.125rem;
          transition: all 0.3s;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }

        .cta-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 20px 60px var(--primary-glow);
        }

        @media (max-width: 1024px) {
          .works-header {
            flex-direction: column;
            align-items: flex-start;
            text-align: left;
          }
          .header-desc {
            text-align: left;
          }
          .section-title {
            font-size: 3.5rem;
          }
          .projects-grid {
            grid-template-columns: 1fr;
          }
          .project-card.large, .project-card.medium, .project-card.full {
            grid-column: span 1;
          }
        }
      `}</style>
    </section>
  );
};

export default Works;
