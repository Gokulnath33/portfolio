import React, { useState, useEffect, useRef } from 'react';
import { Music, Volume2, VolumeX, Pause, Play, Sparkles } from 'lucide-react';

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.65);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const audioCtxRef = useRef(null);
  const masterGainRef = useRef(null);
  const intervalRef = useRef(null);
  const activeNodesRef = useRef([]);

  // Ambient chords (frequencies in Hz)
  const chordProgression = [
    // Cmaj9 (C3, E3, G3, B3, D4)
    [130.81, 164.81, 196.00, 246.94, 293.66],
    // Am9 (A2, E3, G3, C4, E4)
    [110.00, 164.81, 196.00, 261.63, 329.63],
    // Fmaj7 (F2, C3, F3, A3, C4)
    [87.31, 130.81, 174.61, 220.00, 261.63],
    // Gadd9 (G2, D3, G3, B3, D4)
    [98.00, 146.83, 196.00, 246.94, 293.66]
  ];

  // High pentatonic melody frequencies for arpeggiator (C5, D5, E5, G5, A5, C6)
  const melodyNotes = [523.25, 587.33, 659.25, 783.99, 880.00, 1046.50];

  const stopMusicEngine = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    activeNodesRef.current.forEach(node => {
      try {
        if (node.stop) node.stop();
        if (node.disconnect) node.disconnect();
      } catch (e) {}
    });
    activeNodesRef.current = [];
  };

  const startMusicEngine = () => {
    try {
      if (!audioCtxRef.current) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;
        audioCtxRef.current = new AudioContext();
      }

      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      stopMusicEngine();

      // Master Gain setup
      const masterGain = ctx.createGain();
      const targetVolume = isMuted ? 0 : volume * 0.5;
      masterGain.gain.setValueAtTime(targetVolume, ctx.currentTime);
      masterGain.connect(ctx.destination);
      masterGainRef.current = masterGain;

      // Echo / Delay Node for spacey ambient reverb effect
      const delayNode = ctx.createDelay();
      delayNode.delayTime.setValueAtTime(0.35, ctx.currentTime);

      const delayFeedback = ctx.createGain();
      delayFeedback.gain.setValueAtTime(0.35, ctx.currentTime);

      const delayFilter = ctx.createBiquadFilter();
      delayFilter.type = 'lowpass';
      delayFilter.frequency.setValueAtTime(2000, ctx.currentTime);

      delayNode.connect(delayFilter);
      delayFilter.connect(delayFeedback);
      delayFeedback.connect(delayNode);
      delayNode.connect(masterGain);

      let currentChordIdx = 0;
      let stepCounter = 0;

      // Function to trigger a warm ambient chord layer
      const playChordLayer = (freqs) => {
        freqs.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          const filter = ctx.createBiquadFilter();

          osc.type = idx === 0 ? 'sine' : idx % 2 === 0 ? 'triangle' : 'sine';
          osc.frequency.setValueAtTime(freq, ctx.currentTime);

          // Subtle LFO pitch modulation
          const lfo = ctx.createOscillator();
          const lfoGain = ctx.createGain();
          lfo.frequency.setValueAtTime(0.12 + idx * 0.02, ctx.currentTime);
          lfoGain.gain.setValueAtTime(1.8, ctx.currentTime);
          lfo.connect(lfoGain);
          lfoGain.connect(osc.frequency);
          lfo.start();

          // Warm filter cutoff
          filter.type = 'lowpass';
          filter.frequency.setValueAtTime(1400 + idx * 200, ctx.currentTime);

          // Envelope attack and sustain
          gain.gain.setValueAtTime(0.001, ctx.currentTime);
          gain.gain.linearRampToValueAtTime(0.12, ctx.currentTime + 1.5);

          osc.connect(filter);
          filter.connect(gain);
          gain.connect(masterGain);
          gain.connect(delayNode);

          osc.start();
          activeNodesRef.current.push(osc, lfo);
        });
      };

      // Function to play a crisp, relaxing chime/arpeggio note
      const playChimeNote = () => {
        const noteFreq = melodyNotes[Math.floor(Math.random() * melodyNotes.length)];
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(noteFreq, ctx.currentTime);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(3000, ctx.currentTime);

        const now = ctx.currentTime;
        gain.gain.setValueAtTime(0.001, now);
        gain.gain.linearRampToValueAtTime(0.08, now + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(masterGain);
        gain.connect(delayNode);

        osc.start(now);
        osc.stop(now + 2.0);
        activeNodesRef.current.push(osc);
      };

      // Start initial chord
      playChordLayer(chordProgression[0]);

      // Timer loop: change chords every 4 seconds, play chimes periodically
      intervalRef.current = setInterval(() => {
        stepCounter++;

        // Play chime notes on rhythmic intervals
        if (stepCounter % 2 === 0 || Math.random() > 0.4) {
          playChimeNote();
        }

        // Cycle chord progression every 8 steps (4 seconds)
        if (stepCounter % 8 === 0) {
          currentChordIdx = (currentChordIdx + 1) % chordProgression.length;
          playChordLayer(chordProgression[currentChordIdx]);
        }
      }, 500);

    } catch (e) {
      console.error('Audio Music Engine Error:', e);
    }
  };

  const togglePlay = () => {
    setHasInteracted(true);
    if (isPlaying) {
      stopMusicEngine();
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      startMusicEngine();
    }
  };

  const handleVolumeChange = (e) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (val > 0 && isMuted) setIsMuted(false);
    if (masterGainRef.current && audioCtxRef.current) {
      const targetGain = isMuted ? 0 : val * 0.5;
      masterGainRef.current.gain.setTargetAtTime(targetGain, audioCtxRef.current.currentTime, 0.05);
    }
  };

  const toggleMute = () => {
    const nextMute = !isMuted;
    setIsMuted(nextMute);
    if (masterGainRef.current && audioCtxRef.current) {
      const targetGain = nextMute ? 0 : volume * 0.5;
      masterGainRef.current.gain.setTargetAtTime(targetGain, audioCtxRef.current.currentTime, 0.05);
    }
  };

  useEffect(() => {
    return () => {
      stopMusicEngine();
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-[90] flex items-center gap-2">
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
          title={isPlaying ? 'Pause Ambient Music' : 'Play Ambient Music'}
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
