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
    <div className="min-h-screen relative bg-[#f3f1ec]">
      
      {/* Dark Hero Section */}
      <div className="bg-[#1e293b] pt-32 pb-40 relative px-4">
        {/* Background Decorative Blobs for Dark Section */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 -left-24 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          
          {/* Back Link */}
          <Link 
            to="/industries" 
            className="inline-flex items-center text-sm font-bold text-gray-400 hover:text-white transition-colors mb-12 uppercase tracking-widest"
          >
            <ArrowLeft size={16} className="mr-2" /> Back to Industries
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content Side */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#ff5a00] mb-6 tracking-tight leading-tight">
                {industry.name} Solutions
              </h1>
              <p className="text-lg md:text-xl text-gray-300 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
                {industry.longDesc}
              </p>
            </div>
            
            {/* Image Side */}
            <div className="order-1 lg:order-2 relative rounded-[2rem] overflow-hidden border-4 border-white/20 shadow-2xl mx-auto w-full max-w-lg">
              <img 
                src={industry.imageUrl} 
                alt={industry.name} 
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                <Link 
                  to="/contact" 
                  className="inline-flex whitespace-nowrap items-center justify-center px-6 py-3 text-sm font-bold text-white bg-[#ff5a00] hover:bg-[#e04f00] rounded-full shadow-[0_10px_20px_rgba(255,90,0,0.3)] transition-all hover:-translate-y-1 uppercase tracking-wider"
                >
                  Consult an Expert
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Details Grid (Overlapping) */}
      <div className="container mx-auto px-4 max-w-7xl relative z-20 -mt-24 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white shadow-xl rounded-[2rem] p-8 flex flex-col items-center border border-gray-100 transition-transform hover:-translate-y-2">
            <div className="w-14 h-14 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center mb-6 text-[#ff5a00]">
              <CheckCircle2 size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Industry Challenges</h3>
            <ul className="space-y-4 w-full text-left flex-grow">
              {[1, 2, 3].map((i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 size={18} className="text-[#ff5a00] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 font-medium text-sm leading-relaxed">Addressing legacy systems and scale.</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-xl rounded-[2rem] p-8 flex flex-col items-center border border-gray-100 transition-transform hover:-translate-y-2">
            <div className="w-14 h-14 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center mb-6 text-[#ff5a00]">
              <CheckCircle2 size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Our Solutions</h3>
            <ul className="space-y-4 w-full text-left flex-grow">
              {[1, 2, 3].map((i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 size={18} className="text-[#ff5a00] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 font-medium text-sm leading-relaxed">Modern, cloud-native architecture.</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-xl rounded-[2rem] p-8 flex flex-col items-center border border-gray-100 transition-transform hover:-translate-y-2">
            <div className="w-14 h-14 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center mb-6 text-[#ff5a00]">
              <CheckCircle2 size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">The Impact</h3>
            <ul className="space-y-4 w-full text-left flex-grow">
              {[1, 2, 3].map((i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 size={18} className="text-[#ff5a00] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 font-medium text-sm leading-relaxed">Increased efficiency and revenue.</span>
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
