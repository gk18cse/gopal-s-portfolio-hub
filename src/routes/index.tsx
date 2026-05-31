import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Resume } from "@/components/portfolio/Resume";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gopalakrishnan A.P — Software Engineer Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Gopalakrishnan A.P — 3rd-year CSE student, Frontend Developer, and AI enthusiast. Projects, experience, skills, and resume.",
      },
      { property: "og:title", content: "Gopalakrishnan A.P — Portfolio" },
      {
        property: "og:description",
        content: "Frontend Developer & AI enthusiast — CSE student portfolio.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </main>
  );
}
