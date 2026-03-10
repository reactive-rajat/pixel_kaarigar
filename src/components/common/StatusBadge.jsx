import React from 'react';

// Reusable status badge used across pages (with optional ping animation).
const StatusBadge = ({ text, showPing = false, style, className = '' }) => {
  const badgeClassName = `status-badge ${className}`.trim();

  return (
    <div className={badgeClassName} style={style}>
      {showPing ? (
        <span className="ping-dot">
          <span className="ping-inner"></span>
          <span className="ping-outer"></span>
        </span>
      ) : null}
      <span className="status-text">{text}</span>
    </div>
  );
};

export default StatusBadge;
