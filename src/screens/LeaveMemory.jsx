import React, { useState } from 'react';
import { MessageSquareHeart, Send, CheckCircle2, ArrowRight } from '../utils/icons';
import confetti from 'canvas-confetti';

export default function LeaveMemory({ onNext }) {
  const [memoryText, setMemoryText] = useState('');
  const [success, setSuccess] = useState(false);

  const getEmailUrls = (text) => {
    const recipient = 'tesfutilahun33@gmail.com';
    const subject = encodeURIComponent("Tini's 21st Birthday Wish & Memory");
    const body = encodeURIComponent(text);
    return {
      gmail: `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`,
      mailto: `mailto:${recipient}?subject=${subject}&body=${body}`
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!memoryText.trim()) return;

    const urls = getEmailUrls(memoryText.trim());
    
    // Open Gmail compose directly in a new tab
    window.open(urls.gmail, '_blank', 'noopener,noreferrer');

    setSuccess(true);
    confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 } });
  };

  const openEmailAgain = () => {
    const urls = getEmailUrls(memoryText.trim());
    window.open(urls.gmail, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 w-screen h-screen flex items-center justify-center p-4 clean-gradient dark:clean-gradient z-50 animate-fadeIn overflow-y-auto">
      <div className="glass-card p-8 md:p-14 rounded-3xl shadow-2xl max-w-xl w-full text-center relative my-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-pink-500 text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
          <MessageSquareHeart className="w-3.5 h-3.5" /> Chapter 7: Leave a Memory
        </div>

        <h2 className="text-2xl md:text-3xl font-extrabold font-['Playfair_Display'] text-slate-800 dark:text-slate-100 mb-2">
          Before you leave...
        </h2>
        <p className="text-xl md:text-2xl font-bold font-['Dancing_Script'] text-pink-600 dark:text-pink-400 mb-6">
          Write one memory, one thought, or one birthday wish.
        </p>

        {!success ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="text-left">
              <textarea
                rows="5"
                value={memoryText}
                onChange={(e) => setMemoryText(e.target.value)}
                placeholder="Write your thoughts, memory, or wish here..."
                className="w-full px-4 py-4 rounded-2xl bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-pink-400 text-slate-800 dark:text-slate-100 placeholder-slate-400 text-sm md:text-base resize-none shadow-inner"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={!memoryText.trim()}
              className="w-full py-4 px-6 rounded-2xl bg-slate-800 hover:bg-slate-900 text-white font-bold text-base shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <Send className="w-5 h-5" />
              Send to Email (New Tab)
            </button>
          </form>
        ) : (
          <div className="space-y-6 animate-fadeIn py-4">
            <div className="w-16 h-16 bg-pink-500 text-white rounded-full flex items-center justify-center mx-auto shadow-lg shadow-pink-500/30">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold font-['Playfair_Display'] text-pink-600 dark:text-pink-300">
              Thank you for sharing your thoughts
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 font-['Dancing_Script'] text-xl">
              Your message was opened in a new tab for tesfutilahun33@gmail.com
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={openEmailAgain}
                className="px-6 py-3.5 rounded-2xl bg-slate-800 hover:bg-slate-900 text-white font-bold text-sm shadow-md transition-all inline-flex items-center gap-2"
              >
                <Send className="w-4 h-4" /> Re-open Email
              </button>

              <button
                onClick={onNext}
                className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold text-base shadow-lg shadow-pink-500/30 transition-all inline-flex items-center gap-2"
              >
                Proceed to Final Message <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
