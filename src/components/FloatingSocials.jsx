import React from 'react';
import { Instagram, Mail } from 'lucide-react';

const FloatingSocials = () => {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[100] flex flex-col gap-4 p-3 bg-white/80 backdrop-blur-xl border border-gray-200 shadow-2xl rounded-l-2xl translate-x-1 hover:translate-x-0 transition-transform duration-300">
      
      {/* WhatsApp */}
      <a 
        href="https://wa.me/919032517427" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-md hover:scale-110 hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all duration-300"
        title="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
        </svg>
      </a>

      {/* Instagram */}
      <a 
        href="https://instagram.com/aivro_studio" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] text-white shadow-md hover:scale-110 hover:shadow-[0_0_20px_rgba(225,48,108,0.4)] transition-all duration-300"
        title="Follow on Instagram"
      >
        <Instagram size={24} />
      </a>

      {/* Email */}
      <a 
        href="mailto:aivro348@gmail.com" 
        className="w-12 h-12 flex items-center justify-center rounded-full bg-[#EA4335] text-white shadow-md hover:scale-110 hover:shadow-[0_0_20px_rgba(234,67,53,0.4)] transition-all duration-300"
        title="Email Us"
      >
        <Mail size={24} />
      </a>

    </div>
  );
};

export default FloatingSocials;
