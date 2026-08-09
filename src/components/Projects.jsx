import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Layers, 
  Cpu, 
  Sparkles, 
  Utensils, 
  X, 
  CheckCircle2, 
  ArrowRight,
  Activity,
  Zap
} from 'lucide-react';
import { Github } from './BrandIcons';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [simulatedMatch, setSimulatedMatch] = useState(false);
  const [matchStatus, setMatchStatus] = useState(null);

  const categories = ['All', 'Java / Systems', 'Full-Stack / AI', 'AI & ML'];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  const handleSimulateMatching = () => {
    setSimulatedMatch(true);
    setMatchStatus('Analyzing surplus food inventory and calculating geographical proximity...');
    setTimeout(() => {
      setMatchStatus('PriorityQueue matched: Restaurant surplus (25 meals, 1.2km) -> Annai NGO Shelter. Decay Risk: VERY LOW.');
      setSimulatedMatch(false);
    }, 1400);
  };

  return (
    <section id="projects" className="section-padding relative">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="section-subtitle">
            <FolderGit2 className="w-4 h-4 text-[var(--accent-pink)]" />
            <span>Featured Software Creations</span>
          </div>
          <h2 className="section-title">
            Projects & <span className="gradient-text">Innovations</span>
          </h2>
          <p className="section-description">
            Explore my engineering projects combining multithreaded systems, data analytics algorithms, and full-stack web solutions.
          </p>

          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto mt-6 p-2 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)]">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  activeFilter === cat
                    ? 'bg-[var(--gradient-brand)] text-white shadow-md font-semibold'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[rgba(255,255,255,0.05)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className={`glass-card p-6 rounded-3xl border flex flex-col justify-between relative overflow-hidden group transition-all ${
                project.featured 
                  ? 'border-[var(--border-glow)] hover:border-[var(--accent-cyan)] shadow-xl' 
                  : 'border-[var(--border-color)] hover:border-[var(--accent-violet)]'
              }`}
            >
              {/* Top Card Header */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="badge badge-cyan">{project.category}</span>
                  {project.featured && (
                    <span className="badge badge-pink flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> Featured Project
                    </span>
                  )}
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-2xl font-bold font-heading text-[var(--text-main)] mb-1 group-hover:text-[var(--accent-cyan)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-[var(--accent-violet)] mb-3">
                  {project.subtitle}
                </p>

                <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Tools Tags */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tools.map((tool, idx) => (
                    <span 
                      key={idx}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-[rgba(255,255,255,0.04)] border border-[var(--border-color)] text-[var(--text-muted)]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Card Action Bar */}
                <div className="pt-4 border-t border-[var(--border-color)] flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="btn-primary text-xs !py-2 !px-4"
                  >
                    <span>Inspect Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-[rgba(255,255,255,0.05)] text-[var(--text-muted)] hover:text-white hover:bg-[var(--accent-violet)] transition-all"
                    title="View Source on GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Modal Overlay for Deep-Dive Details */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
            <div className="glass-card max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 rounded-3xl border border-[var(--border-glow)] relative shadow-2xl">
              
              {/* Close Button */}
              <button
                onClick={() => {
                  setSelectedProject(null);
                  setMatchStatus(null);
                }}
                className="absolute top-6 right-6 p-2 rounded-full bg-[rgba(255,255,255,0.1)] text-[var(--text-muted)] hover:text-white hover:bg-rose-500 transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="badge badge-cyan">{selectedProject.category}</span>
                <span className="text-xs font-mono text-[var(--text-muted)]">ID: {selectedProject.id}</span>
              </div>

              <h3 className="text-3xl font-extrabold font-heading text-[var(--text-main)] mb-1">
                {selectedProject.title}
              </h3>
              <p className="text-sm font-mono text-[var(--accent-cyan)] mb-4">
                {selectedProject.subtitle}
              </p>

              <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              {/* Highlights List */}
              <div className="mb-6">
                <h4 className="text-sm font-bold font-heading text-[var(--text-main)] uppercase tracking-wider mb-3">
                  Key Technical Highlights
                </h4>
                <div className="flex flex-col gap-2">
                  {selectedProject.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                      <CheckCircle2 className="w-4 h-4 text-[var(--accent-emerald)] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architecture & Workflow Interactive Simulator (For Java Mini Project) */}
              {selectedProject.architecture && (
                <div className="mb-6 p-5 rounded-2xl bg-[rgba(0,0,0,0.3)] border border-[var(--border-color)]">
                  <h4 className="text-sm font-bold font-heading text-[var(--accent-cyan)] mb-3 flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-[var(--accent-cyan)]" />
                      Architecture & Priority Queue Workflow
                    </span>
                    <button
                      onClick={handleSimulateMatching}
                      disabled={simulatedMatch}
                      className="text-xs px-3 py-1 rounded-full bg-[var(--gradient-brand)] text-white hover:opacity-90 transition-opacity font-sans flex items-center gap-1 disabled:opacity-50"
                    >
                      <Zap className="w-3 h-3" />
                      {simulatedMatch ? 'Running Worker Thread...' : 'Simulate Match'}
                    </button>
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                    {selectedProject.architecture.map((arch, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-[rgba(255,255,255,0.03)] border border-[var(--border-color)] text-xs">
                        <div className="font-bold text-[var(--text-main)] mb-1 font-mono">{arch.step}</div>
                        <div className="text-[var(--text-muted)]">{arch.detail}</div>
                      </div>
                    ))}
                  </div>

                  {matchStatus && (
                    <div className="p-3 rounded-xl bg-[rgba(6,182,212,0.1)] border border-[rgba(6,182,212,0.3)] text-xs font-mono text-[var(--accent-cyan)] flex items-start gap-2 animate-fadeIn">
                      <Activity className="w-4 h-4 shrink-0 animate-pulse text-[var(--accent-cyan)]" />
                      <span>{matchStatus}</span>
                    </div>
                  )}
                </div>
              )}

              {/* Modal Footer Links */}
              <div className="pt-4 border-t border-[var(--border-color)] flex items-center justify-between">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs"
                >
                  <Github className="w-4 h-4" />
                  <span>View Repository on GitHub</span>
                </a>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="btn-secondary text-xs"
                >
                  Close Window
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
