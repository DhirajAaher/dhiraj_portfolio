import React from 'react';
import { ArrowRight } from 'lucide-react';

const Community = () => {
  return (
    <section className="py-24 md:py-40 px-6 md:px-12 bg-white">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center">
          
          <div className="w-full md:w-1/2">
            <div className="aspect-square bg-gray-100 rounded-3xl overflow-hidden relative group">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                alt="Community and Leadership" 
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-foreground/10 group-hover:bg-transparent transition-colors duration-700"></div>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-editorial font-medium text-foreground mb-6">
              Building beyond code.
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              As the President of the Green Club Committee (UNICEF) and an active college event anchor, I believe in building and leading communities. I coordinate activities, manage teams, and foster an environment where technical knowledge and teamwork thrive together.
            </p>
            
            <a href="https://linkedin.com/in/dhiraj-aher" target="_blank" rel="noreferrer" className="inline-flex items-center gap-4 text-foreground font-semibold pb-2 border-b-2 border-foreground hover:gap-6 transition-all group">
              Join the Community <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Community;
