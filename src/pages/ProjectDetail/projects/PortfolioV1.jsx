import React from "react";
import { ProjectJourney, ProjectSection, TopicHeader, TopicCover } from "../../../components/project";

const PortfolioV1 = () => {
  return (
    <div className="project-html-content project-content-wrapper">
      <ProjectSection theme="primary" noJourney={true}>
        <div className="py-10">
          <div className="grid gap-7">
            <h2 className="h2 text-center">Portfolio v1</h2>
            <p className="body-lg text-muted max-w-2xl text-center mx-auto">
              This version of the portfolio explored a more playful visual direction
              with motion-heavy interactions, layered scenes, and a more experimental
              browsing experience.
            </p>
            <div className="stats-grid mt-8 border-(--color-border) border-t pt-8">
              <div>
                <strong>Role</strong>
                <p>Concept, design, and front-end implementation.</p>
              </div>
              <div>
                <strong>Tools</strong>
                <p>Three.js, GSAP, responsive layout tuning, animation sequencing.</p>
              </div>
              <div>
                <strong>Goal</strong>
                <p>Turn the portfolio itself into a memorable interactive piece.</p>
              </div>
            </div>
          </div>
        </div>
      </ProjectSection>

      <ProjectJourney>
        <ProjectSection id="build-approach" theme="danger">
          <TopicHeader title="Build Approach" />
          <TopicCover>
            <ul className="card-1 card-sm border flex flex-col gap-4 !pl-5">
              <li className="flex gap-3 items-start">
                <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2"></div>
                <div className="font-semibold text-(--color-text)">Used motion and scene composition to create a stronger sense of personality.</div>
              </li>
              <li className="flex gap-3 items-start">
                <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2"></div>
                <div className="font-semibold text-(--color-text)">Balanced visual richness with enough clarity for the work itself to remain readable.</div>
              </li>
              <li className="flex gap-3 items-start">
                <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2"></div>
                <div className="font-semibold text-(--color-text)">Focused on transitions, pacing, and reveal order instead of static presentation only.</div>
              </li>
            </ul>
          </TopicCover>
        </ProjectSection>

        <ProjectSection id="takeaway" theme="success">
          <TopicHeader title="Takeaway" />
          <TopicCover>
            <p className="body max-w-2xl mx-auto text-muted text-center">
              The project was valuable as a creative sandbox. It helped test how far a
              personal site could lean into interaction before usability started to
              suffer, and that tradeoff directly informed later portfolio decisions.
            </p>
          </TopicCover>
        </ProjectSection>
      </ProjectJourney>
    </div>
  );
};

export default PortfolioV1;
