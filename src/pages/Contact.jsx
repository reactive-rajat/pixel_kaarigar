import React from 'react';
import StatusBadge from '../components/common/StatusBadge';
import WhatsAppIcon from '../components/common/WhatsAppIcon';

const Contact = () => {
  const whatsappLink =
    'https://wa.me/919899321639?text=Hi%20Rajat%2C%20I%20want%20to%20connect%20with%20you%20about%20a%20project.';

  return (
    <section className="contact-section container">
      <div className="contact-grid">
        {/* Left Column: Content & Mascot */}
        <div className="contact-info">
          <StatusBadge text="Open to work" showPing />
          <h1 className="contact-title">
            Let's Build <br />
            <span className="primary-text">Something Weird.</span>
          </h1>
          <p className="contact-description">
            I design and build digital experiences that look sharp and work flawlessly. <span style={{color: "white"}}>Got an idea? Let’s bring it to life.</span>
          </p>

 
        </div>

        {/* Right Column: Quick Contact */}
        <div className="contact-form-container">
          <div className="glass-panel contact-form-card">
            <div className="form-header">
              <div className="hud-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
            </div>

            <div className="contact-form quick-connect">
              <div className="connect-head">
                <p className="connect-label">PRIMARY CHAT</p>
                <h3>WhatsApp Connect</h3>
                <p className="connect-note">
                  Fastest way to reach me. Tap once and chat directly on WhatsApp.
                </p>
              </div>

              <div>
                <a
                href={whatsappLink}
                className="launch-btn whatsapp-btn shimmer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Chat on WhatsApp</span>
                <WhatsAppIcon />
              </a>
              </div>

              <div className="quick-divider" aria-hidden="true"></div>

              <div className="quick-links">
                <a href="mailto:hello@example.com" className="quick-link">
                  Email
                </a>
                <a href="tel:+919899321639" className="quick-link">
                  Call
                </a>
                <a href="sms:+919899321639" className="quick-link">
                  SMS
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .contact-section {
          padding-top: 10rem;
          padding-bottom: 2rem;
          max-height: 750px;
          overflow: hidden;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
        }

        .contact-title {
          font-size: 5rem;
          font-weight: 900;
          line-height: 1;
        }

        .contact-description {
          font-size: 1.25rem;
          color: var(--text-muted);
          max-width: 500px;
          line-height: 1.6;
          margin-bottom: 4rem;
        }

        .contact-form-card {
          padding: 2.5rem;
          border-radius: var(--border-radius-lg);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
          position: relative;
          max-height: 620px;
        }

        .form-header {
          margin-bottom: 1rem;
        }

        .hud-dots {
          display: flex;
          gap: 0.5rem;
          position: absolute;
          top: 1.45rem;
          left: 1.5rem;
        }

        .dot {
          width: 0.5rem;
          height: 0.5rem;
          border-radius: 50%;
        }

        .dot.red { background: #ff5f56; }
        .dot.yellow { background: #ffbd2e; }
        .dot.green { background: #27c93f; }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 2rem;
        }

        .connect-head h3 {
          font-size: 1.8rem;
          line-height: 1.1;
          margin-bottom: 0.5rem;
        }

        .connect-label {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-muted);
          margin-bottom: 0.5rem;
        }

        .connect-note {
          color: var(--text-muted);
          line-height: 1.5;
        }

        .contact-direct {
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-top: 0.35rem;
        }

        .contact-direct a {
          color: var(--text-dark);
          font-weight: 600;
        }

        .whatsapp-btn {
          background: #25d366;
          color: #08230f;
        }

        .whatsapp-btn:hover {
          box-shadow: 0 10px 30px rgba(37, 211, 102, 0.35);
        }

        .quick-links {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0.6rem;
        }

        .quick-divider {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--border-color), transparent);
          margin: 1rem 0 1rem;
        }

        .quick-link {
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-full);
          padding: 0.75rem 0.9rem;
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-muted);
          transition: all 0.3s;
        }

        .quick-link:hover {
          border-color: var(--primary-color);
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-dark);
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-muted);
          margin-left: 1rem;
        }

        .input-wrapper {
          position: relative;
        }

        .input-wrapper .material-symbols-outlined {
          position: absolute;
          left: 1.25rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
          font-size: 1.25rem;
        }

        .input-wrapper input, .input-wrapper select, textarea {
          width: 100%;
          background: var(--background-dark);
          border: 1px solid var(--border-color);
          color: var(--text-dark);
          padding: 1rem 1.5rem 1rem 3.5rem;
          border-radius: var(--border-radius-full);
          font-size: 1rem;
          transition: all 0.3s;
        }

        textarea {
          border-radius: var(--border-radius);
          padding: 1.5rem;
          min-height: 150px;
          resize: none;
        }

        .input-wrapper input:focus, .input-wrapper select:focus, textarea:focus {
          outline: none;
          border-color: var(--primary-color);
          box-shadow: 0 0 20px var(--primary-glow);
        }

        .select-arrow {
          position: absolute;
          right: 1.25rem;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
        }

        .launch-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          background: var(--primary-color);
          color: white;
          padding: 1.25rem;
          border-radius: var(--border-radius-full);
          font-weight: 700;
          font-size: 1.125rem;
          transition: all 0.3s;
          margin-top: 1rem;
        }

        .launch-btn:hover {
          transform: scale(1.02);
          box-shadow: 0 10px 30px var(--primary-glow);
        }

        .form-footer {
          text-align: center;
          font-size: 0.875rem;
          color: var(--text-muted);
          margin-top: 0.25rem;
        }

        .form-footer a {
          color: var(--primary-color);
          font-weight: 700;
          text-decoration: underline;
          text-underline-offset: 4px;
        }

        .contact-info {
            display: flex;
            flex-direction: column;
            gap: var(--space-lg);
          }

        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .contact-description {
            margin-bottom: 2rem;
          }
          .contact-form-card {
            padding: 1.5rem;
          }
          .quick-links {
            grid-template-columns: 1fr;
          }
          .contact-section {
            max-height: none;
            overflow: visible;
          }
        }

        @media (max-width: 768px) {
          .contact-section {
            padding-top: 7.5rem;
            padding-bottom: 5rem;
          }

          .contact-grid {
            gap: 2rem;
          }

          .contact-title {
            font-size: 2.5rem;
            line-height: 1.05;
          }

          .contact-description {
            font-size: 1rem;
            margin-bottom: 1rem;
          }

          .contact-form-card {
            padding: 1.25rem;
            border-radius: 1.25rem;
          }

          .connect-head h3 {
            font-size: 1.35rem;
          }

          .launch-btn {
            width: 100%;
            padding: 1rem 1.15rem;
            font-size: 1rem;
          }

          .quick-link {
            min-height: 44px;
          }
        }

        @media (hover: none) {
          .whatsapp-btn:hover,
          .quick-link:hover,
          .launch-btn:hover {
            transform: none;
            box-shadow: none;
            border-color: var(--border-color);
            background: transparent;
            color: var(--text-muted);
          }

          .whatsapp-btn:hover {
            background: #25d366;
            color: #08230f;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
