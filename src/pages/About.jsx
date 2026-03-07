import React from 'react';

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

        <div className="about-hero-card">
          <div className="profile-card">
            <div className="profile-header">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGm_IX5VDt3c46DxbEqu-hjLSbisdH0Ip0o5Xkg67K9MaHyjJCpnfkRUeysswwOWG2bgmK0btkQXazaID-093_3QPLdl6r81-T9n2k5r5EsX0D-qQE1Y6UOaQXr2oTtSw-w61yP2cvhovUHdsZdsyqf7pup1w4ujaPN8d7ffrxneZAzJyKo4WgNzO7RRiJ3F71SRroI2y7PDbolbQnPIcj8n75wTEpzXHsy6z_Td9l1qASXIq7eJav9veL2JW4D70__lahqLV9V9Y"
                alt="Alex"
                className="profile-avatar"
                referrerPolicy="no-referrer"
              />
              <div>
                <p className="profile-name">Alex Harper</p>
                <p className="profile-role">Product Designer • Developer</p>
              </div>
            </div>

            <div className="profile-stats">
              <div className="stat-tile">
                <p className="stat-value">6+</p>
                <p className="stat-label">Years Exp</p>
              </div>
              <div className="stat-tile">
                <p className="stat-value">48</p>
                <p className="stat-label">Projects</p>
              </div>
              <div className="stat-tile">
                <p className="stat-value">15</p>
                <p className="stat-label">Awards</p>
              </div>
            </div>

            <div className="profile-tags">
              <span className="tag-chip">React</span>
              <span className="tag-chip">Figma</span>
              <span className="tag-chip">Next.js</span>
              <span className="tag-chip">Motion</span>
            </div>
          </div>
        </div>
      </div>

      {/* Brands */}
      <div className="brands-section">
        <p className="eyebrow">Brands I&apos;ve Worked With</p>
        <div className="brands-row">
          <span>GOOGLE</span>
          <span>APPLE</span>
          <span>SPOTIFY</span>
          <span>STRIPE</span>
          <span>AIRBNB</span>
        </div>
      </div>

      {/* What I Deliver */}
      <div className="deliver-section">
        <h2 className="section-title">
          What I <span className="primary-text">Deliver</span>
        </h2>
        <div className="deliver-grid">
          <div className="deliver-card">
            <span className="material-symbols-outlined">strategy</span>
            <h3>Strategy</h3>
            <p>Define the purpose and map the journey for maximum impact.</p>
          </div>
          <div className="deliver-card">
            <span className="material-symbols-outlined">brush</span>
            <h3>Design</h3>
            <p>Craft crisp, intuitive interfaces with clear hierarchy.</p>
          </div>
          <div className="deliver-card">
            <span className="material-symbols-outlined">code</span>
            <h3>Development</h3>
            <p>Build scalable products with clean code and smooth UX.</p>
          </div>
        </div>
      </div>

      {/* Toolkit */}
      <div className="toolkit-section">
        <h2 className="section-title">
          Digital Toolkit &amp; <span className="primary-text">Power-ups</span>
        </h2>
        <div className="toolkit-columns">
          <div className="tool-column">
            <p className="tool-title">Design</p>
            <div className="tool-pills">
              <span>Figma</span>
              <span>Framer</span>
              <span>Illustrator</span>
              <span>After Effects</span>
            </div>
          </div>
          <div className="tool-column">
            <p className="tool-title">Frontend</p>
            <div className="tool-pills">
              <span>React</span>
              <span>Next.js</span>
              <span>GSAP</span>
              <span>Three.js</span>
            </div>
          </div>
          <div className="tool-column">
            <p className="tool-title">Backend</p>
            <div className="tool-pills">
              <span>Node.js</span>
              <span>Express</span>
              <span>MongoDB</span>
              <span>Supabase</span>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="testimonials-section">
        <h2 className="section-title">
          Kind Words from <span className="primary-text">Awesome Humans</span>
        </h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
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
          <div className="testimonial-card">
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
      <div className="timeline-section">
        <h2 className="section-title">How it started vs How it&apos;s going</h2>
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
      <div className="dual-cards-section">
        <h2 className="section-title">
          I&apos;m not just an average <span className="primary-text">pixel pusher</span>
        </h2>
        <div className="dual-grid">
          <div className="dual-card visualist">
            <span className="card-tag">THE VISUALIST</span>
            <h3>I craft stories through visuals.</h3>
            <p>Every pixel has a purpose. I focus on hierarchy and emotion.</p>
          </div>
          <div className="dual-card architect">
            <span className="card-tag">THE ARCHITECT</span>
            <h3>I build systems that scale.</h3>
            <p>Robust, maintainable systems that evolve with the product.</p>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="final-cta">
        <div className="cta-inner">
          <h2>
            Have a crazy idea? <span className="primary-text">Let&apos;s build it.</span>
          </h2>
          <button className="primary-btn">
            <span>Let&apos;s Talk</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>

      <style jsx="true">{`
        .about-page {
          padding: 7rem 0 8rem;
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

        .about-hero-card {
          display: flex;
          justify-content: center;
        }

        .profile-card {
          width: min(100%, 420px);
          background: linear-gradient(180deg, var(--color-card) 0%, var(--color-card-alt) 100%);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-xl);
          padding: 2rem;
          box-shadow: var(--shadow-md);
        }

        .profile-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .profile-avatar {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          border: 2px solid var(--color-border);
          object-fit: cover;
        }

        .profile-name {
          font-weight: 800;
          font-size: 1.1rem;
        }

        .profile-role {
          color: var(--color-text-muted);
          font-size: 0.9rem;
        }

        .profile-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .stat-tile {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          text-align: center;
          padding: 0.75rem 0.5rem;
        }

        .stat-value {
          font-weight: 800;
          font-size: 1.2rem;
        }

        .stat-label {
          font-size: 0.75rem;
          color: var(--color-text-muted);
        }

        .profile-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tag-chip {
          padding: 0.4rem 0.9rem;
          border-radius: var(--radius-pill);
          border: 1px solid var(--color-border);
          background: rgba(255, 255, 255, 0.03);
          font-size: 0.8rem;
          font-weight: 600;
        }

        .brands-section {
          text-align: center;
        }

        .eyebrow {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.3em;
          color: var(--color-text-muted);
          margin-bottom: 1.5rem;
          font-weight: 700;
        }

        .brands-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 2.5rem;
          opacity: 0.6;
          font-weight: 800;
          letter-spacing: 0.1em;
        }

        .section-title {
          font-size: 2.6rem;
          font-weight: 900;
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .deliver-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .deliver-card {
          background: var(--color-card);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 2.5rem 2rem;
          text-align: left;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .deliver-card span {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(127, 19, 236, 0.15);
          color: var(--color-primary);
          font-size: 1.5rem;
        }

        .deliver-card p {
          color: var(--color-text-muted);
          line-height: 1.6;
        }

        .toolkit-columns {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .tool-column {
          background: var(--color-card);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .tool-title {
          font-weight: 800;
          letter-spacing: 0.08em;
          font-size: 0.8rem;
          color: var(--color-text-muted);
          text-transform: uppercase;
        }

        .tool-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tool-pills span {
          border: 1px solid var(--color-border);
          border-radius: var(--radius-pill);
          padding: 0.4rem 0.9rem;
          font-size: 0.8rem;
          font-weight: 600;
          background: rgba(255, 255, 255, 0.03);
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        .testimonial-card {
          background: var(--color-card);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .testimonial-text {
          color: var(--color-text);
          font-size: 1.05rem;
          line-height: 1.7;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .author-avatar {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: var(--color-primary);
          color: #fff;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .author-name {
          font-weight: 800;
        }

        .author-role {
          color: var(--color-text-muted);
          font-size: 0.8rem;
        }

        .timeline-section {
          background: var(--color-card);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-xl);
          padding: 3rem;
        }

        .timeline-list {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          position: relative;
          margin-top: 2rem;
          padding-left: 2.5rem;
        }

        .timeline-list::before {
          content: '';
          position: absolute;
          left: 1rem;
          top: 0;
          bottom: 0;
          width: 2px;
          background: rgba(255, 255, 255, 0.08);
        }

        .timeline-item {
          position: relative;
        }

        .timeline-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--color-primary);
          position: absolute;
          left: -1.65rem;
          top: 0.45rem;
          box-shadow: 0 0 0 6px rgba(127, 19, 236, 0.2);
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
          gap: 1.5rem;
        }

        .dual-card {
          border-radius: var(--radius-xl);
          padding: 3rem;
          border: 1px solid var(--color-border);
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
          background: var(--color-card);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-xl);
          padding: 4.5rem 3rem;
          text-align: center;
          position: relative;
          overflow: hidden;
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
          .toolkit-columns,
          .testimonials-grid,
          .dual-grid {
            grid-template-columns: 1fr;
          }

          .profile-card {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
