import React, { useEffect, useMemo, useRef, useState } from "react";
import StatusBadge from "../components/common/StatusBadge";
import ProjectCard from "../components/common/ProjectCard";
import projects from "../data/projects";

const GRID_MIN_CARD_WIDTH = 280;
const GRID_GAP = 20;

const CARD_MAX_SPAN = {
  small: { col: 1, row: 1 },
  medium: { col: 2, row: 1 },
  large: { col: 2, row: 2 },
  full: { col: 2, row: 2 },
};

// Easy future config:
// [firstCardId, secondCardId] => keep both cards in same column, different rows.
const STACKED_CARD_PAIRS = [
  [2, 3], [4, 5],
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

    const firstIndex = orderedProjects.findIndex((project) => project.id === firstId);
    const secondIndex = orderedProjects.findIndex((project) => project.id === secondId);

    if (firstIndex === -1 || secondIndex === -1 || secondIndex === firstIndex + 1) {
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

const buildCardLayout = (projectList, columns, stackedPairLookup = new Map()) => {
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

    markPlaced(placement.row, placement.col, placement.colSpan, placement.rowSpan);
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

const Works = () => {
  const [filter, setFilter] = useState("All");
  const [columnCount, setColumnCount] = useState(1);
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
      [nextProjects[travelAppIndex], nextProjects[experimentalPlaygroundIndex]] =
        [
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
          A showcase of apps, design, and motion — simple ideas turned into polished digital work.
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
          <ProjectCard key={project.id} project={project} layout={layout} />
        ))}
      </div>

      <div className="works-cta">
        <div className="cta-glow"></div>
        <h3 className="cta-title">
          Have a crazy idea?
          <br />
          <span className="primary-text">Let's build it.</span>
        </h3>
        <button className="cta-btn">
          <span className="material-symbols-outlined">handshake</span>
          <span>Let's work together</span>
        </button>
      </div>

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

        @media (hover: none) {
          .filter-chip:hover,
          .cta-btn:hover {
            transform: none;
            box-shadow: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Works;
