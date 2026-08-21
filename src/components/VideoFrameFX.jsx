import React from 'react';

/**
 * VideoFrameFX — cinematic camera-frame HUD around the whole viewport.
 * Four neon viewfinder corner brackets, energy runners that travel around
 * all 4 edges (like a video timeline seek-head), drifting corner sparkles,
 * a live-REC pill, and a slow scanline sweep for the "live recording" feel.
 */
export default function VideoFrameFX() {
  return (
    <div className="fixed inset-0 z-[55] pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Energy runners translating around the 4 edges */}
      <span className="edge-runner edge-runner-top" />
      <span className="edge-runner edge-runner-right" />
      <span className="edge-runner edge-runner-bottom" />
      <span className="edge-runner edge-runner-left" />

      {/* Viewfinder corner brackets */}
      <div className="corner-bracket corner-tl"><span className="corner-orb" /></div>
      <div className="corner-bracket corner-tr"><span className="corner-orb" /></div>
      <div className="corner-bracket corner-bl"><span className="corner-orb" /></div>
      <div className="corner-bracket corner-br"><span className="corner-orb" /></div>

      {/* Live recording indicator (bottom-left, above BackToTop) */}
      <div className="rec-pill">
        <span className="rec-dot" />
        <span>LIVE</span>
      </div>

      {/* Drifting corner sparkles */}
      <span className="frame-sparkle frame-sparkle-1">✦</span>
      <span className="frame-sparkle frame-sparkle-2">✧</span>
      <span className="frame-sparkle frame-sparkle-3">✦</span>
      <span className="frame-sparkle frame-sparkle-4">✧</span>

      {/* Slow full-screen scanline sweep */}
      <span className="scanline" />
    </div>
  );
}
