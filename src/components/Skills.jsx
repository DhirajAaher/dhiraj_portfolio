import { useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './Skills3D.css';

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

const categories = [
  {
    name: 'Backend',
    skills: [
      { name: 'Java',       level: 5 },
      { name: 'Spring Boot', level: 4 },
      { name: 'REST APIs',  level: 5 },
      { name: 'Hibernate',  level: 4 },
      { name: 'Servlets',   level: 3 },
    ],
  },
  {
    name: 'Frontend',
    skills: [
      { name: 'React.js',     level: 4 },
      { name: 'TypeScript',   level: 3 },
      { name: 'JavaScript',   level: 5 },
      { name: 'HTML & CSS',   level: 5 },
      { name: 'Bootstrap',    level: 4 },
    ],
  },
  {
    name: 'Databases',
    skills: [
      { name: 'MySQL',    level: 5 },
      { name: 'MongoDB',  level: 3 },
      { name: 'JDBC',     level: 4 },
      { name: 'JPA/HQL',  level: 4 },
    ],
  },
  {
    name: 'Generative AI',
    skills: [
      { name: 'Gemini API',    level: 4 },
      { name: 'OpenAI',        level: 3 },
      { name: 'Ollama',        level: 3 },
      { name: 'Prompt Eng.',   level: 4 },
      { name: 'LLMs',          level: 3 },
    ],
  },
  {
    name: 'Languages',
    skills: [
      { name: 'Java',    level: 5 },
      { name: 'Python',  level: 4 },
      { name: 'SQL',     level: 5 },
      { name: 'C# / .NET', level: 2 },
    ],
  },
  {
    name: 'Workflow',
    skills: [
      { name: 'Git / GitHub', level: 5 },
      { name: 'Maven',        level: 4 },
      { name: 'Postman',      level: 4 },
      { name: 'VS Code',      level: 5 },
    ],
  },
];

function TiltCard({ category }) {
  const ref = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Uiverse style dynamic glowing mouse spotlight
    ref.current.style.setProperty('--mouse-x', `${mouseX}px`);
    ref.current.style.setProperty('--mouse-y', `${mouseY}px`);

    // Calculate rotation (-15 to 15 degrees)
    const rY = ((mouseX / width) - 0.5) * 30;
    const rX = ((mouseY / height) - 0.5) * -30;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div className="uiverse-card-wrapper">
      <div 
        ref={ref}
        className="uiverse-card"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
        }}
      >
        <div className="uiverse-card-content">
          <h3 className="skill-category-title">{category.name}</h3>
          <div>
            {category.skills.map((s, idx) => (
              <div 
                className="skill-3d-item" 
                key={s.name} 
                style={{ transform: `translateZ(${40 + idx * 5}px)` }} // Stagger depth
              >
                <span className="skill-3d-name">{s.name}</span>
                <div className="skill-3d-bar">
                  <div className="skill-3d-bar-fill" style={{ width: `${(s.level / 5) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="skills" id="skills" style={{ borderBottom: '1px solid var(--border)' }}>
      <Reveal>
        <div className="section-header">
          <span className="section-num">03 —</span>
          <div>
            <h2 className="section-title">Skills</h2>
            <p className="section-title-sub">Technologies and tools I use professionally</p>
          </div>
        </div>
      </Reveal>

      <div className="skills-container">
        {categories.map((cat, i) => (
          <Reveal key={cat.name} delay={i * 0.1}>
            <TiltCard category={cat} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
