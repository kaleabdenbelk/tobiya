import { Reveal } from "./Reveal";

/**
 * Section 8 — Insights and resources.
 *
 * No verified published articles or downloadable resources exist in the
 * supplied assets, so we do NOT fabricate titles, dates or documents. The
 * section keeps its quiet, publication-style introduction and notes that
 * content is forthcoming. A verified editorial list can be rendered here when
 * real resources are provided.
 */
export function Insights() {
  return (
    <section id="insights" className="scroll-mt-24 bg-cream py-28 md:py-40">
      {/* Anchor target for the nav "Resources" link */}
      <div id="resources" className="scroll-mt-24" aria-hidden />

      <div className="mx-auto max-w-[1200px] px-6 md:px-[5vw]">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-ink-soft">
              Insights &amp; resources
            </p>
            <h2 className="mt-6 font-display text-[clamp(30px,4vw,48px)] font-semibold leading-[1.08] tracking-[-0.035em] text-ink">
              Ideas, knowledge and perspectives
            </h2>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <p className="max-w-[52ch] text-base leading-[1.75] text-ink-soft">
              Explore published perspectives, technical resources and company
              information.
            </p>

            <Reveal className="mt-10">
              <div className="border-t border-line pt-8">
                <p className="max-w-[52ch] text-[15px] leading-[1.75] text-ink-soft">
                  Articles and downloadable resources will be published here as
                  they become available.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
