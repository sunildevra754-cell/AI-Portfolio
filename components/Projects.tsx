
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white">Featured Projects</h2>
          <p className="text-slate-400 max-w-lg">
            A selection of my recent works ranging from complex web platforms to experimental AI tools.
          </p>
        </div>
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-indigo-400 font-semibold hover:text-indigo-300 transition-colors flex items-center gap-2"
        >
          View all on GitHub <i className="fas fa-external-link-alt text-sm"></i>
        </a>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <div 
            key={project.id}
            className="group glass-morphism rounded-3xl overflow-hidden flex flex-col h-full hover:-translate-y-2 transition-all duration-300"
          >
            <div className="relative aspect-video overflow-hidden">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
            </div>
            
            <div className="p-8 flex flex-col flex-grow space-y-4">
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-slate-900/50 border border-slate-700 rounded-full text-xs font-semibold text-slate-400">
                    {tag}
                  </span>
                ))}
              </div>
              
              <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-400 text-sm leading-relaxed flex-grow">
                {project.description}
              </p>
              
              <div className="flex gap-4 pt-4">
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-bold transition-all shadow-lg active:scale-95"
                >
                  Live Demo
                </a>
                <a 
                  href={project.repoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2 bg-slate-800 hover:bg-slate-700 text-slate-100 rounded-xl text-sm font-bold border border-slate-700 transition-all active:scale-95"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
