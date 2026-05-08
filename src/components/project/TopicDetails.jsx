import React from "react";

export const TopicDetails = ({ children, className = "" }) => {
  return (
    <div className={`topic-details grid grid-cols-1 gap-20 !mb-16 ${className}`}>
      {children}
    </div>
  );
};

export const ArticleCard = ({ id, pill, title, description, children, className = "" }) => {
  return (
    <article id={id} className={`section !p-6 md:!p-8 rounded-[24px] border !border-1 border-theme bg-card bg-grid-pattern ${className}`}>
      <div className="grid gap-8">
        {(pill || title || description) && (
          <div className="text-center mx-auto">
            {pill && <span className="pill pill-inverted mb-6 inline-block">{pill}</span>}
            {title && <h2 className="h2 mb-4">{title}</h2>}
            {description && <p className="body max-w-2xl mx-auto text-muted">{description}</p>}
          </div>
        )}
        {children}
      </div>
    </article>
  );
};
