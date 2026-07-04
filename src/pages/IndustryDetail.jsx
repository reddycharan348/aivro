import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { industriesData } from '../data/constants';

const IndustryDetail = () => {
  const { id } = useParams();
  const industry = industriesData.find((i) => i.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!industry) {
    return <Navigate to="/industries" replace />;
  }

  return (
    <div className="bg-[#f3f1ec] min-h-screen pt-32 pb-20 relative overflow-hidden">
      
      {/* Background blobs (Opposite colors splitted at corners) */}
      <div 
        className="absolute animate-blob-alt z-0 pointer-events-none"
        style={{
          width: '500px',
          height: '500px',
          backgroundColor: '#fcd34d', /* yellow */
          top: '-5%',
          left: '-10%',
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
          right: '-10%',
          borderRadius: '40% 50% 60% 40% / 50% 40% 50% 60%',
          opacity: 0.5
        }}
      ></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Back Link */}
        <Link 
          to="/industries" 
          className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-green-600 transition-colors mb-8"
        >
          <ArrowLeft size={16} className="mr-2" /> Back to Industries
        </Link>

        {/* Hero Section of Detail Page */}
        <div className="bg-gray-900 rounded-[2rem] overflow-hidden mb-16 shadow-lg border border-gray-800 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image Side */}
            <div className="h-64 lg:h-auto relative">
              <img 
                src={industry.imageUrl} 
                alt={industry.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent lg:hidden"></div>
            </div>
            
            {/* Content Side */}
            <div className="p-8 lg:p-16 flex flex-col justify-center">
              <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mb-6 text-white shadow-sm backdrop-blur-md">
                {industry.icon}
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                {industry.name} Solutions
              </h1>
              <p className="text-lg text-gray-400 font-medium leading-relaxed mb-8">
                {industry.longDesc}
              </p>
              
              <div className="flex items-center gap-4">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-green-500 hover:shadow-[0_10px_30px_rgba(74,222,128,0.3)] rounded-full transition-all hover:-translate-y-1 active:scale-95"
                >
                  Consult an Expert
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white border border-gray-200 shadow-sm p-8 rounded-[2rem] hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Industry Challenges</h3>
            <ul className="space-y-3">
              {[1, 2, 3].map((i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 size={20} className="text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 font-medium">Addressing legacy systems and scale.</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white border border-gray-200 shadow-sm p-8 rounded-[2rem] hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Solutions</h3>
            <ul className="space-y-3">
              {[1, 2, 3].map((i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 font-medium">Modern, cloud-native architecture.</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white border border-gray-200 shadow-sm p-8 rounded-[2rem] hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-xl font-bold text-gray-900 mb-4">The Impact</h3>
            <ul className="space-y-3">
              {[1, 2, 3].map((i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 size={20} className="text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 font-medium">Increased efficiency and revenue.</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryDetail;
