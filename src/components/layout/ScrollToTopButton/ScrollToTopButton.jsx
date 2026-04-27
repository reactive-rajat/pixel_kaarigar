import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    // Show if scrolled more than 600px
    if (window.scrollY > 600) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    // Initial check
    toggleVisibility();
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-8 right-8 z-50 group flex items-center"
        >
          {/* Tooltip */}
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-(--color-bg-soft) border border-(--color-border) text-(--color-text-muted) text-xs font-semibold rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-sm backdrop-blur-md">
            Scroll to Top
          </div>
          
          <button
            onClick={scrollToTop}
            className="w-14 h-14 rounded-full bg-(--color-primary) text-white shadow-[0_4px_24px_var(--color-primary-glow)] flex items-center justify-center hover:-translate-y-1 hover:shadow-[0_8px_32px_var(--color-primary-glow)] transition-all duration-300 cursor-pointer overflow-hidden"
            aria-label="Scroll to top"
          >
            <span className="material-symbols-outlined text-[1.65rem]">keyboard_arrow_up</span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
