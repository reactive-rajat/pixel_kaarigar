import React from "react";
import { ProjectJourney, ProjectSection, TopicHeader, TopicCover } from "../../../components/project";

const Behance = () => {
  return (
    <div className="project-html-content project-content-wrapper">
      <ProjectSection theme="primary" noJourney={true}>
        <div className="py-10">
          <div className="grid gap-7">
            <h2 className="h2 text-center">Behance Showcase</h2>
            <p className="body-lg text-muted max-w-2xl text-center mx-auto">
              Behance acts as the extended design archive for this portfolio. It holds
              more visual explorations, branding work, and UI directions than the main
              site can reasonably surface.
            </p>
          </div>
        </div>
      </ProjectSection>

      <ProjectJourney>
        <ProjectSection id="why-it-exists" theme="danger">
          <TopicHeader title="Why It Exists" />
          <TopicCover>
            <ul className="card-1 card-sm border flex flex-col gap-4 !pl-5">
              <li className="flex gap-3 items-start">
                <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2"></div>
                <div className="font-semibold text-(--color-text)">Creates a broader design record beyond the featured work on the main site.</div>
              </li>
              <li className="flex gap-3 items-start">
                <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2"></div>
                <div className="font-semibold text-(--color-text)">Provides a place for experimental explorations and visual studies.</div>
              </li>
              <li className="flex gap-3 items-start">
                <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2"></div>
                <div className="font-semibold text-(--color-text)">Lets visitors go deeper into process snapshots and presentation-ready mockups.</div>
              </li>
            </ul>
          </TopicCover>
        </ProjectSection>

        <ProjectSection id="what-to-expect" theme="success">
          <TopicHeader title="What To Expect" />
          <TopicCover>
            <p className="body max-w-2xl mx-auto text-muted text-center">
              The Behance profile complements the portfolio rather than replacing it.
              The main site stays curated and focused, while Behance captures the wider
              range of design output.
            </p>
          </TopicCover>
        </ProjectSection>
      </ProjectJourney>
    </div>
  );
};

export default Behance;
