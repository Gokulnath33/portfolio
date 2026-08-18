import React, { useState, useEffect, useRef } from 'react';
import { Music, Volume2, VolumeX, Pause, Play, Sparkles } from 'lucide-react';

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.35);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const audioRef = useRef(null);
  const synthContextRef = useRef(null);
  const synthNodesRef = useRef(null);

  // Web Audio API Ambient Sound Generator (Fallback & Native Synth)
  const startWebAudioSynth = () => {
    try {
      if (!synthContextRef.current) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;
        synthContextRef.current = new AudioContext();
      }

      const ctx = synthContextRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // Stop any existing nodes
      stopWebAudioSynth();

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(isMuted ? 0 : volume * 0.15, ctx.currentTime);
      masterGain.connect(ctx.destination);

      // Create warm ambient chord (C maj9 / F maj7 atmospheric pad: C3, E3, G3, B3, D4)
      const freqs = [130.81, 164.81, 196.00, 246.94, 293.66];
      const nodes = [];

      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        // Subtle LFO modulation for organic ambient drift
        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        lfo.frequency.setValueAtTime(0.1 + idx * 0.03, ctx.currentTime);
        lfoGain.gain.setValueAtTime(1.5, ctx.currentTime);
        lfo.connect(lfoGain);
        lfoGain.connect(osc.frequency);
        lfo.start();

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(450 + idx * 80, ctx.currentTime);

        gain.gain.setValueAtTime(0.08, ctx.currentTime);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(masterGain);

        osc.start();
        nodes.push({ osc, gain, lfo });
      });

      synthNodesRef.current = { nodes, masterGain };
    } catch (e) {
      console.log('Web Audio synth ambient note:', e);
    }
  };

  const stopWebAudioSynth = () => {
    if (synthNodesRef.current?.nodes) {
      synthNodesRef.current.nodes.forEach(({ osc, lfo }) => {
        try {
          osc.stop();
          lfo.stop();
        } catch (e) {}
      });
      synthNodesRef.current = null;
    }
  };

  // Toggle playback
  const togglePlay = () => {
    setHasInteracted(true);
    if (isPlaying) {
      if (audioRef.current && !audioRef.current.paused) {
        audioRef.current.pause();
      }
      stopWebAudioSynth();
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      // Attempt HTML5 audio first, fallback to Web Audio Synth pad
      if (audioRef.current) {
        audioRef.current.volume = isMuted ? 0 : volume;
        audioRef.current.play().then(() => {
          // Playing audio file successfully
        }).catch((err) => {
          console.log('Audio file play fallback to Ambient Synth Pad:', err);
          startWebAudioSynth();
        });
      } else {
        startWebAudioSynth();
      }
    }
  };

  // Handle Volume change
  const handleVolumeChange = (e) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (val > 0 && isMuted) setIsMuted(false);
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : val;
    }
    if (synthNodesRef.current?.masterGain && synthContextRef.current) {
      synthNodesRef.current.masterGain.gain.setValueAtTime(
        isMuted ? 0 : val * 0.15,
        synthContextRef.current.currentTime
      );
    }
  };

  // Toggle Mute
  const toggleMute = () => {
    const nextMute = !isMuted;
    setIsMuted(nextMute);
    if (audioRef.current) {
      audioRef.current.volume = nextMute ? 0 : volume;
    }
    if (synthNodesRef.current?.masterGain && synthContextRef.current) {
      synthNodesRef.current.masterGain.gain.setValueAtTime(
        nextMute ? 0 : volume * 0.15,
        synthContextRef.current.currentTime
      );
    }
  };

  // Sync state on unmount
  useEffect(() => {
    return () => {
      stopWebAudioSynth();
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-[90] flex items-center gap-2">
      {/* HTML5 Audio element */}
      <audio
        ref={audioRef}
        src="/audio/ambient.mp3"
        loop
        preload="auto"
        onEnded={() => {
          if (isPlaying) startWebAudioSynth();
        }}
      />

      {/* Expanded Volume Control Slider */}
      <div
        className={`transition-all duration-300 transform origin-right flex items-center gap-2 px-3 py-2 rounded-2xl glass-pill backdrop-blur-xl border border-[var(--border-color)] shadow-xl ${
          showVolumeSlider ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-95 translate-x-4 pointer-events-none'
        }`}
      >
        <button
          onClick={toggleMute}
          className="text-[var(--text-muted)] hover:text-white transition-colors"
          title={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted || volume === 0 ? (
            <VolumeX className="w-4 h-4 text-rose-400" />
          ) : (
            <Volume2 className="w-4 h-4 text-[var(--accent-cyan)]" />
          )}
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={isMuted ? 0 : volume}
          onChange={handleVolumeChange}
          className="w-20 h-1.5 accent-[var(--accent-cyan)] bg-[rgba(255,255,255,0.15)] rounded-lg appearance-none cursor-pointer"
        />
        <span className="text-[10px] font-mono text-[var(--text-dim)] w-6">
          {isMuted ? '0%' : `${Math.round(volume * 100)}%`}
        </span>
      </div>

      {/* Main Music Player Floating Button */}
      <div
        className="relative group"
        onMouseEnter={() => setShowVolumeSlider(true)}
        onMouseLeave={() => setShowVolumeSlider(false)}
      >
        {/* Pulsing glow background when playing */}
        {isPlaying && (
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-pink-500 blur-md opacity-70 animate-pulse pointer-events-none" />
        )}

        <button
          onClick={togglePlay}
          className={`relative z-10 flex items-center gap-2.5 px-4 py-3 rounded-full transition-all duration-300 border shadow-2xl backdrop-blur-xl ${
            isPlaying
              ? 'bg-gradient-to-r from-[rgba(99,102,241,0.9)] to-[rgba(236,72,153,0.9)] text-white border-white/30 shadow-[0_0_25px_rgba(99,102,241,0.5)] scale-105'
              : 'bg-[var(--bg-card)] text-[var(--text-muted)] border-[var(--border-color)] hover:border-[var(--accent-cyan)] hover:text-white hover:scale-105'
          }`}
          title={isPlaying ? 'Pause Background Music' : 'Play Ambient Music'}
        >
          {isPlaying ? (
            <>
              <Pause className="w-4 h-4 text-white animate-pulse" />
              {/* Equalizer Wave Visualizer Bars */}
              <div className="flex items-end gap-0.5 h-4 px-1">
                <span className="w-0.5 bg-white rounded-full animate-[bounce_0.8s_infinite_100ms] h-full" />
                <span className="w-0.5 bg-white rounded-full animate-[bounce_0.6s_infinite_200ms] h-3/4" />
                <span className="w-0.5 bg-white rounded-full animate-[bounce_1.0s_infinite_300ms] h-full" />
                <span className="w-0.5 bg-white rounded-full animate-[bounce_0.7s_infinite_150ms] h-2/3" />
              </div>
            </>
          ) : (
            <>
              <Music className="w-4 h-4 text-[var(--accent-cyan)] group-hover:rotate-12 transition-transform" />
              <span className="text-xs font-bold font-mono tracking-wider uppercase hidden sm:inline">
                Music
              </span>
            </>
          )}
        </button>

        {/* First time tooltip clue */}
        {!hasInteracted && !isPlaying && (
          <div className="absolute bottom-full right-0 mb-3 whitespace-nowrap px-3 py-1.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-[11px] font-semibold shadow-xl border border-white/20 animate-bounce pointer-events-none flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Click for Ambient Music 🎵</span>
            <div className="absolute -bottom-1 right-5 w-2 h-2 bg-violet-600 rotate-45" />
          </div>
        )}
      </div>
    </div>
  );
}
