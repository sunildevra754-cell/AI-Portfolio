
import React, { useState } from 'react';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-morphism py-4 px-6 md:px-12 flex justify-between items-center transition-all duration-300">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-xl text-white shadow-lg shadow-indigo-500/30">
          AI
        </div>
        <span className="hidden sm:inline font-bold text-xl tracking-tight text-slate-100">Ai portfolio</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
            className={`text-sm font-medium transition-colors hover:text-indigo-400 ${
              activeSection === link.href.substring(1) ? 'text-indigo-500' : 'text-slate-400'
            }`}
          >
            {link.name}
          </a>
        ))}
        <button 
          onClick={() => handleNavClick('#contact')}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-md active:scale-95"
        >
          Resume
        </button>
      </div>

      {/* Mobile Toggle */}
      <button 
        className="md:hidden text-slate-100 text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-slate-900 border-t border-slate-800 p-6 flex flex-col gap-4 shadow-2xl md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className={`text-lg font-medium transition-colors ${
                activeSection === link.href.substring(1) ? 'text-indigo-500' : 'text-slate-400'
              }`}
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => handleNavClick('#contact')}
            className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold mt-2"
          >
            Download Resume
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;
