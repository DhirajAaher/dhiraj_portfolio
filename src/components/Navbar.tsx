import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['About', 'Work', 'Skills', 'Services', 'Contact'];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          scrolled ? 'py-4 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm' : 'py-6 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="text-2xl font-editorial font-bold tracking-tighter">
            Dhiraj<span className="text-gray-400">.</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex gap-8">
              {navLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-sm font-medium text-gray-600 hover:text-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            <a href="#contact" className="px-5 py-2.5 bg-foreground text-background text-sm font-semibold rounded-full hover:bg-gray-800 transition-colors">
              Let's Work Together
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden z-50 p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="w-6 h-0.5 bg-current mb-1.5 transition-transform origin-center" style={{ transform: mobileMenuOpen ? 'rotate(45deg) translateY(5px)' : 'none' }}></div>
            <div className="w-6 h-0.5 bg-current transition-opacity" style={{ opacity: mobileMenuOpen ? 0 : 1 }}></div>
            <div className="w-6 h-0.5 bg-current mt-1.5 transition-transform origin-center" style={{ transform: mobileMenuOpen ? 'rotate(-45deg) translateY(-5px)' : 'none' }}></div>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-background flex flex-col justify-center px-8"
          >
            <ul className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.li 
                  key={link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-5xl font-editorial font-medium"
                  >
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12"
            >
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="inline-block px-8 py-4 bg-foreground text-background text-lg font-semibold rounded-full">
                Let's Work Together
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
