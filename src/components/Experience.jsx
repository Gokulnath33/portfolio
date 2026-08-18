import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2 
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="section-subtitle">
            <Briefcase className="w-4 h-4 text-[var(--accent-emerald)]" />
            <span>Professional Journey</span>
          </div>
          <h2 className="section-title">
            Work & <span className="fire-text">Experience</span>
          </h2>
          <span className="section-title-bar" />
          <p className="section-description">
            Industry exposure through web development internships, software engineering roles, and real-world project contributions.
          </p>
        </div>

        {/* Internship Experience */}
        <div>
          <h3 className="text-2xl font-bold font-heading flex items-center gap-3 text-[var(--text-main)] mb-6">
            <div className="w-9 h-9 rounded-xl bg-[rgba(16,185,129,0.15)] text-[var(--accent-emerald)] flex items-center justify-center border border-[rgba(16,185,129,0.3)]">
              <Briefcase className="w-5 h-5" />
            </div>
            Work & Internship Experience
          </h3>

          <div className="flex flex-col gap-6">
            {experienceData.map((exp, idx) => (
              <div key={idx} className="glass-card p-6 sm:p-8 rounded-3xl border border-[var(--border-glow)] hover:border-[var(--accent-emerald)] transition-all">
                
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="badge badge-emerald">{exp.type}</span>
                  <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] font-mono">
                    <Calendar className="w-3.5 h-3.5 text-[var(--accent-emerald)]" />
                    <span>Duration: {exp.duration} ({exp.period})</span>
                  </div>
                </div>

                <h4 className="text-2xl font-bold font-heading text-[var(--text-main)] mb-1">
                  {exp.role}
                </h4>

                <div className="flex items-center gap-3 text-sm text-[var(--accent-cyan)] font-medium mb-4">
                  <span className="font-semibold">{exp.organisation}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-[var(--text-muted)] text-xs">
                    <MapPin className="w-3.5 h-3.5 text-[var(--accent-pink)]" />
                    {exp.location}
                  </span>
                </div>

                <div className="flex flex-col gap-3 pt-4 border-t border-[var(--border-color)]">
                  <span className="text-xs uppercase font-mono tracking-wider text-[var(--text-dim)]">Key Responsibilities & Achievements:</span>
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2.5 text-sm text-[var(--text-muted)] leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[var(--accent-emerald)] shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

