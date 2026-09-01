import React from 'react';
import { Heart, Sparkles, ArrowRight, Quote } from '../utils/icons';
import confetti from 'canvas-confetti';

export default function BirthdayLetter({ onNext }) {
  const fullText = `Dear Tini,

Twenty-one years of memories, lessons, growth, smiles, and beautiful moments have brought you to this day.

May this new chapter bring you happiness, success, peace, and countless reasons to smile.

Thank you for being exactly who you are.

Happy Birthday.

— Tesfish ❤️`;

  const handleNext = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
    onNext();
  };

  return (
    <div className="fixed inset-0 w-screen h-screen flex items-center justify-center p-4 bg-gradient-to-br from-pink-100 via-rose-200 to-purple-200 dark:from-slate-950 dark:via-purple-950 dark:to-slate-900 z-50 animate-fadeIn overflow-y-auto">
      <div className="glass-card p-8 md:p-14 rounded-3xl shadow-2xl max-w-3xl w-full relative my-auto">
        <div className="absolute top-4 right-6 text-pink-500/20 dark:text-pink-400/10 pointer-events-none">
          <Quote className="w-20 h-20" />
        </div>

        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-pink-500 text-xs font-bold uppercase tracking-widest mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" /> Chapter 3: Birthday Letter
          </div>
          <h2 className="text-3xl font-extrabold font-['Great_Vibes'] bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            An Emotional Moment ✨
          </h2>
        </div>

        <div className="min-h-[280px] p-6 md:p-8 rounded-2xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 shadow-inner mb-8">
          <p className="text-slate-800 dark:text-slate-200 text-lg md:text-2xl leading-relaxed whitespace-pre-wrap font-['Dancing_Script']">
            {fullText}
          </p>
        </div>

        <div className="text-center">
          <button
            onClick={handleNext}
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold text-base shadow-lg shadow-pink-500/30 transform hover:-translate-y-0.5 active:translate-y-0 transition-all inline-flex items-center gap-2"
          >
            Open the Memory Album <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
