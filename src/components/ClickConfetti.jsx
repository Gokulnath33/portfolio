import React, { useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';

/**
 * ClickConfetti — small celebratory confetti burst wherever the user clicks.
 * Throttled so rapid clicking stays smooth; fails silently if the confetti
 * library is unavailable.
 */
export default function ClickConfetti() {
  const lastBurstRef = useRef(0);

  useEffect(() => {
    const onClick = (e) => {
      const now = Date.now();
      if (now - lastBurstRef.current < 350) return;
      lastBurstRef.current = now;

      try {
        confetti({
          particleCount: 45,
          spread: 70,
          startVelocity: 32,
          gravity: 0.9,
          ticks: 160,
          origin: {
            x: e.clientX / window.innerWidth,
            y: e.clientY / window.innerHeight,
          },
          colors: ['#00f0ff', '#6366f1', '#a855f7', '#ff0080', '#00ff88', '#ffdd00', '#ffffff'],
          zIndex: 10001,
          disableForReducedMotion: true,
        });
      } catch (err) {
        // fallback if canvas-confetti script unavailable
      }
    };

    window.addEventListener('click', onClick);
    return () => window.removeEventListener('click', onClick);
  }, []);

  return null;
}
