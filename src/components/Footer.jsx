import React from 'react';
import WhatsAppIcon from './common/WhatsAppIcon';

const Footer = () => {
  return (
    <>
      {/* Desktop Floating Footer Dock */}
      <footer className="desktop-footer">
        <div className="glass-panel footer-dock">
          <div className="social-links">
            <a
              href="https://wa.me/919899321639?text=Hi%20Rajat%2C%20I%20want%20to%20connect%20with%20you%20about%20a%20project."
              className="social-link"
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon />
              <span className="tooltip-box" aria-hidden="true">
                <span className="tooltip-title">WhatsApp</span>
                <span className="tooltip-subtext">Start instant chat</span>
              </span>
            </a>
            <a
              href="tel:+919899321639"
              className="social-link"
              aria-label="Call"
            >
              <span className="material-symbols-outlined">call</span>
              <span className="tooltip-box" aria-hidden="true">
                <span className="tooltip-title">Call</span>
                <span className="tooltip-subtext">Dial directly now</span>
              </span>
            </a>
            <a
              href="mailto:hello@example.com"
              className="social-link"
              aria-label="Email"
            >
              <span className="material-symbols-outlined">mail</span>
              <span className="tooltip-box" aria-hidden="true">
                <span className="tooltip-title">Email</span>
                <span className="tooltip-subtext">Send detailed brief</span>
              </span>
            </a>
            <a
              href="sms:+919899321639"
              className="social-link"
              aria-label="SMS"
            >
              <span className="material-symbols-outlined">sms</span>
              <span className="tooltip-box" aria-hidden="true">
                <span className="tooltip-title">SMS</span>
                <span className="tooltip-subtext">Send a quick text</span>
              </span>
            </a>
          </div>
          <div className="divider"></div>
          <p className="copyright-vertical">© 2024</p>
        </div>
      </footer>

      {/* Mobile Footer */}
      <footer className="mobile-footer">
        <div className="mobile-social-links">
          <a
            href="https://wa.me/919899321639?text=Hi%20Rajat%2C%20I%20want%20to%20connect%20with%20you%20about%20a%20project."
            className="social-link"
            aria-label="WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon />
            <span className="tooltip-box" aria-hidden="true">
              <span className="tooltip-title">WhatsApp</span>
              <span className="tooltip-subtext">Start instant chat</span>
            </span>
          </a>
          <a href="tel:+919899321639" className="social-link" aria-label="Call">
            <span className="material-symbols-outlined">call</span>
            <span className="tooltip-box" aria-hidden="true">
              <span className="tooltip-title">Call</span>
              <span className="tooltip-subtext">Dial directly now</span>
            </span>
          </a>
          <a href="mailto:hello@example.com" className="social-link" aria-label="Email">
            <span className="material-symbols-outlined">mail</span>
            <span className="tooltip-box" aria-hidden="true">
              <span className="tooltip-title">Email</span>
              <span className="tooltip-subtext">Send detailed brief</span>
            </span>
          </a>
          <a href="sms:+919899321639" className="social-link" aria-label="SMS">
            <span className="material-symbols-outlined">sms</span>
            <span className="tooltip-box" aria-hidden="true">
              <span className="tooltip-title">SMS</span>
              <span className="tooltip-subtext">Send a quick text</span>
            </span>
          </a>
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
          padding: 0.5rem 0.3rem;
          border-radius: var(--border-radius-full);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .social-links {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .social-link {
          color: var(--text-muted);
          transition: color 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.25rem;
          position: relative;
          border-radius: var(--border-radius-full);
          width: 2.8rem;
          height: 2.8rem;
        }

        .social-link:hover {
          color: var(--primary-text);
          background: rgba(255, 255, 255, 0.08);
        }

        .tooltip-box {
          position: absolute;
          left: calc(100% + 0.75rem);
          top: 50%;
          transform: translateY(-50%) translateX(-8px);
          display: flex;
          flex-direction: column;
          gap: 0.05rem;
          padding: 0.6rem 0.8rem;
          border-radius: 0.75rem;
          border: 1px solid var(--border-color);
          background: rgba(20, 20, 26, 0.95);
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.2s ease, transform 0.2s ease;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
          z-index: 2;
        }

        .tooltip-box::before {
          content: '';
          position: absolute;
          left: -5px;
          top: 50%;
          width: 8px;
          height: 8px;
          transform: translateY(-50%) rotate(45deg);
          background: rgba(20, 20, 26, 0.95);
          border-left: 1px solid var(--border-color);
          border-bottom: 1px solid var(--border-color);
        }

        .tooltip-title {
          color: var(--text-dark);
          font-size: 0.72rem;
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: 0.03em;
        }

        .tooltip-subtext {
          color: var(--text-muted);
          font-size: 0.62rem;
          line-height: 1.25;
          white-space: nowrap;
        }

        .social-link:hover .tooltip-box {
          opacity: 1;
          transform: translateY(-50%) translateX(0);
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
          margin-bottom: 1rem;
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
          .tooltip-box {
            display: none;
          }
        }
          @media (max-width: 480px) {
            .mobile-social-links {
          gap: 0.5rem;
        }
          .mobile-footer{
            background: var(--border-color);
          }
          }
      `}</style>
    </>
  );
};

export default Footer;
