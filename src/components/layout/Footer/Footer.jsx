import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import WhatsAppIcon from "../../ui/WhatsAppIcon/WhatsAppIcon";
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
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    {
      label: "Resume",
      href: "/assets/resume/Rajat_Gulati_UI_UX_Designer.pdf",
      download: "Rajat_Gulati_UI_UX_Designer.pdf",
    },
  ];

  const socialLinks = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/rajatui/",
      icon: "LinkedIn",
    },
    {
      label: "Behance",
      href: "https://www.behance.net/rajatuiux",
      icon: "Behance",
    },
    {
      label: "GitHub",
      href: "https://github.com/reactive-rajat",
      icon: "GitHub",
    },
    {
      label: "Upwork",
      href: "https://www.upwork.com/freelancers/~0118b453dc83e75d1b",
      icon: "Upwork",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/pixel.kaarigar/",
      icon: "Instagram",
    },
  ];

  const SocialIcon = ({ name }) => {
    switch (name) {
      case "LinkedIn":
        return (
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        );
      case "Behance":
        return (
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 18v-12h4.5a3 3 0 0 1 0 6a3 3 0 0 1 0 6h-4.5" />
            <path d="M3 12l4.5 0" />
            <path d="M14 13h7a3.5 3.5 0 0 0 -7 0v2a3.5 3.5 0 0 0 6.64 1" />
            <path d="M16 6l3 0" />
          </svg>
        );
      case "GitHub":
        return (
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
          </svg>
        );
      case "Upwork":
        return (
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 7v5a3 3 0 0 0 6 0v-5h1l4 6c.824 1.319 1.945 2 3.5 2a3.5 3.5 0 0 0 0 -7c-2.027 0 -3.137 1 -3.5 3c-.242 1.33 -.908 4 -2 8" />
          </svg>
        );
      case "Instagram":
        return (
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4l0 -8" />
            <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
            <path d="M16.5 7.5v.01" />
          </svg>
        );
      default:
        return <span className="material-symbols-outlined">{name}</span>;
    }
  };

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
      {location.pathname !== "/contact" &&
        !location.pathname.startsWith("/project") && (
          <section className="pre-footer-cta container">
            <div className="container-lg">
              <div className="card card-1 card-lg flex lg:flex-row flex-col lg:items-center items-stretch justify-between gap-12 overflow-hidden relative shadow-[0_20px_60px_var(--color-primary-glow)]">
                <div className="absolute -top-[50%] -right-[20%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,var(--color-primary-glow)_0%,transparent_70%)] opacity-40 pointer-events-none" />
                <div className="flex-1 flex flex-col gap-6 relative z-10 lg:text-left text-center lg:items-start items-center">
                  <div className="pill pill-status ping-dot w-fit">
                    Available for work
                  </div>
                  <h2 className="mt-2">
                    Got a problem{" "}
                    <span className="text-gradient">worth solving?</span>
                  </h2>
                  <p className="text-[var(--color-text-muted)] leading-relaxed mt-2">
                    I'm actively looking for UX design roles — full-time or
                    contract. If you're building something, let's talk.
                  </p>
                </div>
                <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-center gap-4 shrink-0 relative z-10 w-full lg:w-auto">
                  <Link
                    to="/contact"
                    className="btn btn-primary justify-center"
                  >
                    <span>Start a Project</span>
                    <span className="material-symbols-outlined right-fix">
                      arrow_forward
                    </span>
                  </Link>
                  <Link to="/work" className="btn btn-secondary justify-center">
                    View My Work
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

      {/* Main Footer */}
      <footer
        className={`site-footer card-2 ${location.pathname !== "/contact" && !location.pathname.startsWith("/project") ? "mt-20" : "mt-0"}`}
        aria-label="Site footer"
      >
        <div className="container-lg">
          <div className="footer-main">
            {/* Column 1: Brand & Social */}
            <div className="footer-col footer-brand">
              {/* Avatar left + Name/Tagline right */}
              <div className="footer-identity">
                <div className="footer-avatar-wrap">
                  <img
                    src="/assets/brand/avatar.png"
                    alt="Rajat Gulati"
                    className="footer-avatar"
                  />
                </div>
                <div className="footer-identity-text">
                  <h3 className="brand-name">RAJAT GULATI</h3>
                  <p className="brand-tagline">Senior UX Designer · Open to Work</p>
                </div>
              </div>

              {/* Badges row right below name */}
              <ul className="footer-badge-list">
                <li>
                  <div className="pill footer-badge">
                    <span className="material-symbols-outlined">verified</span>
                    <span>7+ Years</span>
                  </div>
                </li>
                <li>
                  <div className="pill footer-badge">
                    <span className="material-symbols-outlined">workspace_premium</span>
                    <span>50+ Projects</span>
                  </div>
                </li>
              </ul>

              {/* Bio */}
              <p className="footer-bio">
                7 years in design. Looking for the right team. Open to UX roles
                — full-time or freelance.
              </p>

              {/* Social Icons */}
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
                    <SocialIcon name={icon} />
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="footer-col">
              <h4 className="footer-heading">Quick Links</h4>
              <nav className="footer-nav">
                {quickLinks.map(({ label, href, download }) => (
                  <a key={label} href={href} className="footer-nav-link" {...(download ? { download } : {})}>
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
