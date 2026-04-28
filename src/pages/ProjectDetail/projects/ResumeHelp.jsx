import React from "react";
import { 
  ProjectJourney, ProjectSection, TopicHeader, 
  TopicCover, TopicIntro, BulletList, TopicDetails, ArticleCard,
  ImageContentSplit, TextCardGrid
} from "@/src/components/project";

const basePath = "/projects/resume-help";

const problemData = {
  p1: {
    title: "Failing Contrast",
    description: "The brand green made critical UI elements inaccessible to low-vision users.",
    imageSrc: `${basePath}/assets/failing_contrast.png`,
    imageAlt: "Failing Contrast",
    imagePosition: "left",
    items: [
      { title: "WCAG Failure", description: "#00C194 with white text = 2.30:1 contrast ratio. WCAG AA requires minimum 4.5:1. Every primary button on the site was failing." },
      { title: "Unreadable CTAs", description: "The most important button on every page — 'Create Your Resume' — was technically unreadable for users with visual impairments." }
    ]
  },
  p2: {
    title: "No Layout Math",
    description: "No column grid, no spacing tokens — every page was built by eye.",
    imageSrc: `${basePath}/assets/no_layout.png`,
    imageAlt: "No Layout Math",
    imagePosition: "right",
    items: [
      { title: "Missing Grid", description: "No column grid existed. Each designer chose their own layout width and margins — nothing aligned across pages." },
      { title: "Eyeballed Spacing", description: "Developers opened every Figma file just to find padding values. No tokens, no documentation — pure guesswork every time." }
    ]
  },
  p3: {
    title: "Poor Legibility",
    description: "A resume builder needs clear, readable type at every size. The old system had neither.",
    imageSrc: `${basePath}/assets/bad_legibility.png`,
    imageAlt: "Poor Legibility",
    imagePosition: "left",
    items: [
      { title: "Inadequate Typography", description: "Source Sans Pro worked fine for marketing pages — but in dense form fields and resume content, it felt cramped and hard to read." },
      { title: "Limited Hierarchy", description: "Just 6 type styles for the entire product — homepage, examples, templates, builder, blog, legal pages etc, all sharing the same 6 styles. Not enough." }
    ]
  },
  p4: {
    title: "Heavy Overlays",
    description: "Every hero image had a heavy dark teal overlay — the photos underneath were barely visible.",
    imageSrc: `${basePath}/assets/heavy_overlays.png`,
    imageAlt: "Heavy Overlays",
    imagePosition: "right",
    items: [
      { title: "Obscured Photography", description: "Hero images were chosen carefully — then covered with a dark teal overlay that made them almost invisible. The photography added zero value." },
      { title: "Gloomy Tone", description: "A job seeker landing on the site for the first time saw a dark, heavy page. Not the confident, encouraging feel a career product should have." }
    ]
  },
  p5: {
    title: "Iconography Chaos",
    description: "The interface lacked cohesion due to a fragmented collection of icons.",
    imageSrc: `${basePath}/assets/icon_chaos.png`,
    imageAlt: "Iconography Chaos",
    imagePosition: "left",
    items: [
      { title: "Mixed Styles", description: "Three completely different icon styles used across the same product — solid with circle backgrounds, two-colour line icons, and Font Awesome — with no rule for when to use which." },
      { title: "Untrustworthy Look", description: "When icons don't follow a consistent style, the product looks assembled — not designed. It signals to users that no one is in charge of quality." }
    ]
  },
  p6: {
    title: "Random Backgrounds",
    description: "Dark sections appeared with no rule — sometimes 3 in a row, sometimes none. Just habit, not design.",
    imageSrc: `${basePath}/assets/random_bg.png`,
    imageAlt: "Random Backgrounds",
    imagePosition: "right",
    items: [
      { title: "Arbitrary Usage", description: "The dark header colour (#023642) was used to 'break up' pages — but there was no logic for when or why. It just happened to be what someone did once, and it stuck." },
      { title: "No Logical Rule", description: "Without a defined rule, each new page either copied the pattern blindly or ignored it — making the product feel inconsistent even to casual visitors." }
    ]
  }
};

const decisionData = {
  s4: {
    title: "Color System & Accessibility",
    description: "Defined a strict, WCAG-compliant color palette anchored by Ultra Violet. This eliminated visual clutter and ensured text legibility and clear, accessible actions for all users.",
    imageSrc: `${basePath}/assets/thumb_decision_01.png`,
    imageAlt: "Color System & Accessibility",
    imagePosition: "left",
    items: [
      { title: "Primary: Coach Ultra Violet", description: "Switched from Green to <code>#3D50FF</code>. It passes WCAG AA, draws the eye instantly, and builds trust." },
      { title: "Secondary: Assertive Magenta", description: "Added <code>#D01176</code> for highlights that need energy without fighting the primary violet." },
      { title: "Logical Backgrounds", description: "Defined exactly 3 light and 3 dark background shades. We stopped using random dark backgrounds just to separate sections." }
    ]
  },
  s5: {
    title: "Typography Built for UI",
    description: "Replaced fragmented marketing fonts with a cohesive, mathematical type scale using <em>Circular Std</em> and <em>Public Sans</em> for optimal readability on dense data screens.",
    imageSrc: `${basePath}/assets/thumb_decision_02.png`,
    imageAlt: "Typography Built for UI",
    imagePosition: "right",
    items: [
      { title: "Headings: Circular Std", description: "Moved away from the wide, bulky <em>Montserrat</em>. Circular Std is rounder and friendlier, which helps calm stressed job seekers." },
      { title: "Body Text: Public Sans", description: "Replaced <em>Source Sans Pro</em>. Public Sans is exceptionally clear for small form labels and dense paragraphs." },
      { title: "Full Hierarchy", description: "Went from only 6 styles to a full responsive system (Display, H1-H6, Labels, Captions) so designers never had to guess." }
    ]
  },
  s6: {
    title: "The Grid & Spacing Math",
    description: "Introduced a strict 8-point grid system. By mathematically aligning padding and margins, we eliminated \"magic numbers\" and created a predictable rhythm across all devices.",
    imageSrc: `${basePath}/assets/thumb_decision_03.png`,
    imageAlt: "The Grid & Spacing Math",
    imagePosition: "left",
    items: [
      { title: "Responsive Columns", description: "12 columns for Desktop (1280px max), 8 for Tablet, 2 for Mobile." },
      { title: "Spacing Tokens", description: "Named values (e.g., <code>Space-LG</code>, <code>Space-XL</code>) instead of random pixel numbers." },
      { title: "The UX Impact", description: "Layouts became completely predictable. Elements stopped \"jumping\" when users navigated between pages." }
    ]
  },
  s7: {
    title: "Component Standardization",
    description: "Built a robust, reusable Figma component library utilizing Auto Layout and Variants to drastically speed up future design iterations and maintain consistency.",
    imageSrc: `${basePath}/assets/thumb_decision_04.png`,
    imageAlt: "Component Standardization",
    imagePosition: "right",
    items: [
      { title: "One Icon Set", description: "Moved 100% of the product to <b>Font Awesome 5 Solid</b>. It guaranteed visual harmony, and devs already knew the classes." },
      { title: "Atomic Library", description: "Designed 5 button types across 4 sizes, complete with hover, active, and disabled states." },
      { title: "Reusable Assets", description: "Created standardized Trust Blades (client logos) and Form Inputs." }
    ]
  }
};

const executionData = {
  imageSrc: `${basePath}/assets/thumb_decision_05.png`,
  imageAlt: "Developer Handoff",
  imagePosition: "left",
  items: [
    { title: "Front-Facing Specs", description: "I placed explicit text specs (margins, font sizes, colors) directly on the Figma canvas next to the designs." },
    { title: "Matched the Ecosystem", description: "I used the exact same spec format as Bold's other major product, <em>ResumeGenius</em>, so devs had zero learning curve." },
    { title: "The Result", description: "Developers stopped asking \"what size is this?\" Design-to-code speed improved massively because the answers were printed right in front of them." }
  ]
};

const impactGridData = [
  { icon: "✅", title: "Single Source of Truth", description: "Established a centralized component library, seamlessly aligning both the product and engineering teams." },
  { icon: "✅", title: "Faster Shipping", description: "Component standardization drastically reduced UI design and front-end development time for new features." },
  { icon: "✅", title: "Elevated Usability", description: "Resolved critical accessibility issues, resulting in a cleaner, more intuitive user journey." }
];

const problemIntroData = {
  id: "problem-intro",
  title: "The Challenge: Design Debt at Scale",
  description: "As ResumeHelp grew rapidly, the platform accumulated massive design debt. The lack of a centralized system led to an inconsistent user experience and a bloated codebase. We were facing:",
  bulletsId: "problem-bullets",
  bullets: [
    "<b>Accessibility Failures:</b> Low-contrast text (ratios as low as 2.30:1) and unreadable CTAs created friction for users.",
    "<b>Visual Chaos:</b> A mix of random backgrounds, conflicting iconography, and heavy overlays diluted brand trust.",
    "<b>Structural Flaws:</b> A lack of \"layout math\" and arbitrary spacing meant developers had to guess, severely slowing down release cycles.",
    "<b>Component Fragmentation:</b> Without a centralized library, teams constantly reinvented the wheel, leading to duplicated design efforts and an unmanageable UI inventory."
  ]
};

const ownershipIntroData = {
  id: "ownership-intro",
  title: "My Role & Scope",
  description: "I spearheaded the end-to-end visual overhaul and design system architecture."
};

const ownershipGridData = [
  { 
    icon: <span className="material-symbols-outlined" style={{ fontSize: "2rem" }}>troubleshoot</span>, 
    title: "Auditing", 
    description: "Conducted a comprehensive UI/UX audit to identify usability and accessibility flaws." 
  },
  { 
    icon: <span className="material-symbols-outlined" style={{ fontSize: "2rem" }}>architecture</span>, 
    title: "Architecting", 
    description: "Built a scalable, WCAG-compliant design system from the ground up in Figma." 
  },
  { 
    icon: <span className="material-symbols-outlined" style={{ fontSize: "2rem" }}>handshake</span>, 
    title: "Collaborating", 
    description: "Partnered closely with engineering to ensure seamless, pixel-perfect implementation." 
  }
];

const decisionsIntroData = {
  id: "decisions-intro",
  title: "Systemizing the Chaos: Building the Foundation",
  description: "To fix the underlying structural problems, we made 4 foundational decisions that completely overhauled the UI logic.",
  bulletsId: "decisions-bullets",
  bullets: [
    "<b>Color System:</b> Defined a strict, WCAG-compliant palette anchored by Ultra Violet.",
    "<b>Typography:</b> Replaced fragmented fonts with a cohesive, mathematical type scale.",
    "<b>Grid & Spacing:</b> Introduced a strict 8-point grid to eliminate arbitrary spacing.",
    "<b>Component Library:</b> Built a reusable Figma atomic library with Auto Layout."
  ]
};

const executionIntroData = {
  id: "execution-intro",
  title: "Developer Handoff: Zero Guesswork",
  description: "A design system is useless if it can't be built. I provided 100% front-facing specs and standardized tokens—eliminating guesswork and empowering engineering to build faster with absolute accuracy."
};

const impactIntroData = {
  id: "impact-intro",
  title: "The Final Impact",
  description: "The system unified the entire UI across 15+ pages, resulting in a cleaner, faster, and highly accessible experience."
};

const reflectionIntroData = {
  id: "reflection-intro",
  title: "What I Learned",
  description: "I learned that a Design System is a product in itself, and its primary users are developers and other designers. The biggest challenge isn't just pushing pixels, but change management. Strict, clear documentation proved just as important as the visual design itself."
};

const ResumeHelp = () => {
  return (
    <div className="project-html-content project-content-wrapper">
      <ProjectJourney>
        {/* THE PROBLEM */}
        <ProjectSection id="topic-problem" theme="danger">
          <TopicHeader title="The Problem" />
          <TopicCover>
            <div className="grid gap-10">
              <TopicIntro id={problemIntroData.id} title={problemIntroData.title} description={problemIntroData.description} />
              <BulletList 
                id={problemIntroData.bulletsId} 
                items={problemIntroData.bullets} 
                columns={2} 
                icon="close" 
                iconColor="text-[var(--color-danger)]" 
              />
            </div>
          </TopicCover>

          <TopicDetails>
            {Object.entries(problemData).map(([id, data], index) => (
              <ArticleCard key={id} id={id} pill={`Problem 0${index + 1}`} title={data.title} description={data.description}>
                <ImageContentSplit 
                  id={`${id}-split`}
                  imageSrc={data.imageSrc} 
                  imageAlt={data.imageAlt}
                  imagePosition={data.imagePosition}
                  items={data.items}
                />
              </ArticleCard>
            ))}
          </TopicDetails>
        </ProjectSection>

        {/* DESIGN OWNERSHIP */}
        <ProjectSection id="topic-ownership" theme="primary">
          <TopicHeader title="Design Ownership" />
          <TopicCover>
            <div className="grid gap-10">
              <TopicIntro id={ownershipIntroData.id} title={ownershipIntroData.title} description={ownershipIntroData.description} />
              <TextCardGrid 
                id="ownership-grid"
                items={ownershipGridData} 
                columns={3} 
                cardClassName="bg-[var(--color-card)] flex flex-col items-start text-left" 
              />
            </div>
          </TopicCover>
        </ProjectSection>

        {/* CORE DECISIONS */}
        <ProjectSection id="topic-decisions" theme="success">
          <TopicHeader title="Core Decisions" />
          <TopicCover>
            <div className="grid gap-10">
              <TopicIntro id={decisionsIntroData.id} title={decisionsIntroData.title} description={decisionsIntroData.description} />
              <BulletList 
                id={decisionsIntroData.bulletsId} 
                items={decisionsIntroData.bullets} 
                columns={2} 
                icon="check" 
                iconColor="text-[var(--color-success)]" 
              />
            </div>
          </TopicCover>
          <TopicDetails>
            {Object.entries(decisionData).map(([id, data], index) => (
              <ArticleCard key={id} id={id} pill={`Core Decision 0${index + 1}`} title={data.title} description={data.description}>
                <ImageContentSplit 
                  id={`${id}-split`}
                  imageSrc={data.imageSrc} 
                  imageAlt={data.imageAlt}
                  imagePosition={data.imagePosition}
                  items={data.items}
                />
              </ArticleCard>
            ))}
          </TopicDetails>
        </ProjectSection>

        {/* EXECUTION */}
        <ProjectSection id="topic-execution" theme="primary">
          <TopicHeader title="Execution" />
          <TopicCover>
            <div className="grid gap-8">
              <TopicIntro id={executionIntroData.id} title={executionIntroData.title} description={executionIntroData.description} />
              <ImageContentSplit 
                id="execution-split"
                imageSrc={executionData.imageSrc} 
                imageAlt={executionData.imageAlt}
                imagePosition={executionData.imagePosition}
                items={executionData.items}
              />
            </div>
          </TopicCover>
        </ProjectSection>

        {/* IMPACT */}
        <ProjectSection id="topic-impact" theme="success">
          <TopicHeader title="Impact" />
          <TopicCover>
            <div>
              <div className="mb-8">
                <TopicIntro id={impactIntroData.id} title={impactIntroData.title} description={impactIntroData.description} />
              </div>
              <TextCardGrid 
                id="impact-grid"
                items={impactGridData} 
                columns={3} 
                cardClassName="bg-[var(--color-card)]" 
              />
            </div>
          </TopicCover>
        </ProjectSection>

        {/* REFLECTION */}
        <ProjectSection id="topic-reflection" theme="primary">
          <TopicHeader title="Reflection" />
          <TopicCover>
            <div>
              <div className="mb-0">
                <TopicIntro id={reflectionIntroData.id} title={reflectionIntroData.title} description={reflectionIntroData.description} />
              </div>
            </div>
          </TopicCover>
        </ProjectSection>
      </ProjectJourney>
    </div>
  );
};

export default ResumeHelp;
