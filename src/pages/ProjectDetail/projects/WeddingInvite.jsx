import React from "react";
import { ProjectJourney, ProjectSection, TopicHeader, TopicCover } from "../../../components/project";

const WeddingInvite = () => {
  return (
    <div className="project-html-content project-content-wrapper">
      <ProjectSection theme="primary" noJourney={true}>
        <div className="py-10">
          <div className="grid gap-7">
            <h2 className="h2 text-center">Wedding Invite</h2>
            <p className="body-lg text-muted max-w-2xl text-center mx-auto">
              A custom animated invitation designed to feel personal, celebratory, and
              easy to share digitally with friends and family.
            </p>
            <div className="stats-grid mt-8 border-(--color-border) border-t pt-8">
              <div>
                <strong>Format</strong>
                <p>Motion invitation video.</p>
              </div>
              <div>
                <strong>Goal</strong>
                <p>Turn event information into an emotional, memorable reveal.</p>
              </div>
              <div>
                <strong>Focus</strong>
                <p>Timing, transitions, festive tone, and legibility on mobile screens.</p>
              </div>
            </div>
          </div>
        </div>
      </ProjectSection>

      <ProjectJourney>
        <ProjectSection id="creative-direction" theme="danger">
          <TopicHeader title="Creative Direction" />
          <TopicCover>
            <ul className="card-1 card-sm border flex flex-col gap-4 !pl-5">
              <li className="flex gap-3 items-start">
                <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2"></div>
                <div className="font-semibold text-(--color-text)">Balanced celebration and clarity so the invitation stayed useful, not only decorative.</div>
              </li>
              <li className="flex gap-3 items-start">
                <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2"></div>
                <div className="font-semibold text-(--color-text)">Used motion to pace information in a way that felt ceremonial and warm.</div>
              </li>
              <li className="flex gap-3 items-start">
                <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2"></div>
                <div className="font-semibold text-(--color-text)">Designed the piece to be shared easily across common social and messaging channels.</div>
              </li>
            </ul>
          </TopicCover>
        </ProjectSection>

        <ProjectSection id="final-outcome" theme="success">
          <TopicHeader title="Final Outcome" />
          <TopicCover>
            <p className="body max-w-2xl mx-auto text-muted text-center">
              The final video worked as both an invite and a keepsake, combining event
              communication with a more personal storytelling layer.
            </p>
          </TopicCover>
        </ProjectSection>
      </ProjectJourney>
    </div>
  );
};

export default WeddingInvite;
