import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from "motion/react";
import SectionHeading from '../../ui/SectionHeading/SectionHeading';
import { testimonials } from "../../../data/about.js";
import './Testimonials.css';

const StarRating = ({ count = 5 }) => (
  <div className="flex gap-[2px]" aria-label={`${count} star rating`}>
    {Array.from({ length: count }).map((_, i) => (
      <span key={i} className="material-symbols-outlined text-base text-amber-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
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
    <section className="testimonials-section content-section card-2">
      <div className="container-lg">
        <SectionHeading
        label="Testimonials"
        title={
          <>
            What People Say<span className="text-primary"> About Me</span>
          </>
        }
        description="A few kind words from people I've worked with."
      />

      <div
        className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-8"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {testimonials.map((t, index) => {
          const isActive = index === activeIndex;
          return (
            <motion.div
              key={t.name}
              className={`card card-1 card-md card-hover ${isActive ? 'border-(--color-primary) ring-1 ring-(--color-primary-20) shadow-[0_0_28px_var(--color-primary-glow)]' : ''}`}
              onClick={() => setActiveIndex(index)}
              animate={{
                opacity: isActive ? 1 : 0.55,
                y: isActive ? -4 : 0,
              }}
              whileHover={{
                opacity: 1,
              }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-3 w-full">
                <img
                  className="w-11 h-11 rounded-full object-cover shrink-0 border-2 border-[color-mix(in_srgb,var(--color-primary)_30%,var(--color-border))] shadow-sm"
                  src={t.image}
                  alt={t.name}
                  loading="lazy"
                />
                <div className="flex-1 flex flex-col gap-0.5 min-w-0 text-left">
                  <span className="text-sm font-bold text-(--color-text) whitespace-nowrap overflow-hidden text-ellipsis">{t.name}</span>
                  <span className="text-xs text-(--color-text-muted) whitespace-nowrap overflow-hidden text-ellipsis">{t.role}</span>
                </div>
                <span className={`material-symbols-outlined text-[1.75rem] shrink-0 ml-auto leading-none transition-colors duration-300 ${isActive ? 'text-(--color-primary)' : 'text-(--color-primary-20)'}`} aria-hidden="true">
                  format_quote
                </span>
              </div>

              <StarRating />

              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={t.name + isActive}
                  className={`text-sm leading-relaxed text-left m-0 flex-1 transition-colors duration-300 ${isActive ? 'text-(--color-text)' : 'text-(--color-text-muted)'}`}
                  style={{ quotes: 'none' }}
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
      </div>
    </section>
  );
};

export default Testimonials;
