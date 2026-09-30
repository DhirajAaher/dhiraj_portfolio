import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'BACKEND',
    skills: ['Java', 'Spring Boot', 'Hibernate', 'JDBC', 'REST APIs', 'Node.js']
  },
  {
    title: 'FRONTEND',
    skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'TypeScript', 'Bootstrap', 'Tailwind CSS']
  },
  {
    title: 'DATABASE',
    skills: ['MySQL', 'MongoDB', 'PostgreSQL']
  },
  {
    title: 'AI / ML',
    skills: ['Generative AI', 'LLM', 'Gemini API', 'OpenAI', 'Ollama', 'Python']
  },
  {
    title: 'TOOLS',
    skills: ['Git', 'GitHub', 'Postman', 'Maven', 'VS Code', 'Eclipse', 'Docker']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-secondary/30 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl font-bold text-textMain mb-16"
        >
          Technology Ecosystem
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {skillCategories.map((cat, i) => (
            <motion.div 
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="font-mono text-sm tracking-widest text-accent mb-6">{cat.title}</h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map(skill => (
                  <span 
                    key={skill} 
                    className="px-4 py-2 text-sm font-medium text-textMuted bg-white/5 border border-white/10 rounded-full hover:border-accent/50 hover:text-textMain transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
