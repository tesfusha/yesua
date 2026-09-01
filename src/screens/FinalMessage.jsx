import React, { useState, useEffect } from 'react';
import { Heart, Stars } from '../utils/icons';
import confetti from 'canvas-confetti';

export default function FinalMessage() {
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    confetti({
      particleCount: 200,
      spread: 120,
      origin: { y: 0.6 }
    });

    const timer = setTimeout(() => {
      setShowThankYou(true);
    }, 5000); // After 5 seconds, fade out to Thank you message

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 w-screen h-screen flex items-center justify-center p-4 bg-gradient-to-br from-pink-100 via-rose-200 to-purple-200 dark:from-slate-950 dark:via-purple-950 dark:to-slate-900 z-50 animate-fadeIn">
      {/* Background glowing lights */}
      <div className="absolute inset-0 bg-pink-500/10 backdrop-blur-md pointer-events-none"></div>

      <div className="glass-card p-12 md:p-16 rounded-3xl shadow-2xl max-w-2xl w-full text-center relative z-10 transition-all duration-1000">
        {!showThankYou ? (
          <div className="space-y-6 animate-fadeIn font-['Playfair_Display']">
            <div className="w-20 h-20 bg-gradient-to-tr from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-pink-500/30 text-white animate-pulse">
              <Heart className="w-10 h-10 fill-white" />
            </div>

            <p className="text-2xl md:text-3xl text-slate-700 dark:text-slate-200 font-medium">
              Some people give gifts.
            </p>
            <p className="text-3xl md:text-4xl text-pink-600 dark:text-pink-400 font-bold">
              I wanted to give you a memory.
            </p>
            <p className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 bg-clip-text text-transparent pt-2">
              Happy Birthday.
            </p>
            <div className="pt-6">
              <span className="text-xl md:text-2xl font-semibold text-slate-600 dark:text-slate-400 tracking-wider font-['Pacifico']">
                — Tesfish ❤️
              </span>
            </div>
          </div>
        ) : (
          <div className="space-y-6 animate-fadeIn">
            <div className="w-20 h-20 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-purple-500/30 text-white animate-bounce">
              <Stars className="w-10 h-10" />
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold font-['Playfair_Display'] bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Thank you for being part of this story.
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-['Dancing_Script'] text-2xl">
              — Tini & Tesfish —
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
