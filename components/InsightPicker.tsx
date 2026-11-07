"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { featuredInsight, perspectives, type Insight } from "@/lib/insights";
import { cn } from "cn";

/**
 * Interactive Insights composition.
 *
 * The selected perspective is the main content on the left; the remaining
 * perspectives sit in a scroll-snap vertical picker on the right. Scrolling
 * (or clicking / using arrow keys) through the picker swaps the main content.
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
  const [active, setActive] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const ticking = useRef(false);
  const centred = useRef(false);

  const computeActive = useCallback(() => {
    const cont = containerRef.current;
    if (!cont) return;
    const contRect = cont.getBoundingClientRect();
    const center = contRect.top + contRect.height / 2;
    let best = 0;
    let bestDist = Infinity;
    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      const r = el.getBoundingClientRect();
      const d = Math.abs(r.top + r.height / 2 - center);
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    });
    setActive((cur) => (cur === best ? cur : best));
  }, []);

  const handleScroll = useCallback(() => {
    if (ticking.current) return;
    ticking.current = true;
    requestAnimationFrame(() => {
      computeActive();
      ticking.current = false;
    });
  }, [computeActive]);

  const scrollToItem = useCallback(
    (i: number) => {
      const cont = containerRef.current;
      const el = itemRefs.current[i];
      if (!cont || !el) return;
      const contRect = cont.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      const offset = elRect.top + elRect.height / 2 - (contRect.top + contRect.height / 2);
      cont.scrollBy({ top: offset, behavior: "smooth" });
      setActive(i);
    },
    [],
  );

  /* Centre the first item once so the wheel starts in a stable position. */
  useEffect(() => {
    if (centred.current) return;
    centred.current = true;
    const raf = requestAnimationFrame(() => scrollToItem(0));
    return () => cancelAnimationFrame(raf);
  }, [scrollToItem]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      scrollToItem(Math.min(active + 1, picks.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      scrollToItem(Math.max(active - 1, 0));
    }
  };

  const current = picks[active];

  return (
    <div className="grid gap-8 md:grid-cols-12 md:gap-12">
      {/* Main content — selected perspective */}
      <div className="md:col-span-7">
        <div key={current.id} className="animate-fade">
          {current.image && (
            <div className="overflow-hidden bg-line">
              <div className="relative aspect-[16/10]">
                <Image
                  src={current.image}
                  alt={current.alt ?? ""}
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          )}
          {current.caption && (
            <p className="mt-3 text-[13px] text-ink-soft/70">{current.caption}</p>
          )}

          <div className="mt-8">
            <DevMarker />
            <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.3em] text-ink-soft">
              {current.category}
            </p>
            <h3 className="mt-3 font-display text-[clamp(26px,3vw,38px)] font-semibold leading-[1.1] tracking-[-0.03em] text-ink">
              {current.title}
            </h3>
            <div className="mt-5 space-y-4">
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

      {/* Wheel picker — scroll-snap vertical list */}
      <div className="md:col-span-4 md:col-start-9">
        <div
          ref={containerRef}
          onScroll={handleScroll}
          onKeyDown={onKeyDown}
          tabIndex={0}
          role="listbox"
          aria-label="Select a perspective"
          className="h-[460px] snap-y snap-mandatory overflow-y-auto rounded-lg border border-line bg-cream/40 px-2 pb-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest [scrollbar-color:var(--line)_transparent] [scrollbar-width:thin]"
        >
          {picks.map((p, i) => (
            <button
              key={p.id}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              type="button"
              role="option"
              aria-selected={i === active}
              onClick={() => scrollToItem(i)}
              className={cn(
                "block w-full snap-center border-b border-line px-4 py-7 text-left transition-colors duration-300",
                i === active ? "bg-cream text-ink" : "text-ink-soft hover:bg-cream/60",
              )}
            >
              <span className="font-display text-xs tabular-nums text-ink-soft/60">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className={cn(
                  "mt-2 block text-[11px] font-semibold uppercase tracking-[0.14em]",
                  i === active ? "text-forest" : "text-ink-soft",
                )}
              >
                {p.category}
              </span>
              <span
                className={cn(
                  "mt-1.5 block font-display leading-snug tracking-[-0.01em]",
                  i === active ? "font-semibold" : "font-medium",
                )}
              >
                {p.title}
              </span>
            </button>
          ))}
        </div>
        <p className="mt-3 text-center text-[12px] text-ink-soft/60">
          Scroll to explore perspectives
        </p>
      </div>
    </div>
  );
}
