import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl font-bold text-textMain mb-16 text-center"
        >
          Experience
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative pl-8 md:pl-0"
        >
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2"></div>
          
          <div className="md:w-1/2 md:pr-12 md:text-right relative">
            <div className="absolute left-[-32px] md:left-auto md:right-[-4px] top-2 w-2 h-2 rounded-full bg-accent ring-4 ring-background"></div>
            <span className="font-mono text-accent text-sm mb-2 block">2023</span>
            <h3 className="font-display text-xl font-bold text-textMain mb-1">Full Stack Java Intern</h3>
            <h4 className="text-textMuted mb-4">Profound Edutech</h4>
            <div className="flex flex-wrap gap-2 md:justify-end">
              {['Java', 'Spring Boot', 'React', 'SQL', 'REST APIs'].map(tech => (
                <span key={tech} className="px-3 py-1 text-xs font-mono text-textMuted border border-white/10 rounded-full bg-white/5">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
