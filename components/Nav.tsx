"use client";

import { useState } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";

const CONTACT = "mailto:hello@example.com?subject=Discuss%20a%20project";

const navLinks = [
  { label: "Services", href: "#services", chevron: true },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Insights", href: "#insights" },
  { label: "Resources", href: "#resources" },
];

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop nav */}
      <nav
        aria-label="Primary"
        className="animate-fade absolute inset-x-0 top-10 z-10 hidden h-14 items-center justify-end px-[4.5vw] md:flex"
      >
        <ul className="flex items-center gap-6 text-[15px] font-medium lg:gap-10 lg:text-base">
          {navLinks.map((l) => (
            <li key={l.label}>
              <Link
                href={l.href}
                className="inline-flex items-center gap-1 rounded-sm text-ink transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest"
              >
                {l.label}
                {l.chevron && <ChevronDown className="size-4" aria-hidden />}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href={CONTACT}
              className="group inline-flex items-center gap-2 rounded-[14px] bg-forest px-[22px] py-[14px] font-semibold text-primary-foreground transition-colors duration-300 hover:bg-forest-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
            >
              Discuss a Project
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile header */}
      <div className="animate-fade absolute inset-x-0 top-6 z-20 flex items-center justify-between gap-3 px-6 md:hidden">
        <Link
          href={CONTACT}
          className="group inline-flex items-center gap-2 rounded-[12px] bg-forest px-4 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-forest-hover"
        >
          Discuss a Project
          <ArrowRight
            className="size-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden
          />
        </Link>
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
          className="grid size-11 shrink-0 place-items-center rounded-[12px] bg-cream text-ink focus-visible:outline-2 focus-visible:outline-forest"
        >
          {menuOpen ? <X className="size-7" /> : <Menu className="size-7" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          aria-label="Mobile"
          className="animate-fade absolute inset-x-4 top-20 z-20 rounded-[14px] border border-line bg-cream p-2 shadow-lg md:hidden"
        >
          <ul>
            {navLinks.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-4 py-3 text-base font-medium text-ink hover:bg-line/40"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}
