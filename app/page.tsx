import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";

const sections = [
  {
    id: "services",
    title: "Services",
    text: "Architectural design, structural engineering and construction advisory, from feasibility to handover.",
  },
  {
    id: "projects",
    title: "Projects",
    text: "Selected residential, civic and commercial work delivered with clients and contractors.",
  },
  {
    id: "about",
    title: "About",
    text: "An independent consultancy of architects and engineers focused on clarity and buildability.",
  },
  {
    id: "insights",
    title: "Insights",
    text: "Notes on regulation, materials and delivery for people commissioning buildings.",
  },
  {
    id: "resources",
    title: "Resources",
    text: "Guides and checklists to help you prepare a brief and plan your project.",
  },
];

export default function Home() {
  return (
    <main className="bg-cream font-sans text-ink">
      <Nav />
      <Hero />

      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2 md:px-[5vw]">
        {sections.map((s) => (
          <section
            key={s.id}
            id={s.id}
            className="scroll-mt-10 border-t border-line pt-6"
          >
            <h2 className="font-display text-2xl font-semibold tracking-[-0.03em]">
              {s.title}
            </h2>
            <p className="mt-3 text-ink-soft">{s.text}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
