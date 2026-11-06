import Link from "next/link";

const YEAR = 2026;

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="bg-[#101c18] text-cream">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10 px-6 py-16 md:flex-row md:items-start md:justify-between md:px-[5vw]">
        <div>
          <p className="font-display text-xl font-semibold tracking-[-0.02em]">
            Tobiya
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/60">
            Consulting architects and engineers working across the built
            environment and construction sector.
          </p>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-x-12 gap-y-3 text-[15px]">
          {footerLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-cream/70 transition-colors hover:text-cream focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="text-sm text-cream/60">
          <a
            href="mailto:hello@example.com"
            className="transition-colors hover:text-cream focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream"
          >
            hello@example.com
          </a>
          <p className="mt-2">© {YEAR} Tobiya Consulting Architects and Engineers</p>
        </div>
      </div>
    </footer>
  );
}
