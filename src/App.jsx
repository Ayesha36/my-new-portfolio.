import React, { useState } from 'react';

export default function App() {
  // Simple interactive state to filter projects dynamically
  const [projectFilter, setProjectFilter] = useState('all');

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans antialiased scroll-smooth">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-gray-50/80 max-w-5xl mx-auto px-6 py-6 flex justify-between items-center border-b border-gray-100/60 transition-all">
        <h1 className="text-xl font-bold tracking-tight text-neutral-900 hover:scale-105 transition-transform duration-200 cursor-pointer">
          Ayesha
        </h1>
        <nav className="space-x-6 flex items-center">
          <a href="#portfolio" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors">Works</a>
          <a href="#experience" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors">Trajectory</a>
          <a href="https://github.com/Ayesha36" target="_blank" rel="noreferrer" className="text-sm font-medium text-neutral-700 hover:text-neutral-900 transition-colors">GitHub</a>
          <a 
            href="mailto:ayesha.official@example.com" 
            className="bg-neutral-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-neutral-800 hover:shadow-md active:scale-95 transition"
          >
            Let's Talk
          </a>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-6 py-8">
        
        {/* HERO SECTION */}
        <section className="mb-12 py-12 md:py-16 border-b border-gray-100">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full text-xs font-medium text-emerald-800 shadow-sm animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Available for Specialized Technical Roles
            </div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-tight text-neutral-950 bg-gradient-to-r from-neutral-950 via-neutral-800 to-neutral-700 bg-clip-text text-transparent">
              Engineering intelligent systems & minimalist interfaces.
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl">
              Hi, I'm <strong className="text-neutral-950 font-semibold">Ayesha</strong>. I am a professional AI Generative Developer and Web Programmer. I build high-performance full-stack web applications, offline-first production dashboards, and advanced prompt engineering environments.
            </p>
          </div>
        </section>

        {/* CORE SKILLS SECTION */}
        <section className="mb-12 py-12 border-b border-gray-100">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-purple-600 bg-purple-50 px-2 py-1 rounded">Expertise Matrix</span>
            <h3 className="text-3xl font-bold mt-2 tracking-tight text-neutral-950">Technical Arsenal</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* AI Card */}
            <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-purple-200 transition-all duration-300 group">
              <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-sm mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">AI</div>
              <h4 className="font-bold mb-2 text-neutral-950">Generative AI</h4>
              <p className="text-gray-500 text-xs leading-relaxed">Advanced Prompt Engineering, context manipulation matrix, custom generative tools, and intelligent workflows.</p>
            </div>

            {/* JS Card */}
            <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-blue-200 transition-all duration-300 group">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">JS</div>
              <h4 className="font-bold mb-2 text-neutral-950">Modern Frontend</h4>
              <p className="text-gray-500 text-xs leading-relaxed">React.js, VueJS, ecosystem structuring, context management, hooks, and responsive minimalist UI architecture.</p>
            </div>

            {/* PY Card */}
            <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-emerald-200 transition-all duration-300 group">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-sm mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">PY</div>
              <h4 className="font-bold mb-2 text-neutral-950">Python & Backend</h4>
              <p className="text-gray-500 text-xs leading-relaxed">Scripting pipelines, data handlers, custom matrices, algorithm modeling, SQL, and database synchronization frameworks.</p>
            </div>

            {/* UX Card */}
            <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-amber-200 transition-all duration-300 group">
              <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-sm mb-4 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">UX</div>
              <h4 className="font-bold mb-2 text-neutral-950">UI/UX Design</h4>
              <p className="text-gray-500 text-xs leading-relaxed">Figma layout construction, high-fidelity prototypes, asset processing via Photoshop & Illustrator.</p>
            </div>
          </div>
        </section>

        {/* PROJECTS PORTFOLIO */}
        <section id="portfolio" className="mb-12 py-12 border-b border-gray-100 scroll-mt-24">
          <div className="mb-8 flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-2 py-1 rounded">Engineering & Design</span>
              <h3 className="text-3xl font-bold mt-2 tracking-tight text-neutral-950">Selected Works</h3>
            </div>
            
            {/* Interactive Functional Filter Tabs */}
            <div className="flex bg-gray-100 p-1 rounded-xl text-xs font-medium self-start sm:self-auto">
              <button 
                onClick={() => setProjectFilter('all')}
                className={`px-3 py-1.5 rounded-lg transition-all ${projectFilter === 'all' ? 'bg-white text-neutral-950 shadow-sm' : 'text-gray-500 hover:text-neutral-950'}`}
              >
                All
              </button>
              <button 
                onClick={() => setProjectFilter('dev')}
                className={`px-3 py-1.5 rounded-lg transition-all ${projectFilter === 'dev' ? 'bg-white text-neutral-950 shadow-sm' : 'text-gray-500 hover:text-neutral-950'}`}
              >
                Development
              </button>
              <button 
                onClick={() => setProjectFilter('ui/ux')}
                className={`px-3 py-1.5 rounded-lg transition-all ${projectFilter === 'ui/ux' ? 'bg-white text-neutral-950 shadow-sm' : 'text-gray-500 hover:text-neutral-950'}`}
              >
                UI/UX
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 transition-all duration-300">
            {/* Flagship Production Project */}
            {(projectFilter === 'all' || projectFilter === 'dev') && (
              <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md hover:border-neutral-300 transition group flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-neutral-900 text-white text-[10px] font-mono tracking-wider px-2 py-0.5 rounded uppercase">Flagship</span>
                    <span className="text-xs font-medium text-neutral-400">Production Offline Software</span>
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-neutral-950 group-hover:text-blue-600 transition-colors">Shop Inventory Management Application</h4>
                  <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                    A high-utility, cross-platform production system configured for lightning-fast localized searches, IndexedDB persistent caches, and resilient offline synchronization.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 text-[11px] font-mono text-neutral-500">
                  <span className="bg-neutral-50 border border-gray-100 px-2 py-1 rounded">React.js</span>
                  <span className="bg-neutral-50 border border-gray-100 px-2 py-1 rounded">IndexedDB</span>
                  <span className="bg-neutral-50 border border-gray-100 px-2 py-1 rounded">Node.js</span>
                </div>
              </div>
            )}

            {/* AgroSights */}
            {(projectFilter === 'all' || projectFilter === 'dev') && (
              <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md hover:border-emerald-200 transition group flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-mono tracking-wider px-2 py-0.5 rounded uppercase">Live Portal</span>
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-neutral-950 group-hover:text-emerald-600 transition-colors">AgroSights Portal</h4>
                  <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                    An advanced directory built for custom agricultural analytics visualization, featuring streamlined client discovery mechanisms and highly reactive visual elements.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 text-[11px] font-mono text-neutral-500">
                  <span className="bg-neutral-50 border border-gray-100 px-2 py-1 rounded">JavaScript</span>
                  <span className="bg-neutral-50 border border-gray-100 px-2 py-1 rounded">Tailwind CSS</span>
                  <span className="bg-neutral-50 border border-gray-100 px-2 py-1 rounded">API Integration</span>
                </div>
              </div>
            )}

            {/* Legacy Apps Matrix */}
            {(projectFilter === 'all' || projectFilter === 'dev') && (
              <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Historical Full-Stack Applications</span>
                  <div className="mt-4 space-y-4">
                    <div className="p-2 rounded-xl hover:bg-gray-50 transition-colors">
                      <h5 className="font-bold text-sm text-neutral-950">Diary App</h5>
                      <p className="text-neutral-500 text-xs">React application complete with local storage engines, theme toggles, and tagging systems.</p>
                    </div>
                    <div className="p-2 rounded-xl hover:bg-gray-50 transition-colors">
                      <h5 className="font-bold text-sm text-neutral-950">Online Examination Portal</h5>
                      <p className="text-neutral-500 text-xs">Fast-loading testing suite utilizing structured HTML, CSS, JavaScript, jQuery, and server-side PHP matrices.</p>
                    </div>
                    <div className="p-2 rounded-xl hover:bg-gray-50 transition-colors">
                      <h5 className="font-bold text-sm text-neutral-950">MyFlix Engine</h5>
                      <p className="text-neutral-500 text-xs">Dynamic content streaming interface pulling custom movie metadata lists dynamically from TMDB APIs.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Legacy UI/UX Highlights */}
            {(projectFilter === 'all' || projectFilter === 'ui/ux') && (
              <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md hover:border-amber-200 transition flex flex-col justify-between group">
                <div>
                  <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">UI/UX Design Systems</span>
                  <h4 className="text-lg font-bold mt-3 mb-2 text-neutral-950 group-hover:text-amber-600 transition-colors">Keep it Green App Case Study</h4>
                  <p className="text-neutral-500 text-xs leading-relaxed">
                    A high-fidelity mobile application layout system designed exclusively inside Figma and Photoshop, detailing holistic user workflows and minimalist navigation screens.
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* EDUCATION & EXPERIENCES SECTION */}
        <section id="experience" className="mb-12 py-12 border-b border-gray-100 scroll-mt-24">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Education column */}
            <div>
              <h4 className="text-xl font-bold mb-8 tracking-tight flex items-center gap-2 text-neutral-950">
                <span className="w-1.5 h-5 bg-neutral-950 rounded-full"></span>
                Academic Foundation
              </h4>
              <div className="relative border-l-2 border-neutral-200 pl-6 space-y-8">
                <div className="relative group">
                  <div className="absolute -left-[33px] top-1.5 w-4 h-4 rounded-full border-4 border-white bg-neutral-900 group-hover:bg-purple-600 transition-colors shadow-sm"></div>
                  <span className="text-xs font-mono font-bold text-neutral-400">2020 — 2024</span>
                  <h5 className="font-bold text-base text-neutral-950 mt-0.5">Bachelor of Computer Science (BSCS)</h5>
                  <p className="text-neutral-500 text-xs">Government College University Faisalabad</p>
                  <p className="text-emerald-600 text-xs mt-1 font-semibold bg-emerald-50 inline-block px-2 py-0.5 rounded">Graduated with 3.48 / 4.00 CGPA</p>
                </div>
                <div className="relative group">
                  <div className="absolute -left-[33px] top-1.5 w-4 h-4 rounded-full border-4 border-white bg-neutral-300 group-hover:bg-neutral-400 transition-colors shadow-sm"></div>
                  <span className="text-xs font-mono font-bold text-neutral-400">2018 — 2020</span>
                  <p className="font-bold text-sm text-neutral-950 mt-0.5">I.C.S (Math, Physics, Computer)</p>
                </div>
                <div className="relative group">
                  <div className="absolute -left-[33px] top-1.5 w-4 h-4 rounded-full border-4 border-white bg-neutral-300 group-hover:bg-neutral-400 transition-colors shadow-sm"></div>
                  <span className="text-xs font-mono font-bold text-neutral-400">2016 — 2018</span>
                  <p className="font-bold text-sm text-neutral-950 mt-0.5">Matriculation (Bio Science)</p>
                </div>
              </div>
            </div>

            {/* Experience column */}
            <div>
              <h4 className="text-xl font-bold mb-8 tracking-tight flex items-center gap-2 text-neutral-950">
                <span className="w-1.5 h-5 bg-neutral-950 rounded-full"></span>
                Professional Trajectory
              </h4>
              <div className="relative border-l-2 border-neutral-200 pl-6 space-y-8">
                <div className="relative group">
                  <div className="absolute -left-[33px] top-1.5 w-4 h-4 rounded-full border-4 border-white bg-neutral-900 group-hover:bg-blue-600 transition-colors shadow-sm"></div>
                  <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Active Contracts</span>
                  <h5 className="font-bold text-base text-neutral-950 mt-1.5">Freelancer / AI System Architect</h5>
                  <p className="text-neutral-500 text-xs">Upwork & Fiverr Global Ecosystems</p>
                  <p className="text-neutral-600 text-xs mt-2 leading-relaxed">
                    Deploying highly specialized full-stack products, customized dashboards, prompt tuning pipelines, and integrated data systems for clients globally.
                  </p>
                </div>
                <div className="relative group">
                  <div className="absolute -left-[33px] top-1.5 w-4 h-4 rounded-full border-4 border-white bg-neutral-300 group-hover:bg-neutral-400 transition-colors shadow-sm"></div>
                  <span className="text-xs font-mono font-bold text-neutral-400">Nov 2021</span>
                  <p className="font-bold text-sm text-neutral-950 mt-0.5">Front-end Developer Intern</p>
                </div>
                <div className="relative group">
                  <div className="absolute -left-[33px] top-1.5 w-4 h-4 rounded-full border-4 border-white bg-neutral-300 group-hover:bg-neutral-400 transition-colors shadow-sm"></div>
                  <span className="text-xs font-mono font-bold text-neutral-400">Historical Foundations</span>
                  <p className="font-bold text-sm text-neutral-950 mt-0.5">WordPress & Web Creator</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* MINIMALIST CONTACT PANEL */}
        <section id="contact" className="py-12 scroll-mt-24">
          <div className="bg-neutral-950 text-white p-8 md:p-12 rounded-3xl relative overflow-hidden shadow-xl group">
            <div className="absolute right-0 bottom-0 translate-x-10 translate-y-10 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-700">
              <svg className="w-80 h-80" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12z"/></svg>
            </div>
            
            <div className="max-w-xl space-y-6 relative z-10">
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">Connect & Collaborate</span>
              <h3 className="text-3xl md:text-4xl font-black tracking-tight leading-none">Let's build something exceptional.</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Whether you need a dedicated full-stack developer to ship a production-grade application or an expert prompt engineer to upgrade your platform workflows, let's talk.
              </p>
              <div className="pt-4">
                <a 
                  href="mailto:ayesha.official@example.com" 
                  className="inline-block text-lg font-bold bg-white text-neutral-950 px-6 py-3 rounded-xl hover:bg-gray-100 hover:shadow-lg active:scale-95 transition duration-200"
                >
                  ayeshaabeera67@gmail.com
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-6 py-8 border-t border-gray-100 bg-gray-50 text-xs text-neutral-500">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <span>&copy; {new Date().getFullYear()} Ayesha. All Rights Reserved.</span>
          <a href="https://github.com/Ayesha36" target="_blank" rel="noreferrer" className="hover:text-neutral-900 transition flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.48 text-0-1.714-.006-6.26-.01-12.29-2.784.603-3.371-1.34-3.371-1.34-.456-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
            GitHub Profile
          </a>
        </div>
      </footer>

    </div>
  );
}