import React from 'react';

const Testimonials = () => {
  const reviews = [
    { name: "Marcus Thorne", role: "VP of Product, TechFlow Inc.", text: "Aivro completely revolutionized our enterprise platform architecture. Their attention to detail and high-performance design exceeded every expectation." },
    { name: "Seraphina Vance", role: "Founder, Elysian Retail", text: "We commissioned Aivro to build a bespoke Next.js mobile system. The user conversion doubled, and the technical implementation was flawless." },
    { name: "Dr. Kenji Sato", role: "AI Research Lead, NeuralGrid", text: "Their implementation of automated workflows and system architecture is outstanding. They are a top-tier technical partner." },
    { name: "Elena Rostova", role: "Marketing Director, VeloTech", text: "The quality of code, speed, and design is exceptional. Aivro operates at a level far above traditional digital agencies." },
    { name: "Devon Sinclair", role: "Managing Director, Apex Luxury", text: "A clean, highly performant UI/UX deployment. Aivro delivered a corporate platform that truly reflects our professional standing." }
  ];

  return (
    <section id="testimonials" className="py-32 overflow-hidden relative" style={{ backgroundColor: '#f3f1ec' }}>
      
      {/* Background blobs (Opposite colors splitted at corners) */}
      <div 
        className="absolute animate-blob-alt z-0 pointer-events-none"
        style={{
          width: '500px',
          height: '500px',
          backgroundColor: '#34e89e', /* green */
          bottom: '-10%',
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
          backgroundColor: '#fcd34d', /* yellow */
          top: '-15%',
          right: '-15%',
          borderRadius: '40% 50% 60% 40% / 50% 40% 50% 60%',
          opacity: 0.7
        }}
      ></div>

      <div className="container mx-auto px-4 max-w-7xl mb-16 text-center relative z-10">
        <span className="text-xs font-bold tracking-wider text-green-600 uppercase mb-4 block">Client Feedback</span>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Trusted by Industry Leaders
        </h2>
        <p className="text-base text-gray-600 font-medium max-w-2xl mx-auto">
          See what our clients say about our technical expertise and project delivery.
        </p>
      </div>
      
      {/* Marquee Scrolling Container */}
      <div className="relative w-full flex overflow-x-hidden z-10">
        {/* Fading edges for the marquee */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#f3f1ec] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#f3f1ec] to-transparent z-20 pointer-events-none"></div>

        <div className="animate-marquee flex space-x-6 whitespace-nowrap px-4 py-6" style={{ animation: 'marquee 40s linear infinite' }}>
          {[...reviews, ...reviews].map((review, index) => (
            <div key={index} className="inline-block w-[360px] bg-white border border-gray-200 shadow-sm p-8 rounded-[2rem] flex-shrink-0 whitespace-normal text-left hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="flex text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-[15px] text-gray-600 font-medium mb-8 leading-relaxed">
                "{review.text}"
              </p>
              <div>
                <h4 className="font-bold text-gray-900 text-base tracking-tight">{review.name}</h4>
                <p className="text-xs font-bold text-gray-500 mt-1 uppercase tracking-wider">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
