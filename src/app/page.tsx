import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12 pb-32 relative">
      {/* Subtle noisy texture background for entire page */}
      <div className="fixed inset-0 opacity-[0.01] dark:opacity-[0.03] pointer-events-none" 
           style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
               backgroundRepeat: 'repeat',
               backgroundSize: '256px 256px'
           }}
      />
      
      {/* All content with proper z-index */}
      <div className="relative z-10">
        {/* Hero */}
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Resume />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
