import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Motive from '../components/Motive';
import Process from '../components/Process';
import Industries from '../components/Industries';
import Pricing from '../components/Pricing';
import TechStack from '../components/TechStack';

import ScrollSequence from '../components/ScrollSequence';

const Home = () => {
  return (
    <div className="bg-transparent relative">
      <ScrollSequence />
      <Hero />
      <Motive />
      
      {/* Key Metrics Section - Bento Grid */}
      <section className="py-20 relative" style={{ backgroundColor: '#f3f1ec' }}>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-white shadow-sm border border-gray-100 rounded-[2rem] p-8 flex flex-col justify-center items-center text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl md:text-5xl font-black mb-2 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-green-500 to-pink-500">150+</div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Projects</p>
            </div>
            <div className="bg-white shadow-sm border border-gray-100 rounded-[2rem] p-8 flex flex-col justify-center items-center text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl md:text-5xl font-black mb-2 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-green-500 to-pink-500">98%</div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Success</p>
            </div>
            <div className="bg-white shadow-sm border border-gray-100 rounded-[2rem] p-8 flex flex-col justify-center items-center text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl md:text-5xl font-black mb-2 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-green-500 to-pink-500">16+</div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Awards</p>
            </div>
            <div className="bg-white shadow-sm border border-gray-100 rounded-[2rem] p-8 flex flex-col justify-center items-center text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl md:text-5xl font-black mb-2 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-green-500 to-pink-500">24/7</div>
              <div className="text-gray-500 text-xs font-bold uppercase tracking-widest">Expert Support</div>
            </div>
          </div>
        </div>
      </section>

      <Services />
      <Process />
      <Industries />
      <Pricing />
      <TechStack />
      <Testimonials />
    </div>
  );
};

export default Home;
