import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { resources } from "@/lib/insights";
import { InsightPicker } from "./InsightPicker";

/**
 * Section 8 — Insights & Resources.
 *
 * A refined editorial publication: an interactive composition (main content on
 * the left, a scroll-snap perspective picker on the right) followed by a
 * compact company-resources index. Content is data-driven from
 * lib/insights.ts.
 *
 * AUTHENTICITY — The current records are development placeholders. Draft links
 * render as "in preparation". Resources are only shown when an approved
 * document destination exists.
 */

function ResourcesBlock() {
  const available = resources.filter((r) => r.href);

  return (
    <div className="border-t border-line pt-12 md:pt-14">
      <div className="grid gap-6 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-5">
          <h3 className="font-display text-[clamp(22px,2.6vw,32px)] font-semibold tracking-[-0.025em] text-ink">
            Company information
          </h3>
          <p className="mt-3 max-w-[44ch] text-[15px] leading-relaxed text-ink-soft">
            Find out more about Tobiya, its professional background and its work
            within the built environment.
          </p>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          {available.length > 0 ? (
            <ul className="divide-y divide-line">
              {available.map((r) => (
                <li key={r.id} className="flex items-start gap-4 py-5 first:pt-0 last:pb-0">
                  <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-md border border-line text-ink-soft">
                    <FileText className="size-4" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h4 className="font-display text-[17px] font-semibold tracking-[-0.01em] text-ink">
                        {r.title}
                      </h4>
                      {r.docType && (
                        <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-ink-soft/70">
                          {r.docType}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-[14px] leading-[1.6] text-ink-soft">{r.description}</p>
                    <Link
                      href={r.href ?? "#"}
                      className="group mt-2 inline-flex items-center gap-2 text-[15px] font-semibold text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest"
                    >
                      <span className="underline decoration-line decoration-[1.5px] underline-offset-[8px] transition-colors duration-300 group-hover:decoration-ink">
                        {r.linkLabel}
                      </span>
                      <ArrowRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="rounded-lg border border-line bg-cream/50 p-6">
              <p className="text-[15px] leading-[1.75] text-ink-soft">
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
    <section id="insights" className="scroll-mt-24 bg-offwhite py-28 md:py-40">
      {/* Anchor target for the nav "Resources" link */}
      <div id="resources" className="scroll-mt-24" aria-hidden />

      <div className="mx-auto max-w-[1200px] px-6 md:px-[5vw]">
        {/* Interactive composition — constant intro + scrollable perspectives */}
        <div className="border-t border-line pt-14 md:pt-20">
          <InsightPicker />
        </div>

        {/* Company resources */}
        <div className="mt-14 md:mt-20">
          <ResourcesBlock />
        </div>
      </div>
    </section>
  );
}
