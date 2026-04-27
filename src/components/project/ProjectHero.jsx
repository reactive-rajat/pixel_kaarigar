import React from "react";

export const ProjectHero = ({ id, pill, title, titleHighlight, description, stats }) => {
  return (
    <div id={id} className="py-10">
      <div className="grid gap-7">
        {pill && (
          <div className="mx-auto">
            <span className="pill pill-inverted">{pill}</span>
          </div>
        )}
        <h2 className="h2 text-center">
          {title}
          {titleHighlight && (
            <>
              <br />
              <span className="text-primary">{titleHighlight}</span>
            </>
          )}
        </h2>
        {description && (
          <p className="body-lg text-muted max-w-2xl text-center mx-auto">
            {description}
          </p>
        )}
        {stats && stats.length > 0 && (
          <div className="flex flex-wrap justify-center gap-x-16 gap-y-6 mt-8 border-(--color-border) border-t pt-8">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="body-sm text-muted uppercase tracking-wider font-bold mb-1">{stat.label}</div>
                <div className="body font-semibold">{stat.value}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
