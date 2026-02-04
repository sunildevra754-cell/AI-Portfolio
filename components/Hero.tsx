
import React from 'react';

const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center px-6 pt-20 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -z-10 animate-pulse"></div>

      <div className="text-center max-w-4xl space-y-8 animate-fade-in">
        <div className="inline-block py-1 px-4 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-semibold mb-4">
          Open for new opportunities
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-tight">
          Building systems that <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-400">scale.</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Hi, I'm <span className="text-slate-100 font-semibold">Codex</span>. 
          A full-stack engineer dedicated to crafting high-performance web applications and 
          integrating intelligent AI solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <button 
            onClick={() => scrollTo('projects')}
            className="group relative px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all shadow-xl shadow-indigo-500/20 active:scale-95 w-full sm:w-auto overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              View My Work
              <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </span>
          </button>
          <button 
            onClick={() => scrollTo('contact')}
            className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold rounded-xl transition-all border border-slate-700 active:scale-95 w-full sm:w-auto"
          >
            Get In Touch
          </button>
        </div>
      </div>

      {/* Decorative scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <i className="fas fa-chevron-down text-2xl text-slate-400"></i>
      </div>
    </section>
  );
};

export default Hero;
