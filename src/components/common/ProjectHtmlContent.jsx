import React, { useEffect, useState } from "react";

const BLOCKED_TAGS = [
  "script",
  "style",
  "link",
  "meta",
  "base",
  "iframe",
  "object",
  "embed",
  "form",
  "input",
  "button",
  "textarea",
  "select",
  "option",
  "svg",
  "math",
];

const removeBlockedNodes = (root) => {
  root.querySelectorAll(BLOCKED_TAGS.join(",")).forEach((node) => node.remove());
};

const sanitizeUri = (value, assetBaseUrl) => {
  if (!value) {
    return "";
  }

  const nextValue = value.trim();
  const lowerValue = nextValue.toLowerCase();

  if (
    lowerValue.startsWith("javascript:") ||
    lowerValue.startsWith("vbscript:") ||
    lowerValue.startsWith("data:text/html")
  ) {
    return "";
  }

  if (
    lowerValue.startsWith("#") ||
    lowerValue.startsWith("mailto:") ||
    lowerValue.startsWith("tel:")
  ) {
    return nextValue;
  }

  try {
    return new URL(nextValue, assetBaseUrl).toString();
  } catch {
    return "";
  }
};

const sanitizeProjectHtml = (html, assetBaseUrl, omitPrimaryHeading = false) => {
  const parser = new DOMParser();
  const parsedDocument = parser.parseFromString(html, "text/html");
  const { body } = parsedDocument;

  removeBlockedNodes(body);

  if (omitPrimaryHeading) {
    const primaryHeading = body.querySelector("h1");

    if (primaryHeading) {
      primaryHeading.remove();
    }
  }

  body.querySelectorAll("*").forEach((element) => {
    [...element.attributes].forEach((attribute) => {
      const attrName = attribute.name.toLowerCase();

      if (
        attrName.startsWith("on") ||
        attrName === "style" ||
        attrName === "srcdoc"
      ) {
        element.removeAttribute(attribute.name);
      }
    });

    if (element instanceof HTMLAnchorElement) {
      const href = sanitizeUri(element.getAttribute("href"), assetBaseUrl);

      if (!href) {
        element.removeAttribute("href");
      } else {
        element.setAttribute("href", href);
      }

      if (href && !href.startsWith("#")) {
        element.setAttribute("target", "_blank");
        element.setAttribute("rel", "noopener noreferrer");
      }
    }

    if (
      element instanceof HTMLImageElement ||
      element instanceof HTMLSourceElement ||
      element instanceof HTMLVideoElement
    ) {
      const src = sanitizeUri(element.getAttribute("src"), assetBaseUrl);

      if (src) {
        element.setAttribute("src", src);
      } else {
        element.removeAttribute("src");
      }
    }

    if (element instanceof HTMLImageElement) {
      const alt = element.getAttribute("alt");

      if (alt === null) {
        element.setAttribute("alt", "");
      }
    }

    if (element instanceof HTMLVideoElement) {
      const poster = sanitizeUri(element.getAttribute("poster"), assetBaseUrl);

      if (poster) {
        element.setAttribute("poster", poster);
      } else {
        element.removeAttribute("poster");
      }

      element.setAttribute("controls", "true");
      element.setAttribute("playsinline", "true");
    }
  });

  return body.innerHTML;
};

const ProjectHtmlContent = ({ contentPath, title, omitPrimaryHeading = false }) => {
  const [html, setHtml] = useState("");
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let isMounted = true;

    const loadContent = async () => {
      try {
        setStatus("loading");

        const requestUrl = new URL(
          contentPath.replace(/^\//, ""),
          `${window.location.origin}${import.meta.env.BASE_URL}`,
        );
        const response = await fetch(requestUrl.toString(), {
          headers: {
            Accept: "text/html",
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to load ${contentPath}`);
        }

        const rawHtml = await response.text();
        const assetBaseUrl = new URL("./", requestUrl).toString();
        const safeHtml = sanitizeProjectHtml(
          rawHtml,
          assetBaseUrl,
          omitPrimaryHeading,
        );

        if (!isMounted) {
          return;
        }

        setHtml(safeHtml);
        setStatus("ready");
      } catch {
        if (!isMounted) {
          return;
        }

        setHtml("");
        setStatus("error");
      }
    };

    loadContent();

    return () => {
      isMounted = false;
    };
  }, [contentPath, omitPrimaryHeading]);

  if (status === "loading") {
    return (
      <div className="project-html-state">
        <p>Loading project content...</p>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="project-html-state">
        <p>{`Content for ${title} is not available yet.`}</p>
      </div>
    );
  }

  return (
    <>
      <div
        className="project-html-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      <style jsx="true">{`
        .project-html-state {
          min-height: 180px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          border: 1px dashed var(--border-color);
          border-radius: var(--border-radius-lg);
          background: color-mix(in srgb, var(--color-bg-soft) 55%, transparent);
          color: var(--text-muted);
          text-align: center;
        }

        .project-html-content {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          color: var(--color-text);
        }

        .project-html-content section,
        .project-html-content article {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding: 1.75rem 0;
          padding-top: 2.75rem;
          border: 0;
          border-top: 1px solid var(--border-color);
          background: transparent;
        }

        .project-html-content section:first-child,
        .project-html-content article:first-child {
          padding-top: 0;
          border-top: 0;
        }

        .project-html-content h1,
        .project-html-content h2,
        .project-html-content h3,
        .project-html-content h4 {
          line-height: 1.15;
          letter-spacing: -0.03em;
        }

        .project-html-content h1 {
          font-size: clamp(1.8rem, 3vw, 2.8rem);
        }

        .project-html-content h2 {
          font-size: clamp(1.35rem, 2.2vw, 2rem);
        }

        .project-html-content h3 {
          font-size: 1.1rem;
        }

        .project-html-content p,
        .project-html-content li,
        .project-html-content figcaption,
        .project-html-content blockquote {
          color: var(--text-muted);
          line-height: 1.75;
        }

        .project-html-content ul,
        .project-html-content ol {
          padding-left: 0;
          list-style: none;
          display: grid;
          gap: 0.6rem;
        }

        .project-html-content li {
          position: relative;
          padding-left: 1.6rem;
        }

        .project-html-content li::before {
          content: "✦";
          position: absolute;
          top: 0.05rem;
          left: 0;
          color: var(--primary-color);
          font-size: 1.15rem;
          line-height: 1.4;
        }

        .project-html-content a {
          color: var(--primary-color);
          text-decoration: underline;
          text-underline-offset: 0.18em;
        }

        .project-html-content strong {
          color: var(--color-text);
        }

        .project-html-content figure {
          display: grid;
          gap: 0.75rem;
        }

        .project-html-content img,
        .project-html-content video {
          width: 100%;
          border-radius: 1rem;
          border: 1px solid var(--border-color);
          background: rgba(0, 0, 0, 0.24);
          object-fit: cover;
        }

        .project-html-content hr {
          border: 0;
          border-top: 1px solid var(--border-color);
        }

        .project-html-content .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 1rem;
          margin-top: 1rem;
        }

        .project-html-content .stats-grid div {
          padding: 1.5rem;
          border-radius: 1rem;
          border: 1px solid color-mix(in srgb, var(--primary-color) 24%, var(--border-color));
          background: linear-gradient(
            180deg,
            color-mix(in srgb, var(--color-bg-soft) 78%, transparent) 0%,
            color-mix(in srgb, var(--color-card-alt) 92%, transparent) 100%
          );
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
        }

        .project-html-content .stats-grid strong {
          display: block;
          margin-bottom: 0.35rem;
          font-size: 1.25rem;
        }
      `}</style>
    </>
  );
};

export default ProjectHtmlContent;
