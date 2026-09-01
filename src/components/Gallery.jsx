import React, { useState } from 'react';
import { Camera, Heart, Sparkles, X, Flower2 } from '../utils/icons';

const memories15 = [
  { id: 1, url: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80', title: 'Moment #1', caption: 'Magical celebrations' },
  { id: 2, url: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80', title: 'Moment #2', caption: 'Sweetest surprises' },
  { id: 3, url: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&w=800&q=80', title: 'Moment #3', caption: 'Bright radiant smiles' },
  { id: 4, url: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=800&q=80', title: 'Moment #4', caption: 'Unforgettable days' },
  { id: 5, url: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80', title: 'Moment #5', caption: 'Endless adventures' },
  { id: 6, url: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80', title: 'Moment #6', caption: 'Cheers to 21 years!' },
  { id: 7, url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80', title: 'Moment #7', caption: 'Pure happiness' },
  { id: 8, url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80', title: 'Moment #8', caption: 'Special memories' },
  { id: 9, url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80', title: 'Moment #9', caption: 'Festive lights' },
  { id: 10, url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80', title: 'Moment #10', caption: 'Golden hours' },
  { id: 11, url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80', title: 'Moment #11', caption: 'Best friends forever' },
  { id: 12, url: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80', title: 'Moment #12', caption: 'Joyful gatherings' },
  { id: 13, url: 'https://images.unsplash.com/photo-1522748948887-25e227014902?auto=format&fit=crop&w=800&q=80', title: 'Moment #13', caption: 'Radiant elegance' },
  { id: 14, url: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80', title: 'Moment #14', caption: 'Starlit evenings' },
  { id: 15, url: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&q=80', title: 'Moment #15', caption: 'A bright new chapter' },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-pink-500 text-xs font-bold uppercase tracking-widest mb-3 shadow-sm">
          <Camera className="w-3.5 h-3.5" /> Polaroid Memory Gallery <Sparkles className="w-3.5 h-3.5" />
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold font-['Playfair_Display'] bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
          15 Special Moments of Tini 📸
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
          Hover to tilt & click any Polaroid frame to view in high clarity.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {memories15.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedImage(item)}
            className="bg-white dark:bg-slate-800 p-4 pb-6 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 hover:rotate-1 transition-all duration-300 cursor-pointer border border-slate-100 dark:border-slate-700 group flex flex-col justify-between"
          >
            <div className="relative h-48 rounded-xl overflow-hidden mb-3">
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-2 right-2 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-2 py-0.5 rounded-full text-[10px] font-bold text-pink-500 flex items-center gap-1">
                <Heart className="w-3 h-3 fill-pink-500" /> #{item.id}
              </div>
            </div>
            <div className="text-center font-['Dancing_Script']">
              <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100">{item.title}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-['Plus_Jakarta_Sans']">{item.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <div className="glass-card max-w-xl w-full rounded-3xl overflow-hidden shadow-2xl relative p-6 bg-slate-900/90 border-slate-700">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="rounded-2xl overflow-hidden max-h-[60vh] mb-4">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-2xl font-bold font-['Playfair_Display'] text-white text-center mb-1">
              {selectedImage.title}
            </h3>
            <p className="text-sm text-pink-300 text-center font-['Dancing_Script'] text-xl">{selectedImage.caption}</p>
          </div>
        </div>
      )}
    </section>
  );
}
