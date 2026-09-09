import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollSectionAnimator } from "@/components/layout/ScrollSectionAnimator";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Certificates } from "@/components/sections/Certificates";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen bg-black">
        <ScrollSectionAnimator />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
