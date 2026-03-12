import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import StatusBadge from "../components/common/StatusBadge";
import ProjectCard from "../components/common/ProjectCard";
import projects from "../data/projects";

const GRID_MIN_CARD_WIDTH = 280;
const GRID_GAP = 20;
const MOBILE_BREAKPOINT = 768;

const CARD_MAX_SPAN = {
  small: { col: 1, row: 1 },
  medium: { col: 2, row: 1 },
  large: { col: 2, row: 2 },
  full: { col: 2, row: 2 },
};

// Easy future config:
// [firstCardId, secondCardId] => keep both cards in same column, different rows.
const STACKED_CARD_PAIRS = [
  [2, 3],
  [4, 5],
];

const STACKED_PAIR_LOOKUP = new Map(
  STACKED_CARD_PAIRS.map(([firstId, secondId]) => [firstId, secondId]),
);

const applyStackedPairOrder = (projectList, stackedPairs) => {
  const orderedProjects = [...projectList];

  stackedPairs.forEach(([firstId, secondId]) => {
    if (firstId === secondId) {
      return;
    }

    const firstIndex = orderedProjects.findIndex(
      (project) => project.id === firstId,
    );
    const secondIndex = orderedProjects.findIndex(
      (project) => project.id === secondId,
    );

    if (
      firstIndex === -1 ||
      secondIndex === -1 ||
      secondIndex === firstIndex + 1
    ) {
      return;
    }

    const [secondProject] = orderedProjects.splice(secondIndex, 1);
    const updatedFirstIndex = orderedProjects.findIndex(
      (project) => project.id === firstId,
    );

    orderedProjects.splice(updatedFirstIndex + 1, 0, secondProject);
  });

  return orderedProjects;
};

const getSpanOptions = (size, columns) => {
  const maxSpan = CARD_MAX_SPAN[size] || CARD_MAX_SPAN.small;
  const maxCol = Math.min(maxSpan.col, columns);

  if (maxSpan.row === 2) {
    if (maxCol === 2) {
      return [
        { col: 2, row: 2 },
        { col: 1, row: 2 },
        { col: 1, row: 1 },
      ];
    }

    return [
      { col: 1, row: 2 },
      { col: 1, row: 1 },
    ];
  }

  if (maxCol === 2) {
    return [
      { col: 2, row: 1 },
      { col: 1, row: 1 },
    ];
  }

  return [{ col: 1, row: 1 }];
};

const buildCardLayout = (
  projectList,
  columns,
  stackedPairLookup = new Map(),
) => {
  const totalColumns = Math.max(1, columns);
  const occupied = [];

  const ensureRow = (rowIndex) => {
    while (occupied.length <= rowIndex) {
      occupied.push(Array(totalColumns).fill(false));
    }
  };

  const canPlace = (row, col, colSpan, rowSpan) => {
    if (col + colSpan > totalColumns) {
      return false;
    }

    for (let rowIndex = row; rowIndex < row + rowSpan; rowIndex += 1) {
      ensureRow(rowIndex);

      for (let colIndex = col; colIndex < col + colSpan; colIndex += 1) {
        if (occupied[rowIndex][colIndex]) {
          return false;
        }
      }
    }

    return true;
  };

  const markPlaced = (row, col, colSpan, rowSpan) => {
    for (let rowIndex = row; rowIndex < row + rowSpan; rowIndex += 1) {
      ensureRow(rowIndex);

      for (let colIndex = col; colIndex < col + colSpan; colIndex += 1) {
        occupied[rowIndex][colIndex] = true;
      }
    }
  };

  const findPlacement = (spanOptions) => {
    let row = 0;

    while (true) {
      for (let col = 0; col < totalColumns; col += 1) {
        for (const option of spanOptions) {
          if (!canPlace(row, col, option.col, option.row)) {
            continue;
          }

          return {
            row,
            col,
            colSpan: option.col,
            rowSpan: option.row,
          };
        }
      }

      row += 1;
    }
  };

  const findStackedPairPlacement = () => {
    let row = 0;

    while (true) {
      for (let col = 0; col < totalColumns; col += 1) {
        if (canPlace(row, col, 1, 1) && canPlace(row + 1, col, 1, 1)) {
          return { row, col };
        }
      }

      row += 1;
    }
  };

  const laidOutProjects = [];

  for (let index = 0; index < projectList.length; index += 1) {
    const project = projectList[index];
    const nextProject = projectList[index + 1];
    const secondCardId = stackedPairLookup.get(project.id);
    const isStackedPair = nextProject && secondCardId === nextProject.id;

    if (isStackedPair) {
      const pairPlacement = findStackedPairPlacement();

      markPlaced(pairPlacement.row, pairPlacement.col, 1, 1);
      laidOutProjects.push({
        project,
        layout: {
          columnStart: pairPlacement.col + 1,
          rowStart: pairPlacement.row + 1,
          colSpan: 1,
          rowSpan: 1,
        },
      });

      markPlaced(pairPlacement.row + 1, pairPlacement.col, 1, 1);
      laidOutProjects.push({
        project: nextProject,
        layout: {
          columnStart: pairPlacement.col + 1,
          rowStart: pairPlacement.row + 2,
          colSpan: 1,
          rowSpan: 1,
        },
      });

      index += 1;
      continue;
    }

    const spanOptions = getSpanOptions(project.size, totalColumns);
    const placement = findPlacement(spanOptions);

    markPlaced(
      placement.row,
      placement.col,
      placement.colSpan,
      placement.rowSpan,
    );
    laidOutProjects.push({
      project,
      layout: {
        columnStart: placement.col + 1,
        rowStart: placement.row + 1,
        colSpan: placement.colSpan,
        rowSpan: placement.rowSpan,
      },
    });
  }

  return laidOutProjects;
};

const ProjectDetailsModal = ({ project, onClose }) => {
  const categories = Array.isArray(project.category)
    ? project.category
    : [project.category];
  const categoryLabel = categories.filter(Boolean).join(" + ");
  const projectTags = Array.isArray(project.tags) ? project.tags : [];

  return (
    <div
      className="project-modal-overlay"
      role="presentation"
      onClick={onClose}
    >
      <div
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} details`}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="project-modal-close"
          aria-label="Close project details"
          onClick={onClose}
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className="project-modal-top">
          <div className="project-modal-heading">
            <span className="project-modal-category">{categoryLabel}</span>
            <h3 className="project-modal-title">{project.title}</h3>
          </div>

          {project.url ? (
            <a
              className="project-modal-link"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open project link"
            >
              <span className="material-symbols-outlined">arrow_outward</span>
            </a>
          ) : (
            <span className="project-modal-link disabled" aria-hidden="true">
              <span className="material-symbols-outlined">arrow_outward</span>
            </span>
          )}
        </div>

        <div className="project-modal-details">
          <p className="project-modal-desc">{project.description}</p>

          <div className="project-modal-tags">
            {projectTags.map((tag) => (
              <span key={tag} className="project-modal-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Works = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("All");
  const [columnCount, setColumnCount] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const gridElement = gridRef.current;

    if (!gridElement) {
      return;
    }

    const updateColumnCount = () => {
      const width = gridElement.clientWidth;
      const nextColumns = Math.max(
        1,
        Math.floor((width + GRID_GAP) / (GRID_MIN_CARD_WIDTH + GRID_GAP)),
      );

      setColumnCount((current) =>
        current === nextColumns ? current : nextColumns,
      );
    };

    updateColumnCount();

    if (typeof ResizeObserver !== "undefined") {
      const observer = new ResizeObserver(updateColumnCount);
      observer.observe(gridElement);

      return () => {
        observer.disconnect();
      };
    }

    window.addEventListener("resize", updateColumnCount);

    return () => {
      window.removeEventListener("resize", updateColumnCount);
    };
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`);

    const updateViewportMode = (event) => {
      const nextIsMobile =
        typeof event?.matches === "boolean"
          ? event.matches
          : mediaQuery.matches;

      setIsMobile(nextIsMobile);

      if (!nextIsMobile) {
        setActiveProject(null);
      }
    };

    updateViewportMode();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", updateViewportMode);

      return () => {
        mediaQuery.removeEventListener("change", updateViewportMode);
      };
    }

    mediaQuery.addListener(updateViewportMode);

    return () => {
      mediaQuery.removeListener(updateViewportMode);
    };
  }, []);

  useEffect(() => {
    if (!activeProject) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setActiveProject(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [activeProject]);

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => {
          const categories = Array.isArray(project.category)
            ? project.category
            : [project.category];
          return categories.includes(filter);
        });

  const orderedProjects = useMemo(() => {
    const nextProjects = [...filteredProjects];
    const travelAppIndex = nextProjects.findIndex(
      (project) => project.title === "Travel App",
    );
    const experimentalPlaygroundIndex = nextProjects.findIndex(
      (project) => project.title === "Experimental Playground",
    );

    if (
      travelAppIndex !== -1 &&
      experimentalPlaygroundIndex !== -1 &&
      travelAppIndex < experimentalPlaygroundIndex
    ) {
      [
        nextProjects[travelAppIndex],
        nextProjects[experimentalPlaygroundIndex],
      ] = [
        nextProjects[experimentalPlaygroundIndex],
        nextProjects[travelAppIndex],
      ];
    }

    return applyStackedPairOrder(nextProjects, STACKED_CARD_PAIRS);
  }, [filteredProjects]);

  const laidOutProjects = useMemo(
    () => buildCardLayout(orderedProjects, columnCount, STACKED_PAIR_LOOKUP),
    [orderedProjects, columnCount],
  );

  return (
    <section className="works-section container">
      <div className="works-header">
        <div className="header-left">
          <StatusBadge text="Featured" />
          <h2 className="section-title">
            Selected <br />
            <span className="primary-text">Projects</span>
          </h2>
        </div>
        <p className="header-desc">
          A showcase of apps, design, and motion — simple ideas turned into
          polished digital work.
        </p>
      </div>

      <div className="filter-chips">
        {["All", "Apps", "Design", "Motion"].map((cat) => (
          <button
            key={cat}
            className={`filter-chip ${filter === cat ? "active" : ""}`}
            onClick={() => setFilter(cat)}
          >
            <span>{cat}</span>
          </button>
        ))}
      </div>

      <div
        className="projects-grid"
        ref={gridRef}
        style={{ "--grid-columns": columnCount }}
      >
        {laidOutProjects.map(({ project, layout }) => (
          <ProjectCard
            key={project.id}
            project={project}
            layout={layout}
            isMobile={isMobile}
            onMobileCardTap={setActiveProject}
          />
        ))}
      </div>

      <div className="works-cta">
        <div className="cta-glow"></div>
        <h3 className="cta-title">
          Have a crazy idea?
          <br />
          <span className="primary-text">Let's build it.</span>
        </h3>
        <button className="cta-btn" type="button" onClick={() => navigate("/contact")}>
          <span className="material-symbols-outlined">handshake</span>
          <span>Let's work together</span>
        </button>
      </div>

      {isMobile && activeProject && (
        <ProjectDetailsModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}

      <style jsx="true">{`
        .works-section {
          padding-top: 10rem;
          padding-bottom: 8rem;
        }

        .works-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 4rem;
          gap: 2rem;
        }

        .section-label {
          color: var(--primary-color);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-size: 0.875rem;
          margin-bottom: 0.5rem;
        }

        .section-title {
          font-size: 5rem;
          font-weight: 900;
          line-height: 0.9;
          letter-spacing: -0.04em;
        }

        .header-desc {
          font-size: 1.25rem;
          color: var(--text-muted);
          max-width: 480px;
          text-align: right;
          line-height: 1.6;
        }

        .filter-chips {
          display: flex;
          gap: 1rem;
          margin-bottom: 4rem;
          padding-bottom: 1rem;
          flex-wrap: wrap;
        }

        .filter-chip {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          color: var(--text-muted);
          border-radius: var(--border-radius-full);
          font-weight: 700;
          font-size: 0.875rem;
          transition: all 0.3s;
          white-space: nowrap;
        }

        .filter-chip:hover {
          border-color: var(--primary-color);
          transform: scale(1.05);
        }

        .filter-chip.active {
          background: var(--primary-color);
          color: white;
          border-color: var(--primary-color);
          box-shadow: 0 10px 20px var(--primary-glow);
        }

        .projects-grid {
          --grid-columns: 1;
          display: grid;
          width: 100%;
          grid-template-columns: repeat(var(--grid-columns), minmax(0, 1fr));
          grid-auto-rows: clamp(180px, 16vw, 240px);
          gap: 1.25rem;
          grid-auto-flow: dense;
          align-items: stretch;
        }

        .works-cta {
          position: relative;
          margin-top: 8rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
          text-align: center;
        }

        .cta-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 300px;
          height: 300px;
          background: var(--primary-glow);
          filter: blur(80px);
          z-index: -1;
        }

        .cta-title {
          font-size: 3rem;
          font-weight: 700;
          line-height: 1.2;
        }

        .primary-text {
          color: var(--primary-color);
        }

        .cta-btn {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem 2.5rem;
          background: white;
          color: var(--background-dark);
          border-radius: var(--border-radius-full);
          font-weight: 700;
          font-size: 1.125rem;
          transition: all 0.3s;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }

        .cta-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 20px 60px var(--primary-glow);
        }

        .project-modal-overlay {
          position: sticky;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          background: rgba(7, 5, 10, 0.75);
          backdrop-filter: blur(4px);
          z-index: 1300;
        }

        .project-modal {
          position: relative;
          width: min(560px, 100%);
          border-radius: 18px;
          border: 1px solid var(--border-color);
          background: rgba(17, 12, 26, 0.98);
          padding: 1.25rem;
          box-shadow: 0 24px 50px rgba(0, 0, 0, 0.45);
        }

        .project-modal-close {
          position: fixed;
          top: 6rem;
          right: 1rem;
          width: 3rem;
          height: 3rem;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.16);
          color: #ffffff;
          background: rgba(7, 5, 12, 0.85);
        }

        .project-modal-close .material-symbols-outlined {
          font-size: 1.05rem;
        }

        .project-modal-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 0.75rem;
          margin-bottom: 1rem;
          padding-right: 2.25rem;
        }

        .project-modal-heading {
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
        }

        .project-modal-category {
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          font-weight: 700;
          color: var(--primary-color);
        }

        .project-modal-title {
          font-size: 1.35rem;
          line-height: 1.2;
          font-weight: 800;
          color: #ffffff;
        }

        .project-modal-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 46px;
          height: 46px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.18);
          background: rgba(255, 255, 255, 0.08);
          color: #ffffff;
          flex-shrink: 0;
        }

        .project-modal-link .material-symbols-outlined {
          font-size: 1.3rem;
        }

        .project-modal-link.disabled {
          opacity: 0.45;
        }

        .project-modal-details {
          display: flex;
          flex-direction: column;
          gap: 0.95rem;
        }

        .project-modal-desc {
          color: rgba(255, 255, 255, 0.76);
          font-size: 0.92rem;
          line-height: 1.6;
        }

        .project-modal-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .project-modal-tag {
          font-size: 0.66rem;
          font-weight: 700;
          text-transform: uppercase;
          border-radius: var(--radius-pill);
          padding: 0.34rem 0.75rem;
          color: #f0e7ff;
          border: 1px solid rgba(255, 255, 255, 0.16);
          background: rgba(255, 255, 255, 0.08);
        }

        @media (max-width: 1024px) {
          .works-header {
            flex-direction: column;
            align-items: flex-start;
            text-align: left;
          }

          .header-desc {
            text-align: left;
          }

          .section-title {
            font-size: 3.5rem;
          }

          .projects-grid {
            grid-auto-rows: clamp(170px, 28vw, 220px);
            gap: 1rem;
          }
        }

        @media (max-width: 640px) {
          .header-left {
            text-align: center;
            font-size: 2.5rem;
            display: grid;
            gap: 2rem;
            justify-content: center;
            width: 100%;
          }

          .status-badge {
            margin: 0 auto;
          }

          .project-modal-overlay {
            height: 100dvh;
            top: 0;
            left: 0;
            align-items: flex-end;
            padding-top: 10rem;
            padding-bottom: 2rem;
          }

          .project-modal-top {
            padding-right: 0;
          }

          .works-section {
            padding-top: 7.5rem;
            padding-bottom: 5rem;
          }

          .section-title {
            font-size: 2.4rem;
            line-height: 1;
          }

          .header-desc {
            font-size: 1rem;
            max-width: 100%;
            text-align: center;
          }

          .filter-chips {
            gap: 0.65rem;
            margin-bottom: 2.25rem;
          }

          .filter-chip {
            padding: 0.68rem 1rem;
            font-size: 0.82rem;
          }

          .projects-grid {
            gap: 0.9rem;
            grid-auto-rows: 210px;
          }

          .works-cta {
            margin-top: 4.5rem;
            gap: 1.4rem;
          }

          .cta-title {
            font-size: 2rem;
          }

          .cta-btn {
            width: 100%;
            justify-content: center;
            padding: 1rem 1.25rem;
            font-size: 1rem;
          }
        }

        @media (max-width: 768px) {
          .filter-chip:hover,
          .cta-btn:hover {
            transform: none;
            box-shadow: none;
          }

          .filter-chip:hover {
            border-color: var(--border-color);
            background: rgba(255, 255, 255, 0.03);
            color: var(--text-muted);
          }

          .filter-chip.active:hover {
            border-color: var(--primary-color);
            background: var(--primary-color);
            color: white;
            box-shadow: 0 10px 20px var(--primary-glow);
          }

          .cta-btn:hover {
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
          }
        }
      `}</style>
    </section>
  );
};

export default Works;
