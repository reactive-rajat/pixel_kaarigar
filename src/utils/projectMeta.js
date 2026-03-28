const VIDEO_FILE_PATTERN = /\.(mp4|webm|ogg|mov|m4v|mkv)(\?.*)?$/i;
const GITHUB_REPO_PATTERN =
  /^https?:\/\/github\.com\/([^/]+)\/([^/#?]+?)(?:\.git)?(?:[/?#].*)?$/i;

export const slugifyProjectTitle = (value = "") =>
  value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const isVideoPath = (path = "") => VIDEO_FILE_PATTERN.test(path);

export const getProjectCategories = (project) =>
  Array.isArray(project.category) ? project.category : [project.category];

export const getProjectLinks = (project) => ({
  liveUrl: project.liveUrl || project.url || "",
  repoUrl: project.repoUrl || project.githubUrl || "",
  previewUrl: project.previewUrl || project.embedUrl || "",
});

export const getStackBlitzPreviewUrl = (repoUrl = "") => {
  const match = repoUrl.match(GITHUB_REPO_PATTERN);

  if (!match) {
    return "";
  }

  const [, owner, repoName] = match;
  const repo = repoName.replace(/\.git$/i, "");

  return `https://stackblitz.com/github/${owner}/${repo}?embed=1&ctl=1&view=preview`;
};

export const getProjectPreview = (project) => {
  const categories = getProjectCategories(project);
  const mediaSrc = project.image || "";
  const { liveUrl, repoUrl, previewUrl } = getProjectLinks(project);

  if (project.projectType === "motion" && isVideoPath(mediaSrc)) {
    return {
      type: "video",
      src: mediaSrc,
      label: "Motion preview",
      note: "Inline playback of the shipped motion piece.",
    };
  }

  if (previewUrl) {
    return {
      type: "iframe",
      src: previewUrl,
      label: "Interactive preview",
      note: "Embedded preview sourced from the project's preview URL.",
    };
  }

  if (project.projectType === "coding" && liveUrl) {
    return {
      type: "iframe",
      src: liveUrl,
      label: "Live app preview",
      note: "Embedded from the public live deployment when iframe access is allowed.",
    };
  }

  const stackBlitzPreviewUrl = getStackBlitzPreviewUrl(repoUrl);

  if (project.projectType === "coding" && stackBlitzPreviewUrl) {
    return {
      type: "iframe",
      src: stackBlitzPreviewUrl,
      label: "Code preview",
      note: "Auto-generated StackBlitz preview from the linked GitHub repository.",
    };
  }

  if (categories.includes("Motion") && isVideoPath(mediaSrc)) {
    return {
      type: "video",
      src: mediaSrc,
      label: "Motion preview",
      note: "Inline playback of the shipped motion piece.",
    };
  }

  return null;
};
