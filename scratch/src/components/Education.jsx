import { motion } from 'framer-motion';

const edu = [
  {
    year: '2022 – 2026',
    degree: 'Bachelor of Engineering',
    major: 'Computer Engineering',
    school: 'Rajiv Gandhi College of Engineering, SPPU'
  },
  {
    year: '2022',
    degree: 'HSC',
    major: 'Science',
    school: 'Matoshri Science College, Ahilyanagar'
  },
  {
    year: '2020',
    degree: 'SSC',
    major: '',
    school: 'Shri Vyankatesh Vidya Niketan, Mumbai'
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-secondary/20">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl font-bold text-textMain mb-16 text-center"
        >
          Education
        </motion.h2>

        <div className="space-y-12">
          {edu.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border border-white/5 hover:border-white/10 transition-colors"
            >
              <div>
                <h3 className="font-display text-xl font-bold text-textMain mb-1">{item.degree}</h3>
                {item.major && <p className="text-textMuted mb-2">{item.major}</p>}
                <p className="font-mono text-sm text-textMuted/60">{item.school}</p>
              </div>
              <div className="font-mono text-accent text-sm">
                {item.year}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
