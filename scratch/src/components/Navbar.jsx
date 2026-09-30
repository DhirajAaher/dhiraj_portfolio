import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['About', 'Work', 'Skills', 'Education', 'Contact'];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="font-display font-bold text-xl tracking-wider text-textMain">DA.</a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-textMuted hover:text-textMain transition-colors">
              {link}
            </a>
          ))}
          <a href="#resume" className="ml-4 px-5 py-2 border border-white/20 rounded-full hover:border-accent hover:text-accent transition-all">
            Resume
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden text-textMain" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} /></svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full glass flex flex-col items-center py-6 gap-6 md:hidden border-t border-white/10"
        >
          {links.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-textMuted hover:text-textMain text-lg">
              {link}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
