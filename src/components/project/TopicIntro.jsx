import React from "react";

export const TopicIntro = ({ id, title, description, className = "" }) => {
  return (
    <div id={id} className={`text-center mx-auto ${className}`}>
      {title && <h2 className="h2 mb-4">{title}</h2>}
      {description && (
        <p className="body max-w-2xl mx-auto text-muted">
          {description}
        </p>
      )}
    </div>
  );
};
