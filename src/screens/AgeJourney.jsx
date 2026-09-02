import React, { useState, useEffect } from 'react';
import { Sparkles, PartyPopper, ArrowRight, FastForward } from '../utils/icons';
import confetti from 'canvas-confetti';
import { playPopSound, playChimeSound } from '../utils/sound';

export default function AgeJourney({ onNext }) {
  const [currentNum, setCurrentNum] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (currentNum < 21 && !isCompleted) {
      const timer = setTimeout(() => {
        setCurrentNum((prev) => prev + 1);
        playPopSound();
        confetti({
          particleCount: 15 + currentNum * 2,
          spread: 50,
          origin: { y: 0.6 }
        });
      }, 800);
      return () => clearTimeout(timer);
    } else if (currentNum >= 21 && !isCompleted) {
      setIsCompleted(true);
      setCurrentNum(21);
      playChimeSound();
      const duration = 2 * 1000;
      const end = Date.now() + duration;
      const frame = () => {
        confetti({
          particleCount: 8,
          angle: 60,
          spread: 60,
          origin: { x: 0 }
        });
        confetti({
          particleCount: 8,
          angle: 120,
          spread: 60,
          origin: { x: 1 }
        });
        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };
      frame();
    }
  }, [currentNum, isCompleted]);

  const handleSkip = () => {
    setIsCompleted(true);
    setCurrentNum(21);
    playChimeSound();
    confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
  };

  return (
    <div className="fixed inset-0 w-screen h-screen flex items-center justify-center p-4 clean-gradient dark:clean-gradient z-50 animate-fadeIn">
      <div className="glass-card p-10 md:p-16 rounded-3xl shadow-2xl max-w-2xl w-full text-center relative z-10">
        {!isCompleted && (
          <button
            onClick={handleSkip}
            className="absolute top-4 right-6 px-3 py-1.5 rounded-full glass-card text-xs font-bold text-pink-600 dark:text-pink-300 hover:bg-pink-500 hover:text-white transition-all flex items-center gap-1 shadow-sm"
          >
            <FastForward className="w-3.5 h-3.5" /> Skip to 21
          </button>
        )}

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-pink-500 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
          <Sparkles className="w-4 h-4" /> Chapter 2: Age Journey (1 → 21)
        </div>

        {!isCompleted ? (
          <div className="space-y-8 py-8 animate-fadeIn">
            <div className="text-7xl sm:text-9xl font-extrabold font-['Playfair_Display'] text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 transition-all transform scale-110 duration-300">
              {currentNum}
            </div>

            <div className="text-3xl tracking-widest">
              {'✦'.repeat(Math.min(currentNum, 12))}
            </div>

            <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg font-medium">
              Celebrating every precious year of Tini... ({currentNum} / 21)
            </p>
          </div>
        ) : (
          <div className="space-y-8 py-6 animate-fadeIn">
            <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto text-slate-600 dark:text-slate-300 shadow-xl">
              <PartyPopper className="w-10 h-10" />
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-['Playfair_Display'] text-slate-800 dark:text-slate-100">
              Happy 21st Birthday, Tini!
            </h2>

            <p className="text-slate-700 dark:text-slate-300 text-lg md:text-xl font-['Dancing_Script'] max-w-lg mx-auto">
              Twenty-one years of radiant grace, joy, and wonderful memories.
            </p>

            <button
              onClick={onNext}
              className="px-8 py-4 rounded-2xl bg-slate-800 hover:bg-slate-900 text-white font-bold text-base shadow-lg shadow-slate-500/30 transition-all flex items-center justify-center gap-2 mx-auto"
            >
              Continue to Birthday Letter <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
