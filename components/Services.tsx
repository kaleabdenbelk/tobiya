import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * Section 4 — Services and capabilities.
 *
 * Three discipline cards (Architectural, Engineering, Construction Management)
 * shown together so every service is always visible with its title and
 * description. Earlier versions displayed a single service at a time, which
 * made the other two appear to be missing.
 *
 * Service categories and descriptions are working copy based on Tobiya's
 * public record and must be confirmed by Tobiya before publication. The images
 * are atmospheric illustrations for the disciplines, not depictions of
 * completed Tobiya projects.
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

        <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-10">
          {services.map((item) => (
            <div key={item.n}>
              <div className="relative aspect-[3/2] overflow-hidden rounded-lg bg-line">
                <Image
                  src={item.img}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="mt-7 flex items-baseline gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-full border border-ink/25 bg-transparent font-display text-sm font-semibold text-ink">
                  {item.n}
                </span>
                <h3 className="font-display text-[clamp(18px,1.8vw,22px)] font-semibold tracking-[-0.02em] text-ink">
                  {item.title}
                </h3>
              </div>

              <p className="mt-4 text-[15px] leading-[1.75] text-ink-soft">
                {item.desc}
              </p>
            </div>
          ))}
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
