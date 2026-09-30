import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const skillsGroups = [
  {
    category: "Java & Backend",
    skills: "Core Java, Spring Boot, Spring Security, Hibernate, Node.js, Express, REST APIs"
  },
  {
    category: "Frontend",
    skills: "React.js, TypeScript, JavaScript, HTML5, CSS3, Bootstrap, Tailwind CSS"
  },
  {
    category: "Databases",
    skills: "MySQL, MongoDB, Redis, SQL"
  },
  {
    category: "AI & ML",
    skills: "Generative AI, LLMs, Gemini API, OpenAI, Ollama, Prompt Engineering"
  },
  {
    category: "Tools & Others",
    skills: "Git, GitHub, Postman, VS Code, Eclipse, Maven, IntelliJ, Vite"
  }
];

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray('.skill-item');
      
      items.forEach((item: any, i) => {
        gsap.fromTo(item,
          { opacity: 0, x: i % 2 === 0 ? -400 : 400, skewX: i % 2 === 0 ? -20 : 20 },
          {
            opacity: 1,
            x: 0,
            skewX: 0,
            duration: 1.2,
            ease: 'back.out(1.4)',
            scrollTrigger: {
              trigger: item,
              start: 'top 90%',
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-24 md:py-40 px-6 md:px-12 bg-foreground text-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-6xl font-editorial font-medium mb-20 text-white">
          Technical Arsenal<span className="text-gray-500">.</span>
        </h2>
        
        <div className="flex flex-col border-t border-gray-800">
          {skillsGroups.map((group, index) => (
            <div 
              key={index} 
              className="skill-item flex flex-col md:flex-row py-8 md:py-12 border-b border-gray-800 group hover:bg-gray-900/50 transition-colors cursor-default"
            >
              <div className="w-full md:w-1/3 mb-4 md:mb-0 text-gray-500 text-lg uppercase tracking-widest font-semibold group-hover:text-white transition-colors duration-500">
                {group.category}
              </div>
              <div className="w-full md:w-2/3 text-2xl md:text-4xl font-editorial text-gray-300 group-hover:text-white transition-colors duration-500">
                {group.skills}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
