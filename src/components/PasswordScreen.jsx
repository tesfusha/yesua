import React, { useState } from 'react';
import { Lock, Heart, KeyRound, Sparkles } from '../utils/icons';
import confetti from 'canvas-confetti';

export default function PasswordScreen({ onUnlock }) {
  const [nickname, setNickname] = useState('');
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  const PASSWORD = 'tini'; // The correct nickname given by Tesfish

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nickname.toLowerCase().trim() === PASSWORD) {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 }
      });
      onUnlock();
    } else {
      setError(true);
      setShake(true);
      setTimeout(() => setShake(false), 600);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-gradient-to-br from-pink-100 via-rose-200 to-purple-200 dark:from-slate-950 dark:via-purple-950 dark:to-slate-900">
      {/* Background glowing lights & floating particles */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl pointer-events-none animate-pulse"></div>

      <div className={`glass-card p-8 md:p-12 rounded-3xl shadow-2xl max-w-lg w-full text-center relative z-10 transition-all duration-300 ${shake ? 'animate-shake border-red-400' : ''}`}>
        <div className="w-20 h-20 bg-gradient-to-tr from-pink-500 to-rose-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-pink-500/30 text-white">
          <Lock className="w-10 h-10 animate-bounce" />
        </div>

        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full glass-pill text-pink-500 text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
          <Sparkles className="w-3.5 h-3.5" /> Special Surprise
        </div>

        <h1 className="text-2xl md:text-3xl font-bold font-['Playfair_Display'] mb-4 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
          ✨ A small surprise is waiting for you...
        </h1>
        
        <p className="text-slate-700 dark:text-slate-300 text-sm md:text-base font-medium mb-2">
          Before we begin, answer one question.
        </p>
        <p className="text-slate-800 dark:text-slate-100 font-bold text-base md:text-lg mb-6 font-['Playfair_Display']">
          What nickname did Tesfish give you?
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-pink-400">
              <KeyRound className="w-5 h-5" />
            </span>
            <input
              type="text"
              value={nickname}
              onChange={(e) => {
                setNickname(e.target.value);
                setError(false);
              }}
              placeholder="Enter nickname..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white/70 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-pink-400 text-slate-800 dark:text-slate-100 placeholder-slate-400 transition-all text-center tracking-wider font-semibold text-lg"
              autoFocus
            />
          </div>

          {error && (
            <div className="text-red-500 text-xs md:text-sm font-semibold space-y-1 bg-red-500/10 p-3 rounded-xl border border-red-500/20 animate-fadeIn">
              <p className="font-bold">Oops 😆</p>
              <p>That's not the nickname I'm looking for.</p>
              <p className="italic text-pink-500 font-bold">Try again. (Hint: Tini)</p>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold text-base shadow-lg shadow-pink-500/30 transform hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            Unlock Surprise
          </button>
        </form>

        <div className="mt-8 flex items-center justify-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
          Made with <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500 inline" /> by Tesfish for Tini ❤️
        </div>
      </div>
    </div>
  );
}
