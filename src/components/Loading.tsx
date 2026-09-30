import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loading = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 800); // Wait a bit after reaching 100
          return 100;
        }
        return p + Math.floor(Math.random() * 10) + 1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-[200] bg-foreground text-background flex flex-col items-center justify-center"
      initial={{ y: 0 }}
      exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
    >
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-6xl md:text-8xl font-editorial font-medium tracking-tighter">Dhiraj.</h1>
        <div className="flex flex-col items-center gap-4">
          <div className="text-sm tracking-widest uppercase text-gray-500 font-semibold">Loading experience</div>
          <div className="w-48 h-1 bg-gray-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-white transition-all duration-200 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="text-xs text-gray-500">{Math.min(progress, 100)}%</div>
        </div>
      </div>
    </motion.div>
  );
};

export default Loading;
