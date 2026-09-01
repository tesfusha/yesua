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
    <div className="fixed inset-0 w-screen h-screen flex items-center justify-center p-4 bg-gradient-to-br from-pink-100 via-rose-200 to-purple-200 dark:from-slate-950 dark:via-purple-950 dark:to-slate-900 z-50 animate-fadeIn">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-400/15 rounded-full blur-3xl pointer-events-none animate-pulse"></div>

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
              {'🎈'.repeat(Math.min(currentNum, 12))}
            </div>

            <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg font-medium">
              Celebrating every precious year of Tini... ({currentNum} / 21)
            </p>
          </div>
        ) : (
          <div className="space-y-8 py-6 animate-fadeIn">
            <div className="w-20 h-20 bg-gradient-to-tr from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto text-white shadow-xl shadow-pink-500/30 animate-bounce">
              <PartyPopper className="w-10 h-10" />
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-['Playfair_Display'] bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 bg-clip-text text-transparent">
              🎉 Happy 21st Birthday, Tini! 🎉
            </h2>

            <p className="text-slate-700 dark:text-slate-300 text-lg md:text-xl font-['Dancing_Script'] max-w-lg mx-auto">
              Twenty-one years of radiant grace, joy, and wonderful memories.
            </p>

            <button
              onClick={onNext}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold text-base shadow-lg shadow-pink-500/30 transform hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 mx-auto"
            >
              Continue to Birthday Letter <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
