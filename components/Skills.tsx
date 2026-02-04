
import React from 'react';
import { SKILL_CATEGORIES } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-slate-900/50">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Technical Stack</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Leveraging modern tools to build reliable, scalable, and user-centric applications.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILL_CATEGORIES.map((category) => (
            <div 
              key={category.name}
              className="p-8 rounded-3xl bg-slate-800/40 border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 group"
            >
              <h3 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-2">
                <span className="w-2 h-6 bg-indigo-600 rounded-full group-hover:scale-y-125 transition-transform"></span>
                {category.name}
              </h3>
              <ul className="space-y-4">
                {category.skills.map((skill) => (
                  <li key={skill.name} className="flex items-center gap-3 text-slate-400 group-hover:text-slate-200 transition-colors">
                    <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-900 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                      <i className={skill.icon}></i>
                    </div>
                    <span className="font-medium">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
