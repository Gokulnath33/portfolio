import React, { useState } from 'react';
import { 
  Code2, 
  FileCode, 
  Cpu, 
  Database, 
  GitFork, 
  Layers, 
  Table, 
  Binary, 
  BrainCircuit, 
  BarChart3, 
  Sliders, 
  Globe, 
  GitBranch, 
  Terminal, 
  BookOpenCheck, 
  Palette, 
  Video, 
  Sparkles, 
  Users, 
  CheckCircle,
  Filter
} from 'lucide-react';
import { Figma } from './BrandIcons';
import { skillsCategoryData } from '../data/portfolioData';

// Icon Map helper
const iconMap = {
  Code2, FileCode, Cpu, Database, GitFork, Layers,
  Table, Binary, BrainCircuit, BarChart3, Sliders,
  Globe, GitBranch, Terminal, BookOpenCheck,
  Palette, Video, Sparkles, Users, Figma
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'Programming & Core CS', 'Machine Learning & Data Analytics', 'Web & Developer Tools', 'Design & Soft Competencies'];

  const filteredCategories = activeTab === 'All' 
    ? skillsCategoryData 
    : skillsCategoryData.filter(cat => cat.category === activeTab);

  return (
    <section id="skills" className="section-padding relative">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="section-subtitle">
            <BrainCircuit className="w-4 h-4 text-[var(--accent-violet)]" />
            <span>Technical & Soft Mastery</span>
          </div>
          <h2 className="section-title">
            Skills & <span className="emerald-text">Competencies</span>
          </h2>
          <span className="section-title-bar" />
          <p className="section-description">
            A comprehensive overview of my technical stack in AI, data analytics, software engineering, and visual design.
          </p>

          {/* Interactive Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto mt-6 p-2 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] backdrop-blur-md">
            {tabs.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-[var(--gradient-brand)] text-white shadow-md font-semibold'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[rgba(255,255,255,0.05)]'
                }`}
              >
                {tab === 'All' ? '⚡ All Categories' : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((catGroup, catIdx) => (
            <div 
              key={catIdx} 
              className="glass-card p-6 sm:p-8 rounded-3xl border border-[var(--border-color)] hover:border-[var(--accent-violet)] transition-all"
            >
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[var(--border-color)]">
                <h3 className="text-xl font-bold font-heading text-[var(--text-main)] flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[rgba(139,92,246,0.15)] text-[var(--accent-violet)] flex items-center justify-center border border-[rgba(139,92,246,0.3)]">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span>{catGroup.category}</span>
                </h3>
                <span className="text-xs font-mono text-[var(--accent-cyan)] bg-[rgba(6,182,212,0.1)] px-3 py-1 rounded-full border border-[rgba(6,182,212,0.2)]">
                  {catGroup.skills.length} Skills
                </span>
              </div>

              <div className="flex flex-col gap-5">
                {catGroup.skills.map((skill, skillIdx) => {
                  const IconComponent = iconMap[skill.icon] || Code2;
                  return (
                    <div key={skillIdx} className="group">
                      <div className="flex items-center justify-between text-sm mb-1.5">
                        <div className="flex items-center gap-2.5">
                          <IconComponent className="w-4 h-4 text-[var(--accent-cyan)] group-hover:text-[var(--accent-pink)] transition-colors" />
                          <span className="font-semibold text-[var(--text-main)] font-heading">{skill.name}</span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[rgba(255,255,255,0.05)] text-[var(--text-muted)] border border-[var(--border-color)]">
                            {skill.tag}
                          </span>
                        </div>
                        <span className="font-mono text-xs font-bold text-[var(--accent-cyan)]">{skill.level}%</span>
                      </div>

                      {/* Animated Skill Level Meter */}
                      <div className="w-full h-2.5 rounded-full bg-[rgba(255,255,255,0.06)] overflow-hidden border border-[var(--border-color)] p-0.5">
                        <div 
                          className="h-full rounded-full bg-[var(--gradient-brand)] group-hover:bg-[var(--gradient-vibrant)] transition-all duration-700 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Skill Highlights Pills */}
        <div className="mt-12 p-6 rounded-2xl glass-card border border-[var(--border-glow)] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[rgba(16,185,129,0.15)] text-[var(--accent-emerald)] flex items-center justify-center border border-[rgba(16,185,129,0.3)]">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-[var(--text-main)]">Ready for Immediate Deployment</h4>
              <p className="text-xs text-[var(--text-muted)]">Proficient with Git workflows, ML evaluation, and responsive full-stack web builds.</p>
            </div>
          </div>
          <a href="#projects" className="btn-secondary text-xs !py-2.5 !px-5">
            <span>See Applied Projects</span>
          </a>
        </div>

      </div>
    </section>
  );
}
