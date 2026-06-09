/**
 * projectLinks.js
 *
 * Single source of truth for external URLs tied to each project (by slug).
 * Update this file whenever a live URL changes.
 *
 * Rules:
 *  - Key   → project slug (matches the `folder` field in projects.js)
 *  - Value → external URL string, or "" if no public link exists yet
 *
 * Projects with an empty string ("") will show a "Coming Soon" tooltip on hover
 * and are non-clickable.
 */

const projectLinks = {
  "resume-help": "https://resumehelp.com/",
  "portfolio-v1": "https://imrajat.netlify.app/",
  "resume-nerd": "https://www.resumenerd.com/",
  "graphic-design": "",
  "wedding-invite": "",
  "bold-india": "https://www.india.bold.com/",
};

export default projectLinks;
