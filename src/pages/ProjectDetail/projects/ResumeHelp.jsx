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

const ownershipGridData = [
  { number: "01", title: "Briefed the Agency", description: "Before the agency started, I documented the requirements — colour rules, grid specs, accessibility standards, and component expectations. The brief was the contract." },
  { number: "02", title: "Reviewed Every Delivery", description: "Every component the agency delivered was checked against the brief. Wrong padding, missing state, off-spec colour — I flagged it and sent it back before approving." },
  { number: "03", title: "Filled What Was Missing", description: "Some foundational pieces weren't in the agency's scope. I personally defined the column grid, spacing tokens, and typography scale directly in Figma." },
  { number: "04", title: "Governed After Launch", description: "Once the system was live, I reviewed designer and developer output against it. Any deviation — however small — was caught and corrected before it compounded" }
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
  description: "ResumeHelp grew fast — but the design didn't keep up. I owned the full migration to a new design system: fixing accessibility failures, removing inconsistencies, and making it something developers could actually build from.",
  stats: [
    { label: "Company", value: "Bold" },
    { label: "My Role", value: "Sr. Web Designer · Design System Owner" },
    { label: "The Team", value: "Internal Team, Agency, Devs" }
  ]
};

const problemIntroData = {
  id: "problem-intro",
  title: "Breaking at Scale.",
  description: "RH is a resume builder used by millions in the US and UK. As the product scaled, multiple designers and agencies added pages without any shared rules — leading to a visually inconsistent, accessibility-broken UI that was hard to maintain.",
  bulletsId: "problem-bullets",
  bullets: [
    "Primary green (#00C194) failed WCAG AA on buttons.",
    "No grid system — every page spaced by eye.",
    "Only 6 type styles for an entire multi-page product.",
    "Every hero image covered with a dark teal overlay — photos lost their purpose.",
    "3+ icon styles mixed across pages — outlined, filled, two-colour.",
    "Dark sections placed randomly with no rule or reason."
  ]
};

const ownershipIntroData = {
  id: "ownership-intro",
  title: "My Role in This Project",
  description: "An external agency built the initial design system. My job was to own the outcome — brief them, review everything, fill what was missing, and make sure it stayed consistent once it went live."
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
                className="gap-0" 
                cardClassName="border-theme [&:nth-child(1)]:border-b [&:nth-child(1)]:border-r [&:nth-child(2)]:border-b [&:nth-child(3)]:border-r" 
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
