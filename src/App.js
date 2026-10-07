import { useState, useEffect } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import './App.css';

import Cursor from './components/Cursor';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';

/* ── Footer ─────────────────────────────── */
function Footer() {
  const goto = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  return (
    <footer className="footer">
      <span className="footer-logo">DA.</span>
      <nav className="footer-links">
        {['about', 'projects', 'skills', 'education', 'contact'].map((id) => (
          <a key={id} href={`#${id}`} onClick={(e) => { e.preventDefault(); goto(id); }}>
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
      </nav>
      <span className="footer-copy">© {new Date().getFullYear()} Dhiraj Aher · Pune, India</span>
    </footer>
  );
}

/* ── Main App ────────────────────────────── */
export default function App() {
  const [loaded, setLoaded] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  /* Lenis smooth scroll — init once content is loaded */
  useEffect(() => {
    if (!loaded) return;

    let lenis;
    let raf;

    import('lenis').then(({ default: Lenis }) => {
      lenis = new Lenis({
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      function loop(time) {
        lenis.raf(time);
        raf = requestAnimationFrame(loop);
      }

      raf = requestAnimationFrame(loop);
    });

    return () => {
      if (lenis) lenis.destroy();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [loaded]);

  return (
    <>
      {/* Custom cursor */}
      <Cursor />

      {/* Scroll Progress Bar */}
      {loaded && (
        <motion.div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'var(--accent)',
            transformOrigin: '0%',
            scaleX,
            zIndex: 9999,
          }}
        />
      )}

      {/* Loading screen */}
      <AnimatePresence>
        {!loaded && (
          <Loader key="loader" onComplete={() => setLoaded(true)} />
        )}
      </AnimatePresence>

      {/* Main content — reveals after loader */}
      <AnimatePresence>
        {loaded && (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Navbar />
            <main>
              <Hero />
              <Marquee />
              <About />
              <Projects />
              <Skills />
              <Education />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
