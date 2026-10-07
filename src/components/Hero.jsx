import { useEffect, useState, Suspense, useRef } from 'react';
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroCanvas = (() => {
  let Comp = null;
  return () => {
    if (!Comp) {
      Comp = require('./HeroCanvas').default;
    }
    return <Comp />;
  };
})();

export default function Hero() {
  const [ready, setReady] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="hero" id="hero" ref={ref}>
      {/* 3D particles bg */}
      <motion.div className="hero-canvas-wrap" style={{ y: yBg, opacity }}>
        <Suspense fallback={null}>
          {ready && <HeroCanvas />}
        </Suspense>
      </motion.div>

      {/* Availability status */}
      <motion.div className="hero-status" style={{ y: yText, opacity }}>
        <span className="hero-status-dot" />
        Available to work
      </motion.div>

      {/* Top rule */}
      <motion.div className="hero-line" style={{ y: yText, opacity }} />

      {/* Main name */}
      <motion.div className="hero-name-wrap" style={{ y: yText, opacity }}>
        <div className="hero-name-row">
          <span
            className="hero-name hero-name-inner"
            style={{
              transform: ready ? 'translateY(0)' : 'translateY(110%)',
              transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            DHIRAJ
          </span>
        </div>
        <div className="hero-name-row">
          <span
            className="hero-name hero-name-inner"
            style={{
              transform: ready ? 'translateY(0)' : 'translateY(110%)',
              transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.1s',
            }}
          >
            <span className="hero-name-accent">AHER</span>
          </span>
        </div>
      </motion.div>

      {/* Bottom row */}
      <motion.div
        className="hero-sub-row"
        style={{
          y: yText,
          opacity: ready ? opacity : 0,
          transform: ready ? 'translateY(0)' : 'translateY(20px)',
          transition: ready ? 'none' : 'opacity 0.9s ease 0.6s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.6s',
        }}
      >
        <p className="hero-role">
          <strong>Full Stack Java Developer</strong> &amp; AI/ML Enthusiast — building
          scalable, intelligent applications with Spring Boot, React &amp; Generative AI.
        </p>

        <div className="hero-meta">
          <span className="hero-location">📍 Pune · Maharashtra · India</span>
          <div className="hero-socials">
            <a
              href="https://drive.google.com/file/d/1lpFwOl28MRxNNOtOqEw8WPgSLfVHVQu0/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="hero-resume-btn"
            >
              Resume <FaFileDownload style={{ marginLeft: 6 }} />
            </a>
            <a
              href="https://github.com/DhirajAaher"
              target="_blank"
              rel="noreferrer"
              className="hero-social-link"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/dhiraj-aher"
              target="_blank"
              rel="noreferrer"
              className="hero-social-link"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}
