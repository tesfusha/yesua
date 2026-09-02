import React, { useState } from 'react';
import { MessageSquareHeart, Send, CheckCircle2 } from '../utils/icons';
import confetti from 'canvas-confetti';

export default function Feedback() {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!feedback.trim()) return;

    const recipient = 'tesfutilahun33@gmail.com';
    const subject = encodeURIComponent("Tini's 21st Birthday Feedback");
    const body = encodeURIComponent(feedback.trim());
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`;

    window.open(gmailUrl, '_blank', 'noopener,noreferrer');

    setSubmitted(true);
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 }
    });
  };

  return (
    <section id="feedback" className="py-16 px-4 max-w-4xl mx-auto">
      <div className="glass-card p-8 md:p-14 rounded-3xl shadow-2xl relative overflow-hidden">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-pink-500 text-xs font-bold uppercase tracking-widest mb-3 shadow-sm">
            <MessageSquareHeart className="w-3.5 h-3.5" /> Leave Your Feedback
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold font-['Playfair_Display'] text-slate-800 dark:text-slate-100 mb-2">
            Before you leave...
          </h2>
          <p className="text-xl md:text-2xl font-bold font-['Dancing_Script'] text-pink-600 dark:text-pink-400">
            Write your thoughts & wishes
          </p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase">
                  Your Message
                </label>
                <span className="text-xs text-slate-400">
                  {feedback.length} characters
                </span>
              </div>
              <textarea
                rows="5"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="How was your surprise? Write your thoughts here..."
                className="w-full px-4 py-4 rounded-2xl bg-white/70 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-pink-400 text-slate-800 dark:text-slate-100 placeholder-slate-400 text-sm md:text-base resize-none shadow-inner"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 px-6 rounded-2xl bg-slate-800 hover:bg-slate-900 text-white font-bold text-base shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Send to Email (New Tab)
            </button>
          </form>
        ) : (
          <div className="p-8 rounded-3xl bg-pink-500/10 border border-pink-500/30 text-center space-y-4 animate-fadeIn">
            <div className="w-16 h-16 bg-pink-500 text-white rounded-full flex items-center justify-center mx-auto shadow-lg shadow-pink-500/30">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold font-['Playfair_Display'] text-pink-600 dark:text-pink-300">
              Thank you for sharing your thoughts
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 font-['Dancing_Script'] text-xl">
              Opened in a new tab for tesfutilahun33@gmail.com
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
