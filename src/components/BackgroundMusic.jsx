import React, { useState, useEffect, useRef } from 'react';
import { Music, Volume2, VolumeX, Pause, Play, Sparkles } from 'lucide-react';

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.65);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const audioRef = useRef(null);

  // Lazily create the audio element once
  const getAudio = () => {
    if (!audioRef.current) {
      const audio = new Audio('/music/background-music.mp3');
      audio.loop = true;
      audio.preload = 'auto';
      audio.volume = volume;
      audio.addEventListener('ended', () => setIsPlaying(false));
      audioRef.current = audio;
    }
    return audioRef.current;
  };

  const togglePlay = () => {
    setHasInteracted(true);
    const audio = getAudio();
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
    // Unmute automatically when raising volume from zero
    if (val > 0 && isMuted) {
      setIsMuted(false);
      if (audioRef.current) audioRef.current.muted = false;
    }
    // Apply volume live to the audio element
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : val;
    }
  };

  const toggleMute = () => {
    const nextMute = !isMuted;
    setIsMuted(nextMute);
    if (audioRef.current) {
      audioRef.current.muted = nextMute;
      // Force gain to match muted state immediately
      audioRef.current.volume = nextMute ? 0 : volume;
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
      }
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
    </div>
  );
}
