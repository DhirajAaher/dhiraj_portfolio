import React from 'react';
import { ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-40 px-6 md:px-12 bg-foreground text-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          
          <div>
            <h2 className="text-4xl md:text-7xl font-editorial font-medium mb-6 text-white leading-tight">
              Have an idea?<br />
              <span className="text-gray-500 italic">Let's build it.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-md">
              Whether you're looking for a premium portfolio, business website or custom digital product, let's create something people remember.
            </p>
            
            <div className="space-y-6 text-xl">
              <a href="mailto:dhirajaher532@gmail.com" className="block text-white hover:text-gray-400 transition-colors">
                dhirajaher532@gmail.com
              </a>
              <div className="flex gap-6 text-sm font-semibold tracking-widest uppercase text-gray-500 pt-8 border-t border-gray-800">
                <a href="https://linkedin.com/in/dhiraj-aher" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                <a href="https://github.com/DhirajAaher" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
                <a href="https://drive.google.com/file/d/1lpFwOl28MRxNNOtOqEw8WPgSLfVHVQu0/view?usp=sharing" target="_blank" rel="noreferrer" className="hover:text-white transition-colors text-white">Download Resume</a>
              </div>
            </div>
          </div>

          <div className="bg-white/5 p-8 md:p-12 rounded-2xl backdrop-blur-sm border border-white/10">
            <form className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="bg-transparent border-b border-gray-600 pb-2 text-white focus:outline-none focus:border-white transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="bg-transparent border-b border-gray-600 pb-2 text-white focus:outline-none focus:border-white transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="project" className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Project Type</label>
                <input 
                  type="text" 
                  id="project" 
                  className="bg-transparent border-b border-gray-600 pb-2 text-white focus:outline-none focus:border-white transition-colors"
                  placeholder="Web Development"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="bg-transparent border-b border-gray-600 pb-2 text-white focus:outline-none focus:border-white transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button type="button" className="mt-4 px-8 py-4 bg-white text-foreground font-semibold rounded-full hover:bg-gray-200 transition-colors self-start flex items-center gap-3">
                Let's Build <ArrowRight size={18} />
              </button>
            </form>
          </div>
          
        </div>

        {/* Final CTA */}
        <div className="mt-32 pt-16 border-t border-gray-800 text-center">
          <h2 className="text-3xl md:text-5xl font-editorial font-medium text-white mb-8">
            Your next website could look like this.
          </h2>
          <button className="px-8 py-4 border border-gray-600 text-white rounded-full hover:bg-white hover:text-foreground transition-all flex items-center gap-3 mx-auto font-semibold">
            Start a Project <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
