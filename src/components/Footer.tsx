import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 px-6 md:px-12 bg-foreground text-gray-400 border-t border-gray-800">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium">
        
        <div>
          <span className="font-editorial text-xl text-white">Dhiraj.</span>
        </div>
        
        <div>
          Built with curiosity + code.
        </div>
        
        <div>
          &copy; {new Date().getFullYear()} Dhiraj Aher.
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
