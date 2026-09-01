import React from 'react';
import { Send, Sparkles } from '../utils/icons';

export default function Telegram() {
  return (
    <section className="py-8 px-4 max-w-4xl mx-auto text-center">
      <div className="glass-card p-6 rounded-3xl shadow-md border-sky-500/20 bg-gradient-to-r from-sky-500/5 via-purple-500/10 to-pink-500/5">
        <div className="flex items-center justify-center gap-2 text-sky-500 font-semibold text-xs uppercase tracking-widest mb-1">
          <Sparkles className="w-3.5 h-3.5" /> Telegram Bot API Integrated
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Powered by Telegram Bot API for instant message delivery to Tesfish.
        </p>
      </div>
    </section>
  );
}
