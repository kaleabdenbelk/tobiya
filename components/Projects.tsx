import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects, type Project } from "@/lib/projects";
import { cn } from "cn";

/**
 * Section 5 — Selected Project Experience.
 *
 * An editorial portfolio inspired by architecture / engineering consultancy
 * sites: a strong featured project, then supporting projects with varied
 * compositions. The layout is data-driven from lib/projects.ts.
 *
 * AUTHENTICITY — The current records are development placeholders (illustrative
 * imagery, generic titles). They render with visible markers so they can never
 * be mistaken for real portfolio evidence. Replace with `approvalStatus:
 * "approved"` records before publication. Individual case-study routes are
 * wired through `caseStudyRoute`; until those pages exist the explore link
 * renders as a non-navigating preparation state.
 */

function PlaceholderMarker({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-dashed border-ink/30 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-ink/60">
      {label}
    </span>
  );
}

function ProjectImage({ project, className }: { project: Project; className?: string }) {
  return (
    <div className={cn("group overflow-hidden bg-line", className)}>
      <div className="relative h-full w-full">
        <Image
          src={project.image}
          alt={project.alt}
          fill
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>
      {project.caption && (
        <p className="sr-only">{project.caption}</p>
      )}
    </div>
  );
}

function ProjectDetails({ project }: { project: Project }) {
  const rows = [
    { label: "Location", value: project.location },
    { label: "Type", value: project.category },
    { label: project.year ? "Year" : "Status", value: project.year ?? project.status },
    { label: "Role", value: project.role },
  ];
  return (
    <dl className="grid gap-x-10 gap-y-4 border-t border-line pt-6 text-[15px]">
      {rows.map((row) => (
        <div key={row.label} className="grid grid-cols-[110px_1fr] gap-4">
          <dt className="text-ink-soft/70">{row.label}</dt>
          <dd className="text-ink">{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}

function ExploreLink({ project, className }: { project: Project; className?: string }) {
  const base = "group inline-flex items-center gap-2 font-semibold text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest";
  if (project.caseStudyRoute) {
    return (
      <Link href={project.caseStudyRoute} className={`${base} ${className ?? ""}`}>
        <span className="underline decoration-line decoration-[1.5px] underline-offset-[8px] transition-colors duration-300 group-hover:decoration-ink">
          Explore Project
        </span>
        <ArrowRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    );
  }
  return (
    <span className={`${base} cursor-default text-ink-soft`}>
      <span className="underline decoration-line underline-offset-[8px]">Case study in preparation</span>
    </span>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  return (
    <article className="grid gap-8 md:grid-cols-12 md:gap-12">
      <div className="md:col-span-8">
        <ProjectImage project={project} className="aspect-[4/3] md:aspect-[16/10]" />
      </div>
      <div className="flex flex-col md:col-span-4">
        <PlaceholderMarker label="Development preview" />
        <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.3em] text-ink-soft">
          01 / Featured project
        </p>
        <h3 className="mt-3 font-display text-[clamp(26px,3vw,38px)] font-semibold leading-[1.1] tracking-[-0.03em] text-ink">
          {project.name}
        </h3>
        <p className="mt-5 text-base leading-[1.75] text-ink-soft">{project.shortDescription}</p>
        <div className="mt-8">
          <ProjectDetails project={project} />
        </div>
        <div className="mt-8">
          <ExploreLink project={project} />
        </div>
        <p className="mt-6 text-[13px] leading-relaxed text-ink-soft/70">
          Illustrative placeholder — replace with verified project photography.
        </p>
      </div>
    </article>
  );
}

function SupportingProject({ project, index }: { project: Project; index: number }) {
  // Alternate composition: even index → info left / image right; odd index →
  // wide image-led layout with a compact info row beneath.
  if (index % 2 !== 0) {
    return (
      <article className="grid gap-8 md:grid-cols-12 md:gap-12">
        <div className="flex flex-col md:col-span-4 md:col-start-1">
          <PlaceholderMarker label="Development preview" />
          <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.3em] text-ink-soft">
            {String(index + 2).padStart(2, "0")} / Project
          </p>
          <h3 className="mt-3 font-display text-[clamp(22px,2.4vw,30px)] font-semibold leading-[1.12] tracking-[-0.025em] text-ink">
            {project.name}
          </h3>
          <p className="mt-4 text-base leading-[1.75] text-ink-soft">{project.shortDescription}</p>
          <div className="mt-7">
            <ProjectDetails project={project} />
          </div>
          <div className="mt-7">
            <ExploreLink project={project} />
          </div>
        </div>
        <div className="md:col-span-8 md:col-start-5">
          <ProjectImage project={project} className="aspect-[4/3] md:aspect-[3/2]" />
        </div>
      </article>
    );
  }

  return (
    <article>
      <div className="md:col-span-12">
        <ProjectImage project={project} className="aspect-[16/10] w-full md:aspect-[21/9]" />
      </div>
      <div className="mt-6 grid gap-6 md:grid-cols-12 md:items-end">
        <div className="md:col-span-7">
          <PlaceholderMarker label="Development preview" />
          <h3 className="mt-4 font-display text-[clamp(22px,2.4vw,30px)] font-semibold leading-[1.12] tracking-[-0.025em] text-ink">
            {project.name}
          </h3>
          <p className="mt-3 max-w-xl text-base leading-[1.75] text-ink-soft">{project.shortDescription}</p>
        </div>
        <div className="md:col-span-4 md:col-start-9">
          <ProjectDetails project={project} />
          <div className="mt-6">
            <ExploreLink project={project} />
          </div>
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const featured = projects.find((p) => p.featured);
  const supporting = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="scroll-mt-24 bg-offwhite py-28 md:py-40">
      <div className="mx-auto max-w-[1200px] px-6 md:px-[5vw]">
        {/* Introduction */}
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-ink-soft">
            Project experience
          </p>
          <h2 className="mt-6 font-display text-[clamp(30px,4vw,48px)] font-semibold leading-[1.08] tracking-[-0.035em] text-ink">
            Selected Project Experience
          </h2>
          <p className="mt-5 text-base leading-[1.75] text-ink-soft">
            Explore a selection of projects and discover the professional work,
            expertise and involvement behind them.
          </p>
        </div>

        {/* Featured project */}
        {featured && (
          <div className="mt-16 border-t border-line pt-14 md:mt-20 md:pt-16">
            <FeaturedProject project={featured} />
          </div>
        )}

        {/* Supporting projects */}
        {supporting.length > 0 && (
          <div className="mt-20 space-y-20 border-t border-line pt-16 md:mt-28 md:space-y-28 md:pt-20">
            {supporting.map((project, i) => (
              <SupportingProject key={project.id} project={project} index={i} />
            ))}
          </div>
        )}

        {/* Portfolio navigation */}
        <div className="mt-24 border-t border-line pt-12 md:mt-32 md:pt-14">
          <div className="grid gap-6 md:grid-cols-12 md:items-end">
            <div className="md:col-span-6">
              <p className="font-display text-[clamp(24px,2.6vw,32px)] font-semibold tracking-[-0.025em] text-ink">
                Explore the Full Portfolio
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                Discover more of Tobiya&apos;s project experience and professional involvement.
              </p>
            </div>
            <div className="md:col-span-4 md:col-start-9">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 font-semibold text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest"
              >
                <span className="underline decoration-line decoration-[1.5px] underline-offset-[8px] transition-colors duration-300 group-hover:decoration-ink">
                  View All Projects
                </span>
                <ArrowRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
