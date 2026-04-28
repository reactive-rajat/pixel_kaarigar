import React from "react";
import { 
  ProjectJourney, ProjectSection, TopicHeader, TopicCover, 
  TopicDetails, TopicIntro, TextCardGrid, BulletList, 
  ImageContentSplit, ArticleCard, BeforeAfterSlider
} from "../../../components/project";

const introData = {
  id: "intro",
  title: "A Collection of Visual Identity & Marketing",
  description: "While my primary focus is UI/UX product design, I frequently take on high-impact branding, marketing, and graphic design challenges to ensure a holistic user experience across all touchpoints."
};

const clientAData = {
  id: "client-a-intro",
  title: "Client A: Marketing & Social Overhaul",
  description: "A complete visual refresh of their digital marketing assets, driving a 40% increase in click-through rates across campaigns."
};

const clientBData = {
  id: "client-b-intro",
  title: "Client B: Packaging & Print Design",
  description: "Physical collateral design including business cards, custom box packaging, and promotional inserts."
};

const GraphicDesign = () => {
  return (
    <div className="project-html-content project-content-wrapper">
      <ProjectJourney>
        
        {/* GLOBAL OVERVIEW */}
        <ProjectSection id="topic-overview" theme="neutral">
          <TopicHeader title="Overview" />
          <TopicCover>
            <div className="grid gap-10">
              <TopicIntro id={introData.id} title={introData.title} description={introData.description} />
            </div>
          </TopicCover>
        </ProjectSection>

        {/* CLIENT A - FEATURING BEFORE/AFTER SLIDER */}
        <ProjectSection id="topic-client-a" theme="danger">
          <TopicHeader title="Marketing Overhaul" />
          <TopicCover>
            <div className="grid gap-10">
              <TopicIntro id={clientAData.id} title={clientAData.title} description={clientAData.description} />
            </div>
          </TopicCover>
          
          <TopicDetails>
            <ArticleCard id="client-a-slider" pill="Social Media" title="Before vs After Redesign" description="Slide to see the transformation of their Instagram ad creatives.">
              {/* INTERACTIVE BEFORE / AFTER SLIDER */}
              <BeforeAfterSlider 
                id="social-slider"
                beforeImage="https://placehold.co/1200x800/808080/FFFFFF?text=Old+Messy+Design"
                afterImage="https://placehold.co/1200x800/1E1E1E/00FF88?text=New+Clean+Design"
                beforeLabel="Original Ad"
                afterLabel="Redesigned Ad"
              />
            </ArticleCard>

            <ArticleCard id="client-a-gallery" pill="Collateral" title="Email Marketing Templates" description="A unified aesthetic applied to their weekly newsletter blasts.">
              <img src="https://placehold.co/1200x800/1A1A1A/EDEDED?text=Email+Marketing+Collage" alt="Email marketing collateral" className="w-full rounded-xl object-cover border border-[var(--color-border)]" />
            </ArticleCard>
          </TopicDetails>
        </ProjectSection>

        {/* CLIENT B - FEATURING MASONRY GRID */}
        <ProjectSection id="topic-client-b" theme="primary">
          <TopicHeader title="Print & Packaging" />
          <TopicCover>
            <div className="grid gap-10">
              <TopicIntro id={clientBData.id} title={clientBData.title} description={clientBData.description} />
            </div>
          </TopicCover>

          <TopicDetails>
             <ArticleCard id="client-b-grid" pill="Physical Goods" title="Box Design & Business Cards" description="Bringing the digital brand identity into the physical world.">
               {/* SIMPLE MASONRY/CSS GRID FOR IMAGES */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <img src="https://placehold.co/800x800/1A1A1A/EDEDED?text=Business+Card+Front" alt="Business card front" className="w-full rounded-xl object-cover border border-[var(--color-border)]" />
                 <img src="https://placehold.co/800x800/1A1A1A/EDEDED?text=Business+Card+Back" alt="Business card back" className="w-full rounded-xl object-cover border border-[var(--color-border)]" />
                 <img src="https://placehold.co/1600x800/1A1A1A/EDEDED?text=Custom+Box+Packaging" alt="Packaging" className="w-full rounded-xl object-cover border border-[var(--color-border)] md:col-span-2" />
               </div>
             </ArticleCard>
          </TopicDetails>
        </ProjectSection>

      </ProjectJourney>
    </div>
  );
};

export default GraphicDesign;
