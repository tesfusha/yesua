import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Music, Play, Pause } from '../utils/icons';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.15); // Minimum volume by default

  // Audio pointing to public/music/Happy-Birthday-Song.m4a
  const [audio] = useState(() => {
    const a = new Audio('/music/Happy-Birthday-Song.m4a');
    a.loop = true;
    a.volume = 0.15;
    return a;
  });

  useEffect(() => {
    audio.volume = volume;
  }, [volume, audio]);

  // Attempt autoplay on load, or on first user interaction
  useEffect(() => {
    const startAudio = () => {
      if (!isPlaying) {
        audio.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          // Fallback stream if needed
          audio.src = 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf756.mp3?filename=gentle-piano-111162.mp3';
          audio.play().then(() => {
            setIsPlaying(true);
          }).catch(() => {});
        });
      }
      window.removeEventListener('click', startAudio);
      window.removeEventListener('keydown', startAudio);
    };

    // Try immediate autoplay
    audio.play().then(() => {
      setIsPlaying(true);
    }).catch(() => {
      // Browser blocked autoplay; listen for first interaction
      window.addEventListener('click', startAudio);
      window.addEventListener('keydown', startAudio);
    });

    return () => {
      window.removeEventListener('click', startAudio);
      window.removeEventListener('keydown', startAudio);
    };
  }, [audio, isPlaying]);

  const toggleMusic = () => {
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn("Local audio playback failed, trying fallback stream:", err);
        // Fallback audio stream if local file cannot be played
        audio.src = 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf756.mp3?filename=gentle-piano-111162.mp3';
        audio.play().then(() => {
          setIsPlaying(true);
        }).catch((e) => {
          console.error("Audio playback blocked or failed:", e);
        });
      });
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-[100] glass-card px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-3 animate-fadeIn">
      <button
        onClick={toggleMusic}
        className="w-10 h-10 rounded-full bg-gradient-to-tr from-pink-500 to-rose-500 text-white flex items-center justify-center shadow-md hover:scale-105 transition-all"
        title={isPlaying ? 'Pause Birthday Song' : 'Play Birthday Song'}
      >
        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
      </button>

      <div className="hidden sm:flex flex-col text-left">
        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800 dark:text-slate-200">
          <Music className="w-3.5 h-3.5 text-pink-500 animate-bounce" />
          <span>Happy Birthday Song 🎵</span>
        </div>
        <span className="text-[10px] text-slate-500 dark:text-slate-400">
          {isPlaying ? 'Playing celebration 🎶' : 'Click to play 🎂'}
        </span>
      </div>

      <div className="flex items-center gap-2 pl-2 border-l border-slate-200 dark:border-slate-700">
        <button
          onClick={() => setVolume(volume > 0 ? 0 : 0.5)}
          className="text-slate-600 dark:text-slate-300 hover:text-pink-500 transition-colors"
        >
          {volume > 0 ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 text-red-400" />}
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.05"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          className="w-16 accent-pink-500 cursor-pointer"
        />
      </div>
    </div>
  );
}
