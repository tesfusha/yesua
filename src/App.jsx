import React, { useState, useEffect } from 'react';
import { Moon, Sun, Sparkles } from './utils/icons';
import confetti from 'canvas-confetti';
import { playChimeSound } from './utils/sound';

import PasswordScreen from './screens/PasswordScreen';
import AgeJourney from './screens/AgeJourney';
import BirthdayLetter from './screens/BirthdayLetter';
import MemoryAlbum from './screens/MemoryAlbum';
import CinematicSlideshow from './screens/CinematicSlideshow';
import FriendshipStats from './screens/FriendshipStats';
import LeaveMemory from './screens/LeaveMemory';
import FinalMessage from './screens/FinalMessage';
import MusicPlayer from './components/MusicPlayer';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(1);
  const [darkMode, setDarkMode] = useState(true);
  const [ultraGlass, setUltraGlass] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    if (ultraGlass) {
      document.documentElement.classList.add('ultra-glass-mode');
    } else {
      document.documentElement.classList.remove('ultra-glass-mode');
    }
  }, [ultraGlass]);

  const nextScreen = () => {
    playChimeSound();
    confetti({ particleCount: 60, spread: 60, origin: { y: 0.6 } });
    setCurrentScreen((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen w-screen relative overflow-hidden clean-gradient dark:clean-gradient text-slate-800 dark:text-slate-100 font-['Plus_Jakarta_Sans',sans-serif]">

      {/* Music Player Widget */}
      <MusicPlayer />

      {/* Theme & Glassmorphism Toggles */}
      <div className="fixed bottom-6 right-6 z-[100] flex items-center gap-3">
        <button
          onClick={() => setUltraGlass(!ultraGlass)}
          className={`px-4 h-14 rounded-full glass-card shadow-2xl flex items-center gap-2 font-bold text-xs transition-all ${
            ultraGlass ? 'bg-pink-500 text-white shadow-pink-500/50 scale-105' : 'text-pink-600 dark:text-pink-300 hover:scale-105'
          }`}
          title="Toggle Ultra Glassmorphism Theme"
        >
          <Sparkles className="w-4 h-4" />
          <span className="hidden sm:inline">{ultraGlass ? 'Ultra Glass' : 'Classic Glass'}</span>
        </button>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="w-14 h-14 rounded-full glass-card shadow-2xl flex items-center justify-center text-amber-500 dark:text-purple-300 hover:scale-110 active:scale-95 transition-all"
          title="Toggle Dark Mode"
        >
          {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </button>
      </div>

      {/* Chapter Indicator */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[100] px-5 py-2 rounded-full glass-pill shadow-lg flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-pink-600 dark:text-pink-300">
        <span>Chapter {currentScreen} of 8</span>
      </div>

      {/* Screen Router / Story Sequence */}
      {currentScreen === 1 && <PasswordScreen onNext={nextScreen} />}
      {currentScreen === 2 && <AgeJourney onNext={nextScreen} />}
      {currentScreen === 3 && <BirthdayLetter onNext={nextScreen} />}
      {currentScreen === 4 && <MemoryAlbum onNext={nextSongOrScreen => nextScreen()} />}
      {currentScreen === 5 && <CinematicSlideshow onNext={nextScreen} />}
      {currentScreen === 6 && <FriendshipStats onNext={nextScreen} />}
      {currentScreen === 7 && <LeaveMemory onNext={nextScreen} />}
      {currentScreen === 8 && <FinalMessage />}

    </div>
  );
}
