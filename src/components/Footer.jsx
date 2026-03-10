import React from 'react';

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
              <span className="whatsapp-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img">
                  <path
                    fill="currentColor"
                    d="M20.52 3.48A11.86 11.86 0 0 0 12.09 0C5.54 0 .18 5.3.18 11.84c0 2.09.55 4.14 1.6 5.95L0 24l6.37-1.67a11.94 11.94 0 0 0 5.72 1.46h.01c6.55 0 11.91-5.3 11.91-11.84 0-3.16-1.24-6.13-3.49-8.47zm-8.43 18.3h-.01a9.96 9.96 0 0 1-5.08-1.39l-.36-.21-3.78.99 1.01-3.67-.23-.38a9.83 9.83 0 0 1-1.52-5.26c0-5.43 4.47-9.85 9.97-9.85 2.66 0 5.17 1.03 7.05 2.92a9.78 9.78 0 0 1 2.92 6.96c0 5.44-4.48 9.86-9.97 9.86zm5.47-7.47c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.64.08-.3-.15-1.27-.46-2.41-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.08-.8.37-.27.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.24 5.14 4.54.72.31 1.29.5 1.73.64.73.23 1.39.2 1.92.12.58-.09 1.77-.72 2.02-1.41.25-.69.25-1.28.17-1.4-.07-.12-.27-.2-.57-.35z"
                  />
                </svg>
              </span>
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
            <span className="whatsapp-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="img">
                <path
                  fill="currentColor"
                  d="M20.52 3.48A11.86 11.86 0 0 0 12.09 0C5.54 0 .18 5.3.18 11.84c0 2.09.55 4.14 1.6 5.95L0 24l6.37-1.67a11.94 11.94 0 0 0 5.72 1.46h.01c6.55 0 11.91-5.3 11.91-11.84 0-3.16-1.24-6.13-3.49-8.47zm-8.43 18.3h-.01a9.96 9.96 0 0 1-5.08-1.39l-.36-.21-3.78.99 1.01-3.67-.23-.38a9.83 9.83 0 0 1-1.52-5.26c0-5.43 4.47-9.85 9.97-9.85 2.66 0 5.17 1.03 7.05 2.92a9.78 9.78 0 0 1 2.92 6.96c0 5.44-4.48 9.86-9.97 9.86zm5.47-7.47c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.64.08-.3-.15-1.27-.46-2.41-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.08-.8.37-.27.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.24 5.14 4.54.72.31 1.29.5 1.73.64.73.23 1.39.2 1.92.12.58-.09 1.77-.72 2.02-1.41.25-.69.25-1.28.17-1.4-.07-.12-.27-.2-.57-.35z"
                />
              </svg>
            </span>
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

        .whatsapp-icon {
          width: 1.15rem;
          height: 1.15rem;
          display: inline-flex;
        }

        .whatsapp-icon svg {
          width: 100%;
          height: 100%;
        }

        .tooltip-box {
          position: absolute;
          left: calc(100% + 0.75rem);
          top: 50%;
          transform: translateY(-50%) translateX(-8px);
          display: flex;
          flex-direction: column;
          gap: 0.05rem;
          // min-width: 136px;
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
      `}</style>
    </>
  );
};

export default Footer;
