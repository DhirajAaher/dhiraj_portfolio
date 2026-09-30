import { motion } from 'framer-motion';

const projects = [
  {
    id: '01',
    title: 'AI Interview Preparation Platform',
    desc: 'An intelligent platform that simulates technical interviews using Generative AI. It provides real-time feedback, analyzes responses, and helps candidates improve their communication and technical skills.',
    tech: 'Java • Spring Boot • React • MySQL • Gemini API',
    github: '#',
    demo: '#',
  },
  {
    id: '02',
    title: 'AI-Powered Diet Assistant (NutriAI)',
    desc: 'A comprehensive nutrition application that utilizes AI to generate personalized diet plans based on user health metrics, goals, and dietary restrictions.',
    tech: 'React • Node.js • Express • MongoDB • OpenAI API',
    github: '#',
    demo: '#',
  }
];

export default function Projects() {
  return (
    <section id="work" className="py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-textMain">Selected Work</h2>
        </motion.div>

        <div className="space-y-32">
          {projects.map((p, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={p.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col gap-12 items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                {/* Image Placeholder */}
                <div className="w-full lg:w-1/2 aspect-[4/3] rounded-2xl glass overflow-hidden group relative flex items-center justify-center">
                   <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                   <span className="font-mono text-textMuted text-lg group-hover:scale-110 transition-transform duration-500">Project Preview</span>
                </div>
                
                {/* Content */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <span className="font-mono text-accent text-xl mb-4">{p.id}</span>
                  <h3 className="font-display text-3xl font-bold text-textMain mb-6">{p.title}</h3>
                  <p className="text-textMuted text-lg mb-8 leading-relaxed">
                    {p.desc}
                  </p>
                  
                  <div className="font-mono text-sm text-textMain mb-10 pb-10 border-b border-white/10">
                    {p.tech}
                  </div>
                  
                  <div className="flex gap-6">
                    <a href={p.github} className="text-textMain hover:text-accent font-medium flex items-center gap-2 transition-colors">
                      View Code <span className="text-xl">↗</span>
                    </a>
                    <a href={p.demo} className="text-textMuted hover:text-textMain font-medium flex items-center gap-2 transition-colors">
                      Live Demo <span className="text-xl">↗</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
