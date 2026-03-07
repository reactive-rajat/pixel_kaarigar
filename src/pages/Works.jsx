import React, { useState } from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className={`project-card ${project.size || ''}`}>
      <div className="card-inner">
        <div className="card-image-container">
          <img 
            src={project.image} 
            alt={project.title} 
            className="card-image"
            referrerPolicy="no-referrer"
          />
          <div className="card-overlay">
            <div className="overlay-content">
              <div className="card-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="card-tag">{tag}</span>
                ))}
              </div>
              <h3 className="card-title">{project.title}</h3>
              <p className="card-desc">{project.description}</p>
              <button className="view-project-btn">
                <span>View Project</span>
                <span className="material-symbols-outlined">arrow_outward</span>
              </button>
            </div>
          </div>
          
          {project.badge && (
            <div className="card-badge">{project.badge}</div>
          )}
        </div>
        
        <div className="card-footer">
          <h3 className="footer-title">{project.title}</h3>
          <span className="footer-category">{project.category}</span>
        </div>
      </div>

      <style jsx="true">{`
        .project-card {
          position: relative;
          cursor: pointer;
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .project-card:hover {
          transform: translateY(-8px);
        }

        .card-inner {
          height: 100%;
          display: flex;
          flex-direction: column;
          background: var(--surface-dark);
          border-radius: var(--border-radius-lg);
          overflow: hidden;
          border: 1px solid var(--border-color);
        }

        .card-image-container {
          position: relative;
          width: 100%;
          height: 350px;
          overflow: hidden;
        }

        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s ease;
        }

        .project-card:hover .card-image {
          transform: scale(1.1);
        }

        .card-overlay {
          position: absolute;
          inset: 0;
          background: rgba(10, 5, 2, 0.85);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: flex-end;
          padding: 2rem;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .project-card:hover .card-overlay {
          opacity: 1;
        }

        .overlay-content {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          transform: translateY(20px);
          transition: transform 0.4s ease;
        }

        .project-card:hover .overlay-content {
          transform: translateY(0);
        }

        .card-tags {
          display: flex;
          gap: 0.5rem;
        }

        .card-tag {
          font-size: 0.65rem;
          font-weight: 800;
          text-transform: uppercase;
          color: var(--primary-color);
          background: rgba(127, 19, 236, 0.1);
          padding: 0.25rem 0.75rem;
          border-radius: var(--border-radius-full);
          border: 1px solid rgba(127, 19, 236, 0.2);
        }

        .card-title {
          font-size: 1.75rem;
          font-weight: 800;
          color: white;
          line-height: 1.1;
        }

        .card-desc {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.5;
        }

        .view-project-btn {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: white;
          font-weight: 700;
          font-size: 0.9rem;
          margin-top: 0.5rem;
          width: fit-content;
        }

        .view-project-btn .material-symbols-outlined {
          font-size: 1.25rem;
          transition: transform 0.3s;
        }

        .view-project-btn:hover .material-symbols-outlined {
          transform: translate(4px, -4px);
        }

        .card-badge {
          position: absolute;
          top: 1.5rem;
          left: 1.5rem;
          background: var(--primary-color);
          color: white;
          padding: 0.25rem 0.75rem;
          font-size: 0.7rem;
          font-weight: 800;
          border-radius: 0.25rem;
          transform: rotate(-6deg);
          box-shadow: 0 5px 15px rgba(0,0,0,0.3);
          z-index: 5;
        }

        .card-footer {
          padding: 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: var(--surface-dark);
          border-top: 1px solid var(--border-color);
        }

        .footer-title {
          font-size: 1.1rem;
          font-weight: 700;
        }

        .footer-category {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        /* Size Variations */
        .project-card.large .card-image-container {
          height: 450px;
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
