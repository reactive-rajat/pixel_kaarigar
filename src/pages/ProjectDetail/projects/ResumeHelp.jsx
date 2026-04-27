import React from "react";
import { 
  ProjectJourney, ProjectSection, ProjectHero, TopicHeader, 
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
      { title: "WCAG Failure", description: "The brand green (<code>#00C194</code>) with white text failed essential WCAG tests." },
      { title: "Unreadable CTAs", description: "Low-vision users struggled significantly to read text on our primary calls-to-action." }
    ]
  },
  p2: {
    title: "No Layout Math",
    description: "Inconsistent alignment and arbitrary spacing slowed down production across the board.",
    imageSrc: `${basePath}/assets/no_layout.png`,
    imageAlt: "No Layout Math",
    imagePosition: "right",
    items: [
      { title: "Missing Grid", description: "The absence of a defined column grid resulted in misaligned pages and structure." },
      { title: "Eyeballed Spacing", description: "With no spacing tokens, developers had to manually inspect Figma layers to guess the padding." }
    ]
  },
  p3: {
    title: "Poor Legibility",
    description: "Dense forms and data required highly legible typography, which the old system lacked.",
    imageSrc: `${basePath}/assets/bad_legibility.png`,
    imageAlt: "Poor Legibility",
    imagePosition: "left",
    items: [
      { title: "Inadequate Typography", description: "The primary body font (Source Sans Pro) severely hurt legibility in dense form inputs." },
      { title: "Limited Hierarchy", description: "We only had 6 text styles available, which restricted developers from establishing visual structure." }
    ]
  },
  p4: {
    title: "Heavy Overlays",
    description: "Aggressive image treatments were actively harming the visual tone.",
    imageSrc: `${basePath}/assets/heavy_overlays.png`,
    imageAlt: "Heavy Overlays",
    imagePosition: "right",
    items: [
      { title: "Obscured Photography", description: "Every hero image had heavy dark overlays, hiding the photos entirely." },
      { title: "Gloomy Tone", description: "These stylistic choices made the site feel unexpectedly gloomy for a career-focused tool." }
    ]
  },
  p5: {
    title: "Iconography Chaos",
    description: "The interface lacked cohesion due to a fragmented collection of icons.",
    imageSrc: `${basePath}/assets/icon_chaos.png`,
    imageAlt: "Iconography Chaos",
    imagePosition: "left",
    items: [
      { title: "Mixed Styles", description: "Styles were mixed everywhere—some outlined, some solid, some 2-colored." },
      { title: "Untrustworthy Look", description: "The resulting visual mess made the product feel untested and unpolished." }
    ]
  },
  p6: {
    title: "Random Backgrounds",
    description: "Unjustifiable design choices led to awkward shifts in UI brightness.",
    imageSrc: `${basePath}/assets/random_backgrounds.png`,
    imageAlt: "Random Backgrounds",
    imagePosition: "right",
    items: [
      { title: "Arbitrary Usage", description: "Dark backgrounds were placed randomly just to separate visual sections." },
      { title: "No Logical Rule", description: "There was no underlying rationale for when to use dark versus light UI components." }
    ]
  }
};

const ownershipGridData = [
  { number: "01", title: "Set the Rules", description: "I briefed the agency on our user context, accessibility needs, and technical requirements before they started." },
  { number: "02", title: "Strict Validation", description: "Reviewed deliveries pixel-by-pixel. If a padding was off or a hover state was missing, I pushed it back for revision." },
  { number: "03", title: "Filled the Gaps", description: "I personally defined the structural grid math, created missing spacing tokens, and finalized the typography scale." },
  { number: "04", title: "Enforced Consistency", description: "Ensured that no 'creative but inconsistent' tweaks made it into the final product. Protected the locked system." }
];

const decisionData = {
  s4: {
    title: "Color System & Accessibility",
    description: "The biggest risk in the old design was the failing green button. We completely overhauled the palette to make it inclusive by default.",
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
    description: "A resume builder is a heavy, data-dense UI. We needed fonts that were highly readable at small sizes and friendly enough to reduce user anxiety.",
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
    description: "To stop designers and developers from \"eyeballing\" margins, we introduced strict mathematical rules.",
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
    description: "We wiped out the mixed icon styles and built a master, atomic library.",
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
  { icon: "✅", title: "100% Accessible", description: "Every interactive CTA now passes strict WCAG standards." },
  { icon: "✅", title: "15+ Pages Migrated", description: "Successfully applied this system to redesign 15 to 25 core pages with zero design drift." },
  { icon: "✅", title: "One Source of Truth", description: "Agency, internal designers, and developers finally spoke the exact same visual language." },
  { icon: "✅", title: "Faster Shipping", description: "Designers stopped reinventing cards. Developers built reusable wrappers. Production multiplied." }
];

const reflectionGridData = [
  { title: "1. Document the \"Why\"", description: "If you just tell a designer \"use this 24px margin,\" they will argue. If you explain <em>why</em> it aligns with the dev grid, they agree. Context stops debates." },
  { title: "2. Constraints = Speed", description: "Making WCAG compliance the very first rule actually sped up our color exploration by instantly filtering out bad choices." },
  { title: "3. Systems Need Bouncers", description: "The UI kit is only 20% of the job. 80% is governing the system, reviewing work, and having the confidence to say \"no\" to random tweaks." }
];

const heroData = {
  id: "hero-intro",
  pill: "UX Case Study · Design Systems",
  title: "Rebuilding ResumeHelp's",
  titleHighlight: "Design Foundation.",
  description: "ResumeHelp grew rapidly, but the design didn't. I led the mission to rebuild the system from scratch, ensuring it was accessible, scalable, and dev-friendly. Migrated a live product to a new design system — fixing inconsistency and scalability at scale.",
  stats: [
    { label: "Company", value: "Bold" },
    { label: "My Role", value: "Sr. Web Designer" },
    { label: "Scale", value: "15-25 Core Pages" },
    { label: "The Team", value: "Internal Team, Agency, Devs" }
  ]
};

const problemIntroData = {
  id: "problem-intro",
  title: "Breaking at Scale.",
  description: "ResumeHelp is a massive resume builder used by millions in the US and UK. Because multiple designers and agencies added new pages over time without central rules, the UI became a patched-together mess of one-off decisions.",
  bulletsId: "problem-bullets",
  bullets: [
    "Failing contrast with brand colors.",
    "No layout math or spacing tokens.",
    "Poor legibility due to font choices.",
    "Heavy dark overlays on images.",
    "Mixed and chaotic iconography styles.",
    "Random usage of dark backgrounds."
  ]
};

const ownershipIntroData = {
  id: "ownership-intro",
  title: "The System Gatekeeper.",
  description: "We hired an external design agency to help build the initial visual concepts, but a design system isn't just a Figma file—it requires strict ownership. Here is how I managed the collaboration:"
};

const decisionsIntroData = {
  id: "decisions-intro",
  title: "Systemizing the Chaos.",
  description: "To fix the underlying structural problems, we made 4 foundational decisions that completely overhauled the UI logic."
};

const executionIntroData = {
  id: "execution-intro",
  title: "Developer Handoff: Zero Guesswork",
  description: "Figma's Dev Mode is great, but developers still found themselves digging through nested layers to find exact padding values."
};

const impactIntroData = {
  id: "impact-intro",
  title: "The Final Impact",
  description: "The system unified the entire UI across 15+ pages, resulting in a cleaner, faster, and highly accessible experience."
};

const reflectionIntroData = {
  id: "reflection-intro",
  title: "What I Learned",
  description: "A systemic overhaul is just as much about communication as it is about typography and spacing."
};

const ResumeHelp = () => {
  return (
    <div className="project-html-content project-content-wrapper">
      <ProjectSection id="s1" theme="primary" noJourney={true}>
        <ProjectHero {...heroData} />
      </ProjectSection>

      <ProjectJourney>
        {/* THE PROBLEM */}
        <ProjectSection id="topic-problem" theme="danger">
          <TopicHeader title="The Problem" />
          <TopicCover>
            <div className="grid gap-10">
              <TopicIntro id={problemIntroData.id} title={problemIntroData.title} description={problemIntroData.description} />
              <BulletList id={problemIntroData.bulletsId} items={problemIntroData.bullets} columns={2} />
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
                columns={2} 
                className="gap-0 border border-theme rounded-2xl overflow-hidden" 
                cardClassName="card-hover rounded-none border-theme [&:nth-child(1)]:border-b [&:nth-child(1)]:border-r [&:nth-child(2)]:border-b [&:nth-child(3)]:border-r" 
              />
            </div>
          </TopicCover>
        </ProjectSection>

        {/* CORE DECISIONS */}
        <ProjectSection id="topic-decisions" theme="success">
          <TopicHeader title="Core Decisions" />
          <TopicCover>
            <TopicIntro id={decisionsIntroData.id} title={decisionsIntroData.title} description={decisionsIntroData.description} />
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
                columns={4} 
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
              <div className="mb-8">
                <TopicIntro id={reflectionIntroData.id} title={reflectionIntroData.title} description={reflectionIntroData.description} />
              </div>
              <TextCardGrid id="reflection-grid" items={reflectionGridData} columns={3} />
            </div>
          </TopicCover>
        </ProjectSection>
      </ProjectJourney>
    </div>
  );
};

export default ResumeHelp;
