import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

/**
 * Section 5 — Selected projects.
 *
 * IMPORTANT — AUTHENTICITY: No verified Tobiya project material is available in
 * the supplied assets. Per the brief we do NOT manufacture a portfolio or
 * present unrelated stock photography as completed Tobiya projects. Instead we
 * keep this section's structure ready for real content and show an honest,
 * restrained note that case studies are being prepared.
 *
 * When verified project material is provided, the intended editorial portfolio
 * layout is: one featured project (large photograph ~2/3 width left, info
 * right) followed by two alternating projects (info left/photo right, then a
 * third carefully composed arrangement). Each project links to its own case
 * study page, with subtle image zoom on hover, arrow-link transitions, clear
 * keyboard focus, and no extra parallax/image-reveal effects.
 */
export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 bg-offwhite py-28 md:py-40">
      <div className="mx-auto max-w-[1200px] px-6 md:px-[5vw]">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-ink-soft">
            Project experience
          </p>
          <h2 className="mt-6 font-display text-[clamp(30px,4vw,48px)] font-semibold leading-[1.08] tracking-[-0.035em] text-ink">
            Experience in practice
          </h2>
          <p className="mt-5 max-w-[52ch] text-base leading-[1.75] text-ink-soft">
            Every project has its own context, priorities and responsibilities.
            Explore selected project work and understand the role played by the
            professionals involved.
          </p>
        </div>

        <Reveal className="mt-16">
          <div className="border-t border-line pt-10">
            <p className="max-w-2xl text-base leading-[1.75] text-ink-soft">
              Selected case studies are currently being prepared from
              Tobiya&apos;s recent project involvement. We are choosing to publish
              only verified project information rather than a manufactured
              portfolio. Please check back shortly, or get in touch to discuss
              our recent work directly.
            </p>
            <Link
              href="/projects"
              className="group mt-8 inline-flex items-center gap-2 font-semibold text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest"
            >
              <span className="underline decoration-line decoration-[1.5px] underline-offset-[8px] transition-colors duration-300 group-hover:decoration-ink">
                View all projects
              </span>
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
