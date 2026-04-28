import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar/Navbar';
import Footer from '../components/layout/Footer/Footer';
import Home from '../pages/Home/Home';
import Works from '../pages/Works/Works';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import ProjectDetail from '../pages/ProjectDetail/ProjectDetail';
import ComponentsPreview from '../pages/ComponentsPreview/ComponentsPreview';
import "./App.css";

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

import ScrollToTopButton from '../components/layout/ScrollToTopButton/ScrollToTopButton';

const AppShell = () => {
  const [activePage, setActivePage] = useState('home');
  const [darkMode, setDarkMode] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handlePageChange = (page) => {
    const nextPath = pageToRoute[page] || '/';

    if (page === activePage && location.pathname === nextPath) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setActivePage(page);
      if (location.pathname !== nextPath) {
        navigate(nextPath);
      }
      window.scrollTo(0, 0);
      setIsTransitioning(false);
    }, 400);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const nextPage = location.pathname.startsWith('/project/')
      ? 'works'
      : routeToPage[location.pathname] || 'home';
    if (nextPage !== activePage) {
      setActivePage(nextPage);
    }
  }, [location.pathname, activePage]);

  return (
    <div className="app-wrapper">
      <Navbar
        activePage={activePage}
        setActivePage={handlePageChange}
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
      />

      <main className={`page-content ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
        <Routes>
          <Route path="/" element={<Home setActivePage={handlePageChange} />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Works />} />
          <Route path="/project/:slug" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Hidden dev-only design preview — not linked from anywhere */}
        <Route path="/components" element={<ComponentsPreview />} />
        {/* All other routes go through AppShell (Navbar + Footer) */}
        <Route path="/*" element={<AppShell />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
