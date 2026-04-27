import React from "react";
import { ProjectJourney, ProjectSection, TopicHeader, TopicCover } from "../../../components/project";

const ResumeNerd = () => {
  return (
    <div className="project-html-content project-content-wrapper">
      <ProjectSection theme="primary" noJourney={true}>
        <div className="py-10">
          <div className="grid gap-7">
            <h2 className="h2 text-center">ResumeNerd</h2>
            <p className="body-lg text-muted max-w-2xl text-center mx-auto">
              ResumeNerd is a resume and cover-letter builder where the emphasis was on
              incremental UI refinement and practical front-end improvements inside an
              established product.
            </p>
            <div className="stats-grid mt-8 border-(--color-border) border-t pt-8">
              <div>
                <strong>Role</strong>
                <p>Front-end UI updates and interface polish.</p>
              </div>
              <div>
                <strong>Scope</strong>
                <p>HTML and CSS improvements across key product surfaces.</p>
              </div>
              <div>
                <strong>Outcome</strong>
                <p>Sharper presentation without reworking the product from scratch.</p>
              </div>
            </div>
          </div>
        </div>
      </ProjectSection>

      <ProjectJourney>
        <ProjectSection id="key-work" theme="danger">
          <TopicHeader title="Key Work" />
          <TopicCover>
            <ul className="card-1 card-sm border flex flex-col gap-4 !pl-5">
              <li className="flex gap-3 items-start">
                <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2"></div>
                <div className="font-semibold text-(--color-text)">Improved visual hierarchy in resume-building flows and supporting screens.</div>
              </li>
              <li className="flex gap-3 items-start">
                <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2"></div>
                <div className="font-semibold text-(--color-text)">Tightened spacing, typography, and alignment to make forms feel more intentional.</div>
              </li>
              <li className="flex gap-3 items-start">
                <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2"></div>
                <div className="font-semibold text-(--color-text)">Shipped practical CSS updates that made the product look cleaner without adding fragility.</div>
              </li>
            </ul>
          </TopicCover>
        </ProjectSection>

        <ProjectSection id="lessons" theme="success">
          <TopicHeader title="Lessons" />
          <TopicCover>
            <p className="body max-w-2xl mx-auto text-muted text-center">
              Mature products benefit from focused polish work. Even when architecture
              stays the same, small interface corrections can materially improve trust
              and readability for end users.
            </p>
          </TopicCover>
        </ProjectSection>
      </ProjectJourney>
    </div>
  );
};

export default ResumeNerd;
