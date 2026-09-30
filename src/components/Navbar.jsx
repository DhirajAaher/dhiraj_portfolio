import { useState, useEffect } from 'react';

export default function Navbar() {
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goto = (e, id) => {
    e.preventDefault();
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const links = [
    { id: 'about',     label: 'About' },
    { id: 'projects',  label: 'Work' },
    { id: 'skills',    label: 'Skills' },
    { id: 'education', label: 'Education' },
  ];

  return (
    <>
      <nav className={`nav ${compact ? 'compact' : ''}`}>
        <div className="nav-bg" />
        <span className="nav-logo">DA.</span>

        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} onClick={(e) => goto(e, l.id)}>{l.label}</a>
            </li>
          ))}
          <li>
            <a href="#contact" className="nav-cta" onClick={(e) => goto(e, 'contact')}>
              Hire Me
            </a>
          </li>
        </ul>

        <button
          className="nav-mobile-btn"
          onClick={() => setOpen(!open)}
          aria-label="menu"
          style={{ cursor: 'pointer' }}
        >
          <span style={{ transform: open ? 'rotate(45deg) translateY(7px)' : 'none' }} />
          <span style={{ opacity: open ? 0 : 1 }} />
          <span style={{ transform: open ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div
          style={{
            position: 'fixed', inset: 0,
            background: 'rgba(7,7,7,0.97)',
            backdropFilter: 'blur(24px)',
            zIndex: 999,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '0 40px',
            gap: '0',
          }}
        >
          {[...links, { id: 'contact', label: 'Contact' }].map((l, i) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={(e) => goto(e, l.id)}
              style={{
                fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                fontWeight: 800,
                letterSpacing: '-0.04em',
                color: 'rgba(233,226,207,0.15)',
                display: 'block',
                padding: '12px 0',
                lineHeight: 1,
                transition: 'color 0.25s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--fg)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(233,226,207,0.15)'}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
