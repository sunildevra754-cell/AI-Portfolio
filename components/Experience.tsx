
import React from 'react';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white">Experience & Growth</h2>
          <p className="text-slate-400 italic">"The only way to do great work is to love what you do."</p>
        </div>

        <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
          {EXPERIENCE.map((item, index) => (
            <div key={index} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group transition-all duration-500`}>
              {/* Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 text-indigo-400 shadow-xl z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <i className={
                  item.type === 'work' ? 'fas fa-briefcase' : 
                  item.type === 'education' ? 'fas fa-graduation-cap' : 'fas fa-trophy'
                }></i>
              </div>

              {/* Content */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-slate-800/40 border border-slate-700/50 shadow-lg group-hover:border-indigo-500/30 transition-all">
                <div className="flex items-center justify-between gap-4 mb-2">
                  <h3 className="text-xl font-bold text-white">{item.role}</h3>
                  <span className="text-xs font-bold text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full whitespace-nowrap">
                    {item.period}
                  </span>
                </div>
                <div className="text-indigo-300 font-semibold mb-4 text-sm">{item.company}</div>
                <ul className="space-y-2">
                  {item.description.map((desc, i) => (
                    <li key={i} className="text-slate-400 text-sm flex gap-2">
                      <span className="text-indigo-600 mt-1.5">•</span>
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
