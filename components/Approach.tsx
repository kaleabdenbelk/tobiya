import { Reveal } from "./Reveal";

/**
 * Section 6 — How we work.
 *
 * A clean typographic sequence of four numbered stages with a connecting line.
 * The stages are proposed explanatory content, not a verified description of
 * Tobiya's formal methodology, and must be reviewed and approved before being
 * represented as the official way of working.
 */
const stages = [
  {
    n: "01",
    title: "Understand",
    desc: "Understand the project context, objectives, requirements and priorities.",
  },
  {
    n: "02",
    title: "Define",
    desc: "Establish the scope of work and clarify the technical and professional considerations.",
  },
  {
    n: "03",
    title: "Coordinate",
    desc: "Bring the relevant decisions, information and participants together as the work progresses.",
  },
  {
    n: "04",
    title: "Review",
    desc: "Review progress, address emerging considerations and support informed project decisions.",
  },
];

export function Approach() {
  return (
    <section className="scroll-mt-24 bg-cream py-28 md:py-40">
      <div className="mx-auto max-w-[1200px] px-6 md:px-[5vw]">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-ink-soft">
            Our approach
          </p>
          <h2 className="mt-6 font-display text-[clamp(30px,4vw,48px)] font-semibold leading-[1.08] tracking-[-0.035em] text-ink">
            A considered approach to complex projects
          </h2>
          <p className="mt-5 max-w-[52ch] text-base leading-[1.75] text-ink-soft">
            Good project outcomes depend on clear decisions, coordination and
            attention to detail throughout the work.
          </p>
        </div>

        <div className="relative mt-20 pb-4">
          {/* Connecting rails */}
          <div aria-hidden className="absolute left-7 top-4 bottom-4 w-px bg-line md:hidden" />
          <div aria-hidden className="absolute left-0 right-0 top-7 hidden h-px bg-line md:block" />

          <div className="relative space-y-12 md:grid md:grid-cols-4 md:gap-10 md:space-y-0">
            {stages.map((stage, i) => (
              <Reveal key={stage.n} delay={i * 120}>
                <div>
                  <span className="grid size-14 place-items-center rounded-full border border-ink/25 bg-transparent font-display text-base font-semibold text-ink">
                    {stage.n}
                  </span>
                  <h3 className="mt-7 font-display text-[22px] font-semibold tracking-[-0.02em] text-ink">
                    {stage.title}
                  </h3>
                  <p className="mt-3 max-w-[32ch] text-[15px] leading-[1.75] text-ink-soft">
                    {stage.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
