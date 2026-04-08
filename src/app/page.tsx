import Hero from "@/components/sections/Hero";
import FeaturedHighlights from "@/components/sections/FeaturedHighlights";
import LatestNews from "@/components/sections/LatestNews";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Publications from "@/components/sections/Publications";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedHighlights />
      <LatestNews />
      <About />
      <Projects />
      <Experience />
      <Publications />
      <Skills />
      <Education />
      <Contact />
    </>
  );
}
