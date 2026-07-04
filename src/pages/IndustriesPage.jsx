import React from 'react';
import SEO from '../components/SEO';
import { ArrowRight } from 'lucide-react';
import { industriesData } from '../data/constants';
import { Link } from 'react-router-dom';

const IndustriesPage = () => {
  const scrollRef = React.useRef(null);

  const scrollBy = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * 400, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#f3f1ec] min-h-screen relative overflow-hidden">
      <SEO title="Industries We Serve" description="From Healthcare to E-Commerce, we build bespoke digital platforms tailored to your industry's specific challenges." />
      
      {/* Background blobs */}
      <div 
        className="absolute animate-blob-alt z-0 pointer-events-none"
        style={{
          width: '500px',
          height: '500px',
          backgroundColor: '#fcd34d', /* yellow */
          top: '-5%',
          right: '-10%',
          borderRadius: '50% 60% 40% 50% / 60% 40% 50% 40%',
          opacity: 0.6
        }}
      ></div>
      <div 
        className="absolute animate-blob z-0 pointer-events-none"
        style={{
          width: '600px',
          height: '600px',
          backgroundColor: '#3b82f6', /* blue */
          bottom: '-10%',
          left: '-10%',
          borderRadius: '40% 50% 60% 40% / 50% 40% 50% 60%',
          opacity: 0.5
        }}
      ></div>

      {/* Page Header */}
      <div className="pt-40 pb-16 relative z-10 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <span className="text-xs font-bold tracking-wider text-pink-600 uppercase mb-4 block">Industries We Serve</span>
              <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6 leading-[1.1]">
                Tailored Solutions For Every Sector
              </h1>
              <p className="text-lg text-gray-600 font-medium leading-relaxed max-w-2xl">
                From education and healthcare to e-commerce and real estate, we leverage cutting-edge technology to deliver high-performance websites and digital solutions tailored to your specific industry needs.
              </p>
            </div>
            {/* Carousel Controls */}
            <div className="flex justify-start md:justify-end items-center gap-4 pb-2">
               <button 
                onClick={() => scrollBy(-1)}
                className="w-12 h-12 rounded-full border border-gray-300 bg-white/50 backdrop-blur hover:bg-white flex items-center justify-center transition-all text-gray-800 shadow-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
              </button>
              <button 
                onClick={() => scrollBy(1)}
                className="w-12 h-12 rounded-full border border-gray-300 bg-white/50 backdrop-blur hover:bg-white flex items-center justify-center transition-all text-gray-800 shadow-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Industries Horizontal Carousel */}
      <section className="py-20 relative z-10 border-b border-gray-200 bg-gray-50/50">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-20 bg-gradient-to-r from-[#f3f1ec] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-8 md:w-20 bg-gradient-to-l from-[#f3f1ec] to-transparent z-20 pointer-events-none"></div>

        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide px-6 md:px-[max(2rem,calc((100vw-80rem)/2))] py-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {industriesData.map((industry) => (
            <Link 
              key={industry.id} 
              to={`/industries/${industry.id}`} 
              className="group w-[85vw] sm:w-[360px] flex-shrink-0 bg-white rounded-[2rem] overflow-hidden transition-all duration-500 border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 flex flex-col"
            >
              {/* Image Header */}
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={industry.imageUrl} 
                  alt={industry.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-80"></div>
                <div className="absolute top-6 left-6 w-14 h-14 rounded-full bg-white flex items-center justify-center text-gray-900 shadow-md group-hover:scale-110 transition-transform duration-300">
                  {industry.icon}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8 pt-8 flex-grow flex flex-col bg-white">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight group-hover:text-green-600 transition-colors">
                  {industry.name}
                </h3>
                <p className="text-[15px] text-gray-600 font-medium leading-relaxed mb-6 flex-grow">
                  {industry.desc}
                </p>
                <div className="flex items-center text-gray-400 text-sm font-bold group-hover:text-green-600 transition-all duration-300 mt-auto">
                  Explore Industry <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default IndustriesPage;
