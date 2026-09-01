import React, { useState, useEffect } from 'react';
import { Film, ChevronLeft, ChevronRight, Play, Pause, Heart, Sparkles } from '../utils/icons';

const slides = [
  {
    url: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=80',
    title: 'Chapter 1: The Beauty of 21',
    subtitle: 'Every single day with you is a gorgeous celebration.'
  },
  {
    url: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80',
    title: 'Chapter 2: Joy & Laughter',
    subtitle: 'Your infectious laughter fills every room with sunshine.'
  },
  {
    url: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80',
    title: 'Chapter 3: Bright Horizons',
    subtitle: 'Wishing Tini infinite success, peace, and love in this new chapter.'
  }
];

export default function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
      }, 5000); // Autoplay every 5 seconds
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-pink-500 text-xs font-bold uppercase tracking-widest mb-3 shadow-sm">
          <Film className="w-3.5 h-3.5" /> Story Slideshow <Sparkles className="w-3.5 h-3.5" />
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold font-['Playfair_Display'] bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
          The Journey of Tini ✨
        </h2>
      </div>

      <div className="glass-card rounded-3xl overflow-hidden shadow-2xl relative group">
        <div className="relative h-80 sm:h-96 md:h-[450px]">
          <img
            src={slides[currentIndex].url}
            alt={slides[currentIndex].title}
            className="w-full h-full object-cover transition-all duration-700 animate-fadeIn"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-10 text-white">
            <div className="flex items-center gap-2 text-pink-400 text-xs font-bold uppercase tracking-widest mb-2">
              <Heart className="w-4 h-4 fill-pink-400" /> Slide {currentIndex + 1} of {slides.length}
            </div>
            <h3 className="text-2xl md:text-3xl font-bold font-['Playfair_Display'] mb-1">
              {slides[currentIndex].title}
            </h3>
            <p className="text-sm md:text-base text-slate-200 font-['Dancing_Script'] text-xl">
              {slides[currentIndex].subtitle}
            </p>
          </div>
        </div>

        {/* Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Play/Pause */}
        <div className="absolute top-4 right-4 flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md text-white flex items-center justify-center transition-all"
            title={isPlaying ? 'Pause Slideshow' : 'Play Slideshow'}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
        </div>

        <div className="absolute bottom-4 right-6 flex items-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                currentIndex === idx ? 'bg-pink-500 w-6' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
