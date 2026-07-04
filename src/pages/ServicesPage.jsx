import React from 'react';
import SEO from '../components/SEO';
import Process from '../components/Process';
import { ArrowRight } from 'lucide-react';
import { servicesData } from '../data/constants';
import { Link } from 'react-router-dom';
import Industries from '../components/Industries';

const ServicesPage = () => {
  return (
    <div className="bg-[#f3f1ec] min-h-screen relative overflow-hidden">
      <SEO title="Our Services" description="Explore our premium web design, app development, SEO, and AI automation services engineered to scale your business." />
      
      {/* Background blobs (Opposite colors splitted at corners) */}
      <div 
        className="absolute animate-blob-alt z-0 pointer-events-none"
        style={{
          width: '500px',
          height: '500px',
          backgroundColor: '#34e89e', /* green */
          top: '-10%',
          left: '-10%',
          borderRadius: '60% 40% 50% 50% / 50% 60% 40% 50%',
          opacity: 0.6
        }}
      ></div>
      <div 
        className="absolute animate-blob z-0 pointer-events-none"
        style={{
          width: '600px',
          height: '600px',
          backgroundColor: '#3b82f6', /* blue */
          bottom: '-15%',
          right: '-15%',
          borderRadius: '40% 50% 60% 40% / 50% 40% 50% 60%',
          opacity: 0.5
        }}
      ></div>

      {/* Page Header */}
      <div className="pt-40 pb-24 relative z-10 text-center border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="text-xs font-bold tracking-wider text-pink-600 uppercase mb-4 block">Our Services</span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight mb-8 leading-[1.1]">
            Everything Your Business Needs Online
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
            From stunning website design and development to SEO, Google Analytics, WhatsApp automation, and 24/7 support — we provide end-to-end digital solutions that help your business thrive.
          </p>
        </div>
      </div>

      {/* Static Services Grid */}
      <div className="container mx-auto px-4 max-w-7xl py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const rotations = ['-rotate-3', 'rotate-0', 'rotate-2', '-rotate-2', 'rotate-3'];
            const rotationClass = rotations[index % rotations.length];
            const translateY = index % 2 === 0 ? 'translate-y-4' : '-translate-y-2';

            return (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className={`group bg-white rounded-[32px] overflow-hidden transition-all duration-500 flex flex-col hover:shadow-2xl shadow-lg border border-gray-100 transform ${rotationClass} ${translateY} hover:rotate-0 hover:-translate-y-4`}
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

      <Process />
    </div>
  );
};

export default ServicesPage;
