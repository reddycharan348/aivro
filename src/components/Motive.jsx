import React from 'react';
import { Palette, Search, Headphones, Zap, Shield, Clock } from 'lucide-react';

const Motive = () => {
  const motives = [
    {
      title: "Pixel-Perfect Design",
      icon: <Palette size={22} />,
      desc: "Every website we build is visually stunning, responsive, and designed to convert visitors into customers.",
      gradient: 'from-blue-500 to-cyan-400',
    },
    {
      title: "SEO That Ranks",
      icon: <Search size={22} />,
      desc: "We don't just build websites — we make sure they get found on Google with proven SEO strategies.",
      gradient: 'from-green-500 to-emerald-400',
    },
    {
      title: "Lightning Fast",
      icon: <Zap size={22} />,
      desc: "Sub-second load times. Our websites are optimized for performance so visitors never wait.",
      gradient: 'from-amber-500 to-yellow-400',
    },
    {
      title: "24/7 Support",
      icon: <Headphones size={22} />,
      desc: "Round-the-clock expert support, maintenance, and monitoring — we never leave you hanging.",
      gradient: 'from-violet-500 to-purple-400',
    },
    {
      title: "Secure & Reliable",
      icon: <Shield size={22} />,
      desc: "SSL certificates, regular backups, and security monitoring keep your website safe and protected.",
      gradient: 'from-red-500 to-rose-400',
    },
    {
      title: "On-Time Delivery",
      icon: <Clock size={22} />,
      desc: "We deliver projects on schedule, every time. Clear timelines and transparent communication throughout.",
      gradient: 'from-teal-500 to-cyan-400',
    },
  ];

  return (
    <section id="why-us" className="py-32 bg-transparent relative border-t border-gray-200">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left Column (Sticky Header) */}
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <span className="text-xs font-bold tracking-wider text-pink-600 uppercase mb-4 block">Why Choose Aivro</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight leading-[1.1]">
                What Sets Us Apart
              </h2>
              <p className="text-lg text-gray-600 font-medium leading-relaxed">
                We combine beautiful design, smart technology, and unwavering support to deliver websites that truly grow your business.
              </p>
            </div>
          </div>

          {/* Right Column (Cards) */}
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-6">
              {motives.map((motive, index) => (
                <div 
                  key={index}
                  className="group bg-white rounded-[2rem] p-8 md:p-10 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col"
                >
                  <div className="w-14 h-14 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center mb-8 text-gray-900 group-hover:bg-green-500 group-hover:text-white group-hover:border-green-500 transition-all duration-300">
                    {motive.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-tight group-hover:text-green-600 transition-colors">
                    {motive.title}
                  </h3>
                  
                  <p className="text-[15px] text-gray-600 font-medium leading-relaxed flex-grow">
                    {motive.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Motive;
