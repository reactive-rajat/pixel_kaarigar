import React, { useEffect, useRef, useState } from "react";
import "./HeroMoreMenu.css";

const RESUME_PATH = "/assets/resume/Rajat_Gulati_UI_UX_Designer.pdf";

/* ─────────────────────────────────────────────────────────────────
   All icons: stroke SVGs, strokeWidth 2, round caps/joins, 24×24 vb.
   Identical style to the footer social icons.
───────────────────────────────────────────────────────────────── */

const IconDownload = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 3v12" />
    <path d="M8 11l4 4 4-4" />
    <path d="M20 17v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2" />
  </svg>
);

const IconLinkedIn = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const IconBehance = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 18v-12h4.5a3 3 0 0 1 0 6a3 3 0 0 1 0 6h-4.5" />
    <path d="M3 12l4.5 0" />
    <path d="M14 13h7a3.5 3.5 0 0 0 -7 0v2a3.5 3.5 0 0 0 6.64 1" />
    <path d="M16 6l3 0" />
  </svg>
);

/* ─── Menu config ─────────────────────────────────────────────── */
const menuItems = [
  {
    label: "Download Resume",
    Icon: IconDownload,
    href: RESUME_PATH,
    download: "Rajat_Gulati_UI_UX_Designer.pdf",
  },
  {
    label: "LinkedIn",
    Icon: IconLinkedIn,
    href: "https://www.linkedin.com/in/rajatui/",
    external: true,
  },
  {
    label: "Behance",
    Icon: IconBehance,
    href: "https://www.behance.net/rajatuiux",
    external: true,
  },
];

/**
 * HeroMoreMenu — ⋮ "more links" button for page hero sections.
 */
const HeroMoreMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className="hero-more-wrap" ref={ref}>
      <button
        type="button"
        className={`hero-more-btn btn btn-secondary${isOpen ? " active" : ""}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="More links"
        aria-expanded={isOpen}
        aria-haspopup="menu"
        title="More links"
      >
        <span className="material-symbols-outlined">more_vert</span>
      </button>

      {isOpen && (
        <div className="hero-more-popover card-glass" role="menu">
          {menuItems.map(({ label, Icon, href, download, external }) => (
            <a
              key={label}
              href={href}
              className="hero-more-item"
              role="menuitem"
              onClick={() => setIsOpen(false)}
              {...(download ? { download } : {})}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              <span className="hero-more-icon-wrap">
                <Icon />
              </span>
              <span>{label}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeroMoreMenu;
