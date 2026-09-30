const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const componentsDir = path.join(srcDir, 'components');

const files = {};

files['tailwind.config.js'] = `/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#08090B',
        secondary: '#111318',
        textMain: '#F4F1E8',
        textMuted: '#8B8D93',
        accent: '#19D9FF',
        borderLight: 'rgba(255,255,255,0.10)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}
`;

files['src/index.css'] = `@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Space+Grotesk:wght@500;700&family=JetBrains+Mono:wght@400;500&display=swap');

:root {
  --bg: #08090B;
  --fg: #F4F1E8;
  --accent: #19D9FF;
}

body {
  background-color: var(--bg);
  color: var(--fg);
  font-family: 'Inter', sans-serif;
  overflow-x: hidden;
}

/* Subtle grid background */
body::before {
  content: "";
  position: fixed;
  top: 0; left: 0; width: 100vw; height: 100vh;
  background-image: 
    linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px);
  background-size: 50px 50px;
  z-index: -2;
  pointer-events: none;
}

/* Subtle radial gradient */
body::after {
  content: "";
  position: fixed;
  top: 0; left: 0; width: 100vw; height: 100vh;
  background: radial-gradient(circle at 50% 0%, rgba(25, 217, 255, 0.05), transparent 60%);
  z-index: -1;
  pointer-events: none;
}

::selection {
  background: rgba(25, 217, 255, 0.3);
  color: #fff;
}

html {
  scroll-behavior: smooth;
}

/* Glassmorphism */
.glass {
  background: rgba(17, 19, 24, 0.6);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.1);
}

.text-gradient {
  background: linear-gradient(90deg, #F4F1E8, #8B8D93);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
`;

files['src/App.js'] = `import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import ResumeCTA from './components/ResumeCTA';
import Contact from './components/Contact';

function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-textMuted text-sm">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p className="text-textMain font-medium text-lg">Dhiraj Aher</p>
          <p>Full Stack Java Developer • AI/ML Enthusiast</p>
        </div>
        <div className="flex gap-6 mb-4 md:mb-0">
          <a href="https://github.com/dhirajaher" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/dhirajaher" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>
          <a href="mailto:dhirajaher@example.com" className="hover:text-accent transition-colors">Email</a>
        </div>
        <div>
          <p>© 2026 Dhiraj Aher</p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Navbar />
            <main>
              <Hero />
              <About />
              <Projects />
              <Skills />
              <Experience />
              <Education />
              <ResumeCTA />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
`;

files['src/components/Navbar.jsx'] = `import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['About', 'Work', 'Skills', 'Education', 'Contact'];

  return (
    <nav className={\`fixed top-0 w-full z-50 transition-all duration-300 \${scrolled ? 'glass py-4' : 'bg-transparent py-6'}\`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="font-display font-bold text-xl tracking-wider text-textMain">DA.</a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map(link => (
            <a key={link} href={\`#\${link.toLowerCase()}\`} className="text-textMuted hover:text-textMain transition-colors">
              {link}
            </a>
          ))}
          <a href="#resume" className="ml-4 px-5 py-2 border border-white/20 rounded-full hover:border-accent hover:text-accent transition-all">
            Resume
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden text-textMain" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} /></svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full glass flex flex-col items-center py-6 gap-6 md:hidden border-t border-white/10"
        >
          {links.map(link => (
            <a key={link} href={\`#\${link.toLowerCase()}\`} onClick={() => setIsOpen(false)} className="text-textMuted hover:text-textMain text-lg">
              {link}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
`;

files['src/components/Hero.jsx'] = `import { motion } from 'framer-motion';
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
`;

files['src/components/HeroCanvas.jsx'] = `import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';

function AnimatedSphere() {
  const sphereRef = useRef();
  
  useFrame((state) => {
    if(sphereRef.current) {
      sphereRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      sphereRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Sphere ref={sphereRef} args={[1, 100, 200]} scale={2.4}>
      <MeshDistortMaterial
        color="#111318"
        attach="material"
        distort={0.4}
        speed={1.5}
        roughness={0.2}
        metalness={0.8}
        wireframe={true}
      />
    </Sphere>
  );
}

export default function HeroCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} className="w-full h-full opacity-60">
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#19D9FF" />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#F4F1E8" />
      <AnimatedSphere />
    </Canvas>
  );
}
`;

files['src/components/About.jsx'] = `import { motion } from 'framer-motion';

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
`;

files['src/components/Projects.jsx'] = `import { motion } from 'framer-motion';

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
                className={\`flex flex-col gap-12 items-center \${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}\`}
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
`;

files['src/components/Skills.jsx'] = `import { motion } from 'framer-motion';

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
`;

files['src/components/Experience.jsx'] = `import { motion } from 'framer-motion';

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
`;

files['src/components/Education.jsx'] = `import { motion } from 'framer-motion';

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
`;

files['src/components/ResumeCTA.jsx'] = `import { motion } from 'framer-motion';

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
`;

files['src/components/Contact.jsx'] = `import { motion } from 'framer-motion';

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
`;

for (const [filepath, content] of Object.entries(files)) {
  const fullPath = path.join(__dirname, filepath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content);
}
console.log("Successfully replaced files for the redesign.");
