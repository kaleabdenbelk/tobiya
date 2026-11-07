import Image from "next/image";
import { Introduction } from "./Introduction";
import { Reveal } from "./Reveal";

/**
 * Section 3 — Immersive architectural visual chapter.
 *
 * The architectural photograph sits pinned behind the Introduction section. The
 * introduction is an opaque, warm-ivory foreground layer. As the visitor
 * scrolls, the introduction moves up through the viewport and the photograph
 * underneath is gradually revealed, filling almost the entire viewport.
 *
 * Content: a kicker, title and supporting line sit over the photograph's lower
 * third, connecting the visual to Tobiya's integrated architectural,
 * engineering and construction-management thinking — which the following
 * Services section then breaks out into its three disciplines. Copy is working
 * copy and must be reviewed by Tobiya before publication.
 *
 * Implementation note: the photo is `position: sticky` with a negative bottom
 * margin equal to its own height so it occupies zero layout height while
 * remaining pinned behind the opaque introduction. The height and the negative
 * margin both use `100dvh` (dynamic viewport height) so they stay exactly in
 * sync — including on mobile where the browser chrome expands and collapses —
 * preventing a gap or jump at the photo's bottom edge. A transparent spacer
 * lets the fully revealed image linger before Section 4 begins.
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
export function VisualChapter() {
  return (
    <div className="relative">
      {/* Pinned photographic layer */}
      <div className="sticky top-0 -mb-[100dvh] h-[100dvh] w-full overflow-hidden bg-forest">
        <div aria-hidden className="absolute inset-0">
          <Image
            src="/images/visual-chapter.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"
        />

        {/* Editorial overlay over the photograph's lower third */}
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
      </div>

      {/* Foreground: opaque introduction slides over the photograph */}
      <Introduction />

      {/* Quiet lingering space so the fully revealed photograph can breathe */}
      <div className="relative h-[45vh]" aria-hidden />
    </div>
  );
}
