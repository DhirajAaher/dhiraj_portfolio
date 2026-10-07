import { useInView } from 'react-intersection-observer';
import profile from '../assets/profile.jpg';
import TiltCard from './TiltCard';

function Reveal({ children, delay = 0 }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(48px)',
        transition: `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

const facts = [
  { key: 'Education',  val: 'B.E. Computer Engineering' },
  { key: 'University', val: 'SPPU — Rajiv Gandhi College' },
  { key: 'CGPA',       val: '8.26 / 10' },
  { key: 'Location',   val: 'Pune, Maharashtra, India' },
  { key: 'Status',     val: '🟢 Available for hire' },
];

export default function About() {
  return (
    <section className="about" id="about">
      {/* Left */}
      <div>
        <Reveal>
          <div className="about-label">
            <span style={{ fontFamily: 'var(--mono)', fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--fg-muted)' }}>
              01 — About
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="about-statement">
            I build digital products that are <em>precise, fast,</em>{' '}
            and genuinely useful.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="about-body">
            I'm a <strong>Computer Engineering graduate</strong> from Rajiv Gandhi College of
            Engineering, Ahilyanagar (SPPU — CGPA 8.26). I specialise in{' '}
            <strong>Java Full Stack Development</strong> with Spring Boot and React, with a
            growing focus on <strong>Generative AI</strong> and LLM integration.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="about-body">
            I've built end-to-end platforms combining backend APIs, relational databases,
            modern frontend UIs, and AI capabilities through the <strong>Gemini API</strong>{' '}
            and <strong>OpenAI</strong>. Currently seeking roles as a{' '}
            <strong>Java Developer</strong>, Full Stack Developer, or AI Engineer.
          </p>
        </Reveal>

        <Reveal delay={0.25}>
          <a
            href="#contact"
            className="about-cta"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Let's build together
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </Reveal>
      </div>

      {/* Right */}
      <div className="about-right">
        <Reveal delay={0.05}>
          <TiltCard>
            <div className="about-photo-frame" style={{ boxShadow: '0 20px 40px rgba(59, 130, 246, 0.15)' }}>
              <div className="about-photo-border">
                <img src={profile} alt="Dhiraj Aher" />
              </div>
              <div className="about-photo-tag">CGPA 8.26</div>
            </div>
          </TiltCard>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="about-facts">
            {facts.map(({ key, val }) => (
              <div className="about-fact" key={key}>
                <span className="about-fact-key">{key}</span>
                <span className="about-fact-val">{val}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
