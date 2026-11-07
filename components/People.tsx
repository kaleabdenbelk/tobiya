"use client";

import { useState } from "react";
import Image from "next/image";
import { User } from "lucide-react";
import { cn } from "cn";
import { people, type Person } from "@/lib/people";

/**
 * Section 7 — People and expertise.
 *
 * Editorial presentation inspired by architecture-studio teams: a staggered
 * grid of large cards, then a typographic roster where rows dim on hover.
 * Content is data-driven from lib/people.ts.
 *
 * AUTHENTICITY — No verified staff photographs, names or biographies exist, so
 * we do NOT display fictional people or AI-generated faces as real employees.
 * Placeholder records render clearly-marked slots and "pending" labels; flip
 * `approvalStatus` to "approved" (and supply a portrait) to turn on real
 * identities.
 */

const displayName = (p: Person) =>
  p.approvalStatus === "approved" && p.name ? p.name : "Name pending";

const displayRole = (p: Person) =>
  p.approvalStatus === "approved" && p.role ? p.role : "Role pending";

const tagline = (p: Person) =>
  p.approvalStatus === "approved"
    ? p.specialization || p.bio || "A member of Tobiya's professional consultancy team."
    : "Profile details pending company approval.";

/** Explicit replaceable slot shown until a company-approved portrait exists. */
function PortraitSlot({ className }: { className?: string }) {
  return (
    <div className={cn("grid h-full w-full place-items-center bg-line/50", className)}>
      <div className="flex flex-col items-center gap-4 px-6 text-center text-ink-soft/70">
        <span className="grid size-16 place-items-center rounded-full border border-ink/20 bg-cream/60">
          <User className="size-7" aria-hidden />
        </span>
        <span className="text-[11px] font-medium uppercase tracking-[0.18em]">
          Portrait pending
        </span>
      </div>
    </div>
  );
}

/** Company-approved portrait: grayscale, colour + subtle zoom on hover. */
function ApprovedPortrait({ person }: { person: Person }) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-line">
      <Image
        src={person.image}
        alt={person.alt}
        fill
        sizes="(min-width: 640px) 50vw, 100vw"
        className="object-cover grayscale transition-[filter,transform] duration-700 ease-out group-hover:scale-[1.03] group-hover:grayscale-0"
      />
    </div>
  );
}

function Portrait({ person }: { person: Person }) {
  if (person.approvalStatus === "approved" && person.image) {
    return <ApprovedPortrait person={person} />;
  }
  return <PortraitSlot />;
}

export function People() {
  const [hover, setHover] = useState<number | null>(null);

  return (
    <section id="people" className="scroll-mt-24 bg-offwhite py-28 md:py-40">
      <div className="mx-auto max-w-[1200px] px-6 md:px-[5vw]">
        {/* Introduction — editorial two-column */}
        <div className="grid gap-8 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-ink-soft">
              People &amp; expertise
            </p>
            <h2 className="mt-6 font-display text-[clamp(30px,4vw,48px)] font-semibold leading-[1.08] tracking-[-0.035em] text-ink">
              The people behind the work
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="max-w-[52ch] text-base leading-[1.75] text-ink-soft">
              Behind every project are people whose knowledge, judgement and
              experience shape the work. Meet the professionals behind Tobiya
              Consulting.
            </p>
          </div>
        </div>

        {/* Editorial cards — staggered grid */}
        <section className="mt-20 grid gap-x-6 gap-y-12 border-t border-line pt-14 sm:grid-cols-2 md:mt-24 lg:gap-x-10">
          {people.map((m, i) => (
            <article
              key={m.id}
              className={cn("group", i % 2 === 1 && "sm:mt-24")}
            >
              <div className="flex items-baseline justify-between border-b border-line pb-2 text-[11px] uppercase tracking-wider">
                <span>({String(i + 1).padStart(2, "0")})</span>
                <span className="text-ink-soft">{displayRole(m)}</span>
              </div>

              <div className="mt-4 aspect-[4/5] overflow-hidden">
                <Portrait person={m} />
              </div>

              <h3 className="mt-5 font-display text-[clamp(28px,3.4vw,40px)] font-semibold leading-[0.95] tracking-[-0.03em] text-ink">
                {displayName(m)}
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-soft">
                {tagline(m)}
              </p>
            </article>
          ))}
        </section>

       
      </div>
    </section>
  );
}
