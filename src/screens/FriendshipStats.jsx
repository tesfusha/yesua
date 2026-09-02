import React from 'react';
import { PhoneCall, Clock, MessageSquareText, Image as ImageIcon, Sparkles, ArrowRight, Heart } from '../utils/icons';
import confetti from 'canvas-confetti';

export default function FriendshipStats({ onNext }) {
  const handleNext = () => {
    confetti({ particleCount: 90, spread: 70, origin: { y: 0.6 } });
    onNext();
  };

  return (
    <div className="fixed inset-0 w-screen h-screen flex items-center justify-center p-4 bg-gradient-to-br from-pink-100 via-rose-200 to-purple-200 dark:from-slate-950 dark:via-purple-950 dark:to-slate-900 z-50 animate-fadeIn overflow-y-auto">
      <div className="glass-card p-8 md:p-14 rounded-3xl shadow-2xl max-w-3xl w-full text-center relative my-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-pink-500 text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
                          <Sparkles className="w-3.5 h-3.5" /> Best Friend Hall of Fame
        </div>

        <h2 className="text-3xl md:text-4xl font-extrabold font-['Playfair_Display'] bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-2">
                          Our Epic Friendship Stats
        </h2>
        <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base font-['Dancing_Script'] text-2xl mb-8">
          Proof that we                           survived each other for 21 years (and counting!)
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {/* Stat 1 */}
          <div className="glass-pill p-6 rounded-2xl flex items-center gap-4 shadow-md transform hover:scale-105 transition-transform text-left">
            <div className="w-14 h-14 bg-gradient-to-tr from-pink-500 to-rose-400 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-pink-500/30 shrink-0">
              <PhoneCall className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold font-['Playfair_Display'] text-pink-600 dark:text-pink-400">
                1,184+
              </h3>
              <p className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Phone Calls</p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 italic mt-0.5">                          *(Plus secret calls from unknown numbers!)*</p>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="glass-pill p-6 rounded-2xl flex items-center gap-4 shadow-md transform hover:scale-105 transition-transform text-left">
            <div className="w-14 h-14 bg-gradient-to-tr from-purple-500 to-indigo-400 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-purple-500/30 shrink-0">
              <Clock className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold font-['Playfair_Display'] text-purple-600 dark:text-purple-400">
                100+ Hours
              </h3>
              <p className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Phone Talks</p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 italic mt-0.5">Talking about absolutely everything & nothing.</p>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="glass-pill p-6 rounded-2xl flex items-center gap-4 shadow-md transform hover:scale-105 transition-transform text-left">
            <div className="w-14 h-14 bg-gradient-to-tr from-rose-500 to-pink-400 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-rose-500/30 shrink-0">
              <MessageSquareText className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold font-['Playfair_Display'] text-rose-600 dark:text-rose-400">
                2,000+
              </h3>
              <p className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">SMS & Messages</p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 italic mt-0.5">Endless gossip, memes, and emergency texts.</p>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="glass-pill p-6 rounded-2xl flex items-center gap-4 shadow-md transform hover:scale-105 transition-transform text-left">
            <div className="w-14 h-14 bg-gradient-to-tr from-amber-500 to-orange-400 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-amber-500/30 shrink-0">
              <ImageIcon className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold font-['Playfair_Display'] text-amber-600 dark:text-amber-400">
                200+
              </h3>
              <p className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Captured Pictures</p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 italic mt-0.5">                          Stored safely on my phone gallery forever!</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={handleNext}
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold text-base shadow-lg shadow-pink-500/30 transform hover:-translate-y-0.5 transition-all inline-flex items-center gap-2"
          >
            Continue to Leave a Memory <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
