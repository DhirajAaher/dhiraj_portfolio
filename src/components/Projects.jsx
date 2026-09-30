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

      <div className="projects-list">
        {projects.map((p, i) => (
          <Reveal key={p.num} delay={i * 0.12}>
            <a
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="project-row"
            >
              <span className="proj-num">{p.num} — {p.year}</span>

              <div className="proj-main">
                <h3 className="proj-name">{p.name}</h3>
                <p className="proj-desc">{p.desc}</p>
                <div className="proj-tags">
                  {p.tags.map((t) => (
                    <span className="proj-tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>

              <div className="proj-arrow">
                <HiArrowRight />
              </div>
            </a>
          </Reveal>
        ))}

        {/* More CTA */}
        <Reveal delay={0.24}>
          <a
            href="https://github.com/DhirajAaher"
            target="_blank"
            rel="noreferrer"
            className="project-row"
            style={{ opacity: 0.6 }}
          >
            <span className="proj-num" style={{ fontStyle: 'italic' }}>∞</span>
            <div className="proj-main">
              <h3 className="proj-name" style={{ color: 'var(--fg-muted)', fontWeight: 500 }}>
                More on GitHub
              </h3>
              <p className="proj-desc">Browse all repositories and open-source contributions.</p>
            </div>
            <div className="proj-arrow">
              <FaGithub />
            </div>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
