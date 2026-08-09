import React, { useState } from 'react';
import { 
  Briefcase, 
  Award, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Monitor, 
  Cpu, 
  Code, 
  Download,
  ExternalLink,
  Sparkles,
  FileCheck,
  Archive,
  Eye,
  Check
} from 'lucide-react';
import { experienceData, certificationsData, personalInfo } from '../data/portfolioData';

// Cert icon map
const certIconMap = {
  Monitor,
  Cpu,
  Code,
  Sparkles,
  Award,
  Briefcase
};

export default function Experience() {
  const [activeCertCategory, setActiveCertCategory] = useState('All');
  const [downloadedCert, setDownloadedCert] = useState(null);

  const certCategories = ['All', 'NPTEL & Academics', 'AI & Cloud', 'Industry & Enterprise'];

  const filteredCerts = activeCertCategory === 'All'
    ? certificationsData
    : certificationsData.filter(c => c.category === activeCertCategory);

  const handleDownload = (certId) => {
    setDownloadedCert(certId);
    setTimeout(() => setDownloadedCert(null), 2500);
  };

  return (
    <section id="experience" className="section-padding relative">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="section-subtitle">
            <Briefcase className="w-4 h-4 text-[var(--accent-emerald)]" />
            <span>Work & Verified Milestones</span>
          </div>
          <h2 className="section-title">
            Experience & <span className="fire-text">Certifications</span>
          </h2>
          <span className="section-title-bar" />
          <p className="section-description">
            Industry exposure through web development internships and verified national certificates from NPTEL, Microsoft, Google, TCS iON, and IIT Bombay.
          </p>
        </div>

        {/* Internship Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold font-heading flex items-center gap-3 text-[var(--text-main)] mb-6">
            <div className="w-9 h-9 rounded-xl bg-[rgba(16,185,129,0.15)] text-[var(--accent-emerald)] flex items-center justify-center border border-[rgba(16,185,129,0.3)]">
              <Briefcase className="w-5 h-5" />
            </div>
            Work & Internship Experience
          </h3>

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

        {/* Certifications Section Header */}
        <div id="certificates" className="pt-8 border-t border-[var(--border-color)]">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <h3 className="text-2xl font-bold font-heading flex items-center gap-3 text-[var(--text-main)]">
              <div className="w-9 h-9 rounded-xl bg-[rgba(236,72,153,0.15)] text-[var(--accent-pink)] flex items-center justify-center border border-[rgba(236,72,153,0.3)]">
                <Award className="w-5 h-5" />
              </div>
              Verified Certificates & Awards
            </h3>

            {/* Global ZIP Bundle Download CTA */}
            <a
              href={personalInfo.zipBundleUrl}
              download="Gokulnath_M_Certificates_Bundle.zip"
              className="btn-primary text-xs !py-3 !px-5 shadow-vibrant flex items-center gap-2 group shrink-0"
            >
              <Archive className="w-4 h-4 text-amber-300 group-hover:scale-110 transition-transform" />
              <span>Download All Certificates Bundle (.ZIP)</span>
            </a>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 p-2 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] max-w-2xl">
            {certCategories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCertCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                  activeCertCategory === cat
                    ? 'bg-[var(--gradient-brand)] text-white shadow-md font-semibold'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[rgba(255,255,255,0.05)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCerts.map((cert) => {
              const CertIcon = certIconMap[cert.icon] || Award;
              return (
                <div 
                  key={cert.id} 
                  className="glass-card p-6 rounded-3xl border border-[var(--border-color)] hover:border-[var(--accent-pink)] transition-all flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Glowing Accent Top Bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-pink)] opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="badge badge-violet text-[10px]">{cert.tag}</span>
                      <span className="text-xs font-mono font-bold text-[var(--accent-emerald)] bg-[rgba(16,185,129,0.1)] px-2.5 py-0.5 rounded-full border border-[rgba(16,185,129,0.2)]">
                        {cert.score}
                      </span>
                    </div>

                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 rounded-2xl bg-[rgba(255,255,255,0.04)] border border-[var(--border-color)] flex items-center justify-center text-[var(--accent-pink)] group-hover:scale-110 transition-transform shrink-0">
                        <CertIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-base font-heading text-[var(--text-main)] group-hover:text-[var(--accent-pink)] transition-colors leading-snug">
                          {cert.title}
                        </h4>
                        <div className="text-xs font-mono text-[var(--accent-cyan)] mt-0.5">
                          {cert.issuer}
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-6">
                      {cert.description}
                    </p>
                  </div>

                  {/* Card Action Buttons */}
                  <div className="pt-4 border-t border-[var(--border-color)] flex items-center justify-between gap-2">
                    <a
                      href={cert.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-pill text-[11px] hover:text-[var(--accent-cyan)] hover:border-[var(--accent-cyan)] transition-colors"
                      title="View PDF Certificate in new tab"
                    >
                      <Eye className="w-3.5 h-3.5 text-[var(--accent-cyan)]" />
                      <span>View PDF</span>
                    </a>

                    <a
                      href={cert.fileUrl}
                      download
                      onClick={() => handleDownload(cert.id)}
                      className="btn-primary text-xs !py-1.5 !px-3"
                      title="Download PDF Certificate"
                    >
                      {downloadedCert === cert.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-300" />
                          <span>Downloaded</span>
                        </>
                      ) : (
                        <>
                          <Download className="w-3.5 h-3.5" />
                          <span>Download</span>
                        </>
                      )}
                    </a>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Bottom ZIP Bundle Banner */}
          <div className="mt-12 p-8 rounded-3xl glass-card border border-[var(--border-glow)] flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden bg-gradient-to-r from-[rgba(6,182,212,0.1)] via-[rgba(99,102,241,0.1)] to-[rgba(236,72,153,0.1)]">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[var(--gradient-brand)] text-white flex items-center justify-center shadow-lg shrink-0">
                <FileCheck className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-xl font-bold font-heading text-[var(--text-main)]">
                  Need all 54+ Certificate Documents & Transcripts?
                </h4>
                <p className="text-xs text-[var(--text-muted)] mt-1">
                  Download the complete verified ZIP package containing Infosys Springboard, TCS iON, NPTEL, Microsoft AI, and Google certs.
                </p>
              </div>
            </div>

            <a
              href={personalInfo.zipBundleUrl}
              download="Gokulnath_M_Certificates_Bundle.zip"
              className="btn-primary text-sm !py-3.5 !px-6 shadow-vibrant shrink-0"
            >
              <Download className="w-4 h-4 text-amber-300" />
              <span>Download Full Certificate Bundle (26 MB .ZIP)</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
