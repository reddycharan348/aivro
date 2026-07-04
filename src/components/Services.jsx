import React, { useRef, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import { servicesData } from '../data/constants';

const Services = () => {
  const scrollRef = useRef(null);

  const scrollBy = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * 400, behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-24 overflow-hidden relative" style={{ backgroundColor: '#f3f1ec' }}>
      
      {/* Animated Background Shapes */}
      {/* Large Green Blob */}
      <div 
        className="absolute animate-blob-alt z-0 pointer-events-none"
        style={{
          width: '800px',
          height: '700px',
          backgroundColor: '#34e89e',
          top: '-150px',
          right: '-250px',
          borderRadius: '50% 30% 60% 40% / 40% 60% 50% 50%',
          opacity: 0.9
        }}
      ></div>
      
      {/* Large Blue Blob */}
      <div 
        className="absolute animate-blob z-0 pointer-events-none"
        style={{
          width: '600px',
          height: '550px',
          backgroundColor: '#3b82f6',
          bottom: '-200px',
          left: '-150px',
          borderRadius: '40% 50% 40% 60% / 50% 40% 60% 50%',
          opacity: 0.85
        }}
      ></div>

      <div className="container mx-auto px-4 max-w-7xl mb-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl text-center md:text-left mx-auto md:mx-0">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 tracking-tight mb-4">
              Be the first to <span className="text-pink-600">experience</span>
            </h2>
            <p className="text-base text-gray-700 font-medium leading-relaxed max-w-md">
              Discover our premium digital solutions engineered to transform your business and scale effortlessly.
            </p>
          </div>
          <div className="flex justify-center md:justify-end items-center gap-4 hidden md:flex pb-4">
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
      
      {/* Horizontal Carousel */}
      <div className="relative z-10 w-full">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-[#f3f1ec] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-[#f3f1ec] to-transparent z-20 pointer-events-none"></div>

        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide px-6 md:px-[max(2rem,calc((100vw-80rem)/2))] py-12"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {servicesData.map((service, index) => {
            const rotations = ['-rotate-3', 'rotate-0', 'rotate-2', '-rotate-2', 'rotate-3'];
            const rotationClass = rotations[index % rotations.length];
            const translateY = index % 2 === 0 ? 'translate-y-4' : '-translate-y-2';

            return (
              <Link
                key={index}
                to={`/services/${service.id}`}
                className={`group flex-shrink-0 w-[320px] md:w-[360px] bg-white rounded-[32px] overflow-hidden transition-all duration-500 flex flex-col hover:shadow-2xl shadow-lg border border-gray-100 transform ${rotationClass} ${translateY} hover:rotate-0 hover:-translate-y-4`}
              >
                {/* Image Header */}
                <div className="h-[240px] overflow-hidden relative bg-gray-50 flex items-center justify-center p-6 pb-0">
                  <img 
                    src={service.imageUrl} 
                    alt={service.title} 
                    className="w-full h-full object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-700 shadow-sm object-top"
                  />
                </div>
                
                {/* Content */}
                <div className="p-8 pt-6 flex-grow flex flex-col bg-white">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-[15px] text-gray-500 leading-relaxed mb-6 flex-grow">
                    {service.desc}
                  </p>
                  <div className="flex items-center text-gray-500 text-sm font-medium group-hover:text-gray-900 transition-all duration-300 mt-auto">
                    Learn More <ArrowRight size={14} className="ml-1.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
