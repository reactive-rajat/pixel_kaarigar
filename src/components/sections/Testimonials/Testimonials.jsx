import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from "motion/react";
import SectionHeading from '../../common/SectionHeading/SectionHeading';
import { testimonials } from "../../../data/about.js";
import './Testimonials.css';

const StarRating = ({ count = 5 }) => (
  <div className="t-stars" aria-label={`${count} star rating`}>
    {Array.from({ length: count }).map((_, i) => (
      <span key={i} className="material-symbols-outlined t-star">star</span>
    ))}
  </div>
);

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (testimonials.length <= 1 || isPaused) return;
    const id = window.setInterval(() => {
      setActiveIndex(i => (i + 1) % testimonials.length);
    }, 5000);
    return () => window.clearInterval(id);
  }, [isPaused]);

  return (
    <section className="testimonials-section content-section">
      <SectionHeading
        label="Testimonials"
        title={
          <>
            What People Say<span className="primary-text"> About Me</span>
          </>
        }
        description="A few kind words from people I've worked with."
      />

      <div
        className="t-grid"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {testimonials.map((t, index) => {
          const isActive = index === activeIndex;
          return (
            <motion.div
              key={t.name}
              className={`t-card card-md card-hover${isActive ? ' t-card--active' : ''}`}
              onClick={() => setActiveIndex(index)}
              animate={{
                opacity: isActive ? 1 : 0.55,
                y: isActive ? -4 : 0,
              }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Top: avatar + name + stars */}
              <div className="t-card-header">
                <img
                  className="t-avatar"
                  src={t.image}
                  alt={t.name}
                  loading="lazy"
                />
                <div className="t-identity">
                  <span className="t-name">{t.name}</span>
                  <span className="t-role">{t.role}</span>
                </div>
                <span className="t-quote-mark material-symbols-outlined" aria-hidden="true">
                  format_quote
                </span>
              </div>

              {/* Stars */}
              <StarRating />

              {/* Quote */}
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={t.name + isActive}
                  className="t-quote"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  &ldquo;{t.quote}&rdquo;
                </motion.blockquote>
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Dots */}
      <div className="testimonial-dots" aria-label="Testimonials navigation">
        {testimonials.map((t, index) => (
          <button
            key={t.name}
            type="button"
            className={`testimonial-dot${activeIndex === index ? ' active' : ''}`}
            aria-label={`Show testimonial by ${t.name}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
