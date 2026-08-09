import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Copy, 
  Check, 
  Sparkles,
  Loader2,
  Info
} from 'lucide-react';
import { Linkedin, Github, TwitterX, LeetCode, HackerRank } from './BrandIcons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';
import { sendContactEmail, EMAILJS_CONFIG } from '../config/emailjs';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);
  const [copiedField, setCopiedField] = useState(null);
  const [showConfigModal, setShowConfigModal] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedField(type);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setToast({
        type: 'error',
        text: 'Please fill in all required fields (Name, Email, and Message).'
      });
      setTimeout(() => setToast(null), 4000);
      return;
    }

    setLoading(true);
    setToast(null);

    try {
      const result = await sendContactEmail(formData);

      if (result.success) {
        setToast({
          type: 'success',
          text: result.message,
          isDemo: result.isDemo
        });

        // Trigger celebratory confetti animation
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.7 }
          });
        } catch (err) {
          // fallback if canvas-confetti script unavailable
        }

        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setToast({
          type: 'error',
          text: result.message
        });
      }
    } catch (error) {
      setToast({
        type: 'error',
        text: 'An unexpected error occurred. Please try again or email directly.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="section-subtitle">
            <Mail className="w-4 h-4 text-[var(--accent-cyan)]" />
            <span>Let's Build Something Together</span>
          </div>
          <h2 className="section-title">
            Get In <span className="vibrant-text">Touch</span>
          </h2>
          <span className="section-title-bar" />
          <p className="section-description">
            Have a project idea, internship opportunity, or technical question? Send me a message using the EmailJS form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-[var(--border-glow)] relative overflow-hidden">
              <h3 className="text-2xl font-bold font-heading mb-2 text-[var(--text-main)]">
                Contact Details
              </h3>
              <p className="text-sm text-[var(--text-muted)] mb-6">
                Feel free to connect directly via email, phone, or coding profiles.
              </p>

              {/* Direct Info List */}
              <div className="flex flex-col gap-4">
                
                {/* Email Box */}
                <div className="p-4 rounded-2xl bg-[rgba(255,255,255,0.03)] border border-[var(--border-color)] flex items-center justify-between gap-3 group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[rgba(6,182,212,0.15)] text-[var(--accent-cyan)] flex items-center justify-center border border-[rgba(6,182,212,0.3)] shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-[var(--text-dim)] uppercase font-mono">Email Address</div>
                      <a href={`mailto:${personalInfo.email}`} className="text-sm font-semibold text-[var(--text-main)] hover:text-[var(--accent-cyan)] transition-colors">
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(personalInfo.email, 'email')}
                    className="p-2 rounded-lg bg-[rgba(255,255,255,0.05)] text-[var(--text-muted)] hover:text-[var(--accent-cyan)] transition-all"
                    title="Copy Email"
                  >
                    {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Box */}
                <div className="p-4 rounded-2xl bg-[rgba(255,255,255,0.03)] border border-[var(--border-color)] flex items-center justify-between gap-3 group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[rgba(16,185,129,0.15)] text-[var(--accent-emerald)] flex items-center justify-center border border-[rgba(16,185,129,0.3)] shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-[var(--text-dim)] uppercase font-mono">Phone / WhatsApp</div>
                      <a href={`tel:${personalInfo.phoneRaw}`} className="text-sm font-semibold text-[var(--text-main)] hover:text-[var(--accent-emerald)] transition-colors">
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(personalInfo.phoneRaw, 'phone')}
                    className="p-2 rounded-lg bg-[rgba(255,255,255,0.05)] text-[var(--text-muted)] hover:text-[var(--accent-emerald)] transition-all"
                    title="Copy Phone"
                  >
                    {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location Box */}
                <div className="p-4 rounded-2xl bg-[rgba(255,255,255,0.03)] border border-[var(--border-color)] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[rgba(236,72,153,0.15)] text-[var(--accent-pink)] flex items-center justify-center border border-[rgba(236,72,153,0.3)] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[var(--text-dim)] uppercase font-mono">Location</div>
                    <div className="text-sm font-semibold text-[var(--text-main)]">
                      {personalInfo.location}
                    </div>
                  </div>
                </div>

                {/* Social & Coding Platforms Badges */}
                <div className="pt-3 flex items-center justify-between gap-2 border-t border-[var(--border-color)]">
                  <span className="text-xs text-[var(--text-dim)] uppercase font-mono">Profiles:</span>
                  <div className="flex items-center gap-2">
                    <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-[rgba(255,255,255,0.04)] text-[var(--text-muted)] hover:text-[var(--accent-cyan)] transition-colors" title="LinkedIn">
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-[rgba(255,255,255,0.04)] text-[var(--text-muted)] hover:text-[var(--accent-violet)] transition-colors" title="GitHub">
                      <Github className="w-4 h-4" />
                    </a>
                    <a href={personalInfo.leetcode} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-[rgba(255,255,255,0.04)] text-[var(--text-muted)] hover:text-amber-400 transition-colors" title="LeetCode">
                      <LeetCode className="w-4 h-4 text-amber-400" />
                    </a>
                    <a href={personalInfo.hackerrank} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-[rgba(255,255,255,0.04)] text-[var(--text-muted)] hover:text-emerald-400 transition-colors" title="HackerRank">
                      <HackerRank className="w-4 h-4 text-emerald-400" />
                    </a>
                    <a href={personalInfo.twitter} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-[rgba(255,255,255,0.04)] text-[var(--text-muted)] hover:text-sky-400 transition-colors" title="X / Twitter">
                      <TwitterX className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>

              {/* EmailJS Setup Info Badge */}
              <div className="mt-6 p-4 rounded-2xl bg-[rgba(99,102,241,0.1)] border border-[rgba(99,102,241,0.2)] text-xs flex items-start gap-2.5 text-[var(--text-muted)]">
                <Info className="w-4 h-4 text-[var(--accent-indigo)] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[var(--text-main)] block mb-0.5">Powered by EmailJS Integration</span>
                  Messages sent through this form call <code className="font-mono text-[var(--accent-cyan)]">emailjs.send()</code>.
                  <button 
                    onClick={() => setShowConfigModal(true)}
                    className="underline text-[var(--accent-cyan)] font-mono ml-1 hover:text-[var(--accent-pink)]"
                  >
                    View EmailJS key config
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive EmailJS Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-[var(--border-glow)] shadow-2xl relative">
              
              <h3 className="text-2xl font-bold font-heading mb-6 text-[var(--text-main)] flex items-center justify-between">
                <span>Send a Direct Message</span>
                <span className="badge badge-cyan text-xs">EmailJS Active</span>
              </h3>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                
                {/* Name & Email Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-mono font-semibold uppercase text-[var(--text-muted)]">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.04)] border border-[var(--border-color)] text-[var(--text-main)] placeholder-[var(--text-dim)] focus:outline-none focus:border-[var(--accent-cyan)] transition-colors"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-mono font-semibold uppercase text-[var(--text-muted)]">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.04)] border border-[var(--border-color)] text-[var(--text-main)] placeholder-[var(--text-dim)] focus:outline-none focus:border-[var(--accent-cyan)] transition-colors"
                      required
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-mono font-semibold uppercase text-[var(--text-muted)]">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Full-Stack Role / AI Project Collaboration"
                    className="w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.04)] border border-[var(--border-color)] text-[var(--text-main)] placeholder-[var(--text-dim)] focus:outline-none focus:border-[var(--accent-cyan)] transition-colors"
                  />
                </div>

                {/* Message Textarea */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-mono font-semibold uppercase text-[var(--text-muted)]">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message details here..."
                    className="w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.04)] border border-[var(--border-color)] text-[var(--text-main)] placeholder-[var(--text-dim)] focus:outline-none focus:border-[var(--accent-cyan)] transition-colors resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center !py-3.5 text-base font-semibold shadow-lg disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending Message via EmailJS...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message Now</span>
                    </>
                  )}
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>

      {/* Floating Toast Notification */}
      {toast && (
        <div className={`toast ${toast.type === 'success' ? 'toast-success' : 'toast-error'}`}>
          {toast.type === 'success' ? <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" /> : <AlertCircle className="w-6 h-6 text-rose-400 shrink-0" />}
          <div className="text-xs leading-normal">
            <span className="font-bold block">{toast.type === 'success' ? 'Success!' : 'Error'}</span>
            {toast.text}
          </div>
        </div>
      )}

      {/* Modal for EmailJS Setup Guide */}
      {showConfigModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="glass-card max-w-md w-full p-6 rounded-3xl border border-[var(--border-glow)]">
            <h4 className="text-xl font-bold font-heading mb-2 text-[var(--text-main)]">
              EmailJS Credentials Setup
            </h4>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-4">
              To direct emails directly to your inbox, paste your EmailJS dashboard keys in <code className="font-mono text-[var(--accent-cyan)]">src/config/emailjs.js</code>:
            </p>
            <pre className="p-3 rounded-xl bg-black/60 text-xs font-mono text-[var(--accent-cyan)] overflow-x-auto mb-4 border border-[var(--border-color)]">
{`export const EMAILJS_CONFIG = {
  SERVICE_ID: 'YOUR_SERVICE_ID',
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID',
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY'
};`}
            </pre>
            <button
              onClick={() => setShowConfigModal(false)}
              className="btn-primary w-full justify-center text-xs"
            >
              Close Guide
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
