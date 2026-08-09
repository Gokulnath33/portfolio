import React from 'react';
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  User, 
  Globe, 
  Palette, 
  Video, 
  Code, 
  Sparkles, 
  CheckCircle2,
  Calendar,
  Building2
} from 'lucide-react';
import { personalInfo, educationData } from '../data/portfolioData';

export default function About() {
  const creativeHobbies = [
    { name: "UI/UX Designing", icon: Palette, color: "var(--accent-pink)", desc: "Figma wireframing, component design systems, and responsive prototype creation." },
    { name: "Graphic Designing", icon: Sparkles, color: "var(--accent-violet)", desc: "Visual storytelling, brand posters, infographics, and typography layout." },
    { name: "Video Editing", icon: Video, color: "var(--accent-cyan)", desc: "Post-production editing, motion graphics, and content workflow production." },
    { name: "Open Source", icon: Code, color: "var(--accent-emerald)", desc: "Community code contributions, collaborative repositories, and documentation." }
  ];

  return (
    <section id="about" className="section-padding relative">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="section-subtitle">
            <User className="w-4 h-4" />
            <span>Discover My Background</span>
          </div>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span> & Academic Journey
          </h2>
          <p className="section-description">
            Passionate about transforming data into intelligence and code into engaging web user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Education Timeline */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h3 className="text-2xl font-bold font-heading flex items-center gap-3 text-[var(--text-main)] mb-2">
              <div className="w-9 h-9 rounded-xl bg-[rgba(6,182,212,0.15)] text-[var(--accent-cyan)] flex items-center justify-center border border-[rgba(6,182,212,0.3)]">
                <GraduationCap className="w-5 h-5" />
              </div>
              Academic Qualification
            </h3>

            <div className="relative pl-6 border-l-2 border-[var(--border-color)] flex flex-col gap-8">
              {educationData.map((edu, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[var(--bg-primary)] border-2 border-[var(--accent-cyan)] group-hover:bg-[var(--accent-cyan)] group-hover:scale-125 transition-all duration-300" />

                  <div className="glass-card p-6 rounded-2xl border border-[var(--border-color)] group-hover:border-[var(--accent-cyan)] transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="badge badge-cyan">{edu.badge}</span>
                      <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] font-mono">
                        <Calendar className="w-3.5 h-3.5 text-[var(--accent-cyan)]" />
                        <span>{edu.year}</span>
                      </div>
                    </div>

                    <h4 className="text-xl font-bold font-heading text-[var(--text-main)] mb-1">
                      {edu.degree}
                    </h4>

                    <div className="flex items-center gap-2 text-sm text-[var(--accent-violet)] font-medium mb-3">
                      <Building2 className="w-4 h-4" />
                      <span>{edu.institution}</span>
                    </div>

                    <p className="text-sm text-[var(--text-muted)] mb-4 leading-relaxed">
                      {edu.highlight}
                    </p>

                    <div className="pt-3 border-t border-[var(--border-color)] flex items-center justify-between">
                      <span className="text-xs text-[var(--text-dim)] uppercase font-mono tracking-wider">Academic Score</span>
                      <span className="text-sm font-bold text-[var(--accent-emerald)] font-mono bg-[rgba(16,185,129,0.1)] px-3 py-1 rounded-full border border-[rgba(16,185,129,0.2)]">
                        {edu.score}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Key Attributes & Hobbies */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Quick Bio Summary Card */}
            <div className="glass-card p-6 rounded-3xl border border-[var(--border-glow)] relative overflow-hidden">
              <h3 className="text-xl font-bold font-heading mb-3 text-[var(--text-main)] flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[var(--accent-amber)]" />
                <span>Profile Snapshot</span>
              </h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
                {personalInfo.summary}
              </p>

              {/* Languages Spoken */}
              <div className="pt-4 border-t border-[var(--border-color)]">
                <span className="text-xs text-[var(--text-dim)] uppercase font-mono tracking-wider block mb-2">
                  Languages Known:
                </span>
                <div className="flex flex-wrap gap-2">
                  {personalInfo.languages.map((lang, idx) => (
                    <span key={idx} className="glass-pill text-xs !py-1 text-[var(--accent-cyan)]">
                      <Globe className="w-3 h-3 text-[var(--accent-cyan)]" />
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Creative Interests Grid */}
            <div>
              <h3 className="text-lg font-bold font-heading text-[var(--text-main)] mb-4 flex items-center gap-2">
                <Palette className="w-5 h-5 text-[var(--accent-pink)]" />
                Creative & Technical Interests
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {creativeHobbies.map((hobby, idx) => {
                  const Icon = hobby.icon;
                  return (
                    <div 
                      key={idx} 
                      className="glass-card p-4 rounded-2xl border border-[var(--border-color)] hover:border-[var(--accent-cyan)] transition-all flex flex-col gap-2 group"
                    >
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-[rgba(255,255,255,0.05)] group-hover:scale-110 transition-transform" style={{ color: hobby.color }}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="font-bold text-sm font-heading text-[var(--text-main)]">
                        {hobby.name}
                      </h4>
                      <p className="text-xs text-[var(--text-muted)] leading-normal">
                        {hobby.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
