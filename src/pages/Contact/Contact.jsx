import React from 'react';
import StatusBadge from '../../components/common/StatusBadge/StatusBadge';
import WhatsAppIcon from '../../components/common/WhatsAppIcon/WhatsAppIcon';
import "./Contact.css";

const Contact = () => {
  const whatsappLink =
    'https://wa.me/919899321639?text=Hi%20Rajat%2C%20I%20want%20to%20connect%20with%20you%20about%20a%20project.';

  return (
    <header className="contact-section container-lg">
      <div className="contact-grid hero-padding" style={{paddingBottom: "0"}}>
        {/* Left Column: Content & Mascot */}
        <div className="contact-info">
          <StatusBadge text="Open to work" showPing />
          <h1 className="contact-title">
            Let's Build <br />
            <span className="text-primary">Something Weird.</span>
          </h1>
          <p className="contact-description">
            I design and build digital experiences that look sharp and work flawlessly. <span style={{fontWeight: '600', color: 'var(--color-text)'}}>Got an idea? Let’s bring it to life.</span>
          </p>

 
        </div>

        {/* Right Column: Quick Contact */}
        <div className="contact-content">
          <div className="contact-form-card card card-md">
            <div className="form-header">
              <div className="hud-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
            </div>

            <div className="contact-form quick-connect">
              <div className="head-group">
                <span className="pill">PRIMARY CHAT</span>
                <h3>WhatsApp Connect</h3>
                <p className="connect-note">
                  Fastest way to reach me. Tap once and chat directly on WhatsApp.
                </p>
              </div>

              <div>
                <a
                href={whatsappLink}
                className="btn btn-primary"
                style = {{width: "fit-content"}}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Say 'Hi' on WhatsApp</span>
                <WhatsAppIcon className="right-fix" />
              </a>
              </div>

              <div className="quick-divider" aria-hidden="true"></div>

              <div className="quick-links">
                <a href="mailto:rajat.gulati27@example.com" className="btn btn-secondary">
                  Email
                </a>
                <a href="tel:+919899321639" className="btn btn-secondary">
                  Call
                </a>
                <a href="sms:+919899321639" className="btn btn-secondary">
                  SMS
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Contact;
