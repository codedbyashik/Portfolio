import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className=" ">
      <h1 className="text-4xl font-bold"></h1>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Testimonials/>
      <Contact />
      
    </main>
  );
}
