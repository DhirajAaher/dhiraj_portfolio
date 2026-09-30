import { useEffect, useState, Suspense } from 'react';
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';

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

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="hero" id="hero">
      {/* 3D particles bg */}
      <div className="hero-canvas-wrap">
        <Suspense fallback={null}>
          {ready && <HeroCanvas />}
        </Suspense>
      </div>

      {/* Availability status */}
      <div className="hero-status">
        <span className="hero-status-dot" />
        Available to work
      </div>

      {/* Top rule */}
      <div className="hero-line" />

      {/* Main name */}
      <div className="hero-name-wrap">
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
      </div>

      {/* Bottom row */}
      <div
        className="hero-sub-row"
        style={{
          opacity: ready ? 1 : 0,
          transform: ready ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.9s ease 0.6s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.6s',
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
              href="https://drive.google.com/file/d/1iZzvSKDtincZ1TmBB8madPRwVhTw17zt/view?usp=sharing"
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
      </div>

      {/* Scroll cue */}
      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}
