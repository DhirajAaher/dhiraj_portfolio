const items = [
  'Java', 'Spring Boot', 'React.js', 'AI/ML', 'REST APIs',
  'Gemini API', 'MySQL', 'MongoDB', 'TypeScript', 'OpenAI',
  'Hibernate', 'Python', 'Docker', 'Git', 'System Design',
];

export default function Marquee() {
  // Duplicate for seamless loop
  const doubled = [...items, ...items];

  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span className="marquee-item" key={i}>
            <span className="marquee-sep" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
