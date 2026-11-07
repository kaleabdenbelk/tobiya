"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { featuredInsight, perspectives, type Insight } from "@/lib/insights";
import { cn } from "cn";

/**
 * Interactive Insights composition — scroll-driven.
 *
 * The selected perspective is presented as the main content in a sticky left
 * panel. On the right, the perspectives are laid out in the page flow; as the
 * visitor scrolls, an IntersectionObserver keeps the panel in sync with the
 * perspective currently in view.
 *
 * AUTHENTICITY — drafts still link as "in preparation" until approved.
 */

const picks: Insight[] = [featuredInsight, ...perspectives];

function DevMarker() {
  return (
    <span className="inline-flex items-center rounded-full border border-dashed border-ink/30 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-ink/60">
      Development preview
    </span>
  );
}

function InsightLink({ insight }: { insight: Insight }) {
  const base =
    "group inline-flex items-center gap-2 font-semibold text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest";
  if (insight.href) {
    return (
      <Link href={insight.href} className={base}>
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

export function InsightPicker() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = stepRefs.current.findIndex((ref) => ref === entry.target);
            if (index !== -1) setActiveStep(index);
          }
        });
      },
      { threshold: 0.5, rootMargin: "-30% 0px -30% 0px" },
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, []);

  const current = picks[activeStep];

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
      {/* Main content — sticky, text-led */}
      <div className="lg:col-span-5">
        <div className="lg:sticky lg:top-28 lg:min-h-[440px]">
          <div key={current.id} className="animate-fade">
            <DevMarker />
            <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.3em] text-ink-soft">
              {current.category}
            </p>
            <h3 className="mt-4 font-display text-[clamp(26px,3vw,38px)] font-semibold leading-[1.1] tracking-[-0.03em] text-ink">
              {current.title}
            </h3>
            <div className="mt-6 space-y-4">
              {current.description.map((p, i) => (
                <p key={i} className="text-base leading-[1.75] text-ink-soft">
                  {p}
                </p>
              ))}
            </div>
            <div className="mt-8">
              <InsightLink insight={current} />
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable perspectives */}
      <div className="space-y-16 lg:col-span-6 lg:col-start-7 lg:space-y-24">
        {picks.map((p, i) => {
          const isActive = i === activeStep;
          return (
            <div
              key={p.id}
              ref={(el) => {
                stepRefs.current[i] = el;
              }}
              className={cn(
                "transition-all duration-1000 ease-out",
                isActive
                  ? "translate-y-0 opacity-100"
                  : i < activeStep
                    ? "-translate-y-6 opacity-40"
                    : "translate-y-6 opacity-40",
              )}
            >
              <div className="flex items-start gap-5">
                <span
                  className={cn(
                    "grid size-12 shrink-0 place-items-center rounded-full border font-display text-base font-semibold transition-all duration-700",
                    isActive
                      ? "scale-105 border-forest bg-forest text-primary-foreground"
                      : "border-line text-ink-soft",
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-soft">
                    {p.category}
                  </p>
                  <h3
                    className={cn(
                      "mt-2 font-display text-[clamp(20px,2.2vw,27px)] leading-[1.15] tracking-[-0.025em] transition-colors duration-700",
                      isActive ? "font-semibold text-ink" : "font-medium text-ink-soft",
                    )}
                  >
                    {p.title}
                  </h3>
                  <p className="mt-3 max-w-[52ch] text-[15px] leading-[1.75] text-ink-soft">
                    {p.description[0]}
                  </p>
                  <div className="mt-4">
                    <InsightLink insight={p} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
