import React from 'react';

const Navbar = ({ darkMode, toggleDarkMode, activePage, setActivePage }) => {
  return (
    <div className="fixed-nav-container">
      <nav className="glass-panel navbar">
        <div className="nav-logo" onClick={() => setActivePage('home')}>
          <span className="material-symbols-outlined logo-icon">terminal</span>
          <span className="logo-text">Pixel_Kaarigar</span>
        </div>

        <div className="nav-links">
          <button 
            className={`nav-link ${activePage === 'works' ? 'active' : ''}`}
            onClick={() => setActivePage('works')}
          >
            Work
          </button>
          <button 
            className={`nav-link ${activePage === 'about' ? 'active' : ''}`}
            onClick={() => setActivePage('about')}
          >
            About
          </button>
          <button 
            className={`nav-link ${activePage === 'contact' ? 'active' : ''}`}
            onClick={() => setActivePage('contact')}
          >
            Contact
          </button>
        </div>

        <div className="nav-actions">
          <button className="theme-toggle" onClick={toggleDarkMode}>
            <span className="material-symbols-outlined">
              {darkMode ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
        </div>
      </nav>

      <style jsx="true">{`
        .fixed-nav-container {
          position: fixed;
          top: 1.5rem;
          left: 0;
          right: 0;
          z-index: 1000;
          display: flex;
          justify-content: center;
          padding: 0 1rem;
        }

        .navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.4rem 0.4rem 0.4rem 1.2rem;
          border-radius: var(--border-radius-full);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
          max-width: 600px;
          width: 100%;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
        }

        .logo-icon {
          color: var(--primary-color);
          font-size: 1.25rem;
        }

        .logo-text {
          font-weight: 800;
          font-size: 1rem;
          letter-spacing: -0.02em;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          background: rgba(255, 255, 255, 0.03);
          padding: 0.25rem;
          border-radius: var(--border-radius-full);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .nav-link {
          padding: 0.4rem 1.2rem;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-muted);
          border-radius: var(--border-radius-full);
          transition: all 0.2s;
        }

        .nav-link:hover {
          color: var(--text-dark);
        }

        .nav-link.active {
          color: white;
          background: var(--primary-color);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .theme-toggle {
          width: 2.2rem;
          height: 2.2rem;
          border-radius: var(--border-radius-full);
          background: var(--primary-color);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 5px 15px var(--primary-glow);
          transition: transform 0.2s;
        }

        .theme-toggle span {
          font-size: 1.2rem;
        }

        .theme-toggle:hover {
          transform: scale(1.05);
        }

        /* Side Rail */
        .side-rail {
          position: fixed;
          right: 2rem;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          padding: 2rem 0.75rem;
          border-radius: var(--border-radius-full);
          z-index: 100;
          backdrop-filter: blur(10px);
        }

        .rail-icons {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          color: var(--text-muted);
        }

        .rail-icons span {
          font-size: 1.2rem;
          cursor: pointer;
          transition: color 0.2s;
        }

        .rail-icons span:hover {
          color: var(--primary-color);
        }

        .rail-scroll {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .scroll-text {
          writing-mode: vertical-rl;
          font-size: 0.65rem;
          font-weight: 800;
          color: var(--text-muted);
          letter-spacing: 0.1em;
        }

        .scroll-arrow {
          font-size: 1rem;
          color: var(--primary-color);
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
          40% {transform: translateY(5px);}
          60% {transform: translateY(3px);}
        }

        .rail-footer {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          font-size: 0.65rem;
          font-weight: 700;
          color: var(--text-muted);
          opacity: 0.5;
        }

        @media (max-width: 1024px) {
          .nav-links {
            display: none;
          }
          .side-rail {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Navbar;
