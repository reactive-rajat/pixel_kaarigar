import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import WhatsAppIcon from "../common/WhatsAppIcon/WhatsAppIcon";
import "./Footer.css";

const Footer = () => {
  const location = useLocation();
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribeStatus("success");
      setTimeout(() => {
        setSubscribeStatus("");
        setEmail("");
      }, 3000);
    }
  };

  const quickLinks = [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
    { label: "Resume", href: "/resume.pdf" },
  ];

  const socialLinks = [
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/rajatgulati",
      icon: "link",
    },
    {
      label: "GitHub",
      href: "https://github.com/rajatgulati",
      icon: "code",
    },
    {
      label: "Dribbble",
      href: "https://dribbble.com/rajatgulati",
      icon: "palette",
    },
    {
      label: "Twitter",
      href: "https://twitter.com/rajatgulati",
      icon: "tag",
    },
  ];

  const contactMethods = [
    {
      label: "WhatsApp",
      href: "https://wa.me/919899321639?text=Hi%20Rajat%2C%20I%20want%20to%20connect%20with%20you%20about%20a%20project.",
      icon: "whatsapp",
      external: true,
    },
    {
      label: "Call",
      href: "tel:+919899321639",
      icon: "call",
    },
    {
      label: "Email",
      href: "mailto:hello@rajatgulati.com",
      icon: "mail",
    },
  ];

  const renderIcon = (icon) => {
    if (icon === "whatsapp") {
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
      {location.pathname !== "/contact" && (
        <section className="pre-footer-cta container">
          <div className="container-lg">
            <div className="cta-card card-lg card-1">
              <div className="cta-content">
                <div className="status-badge">
                  <div className="ping-dot">
                    <span className="ping-inner"></span>
                    <span className="ping-outer"></span>
                  </div>
                  <span className="status-text">Available for work</span>
                </div>
                <h2 className="cta-title">
                  Let's create something{" "}
                  <span className="text-gradient">amazing</span> together
                </h2>
                <p className="cta-description">
                  I'm always excited to work on innovative projects that make a
                  difference. Let's turn your vision into reality.
                </p>
              </div>
              <div className="cta-actions">
                <a href="#contact" className="btn btn-primary">
                  <span>Start a Project</span>
                  <span className="material-symbols-outlined right-fix">
                    arrow_forward
                  </span>
                </a>
                <a href="#work" className="btn btn-secondary">
                  View My Work
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main Footer */}
      <footer className={`site-footer card-2 ${location.pathname !== "/contact" ? "mt-20" : "mt-0"}`} aria-label="Site footer">
        <div className="container-lg">
          <div className="footer-main">
            {/* Column 1: Brand & Social */}
            <div className="footer-col footer-brand">
              <div className="footer-logo">
                <div className="footer-logo-img">
                  <img
                    src="/assets/brand/avatar.png"
                    alt="Avatar"
                    className="logo-avatar"
                  />
                  <div>
                    <h3 className="brand-name">Rajat Gulati</h3>
                    <p className="brand-tagline">UX Designer & Developer</p>
                  </div>
                </div>
              </div>
              <div className="footer-badges">
                <div className="pill footer-badge">
                  <span className="material-symbols-outlined">verified</span>
                  <span>5+ Years</span>
                </div>
                <div className="pill footer-badge">
                  <span className="material-symbols-outlined">
                    workspace_premium
                  </span>
                  <span>50+ Projects</span>
                </div>
              </div>
              <p className="footer-bio">
                Designing experiences that solve real problems and bringing them
                to life with code.
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
                    <span className="material-symbols-outlined">
                      arrow_forward
                    </span>
                    <span className="quick-link-label">{label}</span>
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
                          target: "_blank",
                          rel: "noopener noreferrer",
                        }
                      : {})}
                  >
                    <div className="contact-icon">{renderIcon(icon)}</div>
                    <div className="contact-info">
                      <span className="contact-label">{label}</span>
                      <p className="contact-value">
                        {icon === "mail" && "pixelkaarigar@gmail.com"}
                        {icon === "call" && "+91 98993 21639"}
                        {icon === "whatsapp" && "Say 'Hi' to me"}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="container-lg footer-meta">
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
      </footer>
    </>
  );
};

export default Footer;
