import React, { useEffect, useState } from "react";
import "./ProjectHtmlContent.css";

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
  root
    .querySelectorAll(BLOCKED_TAGS.join(","))
    .forEach((node) => node.remove());
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

const extractStylesheetUrls = (html, assetBaseUrl) => {
  const parser = new DOMParser();
  const parsedDocument = parser.parseFromString(html, "text/html");
  const urls = [];

  parsedDocument.querySelectorAll('link[rel="stylesheet"]').forEach((link) => {
    const href = link.getAttribute("href");
    if (!href) return;
    const resolved = sanitizeUri(href, assetBaseUrl);
    if (resolved) urls.push(resolved);
  });

  return urls;
};

const sanitizeProjectHtml = (
  html,
  assetBaseUrl,
  omitPrimaryHeading = false,
  injectedCss = "",
) => {
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

  const childrenNodes = Array.from(body.children);
  if (childrenNodes.length > 1) {
    const journeyWrapper = parsedDocument.createElement("div");
    journeyWrapper.className = "project-journey";
    for (let i = 1; i < childrenNodes.length; i++) {
      journeyWrapper.appendChild(childrenNodes[i]);
    }
    body.appendChild(journeyWrapper);
  }

  const styleBlock = injectedCss
    ? `<style data-project-css="true">${injectedCss}</style>`
    : "";

  const containerId = body.id ? ` id="${body.id}"` : "";
  const containerClass = body.className ? ` class="${body.className}"` : "";

  return (
    styleBlock +
    `<div${containerId}${containerClass}>` +
    body.innerHTML +
    `</div>`
  );
};

const ProjectHtmlContent = ({
  contentPath,
  title,
  omitPrimaryHeading = false,
}) => {
  const [html, setHtml] = useState("");
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let isMounted = true;

    const loadContent = async () => {
      if (!contentPath) {
        setHtml("");
        setStatus("error");
        return;
      }

      try {
        setHtml("");
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

        const cssUrls = extractStylesheetUrls(rawHtml, assetBaseUrl);
        const cssTexts = await Promise.all(
          cssUrls.map((url) =>
            fetch(url)
              .then((r) => (r.ok ? r.text() : ""))
              .catch(() => ""),
          ),
        );
        const injectedCss = cssTexts.join("\n");

        const safeHtml = sanitizeProjectHtml(
          rawHtml,
          assetBaseUrl,
          omitPrimaryHeading,
          injectedCss,
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

  useEffect(() => {
    if (status !== "ready" || !html) return;

    let observer = null;
    let journeyNodes = document.querySelectorAll(
      ".project-journey > section, .project-journey article"
    );

    const timer = setTimeout(() => {
      journeyNodes = document.querySelectorAll(
        ".project-journey > section, .project-journey article"
      );

      if (!journeyNodes.length) return;

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-active-node");
            } else {
              entry.target.classList.remove("is-active-node");
            }
          });
        },
        { rootMargin: "-30% 0px -40% 0px" }
      );

      journeyNodes.forEach((node) => observer.observe(node));
    }, 20);

    return () => {
      clearTimeout(timer);
      if (observer) {
        journeyNodes.forEach((node) => observer.unobserve(node));
        observer.disconnect();
      }
    };
  });

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

  const handleHtmlClick = (e) => {
    const summary = e.target.closest("summary");
    if (summary) {
      const details = summary.parentElement;
      // If it is currently open, a click means it's about to close.
      if (details && details.hasAttribute("open")) {
        // Give the browser a tick to actually remove the content from the flow,
        // then smoothly scroll the remaining button back to the center of the screen.
        setTimeout(() => {
          details.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 50);
      }
    }
  };

  return (
    <>
      <div
        className="project-html-content"
        dangerouslySetInnerHTML={{ __html: html }}
        onClick={handleHtmlClick}
      />
    </>
  );
};

export default ProjectHtmlContent;
