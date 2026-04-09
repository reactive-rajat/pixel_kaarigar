import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from "motion/react";
import SectionHeading from '../../common/SectionHeading/SectionHeading';
import IconQuotes from "@/public/assets/icons/IconQuotes.jsx";
import { testimonials } from "../../../data/about.js";
import './Testimonials.css';

const Testimonials = () => {
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  const [isTestimonialPaused, setIsTestimonialPaused] = useState(false);

  useEffect(() => {
    if (testimonials.length <= 1 || isTestimonialPaused) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveTestimonialIndex((currentIndex) => {
        return (currentIndex + 1) % testimonials.length;
      });
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [isTestimonialPaused]);

  const activeTestimonial = testimonials[activeTestimonialIndex];

  return (
    <div className="testimonials-section content-section">
      <SectionHeading
        label="Testimonials"
        title={
          <>
            What People Say<span className="primary-text"> About Me</span>
          </>
        }
        description="A few kind words from people I've worked with."
      />
      
      <div className="testimonial-shell">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={activeTestimonial.name}
            className="testimonial-spotlight"
            onMouseEnter={() => setIsTestimonialPaused(true)}
            onMouseLeave={() => setIsTestimonialPaused(false)}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="testimonial-accent" aria-hidden="true">
              <span className="icon left">
                <IconQuotes />
              </span>
              <span className="icon right">
                <IconQuotes />
              </span>
            </div>
            <div className="testimonial-copy">
              <h3 className="testimonial-quote">
                &ldquo;{activeTestimonial.quote}&rdquo;
              </h3>

              <div className="testimonial-meta">
                <img
                  className="testimonial-avatar"
                  src={activeTestimonial.image}
                  alt={activeTestimonial.name}
                  loading="lazy"
                />
                <div>
                  <h4 className="testimonial-name">
                    {activeTestimonial.name}
                  </h4>
                  <p className="testimonial-role">
                    {activeTestimonial.role}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="testimonial-dots" aria-label="Testimonials">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name}
              type="button"
              className={`testimonial-dot ${
                activeTestimonialIndex === index ? "active" : ""
              }`}
              aria-label={`Show testimonial by ${testimonial.name}`}
              onClick={() => setActiveTestimonialIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
