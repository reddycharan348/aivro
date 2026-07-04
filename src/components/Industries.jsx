import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, Heart, Film, Landmark, Calculator, ShoppingCart,
  Rocket, Shirt, Plane, Truck, UtensilsCrossed, Factory,
  Home, Monitor, Trophy, Users, ArrowRight, Stethoscope,
  Music, Banknote, BookOpen, Store, Leaf, Scale,
  ChevronLeft, ChevronRight
} from 'lucide-react';

import { industriesData } from '../data/constants';

const Industries = () => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const industries = industriesData;

  // Auto-scroll
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let speed = 1;
    let animId;
    const scroll = () => {
      if (!isPaused && el) {
        el.scrollLeft += speed;
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      animId = requestAnimationFrame(scroll);
    };
    animId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animId);
  }, [isPaused]);

  const scrollBy = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * 400, behavior: 'smooth' });
  };

  return (
    <section id="industries" className="py-24 overflow-hidden relative" style={{ backgroundColor: '#f3f1ec' }}>
      
      {/* Animated Background Shapes matching reference image 1 (Yellow Blob) */}
      <div 
        className="absolute animate-blob-alt z-0 pointer-events-none"
        style={{
          width: '700px',
          height: '700px',
          backgroundColor: '#fcd34d', /* yellow from screenshot */
          bottom: '-15%',
          left: '-10%',
          borderRadius: '50% 40% 60% 40% / 40% 50% 40% 60%',
          opacity: 0.8
        }}
      ></div>

      <div className="container mx-auto px-4 max-w-7xl mb-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl text-center md:text-left mx-auto md:mx-0">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-4">
              Industries We Serve
            </h2>
            <p className="text-base text-gray-700 font-medium leading-relaxed">
              We've designed and developed high-conversion websites for businesses in every major sector — delivering custom solutions tailored to each industry's unique needs.
            </p>
          </div>
          <div className="flex justify-center md:justify-end items-center gap-3">
            <button 
              onClick={() => scrollBy(-1)}
              className="w-12 h-12 rounded-full border border-gray-300 bg-white/50 backdrop-blur hover:bg-white flex items-center justify-center transition-all text-gray-800"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => scrollBy(1)}
              className="w-12 h-12 rounded-full border border-gray-300 bg-white/50 backdrop-blur hover:bg-white flex items-center justify-center transition-all text-gray-800"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Scrolling Industry Cards */}
      <div className="relative z-10 w-full">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-24 bg-gradient-to-r from-[#f3f1ec] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-8 md:w-24 bg-gradient-to-l from-[#f3f1ec] to-transparent z-20 pointer-events-none"></div>

        <div 
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex gap-6 overflow-x-auto scrollbar-hide px-8 py-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Duplicate for infinite scroll */}
          {[...industries, ...industries].map((industry, index) => (
            <Link
              key={index}
              to={`/industries/${industry.id}`}
              className="group flex-shrink-0 w-[320px] md:w-[340px] h-[440px] bg-gray-900 rounded-[32px] overflow-hidden transition-all duration-500 flex flex-col hover:shadow-2xl shadow-lg border border-gray-800 hover:-translate-y-2"
            >
              {/* Image Header */}
              <div className="h-56 overflow-hidden relative flex-shrink-0">
                <img 
                  src={industry.imageUrl} 
                  alt={industry.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-90"></div>
                <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white/20 transition-colors duration-300">
                  {industry.icon}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8 pt-4 flex-grow flex flex-col bg-gray-900">
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-gray-200 transition-colors">
                  {industry.name}
                </h3>
                <p className="text-[14px] text-gray-400 font-medium leading-relaxed mb-6 flex-grow">
                  {industry.desc}
                </p>
                <div className="flex items-center text-gray-300 text-sm font-bold group-hover:text-white transition-all duration-300 mt-auto">
                  Explore <ArrowRight size={14} className="ml-1.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
