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

const sanitizeProjectHtml = (html, assetBaseUrl, omitPrimaryHeading = false, injectedCss = "") => {
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

  const styleBlock = injectedCss
    ? `<style data-project-css="true">${injectedCss}</style>`
    : "";

  return styleBlock + body.innerHTML;
};

const ProjectHtmlContent = ({ contentPath, title, omitPrimaryHeading = false }) => {
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
    </>
  );
};

export default ProjectHtmlContent;
