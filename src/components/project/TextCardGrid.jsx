import React from "react";

/**
 * TextCardGrid
 * 
 * @param {Array} items - Array of { title, description, number?, icon? }
 * @param {number} columns - Number of columns on desktop (1, 2, 3, or 4). Default: 2.
 * @param {string} className - Optional extra wrapper classes
 * @param {string} cardClassName - Optional extra classes for each card (e.g. rounded-none)
 */
export const TextCardGrid = ({ id, items = [], columns = 4, className = "", cardClassName = "" }) => {
  const getGridColsClass = (cols) => {
    switch (cols) {
      case 1: return "grid-cols-1";
      case 2: return "grid-cols-1 md:grid-cols-2";
      case 3: return "grid-cols-1 md:grid-cols-3";
      case 4: return "grid-cols-1 md:grid-cols-2 lg:grid-cols-4";
      default: return "grid-cols-1 md:grid-cols-2";
    }
  };

  return (
    <div id={id} className={`grid ${getGridColsClass(columns)} gap-5 ${className}`}>
      {items.map((item, index) => (
        <div key={index} className={`card-1 card-sm border border-color !rounded-md ${cardClassName}`}>
          {/* {item.number && <div className="pill pill-rounded mb-4">{item.number}</div>} */}
          {item.icon && <div className="h3 mb-2 text-primary">{item.icon}</div>}
          
          <h4 className="h4 mb-2">{item.title}</h4>
          {typeof item.description === 'string' ? (
            <p className="body-sm text-muted" dangerouslySetInnerHTML={{ __html: item.description }} />
          ) : (
            <p className="body-sm text-muted">{item.description}</p>
          )}
        </div>
      ))}
    </div>
  );
};
