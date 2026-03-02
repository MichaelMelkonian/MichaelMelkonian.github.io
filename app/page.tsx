import { Hero } from "@/components/hero";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { NeuralNetworkBg } from "@/components/neural-network-bg";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <NeuralNetworkBg />
      <div className="relative z-10">
        <div className="lg:flex">
          {/* Left side - Fixed hero on desktop */}
          <div className="lg:w-1/2 lg:fixed lg:h-screen lg:top-0 lg:left-0">
            <Hero />
          </div>

          {/* Right side - Scrollable content */}
          <div className="lg:w-1/2 lg:ml-[50%]">
            <Education />
            <Experience />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
}
