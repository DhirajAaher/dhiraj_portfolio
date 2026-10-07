import TiltCard from './TiltCard';
import { useInView } from 'react-intersection-observer';
import { FaGithub } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';

function Reveal({ children, delay = 0 }) {
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true });
  return (
    <div ref={ref} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? 'none' : 'translateY(40px)',
      transition: `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
    }}>
      {children}
    </div>
  );
}

const projects = [
  {
    num: '01',
    name: 'AI Interview Preparation Platform',
    desc: 'Full-stack AI-powered platform for technical interview practice. Features AI-generated questions, real-time evaluation, scoring, performance dashboard, and resume-based job-fit analysis.',
    tags: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'Gemini API', 'REST APIs'],
    href: 'https://github.com/DhirajAaher',
    year: '2024',
  },
  {
    num: '02',
    name: 'NutriAI — Intelligent Diet Assistant',
    desc: 'AI-powered nutrition companion with personalized diet recommendations, BMI/BMR tracking, an AI chatbot, and voice interaction. Built with a modern glassmorphism UI.',
    tags: ['Python', 'Gemini API', 'OpenAI', 'Ollama', 'AI/ML', 'Voice UI'],
    href: 'https://github.com/DhirajAaher',
    year: '2024',
  },
  {
    num: '03',
    name: 'EduNexus',
    desc: 'Student learning platform built with Java Spring Boot, robust role-based authentication, REST APIs, and secure database integration.',
    tags: ['Java', 'Spring Boot', 'Spring Security', 'MySQL', 'REST API'],
    href: 'https://github.com/DhirajAaher',
    year: '2024',
  },
];



export default function Projects() {
  return (
    <section className="projects" id="projects">
      <Reveal>
        <div className="section-header">
          <span className="section-num">02 —</span>
          <div>
            <h2 className="section-title">Selected Work</h2>
            <p className="section-title-sub">End-to-end applications combining Java, Spring Boot, React and AI</p>
          </div>
        </div>
      </Reveal>

      <div className="projects-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
        {projects.map((p, i) => (
          <Reveal key={p.num} delay={i * 0.12}>
            <TiltCard>
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="project-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '40px',
                  borderRadius: '16px',
                  background: 'var(--bg-raised)',
                  border: '1px solid var(--border)',
                  textDecoration: 'none',
                  color: 'inherit',
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(17, 24, 39, 0.05)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                  <span className="proj-num" style={{ paddingTop: 0, fontWeight: 600, color: 'var(--accent)' }}>{p.num} — {p.year}</span>
                  <div className="proj-arrow" style={{ position: 'relative', background: 'var(--bg)', borderColor: 'var(--border)' }}>
                    <HiArrowRight />
                  </div>
                </div>

                <div className="proj-main" style={{ flex: 1 }}>
                  <h3 className="proj-name" style={{ fontSize: '1.6rem', marginBottom: '16px' }}>{p.name}</h3>
                  <p className="proj-desc" style={{ maxWidth: '100%', fontSize: '0.95rem' }}>{p.desc}</p>
                </div>
                
                <div className="proj-tags" style={{ marginTop: '24px' }}>
                  {p.tags.map((t) => (
                    <span className="proj-tag" key={t} style={{ background: 'var(--bg)' }}>{t}</span>
                  ))}
                </div>
              </a>
            </TiltCard>
          </Reveal>
        ))}

        {/* More CTA */}
        <Reveal delay={0.24}>
          <TiltCard>
            <a
              href="https://github.com/DhirajAaher"
              target="_blank"
              rel="noreferrer"
              className="project-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                padding: '40px',
                borderRadius: '16px',
                background: 'transparent',
                border: '1px dashed var(--border-md)',
                textDecoration: 'none',
                color: 'inherit',
                height: '100%',
                opacity: 0.8,
              }}
            >
              <div style={{ fontSize: '2.5rem', color: 'var(--fg-muted)', marginBottom: '16px' }}>
                <FaGithub />
              </div>
              <h3 className="proj-name" style={{ color: 'var(--fg-muted)', fontSize: '1.4rem' }}>
                More on GitHub
              </h3>
              <p className="proj-desc" style={{ margin: 0 }}>Browse all repositories and open-source contributions.</p>
            </a>
          </TiltCard>
        </Reveal>
      </div>
    </section>
  );
}

