import React from 'react';
import { ClipboardList, PenTool, Code2, TestTube2, Rocket, Headphones, ArrowRight } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'Requirement Analysis',
      desc: 'We sit down with you to understand your business, goals, and target audience. No assumptions — just clear, documented requirements.',
      icon: <ClipboardList size={22} />,
      gradient: 'from-blue-500 to-cyan-400',
    },
    {
      number: '02',
      title: 'Design & Mockups',
      desc: 'Our designers create beautiful mockups and wireframes. You see exactly how your website will look before we write any code.',
      icon: <PenTool size={22} />,
      gradient: 'from-violet-500 to-purple-400',
    },
    {
      number: '03',
      title: 'Development',
      desc: 'We build your website using clean, fast, modern code. Mobile-first, SEO-ready, and optimized for speed from day one.',
      icon: <Code2 size={22} />,
      gradient: 'from-green-500 to-emerald-400',
    },
    {
      number: '04',
      title: 'Testing',
      desc: 'Every page, button, and form is tested across all devices and browsers. We fix every bug before you see the final product.',
      icon: <TestTube2 size={22} />,
      gradient: 'from-amber-500 to-yellow-400',
    },
    {
      number: '05',
      title: 'Launch',
      desc: 'Your website goes live! We handle deployment, domain setup, SSL certificates, and Google Analytics configuration.',
      icon: <Rocket size={22} />,
      gradient: 'from-red-500 to-rose-400',
    },
    {
      number: '06',
      title: 'Ongoing Support',
      desc: 'We don\'t disappear after launch. Get 24/7 support, regular updates, security monitoring, and performance optimization.',
      icon: <Headphones size={22} />,
      gradient: 'from-indigo-500 to-blue-400',
    },
  ];

  return (
    <section id="process" className="py-32 overflow-hidden relative" style={{ backgroundColor: '#f3f1ec' }}>
      {/* Animated Background Shapes matching reference image 2 (Pink Blob) */}
      <div 
        className="absolute animate-blob z-0 pointer-events-none"
        style={{
          width: '800px',
          height: '800px',
          backgroundColor: '#fcd2f9', /* light pink from screenshot */
          top: '-10%',
          right: '-15%',
          borderRadius: '40% 60% 50% 40% / 50% 40% 60% 50%',
          opacity: 0.9
        }}
      ></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <span className="text-xs font-bold tracking-wider text-green-600 uppercase mb-4 block">Our Process</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Life beyond the <span className="text-green-700">Lab</span>
          </h2>
          <p className="text-base text-gray-700 font-medium max-w-2xl mx-auto leading-relaxed">
            At Aivro, every project begins with a bold idea. Our team then brings these ideas to life, giving you access to our latest innovations and shaping them into products that become part of everyday life.
          </p>
        </div>

        {/* Steps */}
        <div className="relative max-w-5xl mx-auto">
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative group"
              >
                {/* Step card */}
                <div className="bg-white rounded-[24px] p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 h-full flex flex-col">
                  {/* Number + Icon row */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white shadow-md`}>
                      {step.icon}
                    </div>
                    <span className="text-4xl font-black text-gray-200 group-hover:text-gray-300 transition-colors">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-[15px] text-gray-600 font-medium leading-relaxed flex-grow">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA below process */}
        <div className="text-center mt-20">
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gray-900 text-white text-sm font-semibold hover:shadow-xl hover:shadow-gray-900/20 transition-all hover:-translate-y-1 active:scale-95"
          >
            Start Your Journey <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;
