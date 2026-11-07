import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { resources } from "@/lib/insights";
import { InsightPicker } from "./InsightPicker";

/**
 * Section 8 — Insights & Resources.
 *
 * The whole section sits inside a flowing forest-green background (echoing the
 * visual chapter): a pinned background layer is revealed as the section flows
 * in from above, and all content is rendered directly on it in light type.
 * A linger area lets the background flow naturally into the dark Contact
 * section. Purely typographic — no imagery beyond the featured insight photo.
 *
 * AUTHENTICITY — The current records are development placeholders. Draft links
 * render as "in preparation". Resources are only shown when an approved
 * document destination exists.
 */

function ResourcesBlock() {
  const available = resources.filter((r) => r.href);

  return (
    <div className="border-t border-white/15 pt-12 md:pt-14">
      <div className="grid gap-6 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-5">
          <h3 className="font-display text-[clamp(22px,2.6vw,32px)] font-semibold tracking-[-0.025em] text-white">
            Company information
          </h3>
          <p className="mt-3 max-w-[44ch] text-[15px] leading-relaxed text-cream/70">
            Find out more about Tobiya, its professional background and its work
            within the built environment.
          </p>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          {available.length > 0 ? (
            <ul className="divide-y divide-white/15">
              {available.map((r) => (
                <li key={r.id} className="flex items-start gap-4 py-5 first:pt-0 last:pb-0">
                  <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-md border border-white/20 text-cream/70">
                    <FileText className="size-4" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h4 className="font-display text-[17px] font-semibold tracking-[-0.01em] text-white">
                        {r.title}
                      </h4>
                      {r.docType && (
                        <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-cream/50">
                          {r.docType}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-[14px] leading-[1.6] text-cream/65">{r.description}</p>
                    <Link
                      href={r.href ?? "#"}
                      className="group mt-2 inline-flex items-center gap-2 text-[15px] font-semibold text-cream focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream"
                    >
                      <span className="underline decoration-cream/40 decoration-[1.5px] underline-offset-[8px] transition-colors duration-300 group-hover:decoration-cream">
                        {r.linkLabel}
                      </span>
                      <ArrowRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="rounded-lg border border-white/20 bg-white/5 p-6">
              <p className="text-[15px] leading-[1.75] text-cream/70">
                Approved company documents will be made available here once they
                are ready for publication.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function Insights() {
  return (
    <div className="relative">
      {/* Pinned background layer — revealed as the section flows in from above */}
      <div className="sticky top-0 -mb-[100svh] h-[100svh] w-full overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, var(--forest) 0%, #0c1a15 55%, #07120e 100%)",
          }}
        >
          <span
            aria-hidden
            className="pointer-events-none absolute -right-6 bottom-4 select-none font-display text-[24vw] font-semibold leading-none tracking-[-0.045em] text-white/[0.05] lg:right-2 lg:bottom-8 lg:text-[280px]"
          >
            Perspectives
          </span>
        </div>
      </div>

      {/* Content — rendered inside the flowing background */}
      <section id="insights" className="relative z-10 scroll-mt-24">
        {/* Anchor target for the nav "Resources" link */}
        <div id="resources" className="scroll-mt-24" aria-hidden />

        <div className="mx-auto max-w-[1200px] px-6 py-28 md:px-[5vw] md:py-40">
          <div className="border-t border-white/15 pt-14 md:pt-20">
            <InsightPicker />
          </div>

          <div className="mt-14 md:mt-20">
            <ResourcesBlock />
          </div>
        </div>
      </section>

      {/* Linger area — a little green flows into the Contact section */}
      <div className="relative h-[16vh]" aria-hidden />
    </div>
  );
}
