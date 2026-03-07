import React from 'react';

const Contact = () => {
  return (
    <section className="contact-section container">
      <div className="contact-grid">
        {/* Left Column: Content & Mascot */}
        <div className="contact-info">
          <div className="status-badge">
            <span className="material-symbols-outlined">rocket_launch</span>
            <span>OPEN FOR NEW PROJECTS</span>
          </div>
          <h1 className="contact-title">
            Let's Build <br />
            <span className="primary-text">Something Weird.</span>
          </h1>
          <p className="contact-description">
            I speak fluent pixel and code. Drop a signal below and let's launch your next big idea into orbit.
          </p>

          <div className="mascot-playground animate-float">
            <div className="orbital-ring ring-1"></div>
            <div className="orbital-ring ring-2"></div>
            <div className="mascot-container">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuz5elNd0FEG0XPuMixAv5yzR-AoMsmZ0hdcXHWgW3P4p9RQNmHLFKj0oNsKBNJPqMn4w3KJDa3R2f45l_vN7XhrIEnblV8CYgqxiNKvAw-ftdJQiNAbRgMu3B5TFQQ29jpQIJEG8ndncuPlLxSL8GCrIGUlyTpCvVFk616JOHXx-TmOJpAZG2kf4EEZjeyLSQvEWxhY0GF4V2WSiRsnAc52sp9L79GAQ6xv01D_nse42HQPkbLqPN6yLWqa7tnPAq0YXDlZ8atx4" 
                alt="Mascot" 
                className="mascot-img"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="social-orbit orbit-1"><span className="material-symbols-outlined">code</span></div>
            <div className="social-orbit orbit-2"><span className="material-symbols-outlined">alternate_email</span></div>
            <div className="social-orbit orbit-3"><span className="material-symbols-outlined">brush</span></div>
          </div>
        </div>

        {/* Right Column: Portal Form */}
        <div className="contact-form-container">
          <div className="glass-panel contact-form-card">
            <div className="form-header">
              <div className="hud-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
            </div>

            <form className="contact-form">
              <div className="form-group">
                <label>PILOT IDENTITY</label>
                <div className="input-wrapper">
                  <span className="material-symbols-outlined">person</span>
                  <input type="text" placeholder="Captain Name" />
                </div>
              </div>

              <div className="form-group">
                <label>COMMUNICATION FREQUENCY</label>
                <div className="input-wrapper">
                  <span className="material-symbols-outlined">mail</span>
                  <input type="email" placeholder="frequency@orbit.com" />
                </div>
              </div>

              <div className="form-group">
                <label>MISSION TYPE</label>
                <div className="input-wrapper">
                  <span className="material-symbols-outlined">category</span>
                  <select>
                    <option value="" disabled selected>Select Project Type</option>
                    <option value="web">Web Design</option>
                    <option value="app">App Development</option>
                    <option value="brand">Branding</option>
                    <option value="other">Classified Mission</option>
                  </select>
                  <span className="material-symbols-outlined select-arrow">expand_more</span>
                </div>
              </div>

              <div className="form-group">
                <label>TRANSMISSION CONTENT</label>
                <textarea placeholder="Describe your signal here..."></textarea>
              </div>

              <button type="button" className="launch-btn shimmer">
                <span>Send Message</span>
                <span className="material-symbols-outlined">send</span>
              </button>

              <p className="form-footer">
                Systems failing? <a href="mailto:hello@example.com">Switch to Analog</a>
              </p>
            </form>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .contact-section {
          padding-top: 8rem;
          padding-bottom: 8rem;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
        }

        .contact-title {
          font-size: 4rem;
          font-weight: 900;
          line-height: 1;
          margin-top: 1rem;
          margin-bottom: 1.5rem;
        }

        .contact-description {
          font-size: 1.25rem;
          color: var(--text-muted);
          max-width: 500px;
          line-height: 1.6;
          margin-bottom: 4rem;
        }

        .mascot-playground {
          position: relative;
          width: 100%;
          max-width: 400px;
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .orbital-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(127, 19, 236, 0.2);
        }

        .ring-1 { width: 110%; height: 110%; }
        .ring-2 { width: 125%; height: 125%; border-style: dashed; transform: rotate(45deg); }

        .mascot-container {
          width: 250px;
          height: 250px;
          border-radius: 50%;
          background: linear-gradient(to bottom, var(--primary-glow), rgba(127, 19, 236, 0.05));
          border: 1px solid rgba(255, 255, 255, 0.1);
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 20px 40px var(--primary-glow);
        }

        .mascot-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.9;
          transition: transform 0.7s;
        }

        .mascot-img:hover {
          transform: scale(1.1);
        }

        .social-orbit {
          position: absolute;
          width: 3.5rem;
          height: 3.5rem;
          background: var(--surface-dark);
          border: 1px solid var(--border-color);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
          transition: all 0.3s;
        }

        .social-orbit:hover {
          background: var(--primary-color);
          color: white;
          border-color: var(--primary-color);
        }

        .orbit-1 { top: 0; right: 2rem; }
        .orbit-2 { bottom: 2rem; left: 0; width: 3rem; height: 3rem; }
        .orbit-3 { bottom: 5rem; right: 0; width: 4rem; height: 4rem; }

        .contact-form-card {
          padding: 2.5rem;
          border-radius: var(--border-radius-lg);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
          position: relative;
        }

        .form-header {
          margin-bottom: 2rem;
        }

        .hud-dots {
          display: flex;
          gap: 0.5rem;
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
          gap: 1.5rem;
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
          margin-top: 1rem;
        }

        .form-footer a {
          color: var(--primary-color);
          font-weight: 700;
          text-decoration: underline;
          text-underline-offset: 4px;
        }

        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .contact-info {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .contact-description {
            margin-bottom: 2rem;
          }
          .contact-form-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
