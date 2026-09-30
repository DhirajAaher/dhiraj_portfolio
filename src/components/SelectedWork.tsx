import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "AI Interview Platform",
    category: "Full Stack AI App",
    tech: "Java, Spring Boot, React, MySQL, Gemini AI, REST API",
    description: "An AI-powered interview preparation platform evaluating technical answers with real-time feedback, scores, and improved solutions via Gemini API.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    link: "https://github.com/DhirajAaher/ai-interview-platform"
  },
  {
    title: "NutiAI",
    category: "AI Diet Assistant",
    tech: "Generative AI, Gemini, OpenAI, Ollama, LLM",
    description: "AI-powered diet assistant providing personalized nutrition tracking, diet recommendations, and interactive chatbot experience.",
    image: "https://images.unsplash.com/photo-1498837167922-41c53b4f0f02?q=80&w=2070&auto=format&fit=crop",
    link: "https://github.com/DhirajAaher"
  },
  {
    title: "EduNexus",
    category: "Student Learning App",
    tech: "Java, Spring Boot, Spring Security, MySQL, REST API",
    description: "Comprehensive student learning platform featuring robust role-based authentication and secure database integration.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
    link: "https://github.com/DhirajAaher"
  }
];

const SelectedWork = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.project-card');
      
      cards.forEach((card: any, i: number) => {
        // Alternate slide direction based on index
        const slideDirection = i % 2 === 0 ? -300 : 300;
        
        gsap.fromTo(card, 
          { opacity: 0, x: slideDirection, rotation: i % 2 === 0 ? -5 : 5 },
          {
            opacity: 1,
            x: 0,
            rotation: 0,
            duration: 1.5,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="work" ref={containerRef} className="py-24 md:py-40 px-6 md:px-12 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <h2 className="text-4xl md:text-6xl font-editorial font-medium text-foreground">
            Selected Work<span className="text-gray-400">.</span>
          </h2>
          <p className="text-gray-500 max-w-sm mt-6 md:mt-0">
            Showcasing digital experiences built with modern architecture and AI integrations.
          </p>
        </div>

        <div className="flex flex-col gap-24 md:gap-40">
          {projects.map((project, index) => (
            <div key={index} className="project-card group cursor-pointer flex flex-col md:flex-row gap-8 md:gap-16 items-center">
              
              <div className={`w-full md:w-3/5 overflow-hidden relative ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                <div className="aspect-[4/3] w-full overflow-hidden image-hover bg-gray-200">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className={`w-full md:w-2/5 flex flex-col ${index % 2 !== 0 ? 'md:order-1 md:items-end md:text-right' : ''}`}>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs font-semibold tracking-widest uppercase text-gray-500 border border-gray-300 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-3xl md:text-5xl font-editorial font-medium text-foreground mb-6 group-hover:text-gray-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-10 text-sm text-gray-400 font-medium tracking-wide">
                  {project.tech}
                </div>
                
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-foreground font-semibold hover:gap-4 transition-all"
                >
                  View Project <ArrowUpRight size={20} />
                </a>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
