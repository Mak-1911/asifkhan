import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      {/* Header */}
      

      {/* Hero */}
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Resume />
      <Projects />
      <Footer />
      </main>
  );
}
