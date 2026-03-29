import React, { useState } from 'react';
import WhatsAppIcon from './common/WhatsAppIcon';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribeStatus('success');
      setTimeout(() => {
        setSubscribeStatus('');
        setEmail('');
      }, 3000);
    }
  };

  const quickLinks = [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
    { label: 'Resume', href: '/resume.pdf' },
  ];

  const socialLinks = [
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/rajatgulati',
      icon: 'link',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/rajatgulati',
      icon: 'code',
    },
    {
      label: 'Dribbble',
      href: 'https://dribbble.com/rajatgulati',
      icon: 'palette',
    },
    {
      label: 'Twitter',
      href: 'https://twitter.com/rajatgulati',
      icon: 'tag',
    },
  ];

  const contactMethods = [
    {
      label: 'WhatsApp',
      href: 'https://wa.me/919899321639?text=Hi%20Rajat%2C%20I%20want%20to%20connect%20with%20you%20about%20a%20project.',
      icon: 'whatsapp',
      external: true,
    },
    {
      label: 'Call',
      href: 'tel:+919899321639',
      icon: 'call',
    },
    {
      label: 'Email',
      href: 'mailto:hello@rajatgulati.com',
      icon: 'mail',
    },
  ];

  const renderIcon = (icon) => {
    if (icon === 'whatsapp') {
      return <WhatsAppIcon className="footer-icon" />;
    }

    return (
      <span className="material-symbols-outlined" aria-hidden="true">
        {icon}
      </span>
    );
  };

  return (
    <>
      {/* CTA Section before footer */}
      <section className="pre-footer-cta">
        <div className="container">
          <div className="cta-card glass-panel">
            <div className="cta-content">
              <div className="status-badge">
                <div className="ping-dot">
                  <span className="ping-inner"></span>
                  <span className="ping-outer"></span>
                </div>
                <span className="status-text">Available for work</span>
              </div>
              <h2 className="cta-title">
                Let's create something <span className="gradient-text">amazing</span> together
              </h2>
              <p className="cta-description">
                I'm always excited to work on innovative projects that make a difference.
                Let's turn your vision into reality.
              </p>
            </div>
            <div className="cta-actions">
              <a href="#contact" className="primary-btn">
                <span>Start a Project</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
              <a href="#work" className="secondary-btn">
                View My Work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="site-footer" aria-label="Site footer">
        <div className="container">
          <div className="footer-main">
            {/* Column 1: Brand & Social */}
            <div className="footer-col footer-brand">
              <div className="footer-logo">
                <div className="logo-avatar">
                  <span className="gradient-text">RG</span>
                </div>
                <div>
                  <h3 className="brand-name">Rajat Gulati</h3>
                  <p className="brand-tagline">UX Designer & Developer</p>
                </div>
              </div>
              <p className="footer-bio">
                Designing experiences that solve real problems and bringing them to life with code.
              </p>
              <div className="social-links">
                {socialLinks.map(({ label, href, icon }) => (
                  <a
                    key={label}
                    href={href}
                    className="social-link"
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="material-symbols-outlined">{icon}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="footer-col">
              <h4 className="footer-heading">Quick Links</h4>
              <nav className="footer-nav">
                {quickLinks.map(({ label, href }) => (
                  <a key={label} href={href} className="footer-nav-link">
                    <span className="material-symbols-outlined">arrow_forward</span>
                    <span>{label}</span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Column 3: Contact */}
            <div className="footer-col">
              <h4 className="footer-heading">Get in Touch</h4>
              <div className="contact-methods">
                {contactMethods.map(({ label, href, icon, external }) => (
                  <a
                    key={label}
                    href={href}
                    className="contact-method"
                    {...(external
                      ? {
                          target: '_blank',
                          rel: 'noopener noreferrer',
                        }
                      : {})}
                  >
                    <div className="contact-icon">{renderIcon(icon)}</div>
                    <div className="contact-info">
                      <span className="contact-label">{label}</span>
                      <span className="contact-value">
                        {icon === 'mail' && 'hello@rajatgulati.com'}
                        {icon === 'call' && '+91 98993 21639'}
                        {icon === 'whatsapp' && 'Chat on WhatsApp'}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Column 4: Newsletter */}
            <div className="footer-col">
              <h4 className="footer-heading">Stay Updated</h4>
              <p className="newsletter-description">
                Get design insights and project updates delivered to your inbox.
              </p>
              <form className="newsletter-form" onSubmit={handleSubscribe}>
                <div className="input-group">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="newsletter-input"
                    required
                  />
                  <button type="submit" className="newsletter-btn" aria-label="Subscribe">
                    <span className="material-symbols-outlined">send</span>
                  </button>
                </div>
                {subscribeStatus === 'success' && (
                  <p className="subscribe-success">✓ Thanks for subscribing!</p>
                )}
              </form>
              <div className="footer-badges">
                <div className="badge">
                  <span className="material-symbols-outlined">verified</span>
                  <span>5+ Years</span>
                </div>
                <div className="badge">
                  <span className="material-symbols-outlined">workspace_premium</span>
                  <span>50+ Projects</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="footer-divider"></div>
            <div className="footer-meta">
              <p className="copyright">
                © {currentYear} Rajat Gulati. All rights reserved.
              </p>
              <div className="footer-links-secondary">
                <a href="/privacy" className="footer-link-secondary">
                  Privacy Policy
                </a>
                <span className="separator">•</span>
                <a href="/terms" className="footer-link-secondary">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style jsx="true">{`
        /* Pre-Footer CTA Section */
        .pre-footer-cta {
          padding: 4rem 0 3rem;
        }

        .cta-card {
          padding: 3rem 2.5rem;
          border-radius: var(--radius-xl);
          border: 1px solid var(--border-color);
          background: color-mix(in srgb, var(--color-bg-soft) 90%, transparent);
          box-shadow: 0 20px 60px var(--color-primary-glow);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 3rem;
          position: relative;
          overflow: hidden;
        }

        .cta-card::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 500px;
          height: 500px;
          background: radial-gradient(
            circle,
            var(--color-primary-glow) 0%,
            transparent 70%
          );
          opacity: 0.4;
          pointer-events: none;
        }

        .cta-content {
          flex: 1;
          max-width: 600px;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          position: relative;
          z-index: 1;
        }

        .cta-title {
          margin-top: 0.5rem;
        }

        .cta-description {
          font-size: 1.05rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-top: 0.5rem;
        }

        .cta-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-shrink: 0;
          position: relative;
          z-index: 1;
        }

        /* Main Footer */
        .site-footer {
          background: var(--color-card);
          border-top: 1px solid var(--border-color);
          padding: 4rem 0 0;
          position: relative;
        }

        .site-footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            var(--color-primary) 50%,
            transparent
          );
        }

        .footer-main {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1.2fr 1.3fr;
          gap: 3rem;
          padding-bottom: 3rem;
        }

        .footer-col {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        /* Brand Column */
        .footer-brand {
          gap: 1.5rem;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .logo-avatar {
          width: 3rem;
          height: 3rem;
          border-radius: var(--radius-md);
          background: var(--color-bg-soft);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          font-size: 1.25rem;
          flex-shrink: 0;
        }

        .brand-name {
          font-size: 1.25rem;
          font-weight: 800;
          margin: 0;
          line-height: 1.2;
        }

        .brand-tagline {
          font-size: 0.8rem;
          color: var(--text-muted);
          font-weight: 500;
          margin-top: 0.15rem;
        }

        .footer-bio {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--text-muted);
        }

        .social-links {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .social-link {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: var(--radius-sm);
          background: var(--color-bg-soft);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .social-link .material-symbols-outlined {
          font-size: 1.15rem;
          color: var(--text-muted);
          transition: color 0.3s ease;
        }

        .social-link:hover {
          background: color-mix(in srgb, var(--color-primary) 15%, transparent);
          border-color: var(--color-primary);
          transform: translateY(-2px);
        }

        .social-link:hover .material-symbols-outlined {
          color: var(--color-primary);
        }

        /* Footer Headings */
        .footer-heading {
          font-size: 1rem;
          font-weight: 700;
          color: var(--color-text);
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        /* Quick Links */
        .footer-nav {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .footer-nav-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-muted);
          font-size: 0.95rem;
          font-weight: 500;
          transition: all 0.3s ease;
          width: fit-content;
        }

        .footer-nav-link .material-symbols-outlined {
          font-size: 1rem;
          transition: transform 0.3s ease;
          opacity: 0;
        }

        .footer-nav-link:hover {
          color: var(--color-primary);
          transform: translateX(4px);
        }

        .footer-nav-link:hover .material-symbols-outlined {
          opacity: 1;
        }

        /* Contact Methods */
        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .contact-method {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding: 0.75rem;
          border-radius: var(--radius-sm);
          background: color-mix(in srgb, var(--color-bg-soft) 40%, transparent);
          border: 1px solid transparent;
          transition: all 0.3s ease;
        }

        .contact-method:hover {
          background: color-mix(in srgb, var(--color-bg-soft) 80%, transparent);
          border-color: var(--border-color);
        }

        .contact-icon {
          width: 2.25rem;
          height: 2.25rem;
          border-radius: var(--radius-sm);
          background: var(--color-bg-soft);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .contact-icon .material-symbols-outlined,
        .contact-icon .footer-icon {
          font-size: 1.15rem;
          width: 1.15rem;
          height: 1.15rem;
          color: var(--color-primary);
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }

        .contact-label {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .contact-value {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--color-text);
        }

        /* Newsletter */
        .newsletter-description {
          font-size: 0.9rem;
          line-height: 1.5;
          color: var(--text-muted);
        }

        .newsletter-form {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .input-group {
          display: flex;
          gap: 0.5rem;
        }

        .newsletter-input {
          flex: 1;
          padding: 0.75rem 1rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-color);
          background: var(--color-bg-soft);
          color: var(--color-text);
          font-size: 0.9rem;
          font-family: var(--font-body);
          transition: all 0.3s ease;
        }

        .newsletter-input:focus {
          outline: none;
          border-color: var(--color-primary);
          background: color-mix(in srgb, var(--color-bg-soft) 80%, transparent);
        }

        .newsletter-input::placeholder {
          color: var(--text-muted);
        }

        .newsletter-btn {
          width: 2.75rem;
          height: 2.75rem;
          border-radius: var(--radius-sm);
          background: var(--color-primary);
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .newsletter-btn .material-symbols-outlined {
          font-size: 1.15rem;
          color: white;
        }

        .newsletter-btn:hover {
          background: color-mix(in srgb, var(--color-primary) 85%, black);
          transform: scale(1.05);
        }

        .subscribe-success {
          font-size: 0.85rem;
          color: var(--color-success);
          font-weight: 600;
        }

        .footer-badges {
          display: flex;
          gap: 0.75rem;
          margin-top: 0.5rem;
        }

        .badge {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.5rem 0.75rem;
          background: var(--color-bg-soft);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-pill);
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-muted);
        }

        .badge .material-symbols-outlined {
          font-size: 1rem;
          color: var(--color-primary);
        }

        /* Footer Bottom */
        .footer-bottom {
          padding: 1.75rem 0;
        }

        .footer-divider {
          height: 1px;
          background: var(--border-color);
          margin-bottom: 1.75rem;
        }

        .footer-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .copyright {
          font-size: 0.9rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .footer-links-secondary {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .footer-link-secondary {
          font-size: 0.9rem;
          color: var(--text-muted);
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .footer-link-secondary:hover {
          color: var(--color-primary);
        }

        .separator {
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .footer-main {
            grid-template-columns: 1fr 1fr;
            gap: 2.5rem;
          }

          .cta-card {
            flex-direction: column;
            text-align: center;
            gap: 2rem;
          }

          .cta-content {
            align-items: center;
            max-width: 100%;
          }

          .cta-actions {
            flex-direction: column;
            width: 100%;
          }

          .cta-actions .primary-btn,
          .cta-actions .secondary-btn {
            width: 100%;
            justify-content: center;
          }
        }

        @media (max-width: 768px) {
          .pre-footer-cta {
            padding: 3rem 0 2rem;
          }

          .cta-card {
            padding: 2rem 1.5rem;
          }

          .site-footer {
            padding: 3rem 0 0;
          }

          .footer-main {
            grid-template-columns: 1fr;
            gap: 2.5rem;
            padding-bottom: 2rem;
          }

          .footer-brand {
            padding-bottom: 1rem;
            border-bottom: 1px solid var(--border-color);
          }

          .footer-meta {
            flex-direction: column;
            text-align: center;
          }

          .social-link:hover,
          .footer-nav-link:hover,
          .newsletter-btn:hover {
            transform: none;
          }
        }

        @media (max-width: 480px) {
          .cta-title {
            font-size: 1.75rem;
          }

          .cta-description {
            font-size: 0.95rem;
          }

          .footer-logo {
            flex-direction: column;
            text-align: center;
          }

          .social-links {
            justify-content: center;
          }

          .footer-badges {
            flex-wrap: wrap;
            justify-content: center;
          }

          .input-group {
            flex-direction: column;
          }

          .newsletter-btn {
            width: 100%;
            height: 2.75rem;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;