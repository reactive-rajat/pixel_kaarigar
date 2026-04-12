import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectCard from "../../components/common/ProjectCard/ProjectCard";
import projects from "../../data/projects.js";
import { getProjectCategories } from "../../utils/projectMeta.js";
import "./Works.css";

const GRID_MIN_CARD_WIDTH = 340;
const GRID_GAP = 20;

const CARD_MAX_SPAN = {
  small: { col: 1, row: 1 },
  medium: { col: 2, row: 1 },
  large: { col: 2, row: 2 },
  full: { col: 2, row: 2 },
};

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

const Works = () => {
  const navigate = useNavigate();
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
      : projects.filter((project) =>
          getProjectCategories(project).includes(filter),
        );

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
  const gridColumnClass = `projects-grid--columns-${Math.min(columnCount, 8)}`;

  return (
    <>
      <header className="works-section">
        <div className="container-lg hero-padding works-header">
          <div className="header-left">
            <h1 className="section-title">
              Work <br />
              That Solved
              <br />
              <span className="text-primary">Problems.</span>
            </h1>
            <p className="header-desc">
              Real problems, real decisions, real outcomes — this is how I think
              and what I make.
            </p>
          </div>
        </div>
      </header>

      <section style={{padding: "0"}}>
        <div className="container-lg filter-container">
        <div className="filter-chips">
          {["All", "Case Study", "UI & Dev", "Creative"].map((cat) => (
            <button
              key={cat}
              className={
                filter === cat
                  ? "btn btn-primary filter-chip"
                  : "btn btn-secondary filter-chip"
              }
              onClick={() => setFilter(cat)}
            >
              <span>{cat}</span>
            </button>
          ))}
        </div>
      </div>

      <div className={`container-lg projects-grid ${gridColumnClass}`} ref={gridRef}>
        {laidOutProjects.map(({ project, layout }) => (
          <ProjectCard
            key={project.id}
            project={project}
            layout={layout}
            onProjectOpen={() => navigate(`/project/${project.slug}`)}
          />
        ))}
      </div>
      </section>
    </>
  );
};

export default Works;
