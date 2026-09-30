import { motion } from 'framer-motion';
import HeroCanvas from './HeroCanvas';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-accent/30 bg-accent/10 text-accent font-mono text-xs font-medium tracking-widest">
            FULL STACK JAVA DEVELOPER
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.1] mb-6 text-textMain">
            Building intelligent <br />
            <span className="text-accent">digital experiences.</span>
          </h1>
          
          <p className="text-textMuted text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
            Full Stack Java Developer building scalable web applications with Spring Boot, React and Generative AI.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <a href="#work" className="px-8 py-3 bg-textMain text-background font-medium rounded-full hover:bg-accent hover:text-background transition-colors">
              View My Work
            </a>
            <a href="#resume" className="px-8 py-3 border border-white/20 rounded-full hover:border-accent hover:text-accent transition-colors text-textMain">
              Download Resume
            </a>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://github.com/dhirajaher" target="_blank" rel="noreferrer" className="text-textMuted hover:text-accent transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/dhirajaher" target="_blank" rel="noreferrer" className="text-textMuted hover:text-accent transition-colors">LinkedIn</a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative h-[400px] lg:h-[600px] flex items-center justify-center"
        >
          {/* Subtle available indicator */}
          <div className="absolute top-10 right-0 lg:right-10 glass px-4 py-2 rounded-full flex items-center gap-3 z-20 shadow-2xl">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
            </span>
            <span className="text-xs font-mono text-textMain tracking-wide">AVAILABLE FOR OPPORTUNITIES</span>
          </div>

          <div className="w-full h-full">
            <HeroCanvas />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
