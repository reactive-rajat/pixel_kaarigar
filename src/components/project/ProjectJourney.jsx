import React, { useEffect, useRef } from "react";
import "./ProjectLayout.css";

const ProjectJourney = ({ children }) => {
  const containerRef = useRef(null);
  const progressLineRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const progressLine = progressLineRef.current;
    
    if (!container || !progressLine) return;

    const firstNode = container.querySelector(".topic-node");
    
    const handleScroll = () => {
      if (!firstNode) return;
      
      const journeyRect = container.getBoundingClientRect();
      const firstRect = firstNode.getBoundingClientRect();
      
      const allBlocks = container.querySelectorAll("article, .topic-cover");
      if (!allBlocks.length) return;
      
      const lastNode = allBlocks[allBlocks.length - 1];
      const lastRect = lastNode.getBoundingClientRect();

      const startOffset = (firstRect.top - journeyRect.top) + (firstRect.height / 2);
      const endOffset = (lastRect.top - journeyRect.top) + (lastRect.height / 2);
      const maxLineHeight = Math.max(0, endOffset - startOffset);

      progressLine.style.top = `${startOffset}px`;

      const viewportCenter = window.innerHeight / 2;
      const lineScreenTop = firstRect.top + (firstRect.height / 2);
      
      let progress = viewportCenter - lineScreenTop;
      progress = Math.max(0, Math.min(progress, maxLineHeight));

      progressLine.style.height = `${progress}px`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    let observer = null;
    const timer = setTimeout(() => {
      const journeyNodes = container.querySelectorAll("section, article");

      if (!journeyNodes.length) return;

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-active-node");
              
              const parentSection = entry.target.closest("section");
              if (parentSection) {
                const themeVal = window.getComputedStyle(parentSection).getPropertyValue("--theme-base");
                if (themeVal) {
                  progressLine.style.setProperty("--active-journey-color", themeVal.trim());
                }
              }
            } else {
              entry.target.classList.remove("is-active-node");
            }
          });
        },
        { rootMargin: "-48% 0px -48% 0px" }
      );

      journeyNodes.forEach((node) => observer.observe(node));
    }, 20);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
      if (observer) {
        const journeyNodes = container.querySelectorAll("section, article");
        journeyNodes.forEach((node) => observer.unobserve(node));
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div className="project-journey" ref={containerRef}>
      <div className="journey-progress-line" ref={progressLineRef}></div>
      {children}
    </div>
  );
};

export default ProjectJourney;
