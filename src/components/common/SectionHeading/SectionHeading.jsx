import React from 'react';
import "./SectionHeading.css";

// Shared heading block for sections with label + title + description.
const SectionHeading = ({ label, title, description }) => {
  return (
    <div>
      {label ? <span className="section-label">{label}</span> : null}
      {title ? <h2 className="section-title">{title}</h2> : null}
      {description ? <p className="section-description">{description}</p> : null}
    </div>
  );
};

export default SectionHeading;
