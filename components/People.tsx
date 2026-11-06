import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

/**
 * Section 7 — People and expertise.
 *
 * No verified staff photographs, names or biographies are available, so we do
 * NOT display fictional profiles or AI-generated faces as real employees. The
 * section keeps its editorial introduction and links to the About/team page,
 * and will display individual profiles once company-approved materials exist.
 */
export function People() {
  return (
    <section id="people" className="scroll-mt-24 bg-offwhite py-28 md:py-40">
      <div className="mx-auto max-w-[1200px] px-6 md:px-[5vw]">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-ink-soft">
              Our people
            </p>
            <h2 className="mt-6 font-display text-[clamp(30px,4vw,48px)] font-semibold leading-[1.08] tracking-[-0.035em] text-ink">
              The people behind the work
            </h2>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <p className="max-w-[52ch] text-base leading-[1.75] text-ink-soft">
              Good consultancy depends on the knowledge, judgement and
              collaboration of the people involved.
            </p>

            <Reveal className="mt-10">
              <div className="rounded-lg border border-line bg-cream/60 p-8">
                <p className="text-[15px] leading-[1.75] text-ink-soft">
                  Individual team profiles will be added here as staff
                  photographs, names and biographies are confirmed for
                  publication.
                </p>
              </div>
            </Reveal>

            <Link
              href="/about"
              className="group mt-8 inline-flex items-center gap-2 font-semibold text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest"
            >
              <span className="underline decoration-line decoration-[1.5px] underline-offset-[8px] transition-colors duration-300 group-hover:decoration-ink">
                Meet the team
              </span>
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
