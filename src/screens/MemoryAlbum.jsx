import React, { useState } from 'react';
import { Camera, Heart, Sparkles, ChevronLeft, ChevronRight, ArrowRight } from '../utils/icons';
import confetti from 'canvas-confetti';

const imageModules = import.meta.glob('../picture/*.webp', { eager: true });
const albumPhotos = Object.values(imageModules).map((mod, index) => ({
  id: index + 1,
  url: mod.default,
  title: `Memory #${index + 1}`,
  caption: `Precious moment captured with Tini ❤️`
}));

export default function MemoryAlbum({ onNext }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev - 1 + albumPhotos.length) % albumPhotos.length);
  };

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % albumPhotos.length);
  };

  const handleFinishAlbum = () => {
    confetti({ particleCount: 90, spread: 70, origin: { y: 0.6 } });
    onNext();
  };

  const photo = albumPhotos[currentIndex] || {
    url: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=900&q=80',
    title: 'Memory',
    caption: 'Precious moment captured with Tini ❤️'
  };

  return (
    <div className="fixed inset-0 w-screen h-screen flex items-center justify-center p-4 bg-gradient-to-br from-pink-100 via-rose-200 to-purple-200 dark:from-slate-950 dark:via-purple-950 dark:to-slate-900 z-50 animate-fadeIn overflow-y-auto">
      <div className="glass-card p-6 md:p-10 rounded-3xl shadow-2xl max-w-xl w-full text-center relative my-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-pink-500 text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
          <Camera className="w-3.5 h-3.5" /> Chapter 4: Memory Album ({currentIndex + 1} / {albumPhotos.length})
        </div>

        {/* Polaroid Scrapbook Card with optimized async decoding */}
        <div className="bg-white dark:bg-slate-800 p-5 pb-6 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700 mb-6 transform transition-all duration-500 animate-fadeIn">
          <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden mb-4 shadow-inner bg-slate-950 flex items-center justify-center group">
            {/* Blurred backdrop of the same photo for a gorgeous seamless fit */}
            <div 
              className="absolute inset-0 bg-cover bg-center filter blur-xl opacity-50 scale-110 pointer-events-none transform-gpu"
              style={{ backgroundImage: `url(${photo.url})` }}
            ></div>

            {/* Main image fully contained without cropping, lazy loaded and async decoded */}
            <img
              src={photo.url}
              alt={photo.title}
              loading="lazy"
              decoding="async"
              className="relative z-10 w-full h-full object-contain drop-shadow-lg transition-transform duration-500 group-hover:scale-105 transform-gpu"
            />

            <div className="absolute top-3 right-3 z-20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-pink-500 flex items-center gap-1">
              <Heart className="w-3.5 h-3.5 fill-pink-500" /> Page {currentIndex + 1}
            </div>
          </div>
          <div className="font-['Dancing_Script']">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">{photo.title}</h3>
            <p className="text-base text-slate-600 dark:text-slate-300 font-['Plus_Jakarta_Sans'] mt-0.5">{photo.caption}</p>
          </div>
        </div>

        {/* Album Controls */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={prevPhoto}
            className="px-5 py-2.5 rounded-2xl glass-card hover:bg-white/80 text-slate-800 dark:text-slate-100 font-bold text-sm shadow-md flex items-center gap-1 transition-all"
          >
            <ChevronLeft className="w-5 h-5" /> Previous
          </button>

          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
            Turn the page ✨
          </span>

          <button
            onClick={nextPhoto}
            className="px-5 py-2.5 rounded-2xl glass-card hover:bg-white/80 text-slate-800 dark:text-slate-100 font-bold text-sm shadow-md flex items-center gap-1 transition-all"
          >
            Next <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="text-center">
          <button
            onClick={handleFinishAlbum}
            className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold text-base shadow-lg shadow-pink-500/30 transform hover:-translate-y-0.5 transition-all inline-flex items-center gap-2"
          >
            Continue to Cinematic Slideshow <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
