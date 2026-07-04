import React from 'react';
import { ArrowRight, Code, Smartphone, Monitor, Gamepad2, Search } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col justify-center bg-gray-50 pt-24 pb-32">

      {/* Background Image with Gradient Fade */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-left md:bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=2850&q=80")',
          }}
        ></div>
        {/* Gradient to make text readable on the right side */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent md:from-transparent md:via-white/80 md:to-white"></div>
        <div className="absolute inset-0 bg-white/40 md:bg-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row items-center">

          {/* Left Side (Empty on Desktop to show image, hidden on mobile) */}
          <div className="hidden md:block md:w-1/2"></div>

          {/* Right Side Text Content */}
          <div className="w-full md:w-1/2 md:pl-12 lg:pl-20 flex flex-col items-start text-left py-12">

            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-gray-800 font-light leading-tight mb-6 tracking-tight">
              We Build <br />
              <span className="inline-block mt-2 bg-green-500 text-white px-5 py-1.5 rounded-xl font-semibold shadow-sm transform -rotate-1">
                Digital Experiences
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-700 mb-10 max-w-lg leading-relaxed font-medium">
              Transform your business with stunning websites, powerful SEO, Google Analytics, WhatsApp automation, and round-the-clock expert support — everything you need to dominate online.
            </p>

            <div className="flex flex-wrap gap-4 items-center mb-12">
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-green-500 text-white text-sm font-bold shadow-[0_8px_20px_rgba(34,197,94,0.4)] transition-all hover:bg-green-600 hover:-translate-y-1 active:scale-95"
              >
                Start Your Project <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/portfolio"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-gray-900 text-sm font-bold border border-gray-200 shadow-sm transition-all hover:bg-gray-50 hover:-translate-y-1 active:scale-95"
              >
                View Our Work
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Floating Bottom Card */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 z-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gray-100/95 backdrop-blur-xl rounded-[2rem] p-6 lg:p-8 shadow-2xl border border-white flex flex-col lg:flex-row gap-8 items-center">

            {/* Text Description (Left Side) */}
            <div className="flex-1 w-full flex flex-col items-start lg:border-r border-gray-300 lg:pr-8 text-left">
              <h2 className="text-2xl font-extrabold text-gray-900 mb-1.5">Website Development</h2>
              <p className="text-sm font-medium text-gray-700 mb-6">End-to-end website development solutions</p>
              <div className="text-[11px] font-semibold text-gray-500 mb-2">We specialize in</div>
              <div className="bg-gray-600/90 text-white text-[11px] font-medium px-4 py-2 rounded-full inline-block shadow-sm">
                eCommerce Website Development
              </div>
            </div>

            {/* Service Cards (Right Side) */}
            <div className="flex gap-3 overflow-x-auto w-full lg:w-auto pb-4 lg:pb-0 hide-scrollbar snap-x">

              <div className="flex-shrink-0 w-28 h-28 rounded-2xl bg-[#3bd964] text-white flex flex-col items-center justify-center gap-2 shadow-lg shadow-[#3bd964]/30 transform transition-transform hover:-translate-y-1 snap-center cursor-pointer">
                <Code size={32} />
                <span className="text-xs font-bold">Website</span>
              </div>

              <div className="flex-shrink-0 w-28 h-28 rounded-2xl bg-[#3adcd6] text-white flex flex-col items-center justify-center gap-2 shadow-lg shadow-[#3adcd6]/30 transform transition-transform hover:-translate-y-1 snap-center cursor-pointer">
                <Smartphone size={32} />
                <span className="text-xs font-bold text-center leading-tight">Mobile App</span>
              </div>

              <div className="flex-shrink-0 w-28 h-28 rounded-2xl bg-[#a3cc39] text-white flex flex-col items-center justify-center gap-2 shadow-lg shadow-[#a3cc39]/30 transform transition-transform hover:-translate-y-1 snap-center cursor-pointer">
                <Monitor size={32} />
                <span className="text-xs font-bold text-center leading-tight">CRM / ERP</span>
              </div>

              <div className="flex-shrink-0 w-28 h-28 rounded-2xl bg-[#3ebcf0] text-white flex flex-col items-center justify-center gap-2 shadow-lg shadow-[#3ebcf0]/30 transform transition-transform hover:-translate-y-1 snap-center cursor-pointer">
                <Gamepad2 size={32} />
                <span className="text-xs font-bold">Game</span>
              </div>

              <div className="flex-shrink-0 w-28 h-28 rounded-2xl bg-[#fca93f] text-white flex flex-col items-center justify-center gap-2 shadow-lg shadow-[#fca93f]/30 transform transition-transform hover:-translate-y-1 snap-center cursor-pointer">
                <Search size={32} />
                <span className="text-xs font-bold">SEO</span>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for hiding scrollbar in service cards on mobile */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
};

export default Hero;
