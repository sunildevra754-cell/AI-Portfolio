
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form Submitted:', formState);
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white">Let's Connect</h2>
            <p className="text-slate-400 max-w-md">
              Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <i className="fas fa-envelope text-xl"></i>
              </div>
              <div>
                <p className="text-slate-500 text-xs uppercase font-bold tracking-widest">Email Me</p>
                <a href="mailto:alex.rivers@example.com" className="text-slate-200 font-semibold text-lg hover:text-indigo-400 transition-colors">alex.rivers@example.com</a>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <i className="fa-brands fa-linkedin-in text-xl"></i>
              </div>
              <div>
                <p className="text-slate-500 text-xs uppercase font-bold tracking-widest">Network</p>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-200 font-semibold text-lg hover:text-blue-400 transition-colors">LinkedIn Profile</a>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-slate-700/10 border border-slate-600/20 flex items-center justify-center text-slate-400 group-hover:bg-slate-200 group-hover:text-slate-900 transition-all">
                <i className="fa-brands fa-github text-xl"></i>
              </div>
              <div>
                <p className="text-slate-500 text-xs uppercase font-bold tracking-widest">Source Code</p>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-200 font-semibold text-lg hover:text-slate-100 transition-colors">GitHub Repositories</a>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-3xl blur opacity-20"></div>
          <form 
            onSubmit={handleSubmit}
            className="relative bg-slate-800/80 p-8 md:p-12 rounded-3xl border border-slate-700/50 space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400">Your Name</label>
                <input 
                  required
                  type="text" 
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="w-full bg-slate-900/50 border border-slate-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 p-4 rounded-xl text-slate-100 transition-all outline-none"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400">Email Address</label>
                <input 
                  required
                  type="email" 
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="w-full bg-slate-900/50 border border-slate-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 p-4 rounded-xl text-slate-100 transition-all outline-none"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-400">Message</label>
              <textarea 
                required
                rows={5}
                value={formState.message}
                onChange={(e) => setFormState({...formState, message: e.target.value})}
                className="w-full bg-slate-900/50 border border-slate-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 p-4 rounded-xl text-slate-100 transition-all outline-none resize-none"
                placeholder="How can I help you?"
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={status === 'loading'}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl transition-all shadow-xl shadow-indigo-500/20 active:scale-[0.98] disabled:opacity-70 flex items-center justify-center gap-2"
            >
              {status === 'loading' ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i> Sending...
                </>
              ) : status === 'success' ? (
                <>
                  <i className="fas fa-check-circle"></i> Sent Successfully!
                </>
              ) : (
                <>
                  Send Message <i className="fas fa-paper-plane"></i>
                </>
              )}
            </button>
            
            {status === 'success' && (
              <p className="text-green-400 text-center text-sm font-medium animate-fade-in">
                Thank you! I'll get back to you as soon as possible.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
