import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import ResumeCTA from './components/ResumeCTA';
import Contact from './components/Contact';

function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-textMuted text-sm">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p className="text-textMain font-medium text-lg">Dhiraj Aher</p>
          <p>Full Stack Java Developer • AI/ML Enthusiast</p>
        </div>
        <div className="flex gap-6 mb-4 md:mb-0">
          <a href="https://github.com/dhirajaher" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/dhirajaher" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>
          <a href="mailto:dhirajaher@example.com" className="hover:text-accent transition-colors">Email</a>
        </div>
        <div>
          <p>© 2026 Dhiraj Aher</p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Navbar />
            <main>
              <Hero />
              <About />
              <Projects />
              <Skills />
              <Experience />
              <Education />
              <ResumeCTA />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
