import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl font-bold text-textMain mb-12"
        >
          Have a project or opportunity?
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-8"
        >
          <a href="mailto:dhirajaher@example.com" className="group">
            <p className="font-mono text-sm text-textMuted mb-2">EMAIL</p>
            <p className="text-2xl text-textMain group-hover:text-accent transition-colors">hello@dhirajaher.com</p>
          </a>
          
          <a href="https://linkedin.com/in/dhirajaher" className="group">
            <p className="font-mono text-sm text-textMuted mb-2">LINKEDIN</p>
            <p className="text-2xl text-textMain group-hover:text-accent transition-colors">/in/dhirajaher</p>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
