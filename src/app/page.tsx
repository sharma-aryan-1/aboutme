import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import LatestNews from "@/components/sections/LatestNews";
import Projects from "@/components/sections/Projects";
import Publications from "@/components/sections/Publications";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <LatestNews />
      <Projects />
      <Publications />
      <Experience />
      <Education />
      <Skills />
      <Contact />
    </>
  );
}
