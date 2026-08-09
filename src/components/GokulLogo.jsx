import React from 'react';

/**
 * GokulLogo - Custom SVG Emblem based on user's iconic circular G monogram design.
 * Features:
 * - Dark luxury gradient background
 * - Glowing dual metallic border ring
 * - Regal golden crown at the top
 * - Stylized 'G' / 'KG' monogram emblem in chrome/gold gradient
 * - 'GOKUL' stencil/text badge at bottom
 */
export default function GokulLogo({ className = "w-10 h-10", showGlow = true, size = 40 }) {
  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 group ${className}`}>
      {/* Outer Glow Effect */}
      {showGlow && (
        <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-[var(--accent-cyan)] via-amber-500 to-[var(--accent-violet)] opacity-50 blur-md group-hover:opacity-85 transition-opacity duration-300 pointer-events-none" />
      )}
      
      {/* SVG Emblem */}
      <svg 
        viewBox="0 0 200 200" 
        width={size} 
        height={size}
        className="relative z-10 w-full h-full rounded-full shadow-2xl overflow-hidden transition-transform duration-300 group-hover:scale-105"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Background Gradients */}
          <radialGradient id="gokulBgDark" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#111827" />
            <stop offset="60%" stopColor="#080c14" />
            <stop offset="100%" stopColor="#020408" />
          </radialGradient>

          <radialGradient id="gokulAura" cx="50%" cy="40%" r="45%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.25" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>

          {/* Border Metallic Gradients */}
          <linearGradient id="goldCyanBorder" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="35%" stopColor="#fef08a" />
            <stop offset="65%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>

          <linearGradient id="silverChrome" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#cbd5e1" />
            <stop offset="100%" stopColor="#94a3b8" />
          </linearGradient>

          <linearGradient id="crownGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="50%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#b45309" />
          </linearGradient>

          <linearGradient id="gMonogramGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="40%" stopColor="#e2e8f0" />
            <stop offset="75%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#818cf8" />
          </linearGradient>

          {/* Glow Filters */}
          <filter id="crownGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <filter id="emblemGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Base Background Circle */}
        <circle cx="100" cy="100" r="98" fill="url(#gokulBgDark)" />
        <circle cx="100" cy="100" r="98" fill="url(#gokulAura)" />

        {/* Outer Dual Rings */}
        <circle cx="100" cy="100" r="94" fill="none" stroke="url(#goldCyanBorder)" strokeWidth="3" opacity="0.9" />
        <circle cx="100" cy="100" r="90" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.25" />

        {/* Decorative Inner Ring Accent */}
        <circle cx="100" cy="100" r="86" fill="none" stroke="url(#goldCyanBorder)" strokeWidth="0.75" strokeDasharray="4 2" opacity="0.5" />

        {/* --- CROWN AT TOP --- */}
        <g transform="translate(100, 34)" filter="url(#crownGlow)">
          {/* Base Crown Shape */}
          <path 
            d="M -16 6 L -20 -10 L -9 -2 L 0 -14 L 9 -2 L 20 -10 L 16 6 Z" 
            fill="url(#crownGold)" 
            stroke="#fef08a" 
            strokeWidth="0.75"
          />
          {/* Crown Jewels / Circles on Points */}
          <circle cx="-20" cy="-10" r="2.2" fill="#fef08a" />
          <circle cx="0" cy="-14" r="2.8" fill="#ffffff" />
          <circle cx="20" cy="-10" r="2.2" fill="#fef08a" />
          {/* Crown Base Strip */}
          <rect x="-17" y="6" width="34" height="4" rx="1.5" fill="#f59e0b" stroke="#fef08a" strokeWidth="0.5" />
          <circle cx="-10" cy="8" r="1" fill="#ffffff" />
          <circle cx="0" cy="8" r="1" fill="#38bdf8" />
          <circle cx="10" cy="8" r="1" fill="#ffffff" />
        </g>

        {/* --- MONOGRAM (KG / G EMBLEM) IN CENTER --- */}
        <g transform="translate(100, 104)" filter="url(#emblemGlow)">
          {/* Stylized Outer 'G' Circle Arc */}
          <path 
            d="M 28 -34 A 42 42 0 1 0 38 12 L 18 12 L 18 2 L 36 2 L 36 8 A 28 28 0 1 1 24 -24 Z" 
            fill="url(#gMonogramGrad)"
            stroke="url(#silverChrome)"
            strokeWidth="0.8"
          />

          {/* Intertwined 'K' Letter inside the G */}
          {/* Vertical Stem of K */}
          <path 
            d="M -26 -32 L -16 -32 L -16 32 L -26 32 Z" 
            fill="url(#silverChrome)"
          />
          {/* Upper Diagonal Arm of K */}
          <path 
            d="M -17 -4 L 12 -32 L 24 -32 L -7 0 Z" 
            fill="url(#silverChrome)"
          />
          {/* Lower Curved/Diagonal Tail of K */}
          <path 
            d="M -12 2 L 18 32 L 6 32 L -17 8 Z" 
            fill="url(#gMonogramGrad)"
          />
        </g>

        {/* --- 'GOKUL' BADGE AT BOTTOM --- */}
        <g transform="translate(100, 164)">
          {/* Dark Glass Rectangular Badge Container */}
          <rect 
            x="-42" 
            y="-11" 
            width="84" 
            height="22" 
            rx="4" 
            fill="#030712" 
            stroke="url(#goldCyanBorder)" 
            strokeWidth="1.5"
          />
          <rect 
            x="-40" 
            y="-9" 
            width="80" 
            height="18" 
            rx="3" 
            fill="none" 
            stroke="#ffffff" 
            strokeWidth="0.5" 
            opacity="0.3" 
          />
          {/* Text GOKUL */}
          <text 
            x="0" 
            y="4" 
            textAnchor="middle" 
            fill="#ffffff" 
            fontSize="12" 
            fontWeight="800" 
            fontFamily="Outfit, 'Plus Jakarta Sans', system-ui, sans-serif" 
            letterSpacing="3.5"
          >
            GOKUL
          </text>
        </g>

        {/* Subtle Highlight Reflection Curved Arc */}
        <path 
          d="M 25 35 A 85 85 0 0 1 175 35" 
          fill="none" 
          stroke="#ffffff" 
          strokeWidth="1.5" 
          opacity="0.15" 
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
