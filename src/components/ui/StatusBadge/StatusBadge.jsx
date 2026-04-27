import React from 'react';
import "./StatusBadge.css";

// Reusable status badge used across pages (with optional ping animation).
const StatusBadge = ({ text, showPing = false, className = '' }) => {
  const badgeClassName = `pill pill-status ${className} ${showPing ? 'ping-dot' : ''}`.trim();

  return (
    <div className={badgeClassName}>
      {text}
    </div>
  );
};

export default StatusBadge;
