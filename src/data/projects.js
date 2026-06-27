import { slugifyProjectTitle } from "../utils/projectMeta";

/**
 * projects.js — Project display data
 *
 * Fields used by the Works grid and Home showcase:
 *   title, tagline, projectType, description, image, tags, size, category
 *   badge, featuredOrder
 *
 * To manage external URLs (what opens on card click), edit:
 *   src/data/projectLinks.js  ← keyed by `folder` slug
 *
 * To add a project:
 *   1. Add an entry to `projectEntries` below with a `folder` key
 *   2. Add its URL to `src/data/projectLinks.js` using the same folder value
 */

const projectEntries = [
  {
    title: "Rebuilding Design Foundation of ResumeHelp",
    tagline: "Fixing What Broke at Scale",
    projectType: "case-study",
    featuredOrder: 1,
    folder: "resume-help",
    description:
      "How I transformed a fragmented, inconsistent UI into a scalable, accessible, and developer-friendly design system to support rapid product growth.",
    primaryButton: {
      label: "See it in Action",
      url: "https://www.resumehelp.com"
    },
    secondaryButton: {
      label: "View Case Study",
      url: "https://www.behance.net/gallery/248642551/Rebuilding-ResumeHelps-Design-Foundation"
    },
    image: "/assets/projects/thumbnails/rh_designsystem.jpg",
    tags: ["UX", "DESIGN SYSTEM", "FIGMA"],
    size: "small",
    category: ["UI/UX Design"],
  },

  {
    title: "Obsidian — React Portfolio",
    tagline: "Premium Dark-Themed Template",
    projectType: "case-study",
    folder: "portfolio-v1",
    description: "A premium dark-themed portfolio template built for developers — driven by JSON config, atmospheric glow lighting, and a per-page color system that makes every section feel alive.",
    quickContext: {
      Role: "Design & Development",
      Type: "Commercial Template",
      Pages: "5 Unique Pages"
    },
    primaryButton: {
      label: "See it in Action",
      url: "https://obsidian-react-portfolio.netlify.app/"
    },
    secondaryButton: {
      label: "View Case Study",
      url: "https://www.behance.net/gallery/250532981/Obsidian-Dark-Portfolio-UI-UX-Design"
    },
    image: "/assets/projects/thumbnails/obsidian_portfolio.jpg",
    tags: ["React", "Vite", "Tailwind CSS", "UI Design", "Template"],
    size: "featured",
    category: ["UI/UX Design"],
  },
  {
    title: "Resume Nerd",
    projectType: "coding",
    featuredOrder: 2,
    folder: "resume-nerd",
    description:
      "An online resume and cover letter builder. I worked on UI redesigns, page-level updates, and HTML/CSS improvements across multiple sections.",
    image: "/assets/projects/thumbnails/nerd_thumbnail.png",
    tags: ["HTML/CSS", "UI DESIGN", "FIGMA"],
    size: "small",
    category: ["UI/UX Design"],
  },
  {
    title: "Amazon Product Listing — Zalvio Kitchen",
    projectType: "case-study",
    folder: "graphic-design",
    description: "A consolidated archive of branding, social media overhauls, print, and packaging design across multiple clients.",
    primaryButton: {
      label: "View on Behance",
      url: "https://www.behance.net/gallery/251297019/Amazon-Product-Listing-Design-Zalvio-Kitchen"
    },
    image: "/assets/projects/thumbnails/graphic_design_thumbnail.png",
    tags: ["BRANDING", "SOCIAL MEDIA", "PRINT"],
    size: "small",
    category: ["Graphic Design"],
  },
  {
    title: "BOLD India",
    projectType: "case-study",
    featuredOrder: 3,
    folder: "bold-india",
    description:
      "Bold India is an internal website for employee onboarding and India-specific company policies. I designed and built it using HTML/CSS, created a UI kit from Bold.com for brand consistency, and published it on Google Sites.",
    image: "/assets/projects/thumbnails/bold_india_thumbnail.png",
    tags: ["WEB DESIGN", "HTML / CSS", "UI KIT", "GOOGLE SITES"],
    size: "featured",
    category: ["UI/UX Design"],
  },
];

const projects = projectEntries.map((project, index) => ({
  ...project,
  id: project.id || index + 1,
  slug: project.folder || slugifyProjectTitle(project.title),
}));

export const getProjectBySlug = (slug) =>
  projects.find((project) => project.slug === slug);

export const featuredProjects = [...projects]
  .filter((project) => Number.isFinite(project.featuredOrder))
  .sort((a, b) => a.featuredOrder - b.featuredOrder);

export default projects;
