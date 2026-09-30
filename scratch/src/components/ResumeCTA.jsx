import { motion } from 'framer-motion';

export default function ResumeCTA() {
  return (
    <section id="resume" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 z-0 blur-3xl rounded-full scale-150 transform -translate-y-1/2"></div>
      
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-5xl md:text-7xl font-bold text-textMain mb-8"
        >
          Let's build something <span className="text-accent">meaningful.</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-textMuted text-xl mb-12 max-w-2xl mx-auto"
        >
          Open to opportunities in Full Stack Java Development, Software Development and AI-powered applications.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <a href="#" className="px-8 py-4 bg-accent text-background font-bold rounded-full hover:bg-white transition-colors">
            Download Resume
          </a>
          <a href="https://linkedin.com/in/dhirajaher" className="px-8 py-4 border border-white/20 text-textMain font-medium rounded-full hover:border-accent hover:text-accent transition-colors">
            View LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}
