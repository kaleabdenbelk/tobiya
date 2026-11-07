"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { featuredInsight, perspectives, type Insight } from "@/lib/insights";
import { cn } from "cn";

/**
 * Interactive Insights composition — scroll-driven, rendered inside the forest-
 * green background.
 *
 * The left column is a constant section introduction; the right column lays
 * out the perspectives in the page flow, and as the visitor scrolls an
 * IntersectionObserver highlights the perspective currently in view.
 *
 * AUTHENTICITY — drafts still link as "in preparation" until approved.
 */

const picks: Insight[] = [featuredInsight, ...perspectives];

function InsightLink({ insight }: { insight: Insight }) {
  const base =
    "group inline-flex items-center gap-2 font-semibold text-cream focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream";
  if (insight.href) {
    return (
      <Link href={insight.href} className={base}>
        <span className="underline decoration-cream/40 decoration-[1.5px] underline-offset-[8px] transition-colors duration-300 group-hover:decoration-cream">
          {insight.linkLabel}
        </span>
        <ArrowRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    );
  }
  return (
    <span className={`${base} cursor-default text-cream/70`}>
      <span className="underline decoration-cream/40 underline-offset-[8px]">{insight.linkLabel}</span>
      <ArrowRight aria-hidden className="size-4" />
      <span className="text-[12px] font-medium uppercase tracking-[0.14em] text-cream/50">
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

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
      {/* Constant section introduction — sticky on desktop */}
      <div className="lg:col-span-5">
        <div className="lg:sticky lg:top-28">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-cream/60">
            07 / Insights &amp; resources
          </p>
          <h2 className="mt-6 font-display text-[clamp(30px,4vw,48px)] font-semibold leading-[1.08] tracking-[-0.035em] text-white">
            Ideas and perspectives on the built environment
          </h2>
          <p className="mt-6 max-w-[44ch] text-base leading-[1.75] text-cream/70">
            Explore perspectives on architecture, engineering and the decisions
            that shape building projects, alongside useful information about
            Tobiya Consulting.
          </p>
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
                      ? "scale-105 border-cream bg-cream text-forest"
                      : "border-white/25 text-cream/60",
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cream/55">
                    {p.category}
                  </p>
                  <h3
                    className={cn(
                      "mt-2 font-display text-[clamp(20px,2.2vw,27px)] leading-[1.15] tracking-[-0.025em] transition-colors duration-700",
                      isActive ? "font-semibold text-white" : "font-medium text-cream/55",
                    )}
                  >
                    {p.title}
                  </h3>
                  <p className="mt-3 max-w-[52ch] text-[15px] leading-[1.75] text-cream/70">
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
