import React from 'react';

const About = () => {
  return (
    <section className="about-section container">
      {/* Hero Intro */}
      <div className="about-hero">
        <div className="about-hero-content">
          <div className="status-badge">
            <span className="ping-dot">
              <span className="ping-inner"></span>
              <span className="ping-outer"></span>
            </span>
            <span className="status-text">Open to work</span>
          </div>
          <h1 className="about-title">
            More than just <span className="primary-text">pixels</span> & <span className="primary-text">code</span>.
          </h1>
          <p className="about-description">
            Hi, I'm Alex. I exist at the intersection of 'make it pretty' and 'make it work.' 
            I build digital playgrounds that feel as good as they look.
          </p>
          <div className="skill-chips">
            <div className="skill-chip"><span className="material-symbols-outlined">code</span> React</div>
            <div className="skill-chip"><span className="material-symbols-outlined">brush</span> Figma</div>
            <div className="skill-chip"><span className="material-symbols-outlined">style</span> Tailwind</div>
            <div className="skill-chip"><span className="material-symbols-outlined">bolt</span> Next.js</div>
            <div className="skill-chip"><span className="material-symbols-outlined">animation</span> Motion</div>
          </div>

          <a href="#" className="resume-download-btn" download="Alex_Resume.pdf">
            <span className="material-symbols-outlined">download</span>
            Download Resume
          </a>
        </div>

        <div className="about-hero-visual">
          <div className="visual-glow"></div>
          <div className="avatar-container">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGm_IX5VDt3c46DxbEqu-hjLSbisdH0Ip0o5Xkg67K9MaHyjJCpnfkRUeysswwOWG2bgmK0btkQXazaID-093_3QPLdl6r81-T9n2k5r5EsX0D-qQE1Y6UOaQXr2oTtSw-w61yP2cvhovUHdsZdsyqf7pup1w4ujaPN8d7ffrxneZAzJyKo4WgNzO7RRiJ3F71SRroI2y7PDbolbQnPIcj8n75wTEpzXHsy6z_Td9l1qASXIq7eJav9veL2JW4D70__lahqLV9V9Y" 
              alt="Alex" 
              className="avatar-img"
              referrerPolicy="no-referrer"
            />
            <div className="avatar-sticker">👋 Hi there!</div>
          </div>
        </div>
      </div>

      {/* Brands Section */}
      <div className="brands-section">
        <p className="section-label-small">Brands I've Worked With</p>
        <div className="brands-grid">
          <div className="brand-logo">GOOGLE</div>
          <div className="brand-logo">META</div>
          <div className="brand-logo">APPLE</div>
          <div className="brand-logo">STRIPE</div>
          <div className="brand-logo">AIRBNB</div>
        </div>
      </div>

      {/* What I Deliver */}
      <div className="deliver-section">
        <h2 className="section-title-centered">What I <span className="primary-text">Deliver</span></h2>
        <div className="deliver-grid">
          <div className="deliver-card">
            <div className="deliver-icon"><span className="material-symbols-outlined">strategy</span></div>
            <h3>Strategy</h3>
            <p>Defining the core purpose and mapping out the user journey for maximum impact.</p>
          </div>
          <div className="deliver-card">
            <div className="deliver-icon"><span className="material-symbols-outlined">brush</span></div>
            <h3>Design</h3>
            <p>Crafting pixel-perfect interfaces that are intuitive, accessible, and beautiful.</p>
          </div>
          <div className="deliver-card">
            <div className="deliver-icon"><span className="material-symbols-outlined">code</span></div>
            <h3>Development</h3>
            <p>Building robust, scalable applications with clean code and smooth animations.</p>
          </div>
        </div>
      </div>

      {/* Toolkit */}
      <div className="toolkit-section">
        <h2 className="section-title-centered">Digital Toolkit & <span className="primary-text">Power-ups</span></h2>
        <div className="toolkit-grid">
          {[
            { name: 'Figma', icon: 'brush' },
            { name: 'React', icon: 'code' },
            { name: 'Next.js', icon: 'bolt' },
            { name: 'Tailwind', icon: 'style' },
            { name: 'Node.js', icon: 'terminal' },
            { name: 'Three.js', icon: 'deployed_code' },
            { name: 'GSAP', icon: 'animation' },
            { name: 'Framer Motion', icon: 'motion_mode' }
          ].map(tool => (
            <div key={tool.name} className="tool-item">
              <span className="material-symbols-outlined">{tool.icon}</span>
              <span className="tool-name">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="testimonials-section">
        <h2 className="section-title-centered">Kind Words from <span className="primary-text">Awesome Humans</span></h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p className="testimonial-text">"Alex is a rare breed of designer who actually understands how code works. It makes collaboration a breeze."</p>
            <div className="testimonial-author">
              <div className="author-avatar">JD</div>
              <div>
                <p className="author-name">John Doe</p>
                <p className="author-role">Product Manager @ TechCorp</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-text">"The attention to detail in the animations and interactions is just next level. Highly recommended!"</p>
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
        <h3 className="timeline-title">How it started <span className="vs">vs</span> How it's going</h3>
        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          <div className="timeline-item">
            <div className="timeline-dot"><span className="material-symbols-outlined">school</span></div>
            <div className="timeline-content">
              <span className="timeline-year">2018</span>
              <h4>Discovered Flexbox. Cried. Learned to love it.</h4>
              <p>Started with pure HTML/CSS. Spent 4 hours trying to center a div. It was a humbling experience.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"><span className="material-symbols-outlined">rocket_launch</span></div>
            <div className="timeline-content">
              <span className="timeline-year">2020</span>
              <h4>First Freelance Gig.</h4>
              <p>Landed my first real client. I was paid in pizza and exposure, mostly. But I shipped a live site.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"><span className="material-symbols-outlined">architecture</span></div>
            <div className="timeline-content">
              <span className="timeline-year">Now</span>
              <h4>Building Systems & Obsessing over details.</h4>
              <p>Now I work on scalable design systems and full-stack applications. I ensure every hover state is silky smooth.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Dual Cards */}
      <div className="dual-cards-section">
        <h2 className="section-title-centered">I'm not just an average <span className="primary-text">'pixel pusher'</span></h2>
        <div className="dual-cards-grid">
          <div className="dual-card visualist">
            <div className="card-tag">THE VISUALIST</div>
            <h3>I craft stories through visuals.</h3>
            <p>Every pixel has a purpose. I focus on hierarchy, typography, and color to create emotional connections.</p>
          </div>
          <div className="dual-card architect">
            <div className="card-tag">THE ARCHITECT</div>
            <h3>I build systems that scale.</h3>
            <p>Design is more than skin deep. I build robust systems that are easy to maintain and evolve.</p>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="final-cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Have a crazy idea?<br /><span className="primary-text">Let's build it.</span></h2>
          <button className="primary-btn">
            <span>Let's Talk</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>

      <style jsx="true">{`
        .about-section {
          padding-top: 8rem;
          padding-bottom: 8rem;
          display: flex;
          flex-direction: column;
          gap: 8rem;
        }

        .about-hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .about-title {
          font-size: 4rem;
          font-weight: 900;
          line-height: 1;
          margin-top: 1rem;
          margin-bottom: 1.5rem;
        }

        .primary-text {
          color: var(--primary-color);
        }

        .about-description {
          font-size: 1.25rem;
          color: var(--text-muted);
          max-width: 500px;
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .skill-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .skill-chip {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: var(--surface-dark);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-full);
          font-size: 0.875rem;
          font-weight: 500;
          transition: all 0.3s;
        }

        .skill-chip:hover {
          border-color: var(--primary-color);
          box-shadow: 0 0 15px var(--primary-glow);
        }

        .resume-download-btn {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 2rem;
          background: var(--primary-color);
          color: white;
          border-radius: var(--border-radius-full);
          font-weight: 700;
          margin-top: 2.5rem;
          transition: all 0.3s;
          width: fit-content;
          text-decoration: none;
        }

        .resume-download-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 0 30px var(--primary-glow);
        }

        .about-hero-visual {
          position: relative;
          display: flex;
          justify-content: center;
        }

        .visual-glow {
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

        .avatar-container {
          width: 400px;
          height: 400px;
          border-radius: 50%;
          border: 4px solid var(--border-color);
          overflow: hidden;
          position: relative;
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }

        .avatar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .avatar-sticker {
          position: absolute;
          bottom: 2rem;
          right: 2rem;
          background: white;
          color: black;
          padding: 0.5rem 1.5rem;
          border-radius: var(--border-radius-full);
          font-weight: 700;
          transform: rotate(-6deg);
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }

        /* Brands */
        .brands-section {
          text-align: center;
        }

        .section-label-small {
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--text-muted);
          margin-bottom: 2rem;
        }

        .brands-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 4rem;
          opacity: 0.5;
        }

        .brand-logo {
          font-size: 1.5rem;
          font-weight: 900;
          letter-spacing: 0.1em;
        }

        /* What I Deliver */
        .section-title-centered {
          font-size: 3rem;
          font-weight: 900;
          text-align: center;
          margin-bottom: 4rem;
        }

        .deliver-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .deliver-card {
          background: var(--surface-dark);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-lg);
          padding: 3rem 2rem;
          text-align: center;
          transition: transform 0.3s;
        }

        .deliver-card:hover {
          transform: translateY(-10px);
          border-color: var(--primary-color);
        }

        .deliver-icon {
          width: 4rem;
          height: 4rem;
          background: rgba(127, 19, 236, 0.1);
          color: var(--primary-color);
          border-radius: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
        }

        .deliver-icon span {
          font-size: 2rem;
        }

        .deliver-card h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .deliver-card p {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        /* Toolkit */
        .toolkit-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
        }

        .tool-item {
          padding: 1rem 2rem;
          background: var(--surface-dark);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-full);
          font-weight: 700;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .tool-item span.material-symbols-outlined {
          font-size: 1.25rem;
          color: var(--primary-color);
        }

        .tool-item:hover {
          background: var(--primary-color);
          color: white;
          transform: scale(1.05);
        }

        .tool-item:hover span.material-symbols-outlined {
          color: white;
        }

        /* Testimonials */
        .testimonials-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        .testimonial-card {
          background: var(--surface-dark);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-lg);
          padding: 3rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .testimonial-text {
          font-size: 1.25rem;
          font-style: italic;
          line-height: 1.6;
          color: var(--text-dark);
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .author-avatar {
          width: 3rem;
          height: 3rem;
          background: var(--primary-color);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          color: white;
        }

        .author-name {
          font-weight: 700;
        }

        .author-role {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        /* Dual Cards */
        .dual-cards-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        .dual-card {
          padding: 4rem;
          border-radius: var(--border-radius-xl);
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          border: 1px solid var(--border-color);
        }

        .dual-card.visualist {
          background: linear-gradient(135deg, #1a1a1a, #0a0a0a);
        }

        .dual-card.architect {
          background: linear-gradient(135deg, #0a0a0a, #1a1a1a);
          border-color: var(--primary-color);
        }

        .dual-card .card-tag {
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.2em;
          color: var(--primary-color);
        }

        .dual-card h3 {
          font-size: 2.5rem;
          font-weight: 900;
          line-height: 1.1;
        }

        .dual-card p {
          color: var(--text-muted);
          font-size: 1.1rem;
          line-height: 1.6;
        }

        /* Final CTA */
        .final-cta-section {
          background: var(--surface-dark);
          border-radius: var(--border-radius-xl);
          padding: 6rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .final-cta-section::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 400px;
          height: 400px;
          background: var(--primary-glow);
          filter: blur(100px);
          z-index: 0;
        }

        .cta-content {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2.5rem;
        }

        .cta-title {
          font-size: 4rem;
          font-weight: 900;
          line-height: 1;
        }

        @media (max-width: 1024px) {
          .deliver-grid, .testimonials-grid, .dual-cards-grid {
            grid-template-columns: 1fr;
          }
          .final-cta-section {
            padding: 4rem 2rem;
          }
          .cta-title {
            font-size: 3rem;
          }
        }

        .timeline-dot {
          position: absolute;
          left: -4rem;
          width: 3.5rem;
          height: 3.5rem;
          background: var(--surface-dark);
          border: 2px solid var(--primary-color);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
          box-shadow: 0 0 0 4px var(--background-dark);
        }

        .timeline-year {
          display: inline-block;
          padding: 0.25rem 0.75rem;
          background: var(--primary-glow);
          color: var(--primary-color);
          font-size: 0.75rem;
          font-weight: 700;
          border-radius: var(--border-radius-full);
          margin-bottom: 0.5rem;
        }

        .timeline-content h4 {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .timeline-content p {
          color: var(--text-muted);
          line-height: 1.6;
        }

        @media (max-width: 1024px) {
          .about-hero {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .about-hero-content {
            order: 2;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .about-hero-visual {
            order: 1;
          }
          .bento-grid {
            grid-template-columns: 1fr;
          }
          .avatar-container {
            width: 300px;
            height: 300px;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
