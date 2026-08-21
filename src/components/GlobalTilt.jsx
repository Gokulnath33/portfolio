import React, { useEffect } from 'react';

/**
 * GlobalTilt — event-delegated 3D tilt for every .glass-card.
 * The hero card is excluded (it has its own spotlight + tilt logic).
 * Uses rAF throttling so it stays cheap even with many cards.
 */
export default function GlobalTilt() {
  useEffect(() => {
    let raf = null;
    let current = null; // element currently under the pointer

    const applyTilt = (card, e) => {
      const rect = card.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      const rotateY = (px - 0.5) * 8;
      const rotateX = -(py - 0.5) * 8;
      card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px) scale(1.015)`;
    };

    const onPointerMove = (e) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = null;
        const card = e.target.closest
          ? e.target.closest('.glass-card:not(.hero-spotlight):not([data-no-tilt])')
          : null;
        if (card && card !== current) {
          if (current) current.style.transform = '';
          current = card;
        }
        if (card) applyTilt(card, e);
      });
    };

    const onPointerLeave = () => {
      if (current) {
        current.style.transform = '';
        current = null;
      }
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerleave', onPointerLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerleave', onPointerLeave);
    };
  }, []);

  return null;
}
