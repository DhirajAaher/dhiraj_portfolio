import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const services = [
  {
    title: "Full Stack Java Development",
    description: "End-to-end web application development using React, Java, and Spring Boot for robust, scalable solutions.",
  },
  {
    title: "Backend Architecture & APIs",
    description: "Designing secure RESTful APIs, role-based authentication, database schemas, and microservices for high-performance applications.",
  },
  {
    title: "AI Application Development",
    description: "Integrating Generative AI, LLMs like Gemini and OpenAI, and intelligent APIs into modern digital products to solve complex problems.",
  },
  {
    title: "Database Design & Management",
    description: "Architecting efficient schemas, writing optimized queries, and managing complex relationships across MySQL, MongoDB, and Redis.",
  }
];

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.service-card',
        { opacity: 0, y: 300, scale: 0.9, rotationX: -45 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationX: 0,
          duration: 1.5,
          stagger: 0.15,
          ease: 'elastic.out(1, 0.6)',
          scrollTrigger: {
            trigger: '.services-grid',
            start: 'top 85%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-24 md:py-40 px-6 md:px-12 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-editorial font-medium text-foreground mb-6">
            Let's build something worth remembering.
          </h2>
          <p className="text-gray-500 text-lg">
            Design + Development • Performance Focused • Interactive when it matters
          </p>
        </div>

        <div className="services-grid grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {services.map((service, index) => (
            <div key={index} className="service-card group p-10 border border-gray-200 hover:border-foreground transition-colors bg-gray-50 hover:bg-white flex flex-col justify-between min-h-[300px]">
              <div>
                <div className="text-gray-300 font-editorial text-5xl mb-6 group-hover:text-foreground transition-colors">
                  0{index + 1}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="mt-8 overflow-hidden">
                <div className="w-full h-[1px] bg-gray-200 relative">
                  <div className="absolute top-0 left-0 h-full w-0 bg-foreground group-hover:w-full transition-all duration-700 ease-out"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
