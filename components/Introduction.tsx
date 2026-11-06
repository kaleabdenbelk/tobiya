import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * Section 2 — Company introduction.
 *
 * Sits as the opaque foreground layer over the Section 3 photograph. When the
 * visitor scrolls, this section lifts away to reveal the architectural image
 * that has been underneath all along.
 *
 * Copy note: the company description below is working copy based on Tobiya's
 * public identity and must be reviewed by Tobiya before publication.
 */
export function Introduction() {
  return (
    <section id="about" className="relative z-10 scroll-mt-24 bg-cream">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-6 py-28 md:grid-cols-12 md:gap-8 md:px-[5vw] md:py-40">
        <div className="md:col-span-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-ink-soft">
            About Tobiya
          </p>
          <h2 className="mt-8 font-display text-[clamp(34px,4.8vw,58px)] font-semibold leading-[1.06] tracking-[-0.04em] text-ink">
            Good projects are shaped long before they are built
          </h2>
        </div>

        <div className="md:col-span-5 md:col-start-7">
          <div className="max-w-[46ch] space-y-6 text-base leading-[1.8] text-ink-soft md:text-[17px]">
            <p>
              Tobiya Consulting Architects and Engineers is a professional
              consultancy working within the built environment and construction
              sector.
            </p>
            <p>
              Bringing an architectural and engineering perspective together with
              construction-management consultancy, Tobiya operates in the
              professional space where project decisions, technical
              considerations and delivery meet.
            </p>
          </div>

          <Link
            href="/about"
            className="group mt-10 inline-flex items-center gap-2 font-semibold text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest"
          >
            <span className="underline decoration-line decoration-[1.5px] underline-offset-[8px] transition-colors duration-300 group-hover:decoration-ink">
              Discover Tobiya
            </span>
            <ArrowRight
              className="size-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
