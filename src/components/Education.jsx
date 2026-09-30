import { useInView } from 'react-intersection-observer';

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

const education = [
  {
    badge: 'Degree',
    title: 'B.E. in Computer Engineering',
    inst: 'Rajiv Gandhi College of Engineering, Ahilyanagar',
    desc: 'Completed my Bachelor of Engineering in Computer Engineering with a strong foundation in software development, programming, databases, web technologies, and Artificial Intelligence. Developed practical projects using Java, Spring Boot, React.js, MySQL, REST APIs, and Generative AI.',
    chips: [
      { label: 'SPPU', highlight: false },
      { label: '2022 – 2026', highlight: false },
      { label: 'CGPA: 8.26', highlight: true },
    ],
  },
  {
    badge: 'HSC',
    title: 'Higher Secondary Certificate',
    inst: 'Matoshri Science College, Ahilyanagar',
    desc: 'Completed higher secondary education with a Science background, developing a foundation in analytical thinking, mathematics, and computer-related concepts that supported my transition into engineering.',
    chips: [
      { label: 'Maharashtra Board', highlight: false },
      { label: '2020 – 2022', highlight: false },
      { label: '77.17%', highlight: true },
    ],
  },
  {
    badge: 'SSC',
    title: 'Secondary School Certificate',
    inst: 'Shri Vyankatesh Vidya Niketan, Mumbai',
    desc: 'Completed secondary school education with an academic score of 89%, establishing a strong foundation for higher education in Science and Engineering.',
    chips: [
      { label: 'Maharashtra Board', highlight: false },
      { label: '2020', highlight: false },
      { label: '89%', highlight: true },
    ],
  }
];

const leadership = [
  {
    icon: '🌿',
    title: 'President — Green Club Committee',
    sub: 'Led environmental sustainability initiatives and campus events at college.',
  },
  {
    icon: '📜',
    title: 'Profound Edutech Certified',
    sub: 'Full Stack Java Development.',
  },
  {
    icon: '📊',
    title: 'A2Z EduLearningHub Certified',
    sub: 'Python for Data Analysis.',
  },
  {
    icon: '🎙️',
    title: 'Event Anchor & Host',
    sub: 'Hosted multiple inter-college events, tech fests, and cultural programs.',
  },
  {
    icon: '🥈',
    title: '2nd Rank — Poster Presentation',
    sub: 'Secured runner-up position at intercollegiate poster competition.',
  },
  {
    icon: '🤝',
    title: 'Internshala Student Partner',
    sub: 'Represented Internshala at campus level.',
  },
];

export default function Education() {
  return (
    <section className="education" id="education">
      <Reveal>
        <div className="section-header">
          <span className="section-num">04 —</span>
          <div>
            <h2 className="section-title">Background</h2>
            <p className="section-title-sub">Education, certifications and activities</p>
          </div>
        </div>
      </Reveal>

      <div className="edu-grid">
        {/* Left: Education timeline */}
        <div>
          <Reveal delay={0.05}>
            <p style={{
              fontFamily: 'var(--mono)',
              fontSize: '0.65rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--fg-muted)',
              marginBottom: '24px',
            }}>
              Academic
            </p>
          </Reveal>
          <div className="edu-timeline">
            {education.map((e, i) => (
              <Reveal key={e.title} delay={0.08 + i * 0.1}>
                <div className="edu-item">
                  <div className="edu-badge">{e.badge}</div>
                  <div className="edu-title">{e.title}</div>
                  <div className="edu-inst" style={{ marginBottom: e.desc ? '8px' : '12px' }}>{e.inst}</div>
                  {e.desc && (
                    <div className="edu-desc" style={{ fontSize: '0.82rem', color: 'var(--fg-muted)', marginBottom: '16px', lineHeight: 1.6 }}>
                      {e.desc}
                    </div>
                  )}
                  <div className="edu-meta">
                    {e.chips.map((c) => (
                      <span
                        key={c.label}
                        className={`edu-chip ${c.highlight ? 'highlight' : ''}`}
                      >
                        {c.label}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Right: Leadership */}
        <div>
          <Reveal delay={0.05}>
            <p style={{
              fontFamily: 'var(--mono)',
              fontSize: '0.65rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--fg-muted)',
              marginBottom: '24px',
            }}>
              Leadership &amp; Activities
            </p>
          </Reveal>
          <div className="leadership-list">
            {leadership.map((l, i) => (
              <Reveal key={l.title} delay={0.1 + i * 0.08}>
                <div className="leadership-item">
                  <div className="leadership-icon">{l.icon}</div>
                  <div>
                    <div className="leadership-title">{l.title}</div>
                    <div className="leadership-sub">{l.sub}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
