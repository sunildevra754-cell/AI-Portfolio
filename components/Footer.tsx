
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-lg text-white">
              AI
            </div>
            <span className="font-bold text-lg tracking-tight text-slate-100">Ai portfolio</span>
          </div>
          <p className="text-slate-500 text-sm max-w-xs text-center md:text-left">
            Crafting digital experiences with precision and creativity. Available for select freelance projects.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors text-xl">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-blue-400 transition-colors text-xl">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-sky-400 transition-colors text-xl">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </div>
          <p className="text-slate-600 text-xs">
            &copy; {currentYear} Codex. All rights reserved.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2">
          <p className="text-slate-500 text-xs uppercase font-bold tracking-widest">Platform</p>
          <p className="text-slate-400 text-sm font-medium">
            Deployed using <span className="text-indigo-400 font-bold">Kuberns AI</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
