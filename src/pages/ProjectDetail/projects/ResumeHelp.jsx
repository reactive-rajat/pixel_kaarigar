import React from "react";
import { ProjectJourney, ProjectSection, TopicHeader, TopicCover, TopicDetails, ArticleCard } from "@/src/components/project";
import ImageBox from "@/src/components/utils/image/ImageBox";
import ImageLeftCol from "@/src/components/utils/ImageLeftCol/ImageLeftCol";

const basePath = "/projects/resume-help";

const ResumeHelp = () => {
  const listItems = {
    "decision-01" : [
    {
      h4: "Primary: Coach Ultra Violet",
      p: "Switched from Green to <code>#3D50FF</code>. It passes WCAG AA, draws the eye instantly, and builds trust."
    },
    {
      h4: "Secondary: Assertive Magenta",
      p: "Added <code>#D01176</code> for highlights that need energy without fighting the primary violet."
    },
    {
      h4: "Logical Backgrounds",
      p: "Defined exactly 3 light and 3 dark background shades. We stopped using random dark backgrounds just to separate sections."
    }
  ],
  }
  return (
    <div className="project-html-content project-content-wrapper">
      <ProjectSection id="s1" theme="primary" noJourney={true}>
        <div className="py-10">
          <div className="grid gap-7">
            <div className="mx-auto">
              <span className="pill pill-inverted">UX Case Study · Design Systems</span>
            </div>
            <h2 className="h2 text-center">
              Rebuilding ResumeHelp's<br /><span className="text-primary">Design Foundation.</span>
            </h2>
            <p className="body-lg text-muted max-w-2xl text-center mx-auto">
              ResumeHelp grew rapidly, but the design didn't. I led the mission to rebuild the system from scratch, ensuring
              it was accessible, scalable, and dev-friendly. Migrated a live product to a new design system — fixing
              inconsistency and scalability at scale.
            </p>
            <div className="flex flex-wrap justify-center gap-x-16 gap-y-6 mt-8 border-(--color-border) border-t pt-8">
              <div>
                <div className="body-sm text-muted uppercase tracking-wider font-bold mb-1">Company</div>
                <div className="body font-semibold">Bold</div>
              </div>
              <div>
                <div className="body-sm text-muted uppercase tracking-wider font-bold mb-1">My Role</div>
                <div className="body font-semibold">Sr. Web Designer</div>
              </div>
              <div>
                <div className="body-sm text-muted uppercase tracking-wider font-bold mb-1">Scale</div>
                <div className="body font-semibold">15-25 Core Pages</div>
              </div>
              <div>
                <div className="body-sm text-muted uppercase tracking-wider font-bold mb-1">The Team</div>
                <div className="body font-semibold">Internal Team, Agency, Devs</div>
              </div>
            </div>
          </div>
        </div>
      </ProjectSection>

      <ProjectJourney>
        <ProjectSection id="topic-problem" theme="danger">
          <TopicHeader title="The Problem" />
          <TopicCover>
            <div className="grid gap-10">
              <div className="text-center mx-auto">
                <h2 className="h2 mb-4">Breaking at Scale.</h2>
                <p className="body max-w-2xl mx-auto text-muted">
                  ResumeHelp is a massive resume builder used by millions in the US and UK. Because multiple designers and
                  agencies added new pages over time without central rules, the UI became a patched-together mess of one-off
                  decisions.
                </p>
              </div>

              <div className="body text-muted grid grid-cols-1 md:grid-cols-2 gap-8 mt-3 mx-auto text-left w-full">
                <ul className="card-1 card-sm border flex flex-col gap-4 !pl-5">
                  <li className="flex gap-3 items-start">
                    <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2"></div>
                    <div className="font-semibold text-(--color-text)">Failing contrast with brand colors.</div>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2"></div>
                    <div className="font-semibold text-(--color-text)">No layout math or spacing tokens.</div>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2"></div>
                    <div className="font-semibold text-(--color-text)">Poor legibility due to font choices.</div>
                  </li>
                </ul>
                <ul className="card-1 card-sm border flex flex-col gap-4 !pl-5">
                  <li className="flex gap-3 items-start">
                    <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2"></div>
                    <div className="font-semibold text-(--color-text)">Heavy dark overlays on images.</div>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2"></div>
                    <div className="font-semibold text-(--color-text)">Mixed and chaotic iconography styles.</div>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2"></div>
                    <div className="font-semibold text-(--color-text)">Random usage of dark backgrounds.</div>
                  </li>
                </ul>
              </div>
            </div>
          </TopicCover>

          <TopicDetails>
            <ArticleCard id="p1" pill="Problem 01" title="Failing Contrast" description="The brand green made critical UI elements inaccessible to low-vision users.">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <ImageBox src={`${basePath}/assets/failing_contrast.png`} alt="Failing Contrast" />

                <div className="flex flex-col gap-4">
                  <div className="card-1 card-sm border">
                    <h4 className="h4 mb-2">WCAG Failure</h4>
                    <p className="body-sm text-muted">The brand green (<code>#00C194</code>) with white text failed essential WCAG tests.</p>
                  </div>
                  <div className="card-1 card-sm border">
                    <h4 className="h4 mb-2">Unreadable CTAs</h4>
                    <p className="body-sm text-muted">Low-vision users struggled significantly to read text on our primary calls-to-action.</p>
                  </div>
                </div>
              </div>
            </ArticleCard>

            <ArticleCard id="p2" pill="Problem 02" title="No Layout Math" description="Inconsistent alignment and arbitrary spacing slowed down production across the board.">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div className="flex flex-col gap-4 order-last md:order-first">
                  <div className="card-1 card-sm border">
                    <h4 className="h4 mb-2">Missing Grid</h4>
                    <p className="body-sm text-muted">The absence of a defined column grid resulted in misaligned pages and structure.</p>
                  </div>
                  <div className="card-1 card-sm border">
                    <h4 className="h4 mb-2">Eyeballed Spacing</h4>
                    <p className="body-sm text-muted">With no spacing tokens, developers had to manually inspect Figma layers to guess the padding.</p>
                  </div>
                </div>
                <ImageBox src={`${basePath}/assets/no_layout.png`} alt="No Layout" />
              </div>
            </ArticleCard>

            <ArticleCard id="p3" pill="Problem 03" title="Poor Legibility" description="Dense forms and data required highly legible typography, which the old system lacked.">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <ImageBox src={`${basePath}/assets/bad_legibility.png`} alt="Bad Legibility" />
                <div className="flex flex-col gap-4">
                  <div className="card-1 card-sm border">
                    <h4 className="h4 mb-2">Inadequate Typography</h4>
                    <p className="body-sm text-muted">The primary body font (Source Sans Pro) severely hurt legibility in dense form inputs.</p>
                  </div>
                  <div className="card-1 card-sm border">
                    <h4 className="h4 mb-2">Limited Hierarchy</h4>
                    <p className="body-sm text-muted">We only had 6 text styles available, which restricted developers from establishing visual structure.</p>
                  </div>
                </div>
              </div>
            </ArticleCard>

            <ArticleCard id="p4" pill="Problem 04" title="Heavy Overlays" description="Aggressive image treatments were actively harming the visual tone.">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div className="flex flex-col gap-4 order-last md:order-first">
                  <div className="card-1 card-sm border">
                    <h4 className="h4 mb-2">Obscured Photography</h4>
                    <p className="body-sm text-muted">Every hero image had heavy dark overlays, hiding the photos entirely.</p>
                  </div>
                  <div className="card-1 card-sm border">
                    <h4 className="h4 mb-2">Gloomy Tone</h4>
                    <p className="body-sm text-muted">These stylistic choices made the site feel unexpectedly gloomy for a career-focused tool.</p>
                  </div>
                </div>
                <ImageBox src={`${basePath}/assets/heavy_overlays.png`} alt="Heavy Overlays" />
              </div>
            </ArticleCard>

            <ArticleCard id="p5" pill="Problem 05" title="Iconography Chaos" description="The interface lacked cohesion due to a fragmented collection of icons.">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <ImageBox src={`${basePath}/assets/icon_chaos.png`} alt="Icon Chaos" />
                <div className="flex flex-col gap-4">
                  <div className="card-1 card-sm border">
                    <h4 className="h4 mb-2">Mixed Styles</h4>
                    <p className="body-sm text-muted">Styles were mixed everywhere—some outlined, some solid, some 2-colored.</p>
                  </div>
                  <div className="card-1 card-sm border">
                    <h4 className="h4 mb-2">Untrustworthy Look</h4>
                    <p className="body-sm text-muted">The resulting visual mess made the product feel untested and unpolished.</p>
                  </div>
                </div>
              </div>
            </ArticleCard>

            <ArticleCard id="p6" pill="Problem 06" title="Random Backgrounds" description="Unjustifiable design choices led to awkward shifts in UI brightness.">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div className="flex flex-col gap-4 order-last md:order-first">
                  <div className="card-1 card-sm border">
                    <h4 className="h4 mb-2">Arbitrary Usage</h4>
                    <p className="body-sm text-muted">Dark backgrounds were placed randomly just to separate visual sections.</p>
                  </div>
                  <div className="card-1 card-sm border">
                    <h4 className="h4 mb-2">No Logical Rule</h4>
                    <p className="body-sm text-muted">There was no underlying rationale for when to use dark versus light UI components.</p>
                  </div>
                </div>
                <ImageBox src={`${basePath}/assets/random_backgrounds.png`} alt="Random Backgrounds" />
              </div>
            </ArticleCard>
          </TopicDetails>
        </ProjectSection>

        <ProjectSection id="topic-ownership" theme="primary">
          <TopicHeader title="Design Ownership" />
          <TopicCover>
            <div className="grid gap-10">
              <div className="text-center mx-auto">
                <h2 className="h2 mb-4">The System Gatekeeper.</h2>
                <p className="body max-w-2xl mx-auto text-muted">
                  We hired an external design agency to help build the initial visual concepts, but a design system isn't just a
                  Figma file—it requires strict ownership. Here is how I managed the collaboration:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-0 border border-theme rounded-2xl overflow-hidden">
                <div className="card-hover card-1 card-sm rounded-none border-theme border-b border-r">
                  <div className="pill pill-rounded mb-4">01</div>
                  <h4 className="h4 mb-2">Set the Rules</h4>
                  <p className="body-sm text-muted">I briefed the agency on our user context, accessibility needs, and technical requirements before they started.</p>
                </div>
                <div className="card-hover card-1 card-sm rounded-none border-theme border-b">
                  <div className="pill pill-rounded mb-4">02</div>
                  <h4 className="h4 mb-2">Strict Validation</h4>
                  <p className="body-sm text-muted">Reviewed deliveries pixel-by-pixel. If a padding was off or a hover state was missing, I pushed it back for revision.</p>
                </div>
                <div className="card-hover card-1 card-sm rounded-none border-theme border-r">
                  <div className="pill pill-rounded mb-4">03</div>
                  <h4 className="h4 mb-2">Filled the Gaps</h4>
                  <p className="body-sm text-muted">I personally defined the structural grid math, created missing spacing tokens, and finalized the typography scale.</p>
                </div>
                <div className="card-hover card-1 card-sm rounded-none">
                  <div className="pill pill-rounded mb-4">04</div>
                  <h4 className="h4 mb-2">Enforced Consistency</h4>
                  <p className="body-sm text-muted">Ensured that no "creative but inconsistent" tweaks made it into the final product. Protected the locked system.</p>
                </div>
              </div>
            </div>
          </TopicCover>
        </ProjectSection>

        <ProjectSection id="topic-decisions" theme="success">
          <TopicHeader title="Core Decisions" />
          <TopicCover>
            <div className="text-center mx-auto">
              <h2 className="h2 mb-4">Systemizing the Chaos.</h2>
              <p className="body max-w-2xl mx-auto text-muted">To fix the underlying structural problems, we made 4 foundational decisions that completely overhauled the UI logic.</p>
            </div>
          </TopicCover>
          <TopicDetails>
            <ArticleCard id="s4" pill="Core Decision 01" title="Color System & Accessibility" description="The biggest risk in the old design was the failing green button. We completely overhauled the palette to make it inclusive by default.">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <ImageBox src={`${basePath}/assets/thumb_decision_01.png`} alt="Color System & Accessibility" />
                <div className="flex flex-col gap-4">
                  <div className="card-1 card-sm border">
                    <h4 className="h4 mb-2">Primary: Coach Ultra Violet</h4>
                    <p className="body-sm text-muted">Switched from Green to <code>#3D50FF</code>. It passes WCAG AA, draws the eye instantly, and builds trust.</p>
                  </div>
                  <div className="card-1 card-sm border">
                    <h4 className="h4 mb-2">Secondary: Assertive Magenta</h4>
                    <p className="body-sm text-muted">Added <code>#D01176</code> for highlights that need energy without fighting the primary violet.</p>
                  </div>
                  <div className="card-1 card-sm border">
                    <h4 className="h4 mb-2">Logical Backgrounds</h4>
                    <p className="body-sm text-muted">Defined exactly 3 light and 3 dark background shades. We stopped using random dark backgrounds just to separate sections.</p>
                  </div>
                </div>
              </div>
            </ArticleCard>

            <ArticleCard id="s5" pill="Core Decision 02" title="Typography Built for UI" description="A resume builder is a heavy, data-dense UI. We needed fonts that were highly readable at small sizes and friendly enough to reduce user anxiety.">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div className="flex flex-col gap-4 order-last md:order-first">
                  <div className="card-1 card-sm border">
                    <h4 className="h4 mb-2">Headings: Circular Std</h4>
                    <p className="body-sm text-muted">Moved away from the wide, bulky <em>Montserrat</em>. Circular Std is rounder and friendlier, which helps calm stressed job seekers.</p>
                  </div>
                  <div className="card-1 card-sm border">
                    <h4 className="h4 mb-2">Body Text: Public Sans</h4>
                    <p className="body-sm text-muted">Replaced <em>Source Sans Pro</em>. Public Sans is exceptionally clear for small form labels and dense paragraphs.</p>
                  </div>
                  <div className="card-1 card-sm border">
                    <h4 className="h4 mb-2">Full Hierarchy</h4>
                    <p className="body-sm text-muted">Went from only 6 styles to a full responsive system (Display, H1-H6, Labels, Captions) so designers never had to guess.</p>
                  </div>
                </div>
                <ImageBox src={`${basePath}/assets/thumb_decision_02.png`} alt="Typography System" />
              </div>
            </ArticleCard>

            <ArticleCard id="s6" pill="Core Decision 03" title="The Grid & Spacing Math" description="To stop designers and developers from &quot;eyeballing&quot; margins, we introduced strict mathematical rules.">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <ImageBox src={`${basePath}/assets/thumb_decision_03.png`} alt="Grid and Spacing" />
                <div className="flex flex-col gap-4">
                  <div className="card-1 card-sm border">
                    <h4 className="h4 mb-2">Responsive Columns</h4>
                    <p className="body-sm text-muted">12 columns for Desktop (1280px max), 8 for Tablet, 2 for Mobile.</p>
                  </div>
                  <div className="card-1 card-sm border">
                    <h4 className="h4 mb-2">Spacing Tokens</h4>
                    <p className="body-sm text-muted">Named values (e.g., <code>Space-LG</code>, <code>Space-XL</code>) instead of random pixel numbers.</p>
                  </div>
                  <div className="card-1 card-sm border">
                    <h4 className="h4 mb-2">The UX Impact</h4>
                    <p className="body-sm text-muted">Layouts became completely predictable. Elements stopped "jumping" when users navigated between pages.</p>
                  </div>
                </div>
              </div>
            </ArticleCard>

            <ArticleCard id="s7" pill="Core Decision 04" title="Component Standardization" description="We wiped out the mixed icon styles and built a master, atomic library.">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div className="flex flex-col gap-4 order-last md:order-first">
                  <div className="card-1 card-sm border">
                    <h4 className="h4 mb-2">One Icon Set</h4>
                    <p className="body-sm text-muted">Moved 100% of the product to <b>Font Awesome 5 Solid</b>. It guaranteed visual harmony, and devs already knew the classes.</p>
                  </div>
                  <div className="card-1 card-sm border">
                    <h4 className="h4 mb-2">Atomic Library</h4>
                    <p className="body-sm text-muted">Designed 5 button types across 4 sizes, complete with hover, active, and disabled states.</p>
                  </div>
                  <div className="card-1 card-sm border">
                    <h4 className="h4 mb-2">Reusable Assets</h4>
                    <p className="body-sm text-muted">Created standardized Trust Blades (client logos) and Form Inputs.</p>
                  </div>
                </div>
                <ImageBox src={`${basePath}/assets/thumb_decision_04.png`} alt="Component Standardization" />
              </div>
            </ArticleCard>
          </TopicDetails>
        </ProjectSection>

        <ProjectSection id="topic-execution" theme="primary">
          <TopicHeader title="Execution" />
          <TopicCover>
            <div className="grid gap-8">
              <div className="text-center mx-auto">
                <h2 className="h2 mb-4">Developer Handoff: Zero Guesswork</h2>
                <p className="body max-w-2xl mx-auto text-muted">Figma's Dev Mode is great, but developers still found themselves digging through nested layers to find exact padding values.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <ImageBox src={`${basePath}/assets/thumb_decision_05.png`} alt="Component Standardization" />
                <div className="flex flex-col gap-4">
                  <div className="card-sm card-1 border">
                    <h4 className="h4 mb-2">Front-Facing Specs</h4>
                    <p className="body-sm text-muted">I placed explicit text specs (margins, font sizes, colors) directly on the Figma canvas next to the designs.</p>
                  </div>
                  <div className="card-sm card-1 border">
                    <h4 className="h4 mb-2">Matched the Ecosystem</h4>
                    <p className="body-sm text-muted">I used the exact same spec format as Bold's other major product, <em>ResumeGenius</em>, so devs had zero learning curve.</p>
                  </div>
                  <div className="card-sm card-1 border">
                    <h4 className="h4 mb-2">The Result</h4>
                    <p className="body-sm text-muted">Developers stopped asking "what size is this?" Design-to-code speed improved massively because the answers were printed right in front of them.</p>
                  </div>
                </div>
              </div>
            </div>
          </TopicCover>
        </ProjectSection>

        <ProjectSection id="topic-impact" theme="success">
          <TopicHeader title="Impact" />
          <TopicCover>
            <div>
              <div className="text-center mx-auto mb-8">
                <h2 className="h2 mb-4">The Final Impact</h2>
                <p className="body max-w-2xl mx-auto text-muted">The system unified the entire UI across 15+ pages, resulting in a cleaner, faster, and highly accessible experience.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="card-1 card-sm border bg-[var(--color-card)]">
                  <div className="h3 mb-2 text-primary">✅</div>
                  <h4 className="h4 mb-2">100% Accessible</h4>
                  <p className="body-sm text-muted">Every interactive CTA now passes strict WCAG standards.</p>
                </div>
                <div className="card-1 card-sm border bg-[var(--color-card)]">
                  <div className="h3 mb-2 text-primary">✅</div>
                  <h4 className="h4 mb-2">15+ Pages Migrated</h4>
                  <p className="body-sm text-muted">Successfully applied this system to redesign 15 to 25 core pages with zero design drift.</p>
                </div>
                <div className="card-1 card-sm border bg-[var(--color-card)]">
                  <div className="h3 mb-2 text-primary">✅</div>
                  <h4 className="h4 mb-2">One Source of Truth</h4>
                  <p className="body-sm text-muted">Agency, internal designers, and developers finally spoke the exact same visual language.</p>
                </div>
                <div className="card-1 card-sm border bg-[var(--color-card)]">
                  <div className="h3 mb-2 text-primary">✅</div>
                  <h4 className="h4 mb-2">Faster Shipping</h4>
                  <p className="body-sm text-muted">Designers stopped reinventing cards. Developers built reusable wrappers. Production multiplied.</p>
                </div>
              </div>
            </div>
          </TopicCover>
        </ProjectSection>

        <ProjectSection id="topic-reflection" theme="primary">
          <TopicHeader title="Reflection" />
          <TopicCover>
            <div>
              <div className="text-center mx-auto mb-8">
                <h2 className="h2 mb-4">What I Learned</h2>
                <p className="body max-w-2xl mx-auto text-muted">A systemic overhaul is just as much about communication as it is about typography and spacing.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="card-sm card-1 border">
                  <h4 className="h4 mb-2">1. Document the "Why"</h4>
                  <p className="body-sm text-muted">If you just tell a designer "use this 24px margin," they will argue. If you explain <em>why</em> it aligns with the dev grid, they agree. Context stops debates.</p>
                </div>
                <div className="card-sm card-1 border">
                  <h4 className="h4 mb-2">2. Constraints = Speed</h4>
                  <p className="body-sm text-muted">Making WCAG compliance the very first rule actually sped up our color exploration by instantly filtering out bad choices.</p>
                </div>
                <div className="card-sm card-1 border">
                  <h4 className="h4 mb-2">3. Systems Need Bouncers</h4>
                  <p className="body-sm text-muted">The UI kit is only 20% of the job. 80% is governing the system, reviewing work, and having the confidence to say "no" to random tweaks.</p>
                </div>
              </div>
            </div>
          </TopicCover>
        </ProjectSection>
      </ProjectJourney>
    </div>
  );
};

export default ResumeHelp;
