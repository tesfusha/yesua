import React from 'react';
import { Heart, Sparkles, Quote } from '../utils/icons';
import confetti from 'canvas-confetti';

export default function BirthdayMessage() {
  const triggerConfetti = () => {
    confetti({
      particleCount: 120,
      spread: 75,
      origin: { y: 0.6 }
    });
  };

  return (
    <section id="message" className="py-16 px-4 max-w-4xl mx-auto">
      <div className="glass-card p-8 md:p-14 rounded-3xl shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 text-pink-500/20 dark:text-pink-400/10 pointer-events-none">
          <Quote className="w-24 h-24" />
        </div>

        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-pink-500 text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" /> A Letter For You
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold font-['Great_Vibes'] bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 bg-clip-text text-transparent">
            Dear Tini ❤️
          </h2>
        </div>

        <div className="space-y-6 text-slate-700 dark:text-slate-200 text-base md:text-xl leading-relaxed text-center font-['Dancing_Script'] md:px-8">
          <p className="text-2xl md:text-3xl text-pink-600 dark:text-pink-400 font-bold mb-4 font-['Pacifico']">
            Twenty-one years of memories, lessons, growth, smiles, and beautiful moments have brought you to this day.
          </p>
          
          <p className="text-xl md:text-2xl">
            May this new chapter bring you happiness, success, peace, and countless reasons to smile.
          </p>

          <p className="text-xl md:text-2xl font-semibold">
            Thank you for being exactly who you are.
          </p>

          <p className="text-3xl md:text-4xl font-bold font-['Great_Vibes'] text-pink-600 dark:text-pink-400 pt-4">
            Happy Birthday.
          </p>

          <div className="pt-4 text-right">
            <span className="text-2xl font-bold font-['Pacifico'] text-slate-800 dark:text-slate-200">
              — Tesfish ❤️
            </span>
          </div>
        </div>

        <div className="text-center pt-8">
          <button
            onClick={triggerConfetti}
            className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold text-sm shadow-lg shadow-pink-500/30 transition-all flex items-center justify-center gap-2 mx-auto font-['Plus_Jakarta_Sans']"
          >
            <Heart className="w-4 h-4 fill-white" />
            Celebrate This Moment
          </button>
        </div>
      </div>
    </section>
  );
}
