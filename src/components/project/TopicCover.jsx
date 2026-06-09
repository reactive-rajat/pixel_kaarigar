import React from "react";

export const TopicHeader = ({ title }) => {
  if (!title) return null;

  return (
    <div 
      className="topic-node table mx-auto relative z-20 mb-8 px-8 py-3 rounded-full font-bold shadow-[0_10px_30px_color-mix(in_srgb,var(--theme-base)_50%,transparent)]"
      style={{ backgroundColor: 'var(--theme-base)', color: 'var(--theme-text-fill, #ffffff)' }}
    >
      {title}
    </div>
  );
};

export const TopicCover = ({ children, className = "" }) => {
  return (
    <div className={`topic-cover relative section !p-10 md:!p-16 !mb-12 rounded-[40px] !border border-[rgba(var(--rgb-text),0.05)] bg-card shadow-[0_0_40px_rgba(var(--rgb-text),0.03)] overflow-hidden isolate ${className}`}>
      <div className="absolute top-0 right-0 w-[50vh] h-[50vh] bg-[var(--theme-base)] opacity-[0.05] md:opacity-[0.08] blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[40vh] h-[40vh] bg-[var(--theme-base)] opacity-[0.04] md:opacity-[0.07] blur-[80px] rounded-full pointer-events-none translate-y-1/3 -translate-x-1/3"></div>
      {children}
    </div>
  );
};
