import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { VisualChapter } from "@/components/VisualChapter";
import { Services } from "@/components/Services";
import { ExpertiseTransition } from "@/components/ExpertiseTransition";
import { Projects } from "@/components/Projects";
import { Insights } from "@/components/Insights";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-cream font-sans text-ink">
      <Nav />
      <Hero />
      <VisualChapter />
      {/* <Services /> */}
      <ExpertiseTransition />
      <Projects />
      <Insights />
      {/* <Approach /> */}
      <Services />
      {/* <People /> */}
      <Contact />
      <Footer />
    </main>
  );
}
