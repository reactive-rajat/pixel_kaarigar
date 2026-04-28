import React from "react";
import { 
  ProjectJourney, ProjectSection, TopicHeader, TopicCover, 
  TopicDetails, TopicIntro, TextCardGrid, BulletList, 
  ImageContentSplit, ArticleCard 
} from "../../../components/project";

const conceptIntroData = {
  id: "concept-intro",
  title: "The Concept",
  description: "Moving from a standard layout to an immersive, highly visual experience that acts as a memorable showcase of my design capabilities."
};

const conceptGridData = [
  { icon: <span className="material-symbols-outlined" style={{ fontSize: "2rem" }}>person</span>, title: "Role", description: "Visual Redesign, Branding, and UI Execution." },
  { icon: <span className="material-symbols-outlined" style={{ fontSize: "2rem" }}>construction</span>, title: "Tools", description: "Figma, Adobe Illustrator, and After Effects." },
  { icon: <span className="material-symbols-outlined" style={{ fontSize: "2rem" }}>flag</span>, title: "Goal", description: "Transform a dated interface into a modern, aesthetic, and trustworthy platform." }
];

const visualLanguageIntroData = {
  id: "visual-intro",
  title: "Visual Language",
  description: "Establishing a strong aesthetic direction. Balancing visual richness with enough clarity for the core message to remain readable."
};

const visualLanguageData = [
  "<b>Typography:</b> A bold, nostalgic serif paired with a clean geometric sans for high-end readability.",
  "<b>Color Palette:</b> Deep, rich tones with vibrant neon accents to evoke a premium, modern feel.",
  "<b>Composition:</b> Focused on transitions, spacing, and a strong grid to guide the user's eye."
];

const redesignIntroData = {
  id: "redesign-intro",
  title: "The Redesign Showcase",
  description: "The final output completely redefined the brand's digital presence, providing a massive upgrade in both aesthetics and perceived value."
};

const redesignData = {
  s1: {
    title: "Before vs After",
    description: "A direct comparison showing the evolution from the original state to the modernized redesign.",
    imageSrc: "https://placehold.co/1200x800/1A1A1A/EDEDED?text=Before+%26+After+Screenshot",
    imageAlt: "Before and After comparison",
    imagePosition: "left",
    items: [
      "<b>Removing Clutter:</b> Stripped away heavy gradients and chaotic layouts in favor of clean space.",
      "<b>Personality Injection:</b> Adding bespoke interactive elements gave the brand a distinct voice.",
      "<b>Visual Hierarchy:</b> Adjusted the scale and weight of elements to guide attention naturally."
    ]
  },
  s2: {
    title: "Final UI Polish",
    description: "The final deliverables ready for development handoff.",
    imageSrc: "https://placehold.co/1200x800/1A1A1A/EDEDED?text=Final+UI+Mockups",
    imageAlt: "Final UI Mockups",
    imagePosition: "right",
    items: [
      "<b>Component Consistency:</b> Every element was unified under a single aesthetic umbrella.",
      "<b>Dark Mode Ready:</b> The palette was carefully crafted to support dynamic theme switching seamlessly."
    ]
  }
};

const PortfolioV1 = () => {
  return (
    <div className="project-html-content project-content-wrapper">
      <ProjectJourney>
        
        {/* SECTION 1: THE CONCEPT */}
        <ProjectSection id="topic-concept" theme="neutral">
          <TopicHeader title="The Concept" />
          <TopicCover>
            <div className="grid gap-10">
              <TopicIntro id={conceptIntroData.id} title={conceptIntroData.title} description={conceptIntroData.description} />
              <TextCardGrid 
                id="concept-grid"
                items={conceptGridData} 
                columns={3} 
                cardClassName="bg-[var(--color-card)] flex flex-col items-start text-left" 
              />
            </div>
          </TopicCover>
        </ProjectSection>

        {/* SECTION 2: VISUAL LANGUAGE */}
        <ProjectSection id="topic-visual" theme="primary">
          <TopicHeader title="Visual Language" />
          <TopicCover>
            <div className="grid gap-10">
              <TopicIntro id={visualLanguageIntroData.id} title={visualLanguageIntroData.title} description={visualLanguageIntroData.description} />
              <BulletList 
                id="visual-bullets" 
                items={visualLanguageData} 
                columns={3} 
                icon="palette" 
                iconColor="text-[var(--color-primary)]" 
              />
            </div>
          </TopicCover>
        </ProjectSection>

        {/* SECTION 3: THE REDESIGN SHOWCASE */}
        <ProjectSection id="topic-redesign" theme="success">
          <TopicHeader title="The Redesign" />
          <TopicCover>
            <div className="grid gap-10">
              <TopicIntro id={redesignIntroData.id} title={redesignIntroData.title} description={redesignIntroData.description} />
            </div>
          </TopicCover>
          
          <TopicDetails>
            {Object.entries(redesignData).map(([id, data], index) => (
              <ArticleCard key={id} id={id} pill={`Showcase 0${index + 1}`} title={data.title} description={data.description}>
                <ImageContentSplit 
                  id={`${id}-split`}
                  imageSrc={data.imageSrc} 
                  imageAlt={data.imageAlt}
                  imagePosition={data.imagePosition}
                  items={data.items}
                />
              </ArticleCard>
            ))}
            
            {/* Adding a massive full-width image placeholder for final glory shot */}
            <ArticleCard id="glory-shot" pill="Final Result" title="Full Experience Overview" description="The complete layout showcasing the new aesthetic system in action.">
               <img src="https://placehold.co/1600x900/1A1A1A/EDEDED?text=Massive+Full+Width+Glory+Shot" alt="Glory shot" className="w-full rounded-xl object-cover border border-(--color-border)" />
            </ArticleCard>

          </TopicDetails>
        </ProjectSection>

      </ProjectJourney>
    </div>
  );
};

export default PortfolioV1;
