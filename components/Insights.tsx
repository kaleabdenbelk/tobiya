import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { featuredInsight, perspectives, resources, type Insight } from "@/lib/insights";

/**
 * Section 8 — Insights & Resources.
 *
 * A refined editorial publication: a large featured insight, a quiet
 * typographic list of further perspectives, and a compact company-resources
 * index. Content is data-driven from lib/insights.ts.
 *
 * AUTHENTICITY — The current records are development placeholders (proposed
 * topics / draft summaries). They render with visible markers and non-
 * navigating links so they can never be mistaken for published articles.
 * Flip `approvalStatus` to "approved" and supply a real `href` to publish.
 * Resources are only shown when an approved document destination exists.
 */

function DevMarker({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-dashed border-ink/30 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-ink/60">
      {label}
    </span>
  );
}

function InsightLink({ insight, className }: { insight: Insight; className?: string }) {
  const base =
    "group inline-flex items-center gap-2 font-semibold text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest";
  if (insight.href) {
    return (
      <Link href={insight.href} className={`${base} ${className ?? ""}`}>
        <span className="underline decoration-line decoration-[1.5px] underline-offset-[8px] transition-colors duration-300 group-hover:decoration-ink">
          {insight.linkLabel}
        </span>
        <ArrowRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    );
  }
  return (
    <span className={`${base} cursor-default text-ink-soft`}>
      <span className="underline decoration-line underline-offset-[8px]">{insight.linkLabel}</span>
      <ArrowRight aria-hidden className="size-4" />
      <span className="text-[12px] font-medium uppercase tracking-[0.14em] text-ink-soft/60">
        in preparation
      </span>
    </span>
  );
}

function FeaturedInsight({ insight }: { insight: Insight }) {
  return (
    <div className="grid gap-8 md:grid-cols-12 md:gap-12">
      <div className="md:col-span-7">
        <div className="group overflow-hidden bg-line">
          <div className="relative aspect-[4/3]">
            <Image
              src={insight.image ?? ""}
              alt={insight.alt ?? ""}
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          </div>
        </div>
        {insight.caption && (
          <p className="mt-3 text-[13px] text-ink-soft/70">{insight.caption}</p>
        )}
      </div>

      <div className="flex flex-col md:col-span-4 md:col-start-9">
        <DevMarker label="Development preview" />
        <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.3em] text-ink-soft">
          {insight.category}
        </p>
        <h3 className="mt-3 font-display text-[clamp(26px,3vw,38px)] font-semibold leading-[1.1] tracking-[-0.03em] text-ink">
          {insight.title}
        </h3>
        <div className="mt-5 space-y-4">
          {insight.description.map((p, i) => (
            <p key={i} className="text-base leading-[1.75] text-ink-soft">
              {p}
            </p>
          ))}
        </div>
        <div className="mt-8">
          <InsightLink insight={insight} />
        </div>
      </div>
    </div>
  );
}

function PerspectiveRow({ insight, index }: { insight: Insight; index: number }) {
  return (
    <li className="border-t border-line py-8 first:border-t-0 md:py-9">
      <div className="grid gap-5 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-2">
          <p className="font-display text-sm tabular-nums text-ink-soft/60">
            {String(index + 1).padStart(2, "0")}
          </p>
          <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-soft md:mt-4">
            {insight.category}
          </p>
        </div>
        <div className="md:col-span-7">
          <h4 className="font-display text-[clamp(20px,2.2vw,27px)] font-semibold leading-[1.15] tracking-[-0.025em] text-ink">
            {insight.title}
          </h4>
          <p className="mt-3 max-w-[56ch] text-[15px] leading-[1.75] text-ink-soft">
            {insight.description[0]}
          </p>
        </div>
        <div className="md:col-span-3 md:justify-self-end">
          <InsightLink insight={insight} />
        </div>
      </div>
    </li>
  );
}

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
        {/* Intro — spaced editorial two-column */}
        <div className="grid gap-8 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-ink-soft">
              07 / Insights &amp; resources
            </p>
            <h2 className="mt-6 font-display text-[clamp(30px,4vw,48px)] font-semibold leading-[1.08] tracking-[-0.035em] text-ink">
              Ideas and perspectives on the built environment
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="max-w-[52ch] text-base leading-[1.75] text-ink-soft">
              Explore perspectives on architecture, engineering and the decisions
              that shape building projects, alongside useful information about
              Tobiya Consulting.
            </p>
          </div>
        </div>

        {/* Featured insight */}
        <div className="mt-16 border-t border-line pt-14 md:mt-20 md:pt-16">
          <FeaturedInsight insight={featuredInsight} />
        </div>

        {/* More perspectives — typographic list */}
        <div className="mt-14 md:mt-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-ink-soft">
            More perspectives
          </p>
          <ul className="mt-6">
            {perspectives.map((p, i) => (
              <PerspectiveRow key={p.id} insight={p} index={i} />
            ))}
          </ul>
        </div>

        {/* Company resources */}
        <div className="mt-14 md:mt-20">
          <ResourcesBlock />
        </div>
      </div>
    </section>
  );
}
