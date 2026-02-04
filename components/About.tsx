
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-600 to-blue-500 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity blur-xl"></div>
          <img 
            src="https://picsum.photos/seed/alex/600/600" 
            alt="Username" 
            className="relative z-10 rounded-2xl w-full aspect-square object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
          />
          <div className="absolute bottom-6 left-6 z-20 bg-slate-900/90 backdrop-blur-md border border-slate-700 p-4 rounded-xl shadow-lg">
            <p className="text-indigo-400 font-bold text-xl">4+ Years</p>
            <p className="text-slate-400 text-xs uppercase tracking-widest font-semibold">Coding Journey</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-5xl font-bold text-white">About Me</h2>
            <div className="w-20 h-1.5 bg-indigo-600 rounded-full"></div>
          </div>
          
          <p className="text-lg text-slate-400 leading-relaxed">
            I'm a software developer based in San Francisco with a passion for building software that lives at the intersection of powerful utility and elegant design. 
            My journey into tech began with a curiosity about how massive web platforms handle millions of concurrent users, which led me deep into the world of distributed systems and frontend architecture.
          </p>
          
          <p className="text-lg text-slate-400 leading-relaxed">
            I specialize in the <span className="text-slate-100 font-medium">React ecosystem</span> and <span className="text-slate-100 font-medium">Python for backend/AI</span> development. 
            Whether it's optimizing a Redux store or training a niche NLP model, I thrive on solving complex technical puzzles that make a real difference in user experience.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700">
              <h4 className="text-white font-bold mb-1">Growth Mindset</h4>
              <p className="text-sm text-slate-400">Always learning, currently exploring Web3 and Vector DBs.</p>
            </div>
            <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700">
              <h4 className="text-white font-bold mb-1">Collaborative</h4>
              <p className="text-sm text-slate-400">Effective communicator in agile and remote-first teams.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
