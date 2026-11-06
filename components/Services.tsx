"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { cn } from "cn";

/**
 * Section 4 — Services and capabilities.
 *
 * An interactive editorial composition: a numbered service selector on the left
 * and a single large photographic display on the right that crossfades when a
 * service is selected. On mobile the selector becomes a stacked accordion with
 * the associated image and description inline.
 *
 * Service categories and descriptions are working copy based on Tobiya's public
 * record and must be confirmed by Tobiya before publication. The images are
 * atmospheric illustrations for the disciplines, not depictions of completed
 * Tobiya projects.
 */
const services = [
  {
    n: "01",
    title: "Architectural Consultancy",
    desc: "Architectural thinking considers the relationship between a project's purpose, its setting and the spaces it creates. It helps shape the decisions that influence how the built environment is experienced.",
    img: "/images/service-arch.jpg",
    alt: "Minimalist architectural form in natural light",
  },
  {
    n: "02",
    title: "Engineering Consultancy",
    desc: "Engineering brings technical considerations into the development of building projects, helping connect design intent with the requirements of a functioning structure.",
    img: "/images/service-eng.jpg",
    alt: "Technical building drawings and planning documentation",
  },
  {
    n: "03",
    title: "Construction Management Consultancy",
    desc: "Construction management connects project decisions with the realities of delivery through planning, coordination and professional oversight.",
    img: "/images/service-cm.jpg",
    alt: "Construction site activity and professional coordination",
  },
];

export function Services() {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <section id="services" className="scroll-mt-24 bg-offwhite py-28 md:py-40">
      <div className="mx-auto max-w-[1200px] px-6 md:px-[5vw]">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-ink-soft">
            What we do
          </p>
          <h2 className="mt-6 font-display text-[clamp(30px,4vw,48px)] font-semibold leading-[1.08] tracking-[-0.035em] text-ink">
            Our expertise across the built environment
          </h2>
          <p className="mt-5 max-w-[52ch] text-base leading-[1.75] text-ink-soft">
            Explore the professional disciplines associated with Tobiya&apos;s
            consultancy work and their place in building and construction
            projects.
          </p>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-12 md:gap-14">
          {/* Desktop selector */}
          <div className="hidden md:col-span-5 md:block">
            {services.map((item, i) => (
              <button
                key={item.n}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={i === active}
                className={cn(
                  "group flex w-full items-baseline gap-6 border-t border-line py-7 text-left transition-colors duration-300 last:border-b focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest",
                  i === active ? "text-ink" : "text-ink-soft hover:text-ink",
                )}
              >
                <span
                  className={cn(
                    "font-display text-sm tabular-nums transition-colors duration-300",
                    i === active ? "text-forest" : "text-ink-soft/60",
                  )}
                >
                  {item.n}
                </span>
                <span
                  className={cn(
                    "font-display text-[clamp(20px,2vw,28px)] tracking-[-0.02em] transition-all duration-300",
                    i === active ? "font-semibold" : "font-normal",
                  )}
                >
                  {item.title}
                </span>
                <span
                  aria-hidden
                  className={cn(
                    "ml-auto mt-1 size-2 shrink-0 rounded-full bg-forest transition-opacity duration-300",
                    i === active ? "opacity-100" : "opacity-0",
                  )}
                />
              </button>
            ))}
          </div>

          {/* Mobile accordion */}
          <div className="divide-y divide-line md:hidden">
            {services.map((item, i) => (
              <div key={item.n}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-expanded={i === active}
                  className="flex w-full items-baseline justify-between gap-4 py-6 text-left"
                >
                  <span className="flex items-baseline gap-4">
                    <span className="font-display text-xs tabular-nums text-ink-soft/60">
                      {item.n}
                    </span>
                    <span
                      className={cn(
                        "font-display text-lg tracking-[-0.02em]",
                        i === active ? "font-semibold text-ink" : "font-medium text-ink",
                      )}
                    >
                      {item.title}
                    </span>
                  </span>
                  <ChevronDown
                    aria-hidden
                    className={cn(
                      "size-5 shrink-0 text-ink-soft transition-transform duration-300",
                      i === active && "rotate-180",
                    )}
                  />
                </button>
                {i === active && (
                  <div className="pb-8">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-line">
                      <Image
                        src={item.img}
                        alt={item.alt}
                        fill
                        sizes="100vw"
                        className="object-cover"
                      />
                    </div>
                    <p className="mt-5 max-w-xl text-[15px] leading-[1.75] text-ink-soft">
                      {item.desc}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop visual display */}
          <div className="hidden md:col-span-7 md:block">
            <div className="relative aspect-[3/2] overflow-hidden bg-line">
              {services.map((item, i) => (
                <div
                  key={item.n}
                  className={cn(
                    "absolute inset-0 transition-opacity duration-700 ease-out",
                    i === active ? "opacity-100" : "pointer-events-none opacity-0",
                  )}
                >
                  <Image
                    src={item.img}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 768px) 55vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <p
              key={current.n}
              className="animate-fade mt-7 max-w-xl text-base leading-[1.75] text-ink-soft"
            >
              {current.desc}
            </p>
          </div>
        </div>

        <Link
          href="/services"
          className="group mt-16 inline-flex items-center gap-2 font-semibold text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest"
        >
          <span className="underline decoration-line decoration-[1.5px] underline-offset-[8px] transition-colors duration-300 group-hover:decoration-ink">
            Explore all services
          </span>
          <ArrowRight
            className="size-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden
          />
        </Link>
      </div>
    </section>
  );
}
