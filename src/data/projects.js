import { slugifyProjectTitle } from "../utils/projectMeta";

// Supported fields:
// - projectType: "coding" | "case-study" | "motion"
// - url/liveUrl: public live link
// - previewUrl/embedUrl: iframe-safe preview URL
// - repoUrl/githubUrl: repository URL used for code references and preview fallback
// - folderPath/folder: project detail content location inside `public/projects`
//
// Editing flow (New JSX Component Architecture):
// 1. Create a JSX component like `src/pages/ProjectDetail/projects/MyNewProject.jsx`
// 2. Add an import to `projectComponents` in `src/pages/ProjectDetail/ProjectDetail.jsx`
// 3. Add a project entry below with `folder: "my-new-project"` (this string must exactly match the key you added in `ProjectDetail.jsx`)
//
// To change a project name, simply update the `title` field below.
// To remove a project, delete its entry from the `projectEntries` array.
const PROJECTS_BASE_PATH = "/projects";

const trimTrailingSlash = (value = "") => value.replace(/\/+$/, "");

const getFolderNameFromPath = (value = "") =>
  trimTrailingSlash(value).split("/").filter(Boolean).pop() || "";

const getProjectFolderPath = (project) => {
  if (project.folderPath) {
    const normalizedPath = trimTrailingSlash(project.folderPath);

    if (normalizedPath.startsWith("/")) {
      return normalizedPath;
    }

    return `${PROJECTS_BASE_PATH}/${normalizedPath}`;
  }

  if (project.folder) {
    return `${PROJECTS_BASE_PATH}/${trimTrailingSlash(project.folder)}`;
  }

  return `${PROJECTS_BASE_PATH}/${slugifyProjectTitle(project.title)}`;
};

const projectEntries = [
  {
    title: "Fixing What Broke at Scale: Rebuilding ResumeHelp's Design Foundation",
    projectType: "case-study",
    featuredOrder: 1,
    folder: "resume-help",
    url: "https://resumehelp.com/",
    description:
      "How I transformed a fragmented, inconsistent UI into a scalable, accessible, and developer-friendly design system to support rapid product growth.",
    quickContext: {
      Role: "Lead UI/UX Designer",
      Timeline: "3 Months",
      Deliverables: "UI Audit, Design Tokens, Component Library, Developer Specs"
    },
    image: "/assets/projects/thumbnails/resumehelp_thumbnail.png",
    tags: ["UX", "DESIGN SYSTEM", "FIGMA"],
    size: "large",
    category: ["Case Study"],
  },

  {
    title: "Portfolio v1",
    projectType: "coding",
    folder: "portfolio-v1",
    url: "https://imrajat.netlify.app/",
    description: "A retro-style portfolio playground built with Three.js.",
    image: "/assets/projects/thumbnails/portfolio_v1_thumbnail.png",
    tags: ["Three.js", "GSAP"],
    size: "medium",
    category: ["Apps"],
  },
  {
    title: "Resume Nerd",
    projectType: "coding",
    featuredOrder: 2,
    folder: "resume-nerd",
    url: "https://www.resumenerd.com/",
    description:
      "It is an online resume and cover letter builder. I worked on UI updates and some HTML/CSS improvements.",
    image: "/assets/projects/thumbnails/nerd_thumbnail.png",
    tags: ["HTML/CSS", "UI DESIGN", "FIGMA"],
    size: "medium",
    category: ["Apps", "Design"],
  },
  {
    title: "Graphic & Marketing Design",
    projectType: "case-study",
    folder: "graphic-design",
    url: "",
    description: "A consolidated archive of branding, social media overhauls, print, and packaging design across multiple clients.",
    image: "/assets/projects/thumbnails/graphic_design_thumbnail.png",
    tags: ["BRANDING", "SOCIAL MEDIA", "PRINT"],
    size: "small",
    category: ["Design"],
  },
  {
    title: "Wedding Invite",
    projectType: "motion",
    folder: "wedding-invite",
    description:
      "A custom animated wedding invitation video created for a special celebration.",
    image: "/assets/projects/thumbnails/harshit_himanshi_invite.mp4",
    tags: ["VIDEO", "INVITATION"],
    size: "small",
    category: ["Motion"],
  },
  {
    title: "BOLD India",
    projectType: "case-study",
    featuredOrder: 3,
    folder: "bold-india",
    url: "https://www.india.bold.com/",
    description:
      "Bold India is an internal website for employee onboarding and India-specific company policies. I designed and built it using HTML/CSS, created a UI kit from Bold.com for brand consistency, and published it on Google Sites.",
    image: "/assets/projects/thumbnails/bold_india_thumbnail.png",
    tags: ["WEB DESIGN", "HTML / CSS", "UI KIT", "GOOGLE SITES"],
    size: "large",
    category: ["Apps", "Design"],
  },
];

const projects = projectEntries.map((project, index) => {
  const folderPath = getProjectFolderPath(project);
  const folderName = getFolderNameFromPath(folderPath);
  const slug =
    project.slug || folderName || slugifyProjectTitle(project.title);

  return {
    ...project,
    id: project.id || index + 1,
    slug,
    folder: folderName,
    folderPath,
    contentPath: project.contentPath || `${folderPath}/index.html`,
    liveUrl: project.liveUrl || project.url || "",
    repoUrl: project.repoUrl || project.githubUrl || "",
    previewUrl: project.previewUrl || project.embedUrl || "",
  };
});

export const getProjectBySlug = (slug) =>
  projects.find((project) => project.slug === slug);

export const featuredProjects = [...projects]
  .filter((project) => Number.isFinite(project.featuredOrder))
  .sort((firstProject, secondProject) => {
    return firstProject.featuredOrder - secondProject.featuredOrder;
  });

export default projects;
