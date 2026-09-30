import { useState } from 'react';
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
    href: 'mailto:dhirajaher532@gmail.com',
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
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const s = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const b = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:dhirajaher532@gmail.com?subject=${s}&body=${b}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section className="contact" id="contact">
      {/* Left */}
      <div>
        <Reveal>
          <p style={{
            fontFamily: 'var(--mono)',
            fontSize: '0.68rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--fg-muted)',
          }}>
            05 — Contact
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="contact-big">
            Let's<br />
            <span className="contact-big-accent">Talk.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="contact-sub">
            Open to full-time roles, freelance projects, and exciting collaborations.
            I'm actively looking for opportunities as a Java Developer, Full Stack Developer,
            or AI Engineer.
          </p>
        </Reveal>

        <div className="contact-links">
          {contactLinks.map((c, i) => (
            <Reveal key={c.title} delay={0.2 + i * 0.08}>
              {c.href ? (
                <a href={c.href} target="_blank" rel="noreferrer" className="contact-link">
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
                <div className="contact-link" style={{ cursor: 'default' }}>
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
            marginTop: 28,
            padding: '18px 22px',
            border: '1px solid var(--border)',
            borderRadius: 6,
          }}>
            <p style={{
              fontFamily: 'var(--mono)',
              fontSize: '0.62rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--fg-muted)',
              marginBottom: 12,
            }}>
              Open to
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {['Java Developer', 'Full Stack Dev', 'AI Engineer', 'Backend Dev', 'Software Dev'].map((r) => (
                <span key={r} style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '0.68rem',
                  padding: '5px 12px',
                  borderRadius: '100px',
                  border: '1px solid rgba(232,114,58,0.25)',
                  color: 'var(--accent)',
                  letterSpacing: '0.06em',
                }}>
                  {r}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Resume Download */}
        <Reveal delay={0.5}>
          <div style={{ marginTop: 28 }}>
            <a
              href="https://drive.google.com/file/d/1iZzvSKDtincZ1TmBB8madPRwVhTw17zt/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                padding: '14px 28px',
                backgroundColor: 'var(--fg)',
                color: 'var(--bg)',
                borderRadius: '100px',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '0.9rem',
                transition: 'transform 0.2s ease, opacity 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              Download Resume
            </a>
          </div>
        </Reveal>
      </div>

      {/* Right: Form */}
      <Reveal delay={0.1}>
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3 className="cf-title">Send a message</h3>

          {[
            { name: 'name',    label: 'Your Name',      type: 'text',  ph: 'Jane Smith' },
            { name: 'email',   label: 'Email Address',  type: 'email', ph: 'jane@company.com' },
          ].map((f) => (
            <div className="cf-field" key={f.name}>
              <label>{f.label}</label>
              <input
                type={f.type}
                placeholder={f.ph}
                value={form[f.name]}
                onChange={(e) => setForm({ ...form, [f.name]: e.target.value })}
                required
              />
            </div>
          ))}

          <div className="cf-field">
            <label>Message</label>
            <textarea
              placeholder="Tell me about the role or project..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            />
          </div>

          <button type="submit" className="cf-submit">
            {sent ? '✓ Message sent' : 'Send message →'}
          </button>
        </form>
      </Reveal>
    </section>
  );
}
