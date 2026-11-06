import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { VisualChapter } from "@/components/VisualChapter";
import { Services } from "@/components/Services";
import { ExpertiseTransition } from "@/components/ExpertiseTransition";
import { Projects } from "@/components/Projects";
import { Approach } from "@/components/Approach";
import { People } from "@/components/People";
import { Insights } from "@/components/Insights";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-cream font-sans text-ink">
      <Nav />
      <Hero />
      <VisualChapter />
      <Services />
      <ExpertiseTransition />
      <Projects />
      <Approach />
      <People />
      <Insights />
      <Contact />
      <Footer />
    </main>
  );
}
