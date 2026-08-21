import React, { useState, useEffect, useRef } from 'react';
import { Music, Volume2, VolumeX, Volume1, Pause, Play, Sparkles } from 'lucide-react';

const VOLUME_STEP = 0.1;
// The preview MP3 is mastered very quietly, so we amplify up to 3x
// through the Web Audio gain stage — audio.volume alone caps at 1.0.
const MAX_GAIN = 3;

// Map linear volume (0..1) to a perceptual gain curve (0 → MAX_GAIN)
const volumeToGain = (v) => Math.pow(v, 1.6) * MAX_GAIN;

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.65);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const audioRef = useRef(null);
  const ctxRef = useRef(null); // AudioContext for the boost chain
  const gainRef = useRef(null); // GainNode — can exceed 1.0

  /**
   * Playback chain (built lazily on first user interaction):
   * audio element → MediaElementSource → compressor → gain (up to 3x) → speakers.
   * The HTML <audio> element stays in charge of playback/looping; the gain
   * stage compensates for the quiet master level of the preview MP3.
   */
  const getAudio = () => {
    if (!audioRef.current) {
      const audio = new Audio('/music/background-music.mp3');
      audio.loop = true;
      audio.preload = 'auto';
      audio.volume = 1; // loudness is handled by the gain node
      audio.addEventListener('ended', () => setIsPlaying(false));
      audioRef.current = audio;

      const Ctx = window.AudioContext || window.webkitAudioContext;
      const ctx = new Ctx();
      const source = ctx.createMediaElementSource(audio);

      // Compressor keeps the boosted signal from clipping on loud peaks
      const comp = ctx.createDynamicsCompressor();
      comp.threshold.value = -18;
      comp.knee.value = 24;
      comp.ratio.value = 8;
      comp.attack.value = 0.003;
      comp.release.value = 0.25;

      const gain = ctx.createGain();
      source.connect(comp);
      comp.connect(gain);
      gain.connect(ctx.destination);

      ctxRef.current = ctx;
      gainRef.current = gain;
    }
    return audioRef.current;
  };

  // Push the current volume/mute state into the gain node with a smooth ramp
  const applyGain = (mute, vol) => {
    if (!gainRef.current || !ctxRef.current) return;
    gainRef.current.gain.setTargetAtTime(
      mute ? 0 : volumeToGain(vol),
      ctxRef.current.currentTime,
      0.02
    );
  };

  const togglePlay = () => {
    setHasInteracted(true);
    const audio = getAudio();
    // Resume the context if the browser suspended it (iOS/Safari)
    if (ctxRef.current && ctxRef.current.state === 'suspended') {
      ctxRef.current.resume();
    }
    applyGain(isMuted, volume); // sync gain after (re)creating the chain
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      // Reset to start when the track was fully played before
      if (audio.ended) audio.currentTime = 0;
      audio.play()
        .then(() => setIsPlaying(true))
        .catch(err => {
          console.error('Audio Play Error:', err);
          setIsPlaying(false);
        });
    }
  };

  const handleVolumeChange = (e) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (val > 0 && isMuted) {
      setIsMuted(false);
      applyGain(false, val);
    } else {
      applyGain(isMuted, val);
    }
  };

  const changeVolumeBy = (delta) => {
    setHasInteracted(true);
    const next = Math.min(1, Math.max(0, Math.round((volume + delta) * 100) / 100));
    setVolume(next);
    if (next > 0 && isMuted) {
      setIsMuted(false);
      applyGain(false, next);
    } else {
      applyGain(isMuted, next);
    }
  };

  const toggleMute = () => {
    const nextMute = !isMuted;
    setIsMuted(nextMute);
    applyGain(nextMute, volume);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
      }
      if (ctxRef.current) {
        ctxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-[90] flex items-center gap-2">
      {/* Expanded Volume Control Slider (hover panel) */}
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

      {/* Always-visible Volume Controls + Music Button */}
      <div className="flex items-center gap-1.5 bg-[var(--bg-card)] backdrop-blur-xl border border-[var(--border-color)] rounded-full p-1.5 shadow-2xl">
        {/* Volume Down */}
        <button
          onClick={() => changeVolumeBy(-VOLUME_STEP)}
          className="w-8 h-8 rounded-full flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent-cyan)] hover:bg-[rgba(0,240,255,0.12)] hover:scale-110 active:scale-95 transition-all duration-200"
          title="Decrease Volume"
          aria-label="Decrease volume"
        >
          <Volume1 className="w-4 h-4" />
        </button>

        {/* Main Play / Pause Button */}
        <div className="relative group" onMouseEnter={() => setShowVolumeSlider(true)} onMouseLeave={() => setShowVolumeSlider(false)}>
          {isPlaying && (
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-pink-500 blur-md opacity-70 animate-pulse pointer-events-none" />
          )}
          <button
            onClick={togglePlay}
            className={`relative z-10 flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 border shadow-xl ${
              isPlaying
                ? 'bg-gradient-to-r from-[rgba(99,102,241,0.9)] to-[rgba(236,72,153,0.9)] text-white border-white/30 shadow-[0_0_25px_rgba(99,102,241,0.5)] scale-105'
                : 'bg-[var(--bg-card)] text-[var(--text-muted)] border-[var(--border-color)] hover:border-[var(--accent-cyan)] hover:text-white hover:scale-105'
            }`}
            title={isPlaying ? 'Pause Music' : 'Play Music'}
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
              <span>Click to Play Epic Beat 🎵</span>
              <div className="absolute -bottom-1 right-5 w-2 h-2 bg-violet-600 rotate-45" />
            </div>
          )}
        </div>

        {/* Volume Up */}
        <button
          onClick={() => changeVolumeBy(VOLUME_STEP)}
          className="w-8 h-8 rounded-full flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent-cyan)] hover:bg-[rgba(0,240,255,0.12)] hover:scale-110 active:scale-95 transition-all duration-200"
          title="Increase Volume"
          aria-label="Increase volume"
        >
          <Volume2 className="w-4 h-4" />
        </button>
      </div>

      {/* Live Volume % Badge */}
      <div
        className={`hidden sm:flex flex-col items-center justify-center w-12 h-12 rounded-full glass-pill backdrop-blur-xl border border-[var(--border-color)] shadow-xl transition-all duration-300 ${
          isMuted ? 'text-rose-400' : 'text-[var(--accent-cyan)]'
        }`}
      >
        <span className="text-xs font-bold font-mono leading-none">
          {isMuted ? 'MUT' : `${Math.round(volume * 100)}%`}
        </span>
        <span className="text-[8px] font-mono uppercase tracking-wider text-[var(--text-dim)] mt-0.5">
          {isMuted ? 'Muted' : 'Volume'}
        </span>
      </div>
    </div>
  );
}
