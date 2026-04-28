import React from "react";

export const BulletList = ({ id, items = [], columns = 1, icon, iconColor }) => {
  return (
    <div 
      id={id} 
      className={`body text-muted grid grid-cols-1 md:grid-cols-${columns} gap-6 mt-3 mx-auto text-left w-full`}
    >
      {items.map((item, index) => (
        <div key={index} className="card-1 card-sm border flex gap-2.5 items-start h-full">
          {icon ? (
            <span 
              className={`material-symbols-outlined shrink-0 mt-0.5 ${iconColor || 'text-primary'}`} 
              style={{ fontSize: '1.25rem', fontWeight: 700 }}
            >
              {icon}
            </span>
          ) : (
            <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2"></div>
          )}
          <div className="text-(--color-text) leading-relaxed" dangerouslySetInnerHTML={{ __html: item }}></div>
        </div>
      ))}
    </div>
  );
};
