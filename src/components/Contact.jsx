import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';
import { MdLocationOn } from 'react-icons/md';

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

const contactLinks = [
  {
    icon: <FaEnvelope />,
    title: 'Email',
    sub: 'dhirajaher532@gmail.com',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=dhirajaher532@gmail.com',
  },
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    sub: '+91 7522924451',
    href: 'tel:+917522924451',
  },
  {
    icon: <FaLinkedin />,
    title: 'LinkedIn',
    sub: 'linkedin.com/in/dhiraj-aher',
    href: 'https://linkedin.com/in/dhiraj-aher',
  },
  {
    icon: <FaGithub />,
    title: 'GitHub',
    sub: 'github.com/DhirajAaher',
    href: 'https://github.com/DhirajAaher',
  },
  {
    icon: <MdLocationOn />,
    title: 'Location',
    sub: 'Pune, Maharashtra, India',
    href: null,
  },
];

export default function Contact() {
  return (
    <section className="contact" id="contact" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '48px', padding: '120px 48px' }}>
      <div style={{ maxWidth: '800px', width: '100%' }}>
        <Reveal>
          <p style={{
            fontFamily: 'var(--mono)',
            fontSize: '0.68rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--fg-muted)',
            marginBottom: '24px'
          }}>
            05 — Contact
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="contact-big" style={{ margin: '0 auto 24px' }}>
            Let's<br />
            <span className="contact-big-accent">Talk.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="contact-sub" style={{ margin: '0 auto 48px' }}>
            Open to full-time roles, freelance projects, and exciting collaborations.
            I'm actively looking for opportunities as a Java Developer, Full Stack Developer,
            or AI Engineer.
          </p>
        </Reveal>

        <div className="contact-links" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', textAlign: 'left', marginBottom: '48px' }}>
          {contactLinks.map((c, i) => (
            <Reveal key={c.title} delay={0.2 + i * 0.08}>
              {c.href ? (
                <a href={c.href} target="_blank" rel="noreferrer" className="contact-link" style={{ height: '100%' }}>
                  <div className="contact-link-left">
                    <div className="contact-link-icon">{c.icon}</div>
                    <div className="contact-link-text">
                      <h4>{c.title}</h4>
                      <p>{c.sub}</p>
                    </div>
                  </div>
                  <HiArrowRight className="contact-link-arrow" />
                </a>
              ) : (
                <div className="contact-link" style={{ cursor: 'default', height: '100%' }}>
                  <div className="contact-link-left">
                    <div className="contact-link-icon">{c.icon}</div>
                    <div className="contact-link-text">
                      <h4>{c.title}</h4>
                      <p>{c.sub}</p>
                    </div>
                  </div>
                </div>
              )}
            </Reveal>
          ))}
        </div>

        {/* Open to roles */}
        <Reveal delay={0.42}>
          <div style={{
            padding: '24px',
            border: '1px solid var(--border)',
            borderRadius: '12px',
            background: 'var(--bg-raised)'
          }}>
            <p style={{
              fontFamily: 'var(--mono)',
              fontSize: '0.62rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--fg-muted)',
              marginBottom: '16px',
            }}>
              Open to
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
              {['Java Developer', 'Full Stack Dev', 'AI Engineer', 'Backend Dev', 'Software Dev'].map((r) => (
                <span key={r} style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '0.72rem',
                  padding: '8px 16px',
                  borderRadius: '100px',
                  border: '1px solid var(--accent-dim)',
                  background: 'var(--accent-dim)',
                  color: 'var(--accent)',
                  letterSpacing: '0.06em',
                  fontWeight: 600
                }}>
                  {r}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Resume Download */}
        <Reveal delay={0.5}>
          <div style={{ marginTop: '48px' }}>
            <a
              href="https://drive.google.com/file/d/1lpFwOl28MRxNNOtOqEw8WPgSLfVHVQu0/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                padding: '16px 36px',
                backgroundColor: 'var(--accent)',
                color: '#ffffff',
                borderRadius: '100px',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '1rem',
                boxShadow: '0 8px 24px rgba(59, 130, 246, 0.25)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 12px 28px rgba(59, 130, 246, 0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(59, 130, 246, 0.25)';
              }}
            >
              Download Resume
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
