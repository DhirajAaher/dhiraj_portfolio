import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import profileImg from '../assets/profile.jpg';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Crazy sliding heading reveal with skew
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 150, skewY: 10 },
        {
          opacity: 1,
          y: 0,
          skewY: 0,
          duration: 1.5,
          ease: 'elastic.out(1, 0.75)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );

      // Crazy stats stagger from the side
      if (statsRef.current) {
        gsap.fromTo(
          statsRef.current.children,
          { opacity: 0, x: 200, scale: 0.8 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1.2,
            stagger: 0.2,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 85%',
            },
          }
        );
      }
      
      // Image reveal
      gsap.fromTo('.about-image',
        { opacity: 0, scale: 0.8, rotation: -5 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1.5,
          ease: 'back.out(1.5)',
          scrollTrigger: {
            trigger: '.about-image',
            start: 'top 85%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { value: '400+', label: 'LeetCode Problems' },
    { value: '8.26', label: 'CGPA (SPPU)' },
    { value: 'AI', label: 'Driven Projects' },
    { value: 'Java', label: 'Full Stack Certified' },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-40 px-6 md:px-12 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          
          <div className="md:col-span-8">
            <h2 
              ref={textRef}
              className="text-3xl md:text-5xl lg:text-6xl font-editorial font-medium leading-tight text-foreground mb-8"
            >
              More than a developer. I build applications that combine solid engineering with intelligent solutions.
            </h2>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="about-image w-full md:w-1/3 aspect-[3/4] overflow-hidden rounded-xl bg-gray-200 flex-shrink-0">
                <img src={profileImg} alt="Dhiraj Aher" className="w-full h-full object-cover" />
              </div>
              <p className="text-lg text-gray-600 leading-relaxed md:w-2/3">
                I am a Computer Engineering graduate with a strong interest in Java Full Stack Development, Artificial Intelligence, and Machine Learning. I enjoy solving complex programming problems, developing practical web applications, learning new technologies, and integrating AI capabilities like Gemini and LLMs into modern software.
              </p>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col justify-end">
            <div ref={statsRef} className="grid grid-cols-2 gap-8 md:gap-12 mt-12 md:mt-0">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col border-t border-gray-200 pt-4">
                  <span className="text-3xl md:text-4xl font-editorial font-medium text-foreground">{stat.value}</span>
                  <span className="text-sm text-gray-500 mt-2 uppercase tracking-wider font-semibold">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
