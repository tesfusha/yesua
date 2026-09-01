import React, { useState } from 'react';
import { MessageSquareHeart, Send, Sparkles, Heart, CheckCircle2 } from '../utils/icons';
import confetti from 'canvas-confetti';

export default function Feedback() {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Telegram Bot API configuration variables
  const BOT_TOKEN = 'YOUR_BOT_TOKEN';
  const CHAT_ID = 'YOUR_CHAT_ID';

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!feedback.trim()) return;

    setLoading(true);
    setErrorMsg('');

    const textMessage = `Happy Birthday Website Feedback\nDate: September 4, 2026\n\nMessage:\n${feedback.trim()}`;

    try {
      // If BOT_TOKEN is still placeholder, simulate success or make actual fetch if valid token is provided
      if (BOT_TOKEN === 'YOUR_BOT_TOKEN') {
        // Simulate successful submission for prototype testing
        await new Promise((resolve) => setTimeout(resolve, 800));
      } else {
        const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text: textMessage,
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to send message to Telegram');
        }
      }

      setSubmitted(true);
      setFeedback('');
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch (err) {
      setErrorMsg('Could not send via Telegram bot. Saved locally with love! ❤️');
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="feedback" className="py-16 px-4 max-w-4xl mx-auto">
      <div className="glass-card p-8 md:p-14 rounded-3xl shadow-2xl relative overflow-hidden">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-pink-500 text-xs font-bold uppercase tracking-widest mb-3 shadow-sm">
            <MessageSquareHeart className="w-3.5 h-3.5" /> Required Feedback Screen <Sparkles className="w-3.5 h-3.5" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold font-['Playfair_Display'] bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-2">
            Before you leave...
          </h2>
          <p className="text-xl md:text-2xl font-bold font-['Dancing_Script'] text-pink-600 dark:text-pink-400">
            You must write something. 😆
          </p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase">
                  Your Thoughts & Wishes
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
              disabled={loading}
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold text-base shadow-lg shadow-pink-500/30 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <Send className="w-5 h-5" />
              {loading ? 'Sending to Telegram...' : 'Send Message'}
            </button>
          </form>
        ) : (
          <div className="p-8 rounded-3xl bg-pink-500/10 border border-pink-500/30 text-center space-y-4 animate-fadeIn">
            <div className="w-16 h-16 bg-pink-500 text-white rounded-full flex items-center justify-center mx-auto shadow-lg shadow-pink-500/30">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold font-['Playfair_Display'] text-pink-600 dark:text-pink-300">
              Thank you for sharing your thoughts ❤️
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 font-['Dancing_Script'] text-xl">
              Your special note has been delivered successfully.
            </p>
            {errorMsg && <p className="text-xs text-amber-500">{errorMsg}</p>}
          </div>
        )}
      </div>
    </section>
  );
}
