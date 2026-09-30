import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [cursorText, setCursorText] = useState('');
  
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    // Check if it's a touch device / mobile
    const checkIsMobile = () => {
      setIsDesktop(window.innerWidth > 768 && !('ontouchstart' in window));
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    if (isDesktop) {
      window.addEventListener('mousemove', mouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('resize', checkIsMobile);
    };
  }, [isDesktop]);

  useEffect(() => {
    if (!isDesktop) return;
    
    // Add event listeners for hover effects
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Project links
      if (target.closest('.project-card')) {
        setCursorVariant('project');
        setCursorText('VIEW');
      } 
      // Images
      else if (target.tagName.toLowerCase() === 'img' || target.closest('.image-hover')) {
        setCursorVariant('image');
        setCursorText('EXPLORE');
      }
      // Interactive elements
      else if (target.tagName.toLowerCase() === 'a' || target.tagName.toLowerCase() === 'button') {
        setCursorVariant('hover');
        setCursorText('');
      } else {
        setCursorVariant('default');
        setCursorText('');
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    return () => document.removeEventListener('mouseover', handleMouseOver);
  }, [isDesktop]);

  if (!isDesktop) return null;

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      height: 16,
      width: 16,
      backgroundColor: 'rgba(15, 15, 15, 1)',
      mixBlendMode: 'normal' as const,
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      height: 48,
      width: 48,
      backgroundColor: 'rgba(15, 15, 15, 0.1)',
      border: '1px solid rgba(15, 15, 15, 0.5)',
      mixBlendMode: 'normal' as const,
    },
    project: {
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      height: 80,
      width: 80,
      backgroundColor: 'rgba(15, 15, 15, 1)',
      mixBlendMode: 'normal' as const,
    },
    image: {
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      height: 80,
      width: 80,
      backgroundColor: 'rgba(255, 255, 255, 1)',
      color: '#000',
      mixBlendMode: 'difference' as const,
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 z-[100] rounded-full pointer-events-none flex items-center justify-center text-[10px] font-bold tracking-widest text-white"
      variants={variants}
      animate={cursorVariant}
      transition={{
        type: 'tween',
        ease: 'backOut',
        duration: 0.15
      }}
    >
      {cursorText}
    </motion.div>
  );
};

export default CustomCursor;
