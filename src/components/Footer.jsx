import React from 'react';

const Footer = () => {
  return (
    <>
      {/* Desktop Floating Footer Dock */}
      <footer className="desktop-footer">
        <div className="glass-panel footer-dock">
          <div className="social-links">
            <a href="#" className="social-link" aria-label="Twitter">
              <span className="material-symbols-outlined">flutter_dash</span>
            </a>
            <a href="#" className="social-link" aria-label="Dribbble">
              <span className="material-symbols-outlined">brush</span>
            </a>
            <a href="#" className="social-link" aria-label="GitHub">
              <span className="material-symbols-outlined">code</span>
            </a>
            <a href="#" className="social-link" aria-label="LinkedIn">
              <span className="material-symbols-outlined">work</span>
            </a>
          </div>
          <div className="divider"></div>
          <p className="copyright-vertical">© 2024</p>
        </div>
      </footer>

      {/* Mobile Footer */}
      <footer className="mobile-footer">
        <div className="mobile-social-links">
          <a href="#" className="social-link"><span className="material-symbols-outlined">flutter_dash</span></a>
          <a href="#" className="social-link"><span className="material-symbols-outlined">brush</span></a>
          <a href="#" className="social-link"><span className="material-symbols-outlined">code</span></a>
          <a href="#" className="social-link"><span className="material-symbols-outlined">work</span></a>
        </div>
        <p className="mobile-copyright">© 2024 DevSigner. All rights reserved.</p>
      </footer>

      <style jsx="true">{`
        .desktop-footer {
          position: fixed;
          bottom: 1.5rem;
          left: 1.5rem;
          z-index: 100;
        }

        .footer-dock {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          border-radius: var(--border-radius);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .social-links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .social-link {
          color: var(--text-muted);
          transition: color 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.25rem;
        }

        .social-link:hover {
          color: var(--primary-color);
        }

        .divider {
          width: 100%;
          height: 1px;
          background: rgba(255, 255, 255, 0.1);
        }

        .copyright-vertical {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .mobile-footer {
          display: none;
          padding: 2rem 1rem;
          text-align: center;
        }

        .mobile-social-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 1rem;
        }

        .mobile-copyright {
          font-size: 0.875rem;
          color: var(--text-muted);
        }

        @media (max-width: 1280px) {
          .desktop-footer {
            display: none;
          }
          .mobile-footer {
            display: block;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
