import { ArrowRight } from "lucide-react";
import Link from "next/link";

const CONTACT = "mailto:hello@example.com?subject=Discuss%20a%20project";

export function Hero() {
  return (
    <section className="relative h-svh min-h-[640px] overflow-hidden md:min-h-[720px]">
      {/* Background */}
      <div
        aria-hidden
        className="absolute inset-0 bg-cream bg-[length:auto_68%] bg-[78%_bottom] bg-no-repeat md:bg-cover md:bg-[60%_center] xl:bg-center"
        style={{ backgroundImage: "url(/hero_bg.png)" }}
      >
        <div
          className="absolute inset-0 hidden md:block"
          style={{ background: "var(--hero-overlay)" }}
        />
        <div
          className="absolute inset-0 md:hidden"
          style={{ background: "var(--hero-mobile-overlay)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 pt-[max(19svh,120px)] md:absolute md:top-[33%] md:left-[5vw] md:max-w-[650px] md:p-0 xl:left-[4.5vw] xl:max-w-[850px]">
        <h1 className="animate-rise font-display text-[clamp(38px,10vw,48px)] leading-[1.1] font-semibold tracking-[-0.05em] md:text-[clamp(56px,6.4vw,66px)] md:leading-[1.07] md:tracking-[-0.055em] xl:text-[clamp(54px,5.5vw,88px)]">
          Expertise behind
          <br /> the built environment.
        </h1>
        <p className="animate-rise mt-[18px] max-w-[560px] text-[17px] leading-[1.6] text-ink-soft [animation-delay:150ms] md:mt-[22px] md:text-[22px] md:leading-[1.45] xl:text-[26px]">
          Professional consultancy for building and construction projects.
        </p>
        <div className="animate-rise mt-8 flex flex-wrap items-center gap-x-7 gap-y-3 [animation-delay:300ms] sm:gap-9 md:mt-9">
          <Link
            href={CONTACT}
            className="group inline-flex min-h-[54px] items-center justify-center gap-2 rounded-[7px] bg-forest px-6 py-4 md:px-7 md:py-[19px] text-base font-semibold text-primary-foreground transition-colors duration-300 hover:bg-forest-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest md:h-[58px]"
          >
            Discuss a Project
            <ArrowRight
              className="size-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden
            />
          </Link>
          <Link
            href="#projects"
            className="group inline-flex min-h-12 items-center justify-center text-base font-semibold"
          >
            <span className="underline decoration-ink/60 decoration-[1.5px] underline-offset-[8px] transition-colors duration-300 group-hover:decoration-ink md:decoration-line">
              Explore Our Work
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
