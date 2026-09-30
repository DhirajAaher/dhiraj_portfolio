import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 text-textMain leading-tight">
              Turning ideas into <br/>
              <span className="text-textMuted">working software.</span>
            </h2>
            <div className="text-textMuted text-lg space-y-6 leading-relaxed">
              <p>
                I am a Full Stack Java Developer with a deep interest in Artificial Intelligence and Machine Learning. I specialize in building robust backend architectures with Java and Spring Boot, paired with modern, responsive frontends using React.js.
              </p>
              <p>
                Currently, I am exploring the integration of Generative AI into traditional web applications, creating intelligent solutions that solve real-world problems.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { num: '05+', label: 'Projects Built' },
              { num: 'Java', label: 'Primary Backend' },
              { num: 'AI', label: 'GenAI Integration' },
              { num: 'SPPU', label: 'Computer Engineering' }
            ].map((stat, i) => (
              <div key={i} className="glass p-8 rounded-2xl border border-white/5 hover:border-accent/30 transition-colors">
                <h3 className="font-display text-3xl font-bold text-textMain mb-2">{stat.num}</h3>
                <p className="text-sm font-mono text-textMuted">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
