import React, { useEffect, useState } from 'react';
import "./Navbar.css";

const Navbar = ({ darkMode, toggleDarkMode, activePage, setActivePage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (page) => {
    setActivePage(page);
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu after route/page change so it never stays open accidentally.
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [activePage]);

  return (
    <div className="fixed-nav-container">
      <nav className="card-glass navbar">
        <div className="nav-logo" onClick={() => handleNavClick('home')}>
          <img src="/assets/brand/avatar.png" alt="Avatar" className="logo-avatar" />
          <span className="logo-text">Rajat_Gulati</span>
        </div>

        <div className="nav-links">
          <button 
            className={`nav-link ${activePage === 'works' ? 'active' : ''}`}
            onClick={() => handleNavClick('works')}
          >
            Work
          </button>
          <button 
            className={`nav-link ${activePage === 'about' ? 'active' : ''}`}
            onClick={() => handleNavClick('about')}
          >
            About
          </button>
          <button 
            className={`nav-link ${activePage === 'contact' ? 'active' : ''}`}
            onClick={() => handleNavClick('contact')}
          >
            Contact
          </button>
        </div>

        <div className="nav-actions">
          <button className="theme-toggle" onClick={toggleDarkMode}>
            <span className="material-symbols-outlined">
              {darkMode ? 'dark_mode' : 'light_mode'}
            </span>
          </button>
          <button
            type="button"
            className="menu-toggle"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav-menu"
          >
            <span className="material-symbols-outlined">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>
      <div
        id="mobile-nav-menu"
        className={isMobileMenuOpen ? 'mobile-menu open card-glass' : 'mobile-menu card-glass'}
      >
        <button
          className={`mobile-nav-link ${activePage === 'works' ? 'active' : ''}`}
          onClick={() => handleNavClick('works')}
        >
          Work
        </button>
        <button
          className={`mobile-nav-link ${activePage === 'about' ? 'active' : ''}`}
          onClick={() => handleNavClick('about')}
        >
          About
        </button>
        <button
          className={`mobile-nav-link ${activePage === 'contact' ? 'active' : ''}`}
          onClick={() => handleNavClick('contact')}
        >
          Contact
        </button>
      </div>
    </div>
  );
};

export default Navbar;
