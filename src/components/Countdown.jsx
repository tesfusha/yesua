import React, { useState, useEffect } from 'react';
import { Sparkles, PartyPopper, Heart } from '../utils/icons';
import confetti from 'canvas-confetti';

export default function Countdown({ onComplete }) {
  const [currentNum, setCurrentNum] = useState(1);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (currentNum < 21) {
      const timer = setTimeout(() => {
        setCurrentNum((prev) => prev + 1);
        // Trigger small confetti/pop per number
        confetti({
          particleCount: 15 + currentNum * 2,
          spread: 50,
          origin: { y: 0.6 }
        });
      }, 1000); // 1 second per number
      return () => clearTimeout(timer);
    } else if (currentNum === 21 && !isFinished) {
      setIsFinished(true);
      // Full screen confetti & balloon explosion
      const duration = 3 * 1000;
      const end = Date.now() + duration;
      const frame = () => {
        confetti({
          particleCount: 7,
          angle: 60,
          spread: 55,
          origin: { x: 0 }
        });
        confetti({
          particleCount: 7,
          angle: 120,
          spread: 55,
          origin: { x: 1 }
        });
        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };
      frame();
      if (onComplete) onComplete();
    }
  }, [currentNum, isFinished, onComplete]);

  return (
    <section className="py-20 px-4 max-w-4xl mx-auto text-center">
      <div className="glass-card p-10 md:p-16 rounded-3xl shadow-2xl relative overflow-hidden">
        <div className="absolute -right-10 -top-10 w-48 h-48 bg-pink-400/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -left-10 -bottom-10 w-48 h-48 bg-purple-400/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-pink-500 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
          <Sparkles className="w-4 h-4" /> Age Journey (1 → 21)
        </div>

        {!isFinished ? (
          <div className="space-y-6 animate-fadeIn">
            <div className="text-6xl sm:text-8xl md:text-9xl font-extrabold font-['Playfair_Display'] text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 transition-all transform scale-110 duration-300">
              {currentNum}
            </div>

            <div className="text-2xl md:text-3xl tracking-widest">
              {'🎈'.repeat(Math.min(currentNum, 10))}
            </div>

            <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base font-medium">
              Counting through the wonderful years of Tini... ({currentNum} / 21)
            </p>
          </div>
        ) : (
          <div className="space-y-6 animate-fadeIn">
            <div className="w-20 h-20 bg-gradient-to-tr from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto text-white shadow-xl shadow-pink-500/30 animate-bounce">
              <PartyPopper className="w-10 h-10" />
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-['Playfair_Display'] bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 bg-clip-text text-transparent">
              🎉 Happy 21st Birthday, Tini! 🎉
            </h2>

            <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg max-w-xl mx-auto">
              Twenty-one years of radiant beauty, joy, and unforgettable memories! Let's explore your special birthday world. ❤️
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
