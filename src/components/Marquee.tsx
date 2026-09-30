import React from 'react';
import { motion } from 'framer-motion';

const Marquee = () => {
  const items = [
    "JAVA DEVELOPMENT",
    "FULL STACK DEVELOPMENT",
    "AI ENGINEERING",
    "BACKEND DEVELOPMENT",
    "SPRING BOOT"
  ];

  // Repeat items to ensure smooth infinite loop
  const marqueeText = [...items, ...items, ...items, ...items];

  return (
    <div className="w-full py-12 md:py-20 bg-foreground text-background overflow-hidden flex items-center">
      <motion.div 
        className="flex whitespace-nowrap"
        animate={{
          x: ["0%", "-50%"]
        }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        <div className="flex items-center gap-8 md:gap-16 px-4 md:px-8">
          {marqueeText.map((item, index) => (
            <React.Fragment key={index}>
              <span className="text-4xl md:text-6xl font-editorial font-medium italic tracking-wide">{item}</span>
              <span className="text-xl text-gray-500 mx-4 md:mx-8">/</span>
            </React.Fragment>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Marquee;
