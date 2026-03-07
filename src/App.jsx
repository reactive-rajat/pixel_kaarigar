import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './pages/Hero';
import Works from './pages/Works';
import About from './pages/About';
import Contact from './pages/Contact';

const routeToPage = {
  '/': 'home',
  '/about': 'about',
  '/work': 'works',
  '/contact': 'contact'
};

const pageToRoute = {
  home: '/',
  about: '/about',
  works: '/work',
  contact: '/contact'
};

const AppShell = () => {
  const [activePage, setActivePage] = useState('home');
  const [darkMode, setDarkMode] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Apply theme to body
    if (darkMode) {
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handlePageChange = (page) => {
    if (page === activePage) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setActivePage(page);
      const nextPath = pageToRoute[page] || '/';
      if (location.pathname !== nextPath) {
        navigate(nextPath);
      }
      window.scrollTo(0, 0);
      setIsTransitioning(false);
    }, 400);
  };

  useEffect(() => {
    const nextPage = routeToPage[location.pathname] || 'home';
    if (nextPage !== activePage) {
      setActivePage(nextPage);
    }
  }, [location.pathname, activePage]);

  return (
    <div className={`app-wrapper ${darkMode ? 'dark' : 'light'}`}>
      <Navbar 
        activePage={activePage} 
        setActivePage={handlePageChange} 
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
      />

      <main className={`page-content ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
        <Routes>
          <Route path="/" element={<Hero setActivePage={handlePageChange} />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />

      <style jsx="true">{`
        .app-wrapper {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background: var(--background-dark);
          color: var(--text-dark);
          transition: background 0.3s, color 0.3s;
        }

        .page-content {
          flex: 1;
          transition: opacity 0.4s ease, transform 0.4s ease;
        }

        .fade-in {
          opacity: 1;
          transform: translateY(0);
        }

        .fade-out {
          opacity: 0;
          transform: translateY(20px);
        }

        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: var(--background-dark);
        }

        ::-webkit-scrollbar-thumb {
          background: var(--border-color);
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: var(--primary-color);
        }
      `}</style>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
};

export default App;
