import React from "react";

export const ProjectSection = ({ id, theme, children, className = "", noJourney = false }) => {
  const themeClass = theme ? `theme-${theme}` : "";
  const baseClasses = noJourney ? "section !p-0 md:!p-4 !mb-0" : "!mt-8";

  return (
    <section id={id} className={`${baseClasses} ${themeClass} ${className}`}>
      {children}
    </section>
  );
};
