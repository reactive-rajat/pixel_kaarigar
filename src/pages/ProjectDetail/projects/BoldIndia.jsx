import React from "react";
import { ProjectJourney, ProjectSection, TopicHeader, TopicCover, TopicDetails, ArticleCard } from "../../../components/project";

const BoldIndia = () => {
  return (
    <div className="project-html-content project-content-wrapper">
      <ProjectSection theme="primary" noJourney={true}>
        <div className="py-10">
          <div className="grid gap-7">
            <h2 className="h2 text-center">BOLD India</h2>
            <p className="body-lg text-muted max-w-2xl text-center mx-auto">
              BOLD India was created as an internal employee-facing site for onboarding
              and region-specific company information. The challenge was to make a
              utility-heavy destination still feel aligned with the broader brand.
            </p>
            <div className="stats-grid mt-8 border-(--color-border) border-t pt-8">
              <div>
                <strong>Role</strong>
                <p>Design and front-end build for the India-focused internal site.</p>
              </div>
              <div>
                <strong>Platform</strong>
                <p>Google Sites with a custom UI kit built around Bold brand patterns.</p>
              </div>
              <div>
                <strong>Need</strong>
                <p>Clear onboarding, policy access, and internal trust through structure.</p>
              </div>
            </div>
          </div>
        </div>
      </ProjectSection>

      <ProjectJourney>
        <ProjectSection id="highlights" theme="danger">
          <TopicHeader title="Case Study Highlights" />
          <TopicCover>
            <ul className="card-1 card-sm border flex flex-col gap-4 !pl-5">
              <li className="flex gap-3 items-start">
                <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2"></div>
                <div className="font-semibold text-(--color-text)">Translated brand cues from Bold.com into a reusable UI kit for internal content.</div>
              </li>
              <li className="flex gap-3 items-start">
                <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2"></div>
                <div className="font-semibold text-(--color-text)">Structured information so onboarding and reference materials were easier to scan.</div>
              </li>
              <li className="flex gap-3 items-start">
                <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2"></div>
                <div className="font-semibold text-(--color-text)">Built a site that felt more considered than a default internal documentation portal.</div>
              </li>
            </ul>
          </TopicCover>
        </ProjectSection>

        <ProjectSection id="outcome" theme="success">
          <TopicHeader title="Design Outcome" />
          <TopicCover>
            <p className="body max-w-2xl mx-auto text-muted text-center">
              The project showed that internal tools do not need to feel generic. Even
              in a constrained publishing environment, a clear visual system can raise
              trust and reduce friction for employees.
            </p>
          </TopicCover>
        </ProjectSection>
      </ProjectJourney>
    </div>
  );
};

export default BoldIndia;
