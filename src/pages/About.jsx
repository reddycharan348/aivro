import React from 'react';
import { Github, Globe, Mail } from 'lucide-react';
import Motive from '../components/Motive';

const About = () => {
  return (
    <div className="bg-[#f3f1ec] min-h-screen relative overflow-hidden">
      
      {/* Background blobs (Opposite colors splitted at corners) */}
      <div 
        className="absolute animate-blob z-0 pointer-events-none"
        style={{
          width: '600px',
          height: '600px',
          backgroundColor: '#3b82f6', /* blue */
          top: '-10%',
          left: '-10%',
          borderRadius: '60% 40% 50% 50% / 50% 60% 40% 50%',
          opacity: 0.5
        }}
      ></div>
      <div 
        className="absolute animate-blob-alt z-0 pointer-events-none"
        style={{
          width: '700px',
          height: '700px',
          backgroundColor: '#fcd34d', /* yellow */
          bottom: '-15%',
          right: '-15%',
          borderRadius: '40% 50% 60% 40% / 50% 40% 50% 60%',
          opacity: 0.6
        }}
      ></div>

      {/* Editorial Page Header */}
      <div className="pt-40 pb-24 relative z-10 text-center border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="text-xs font-bold tracking-wider text-pink-600 uppercase mb-4 block">About Us</span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight mb-8 leading-[1.1]">
            We Build Digital Excellence
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed">
            At Aivro, we engineer high-performance, stunning platforms that help your business grow and dominate the market.
          </p>
        </div>
      </div>
      
      {/* Our Story Section */}
      <section className="py-24 relative z-10 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="text-left">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">Our Story</h2>
              <p className="text-base text-gray-600 font-medium leading-relaxed mb-4">
                Founded by veteran engineers, Aivro was built to eliminate technical debt and bloated infrastructure. We are the premier technical partner for organizations ready to scale.
              </p>
              <p className="text-base text-gray-600 font-medium leading-relaxed">
                From complex cloud migrations to bespoke web applications and automation pipelines, we deliver digital solutions characterized by clean architecture, robust security, and uncompromising performance. We don't just iterate; we innovate.
              </p>
            </div>
            
            {/* Stats Bento Card */}
            <div className="bg-white border border-gray-200 shadow-sm hover:shadow-lg rounded-[32px] flex flex-col justify-center items-center text-center py-10 px-8 transition-all duration-500">
               <h3 className="text-5xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-green-500 to-pink-500 mb-2 tracking-tight">100+</h3>
               <p className="text-gray-500 font-bold uppercase tracking-wider text-[11px] md:text-xs mb-8">Enterprise Projects Deployed</p>
               <h3 className="text-5xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-green-500 to-pink-500 mb-2 tracking-tight">0</h3>
               <p className="text-gray-500 font-bold uppercase tracking-wider text-[11px] md:text-xs">Security Breaches</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 relative z-10 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">What Sets Us Apart</h2>
            <p className="text-base text-gray-600 font-medium">We combine beautiful design, smart technology, and unwavering support to deliver platforms that scale your business.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 shadow-sm p-8 rounded-[2rem] hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-bold text-gray-900 text-lg mb-3 tracking-tight">Pixel-Perfect Design</h3>
              <p className="text-sm text-gray-600 font-medium leading-relaxed">Stunning, responsive UI/UX engineered to convert visitors into loyal customers.</p>
            </div>
            <div className="bg-white border border-gray-200 shadow-sm p-8 rounded-[2rem] hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-bold text-gray-900 text-lg mb-3 tracking-tight">SEO That Ranks</h3>
              <p className="text-sm text-gray-600 font-medium leading-relaxed">Proven technical search strategies ensuring you dominate global and local rankings.</p>
            </div>
            <div className="bg-white border border-gray-200 shadow-sm p-8 rounded-[2rem] hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-bold text-gray-900 text-lg mb-3 tracking-tight">Lightning Fast</h3>
              <p className="text-sm text-gray-600 font-medium leading-relaxed">Sub-second load times optimized for peak performance on all modern networks.</p>
            </div>
            <div className="bg-white border border-gray-200 shadow-sm p-8 rounded-[2rem] hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-bold text-gray-900 text-lg mb-3 tracking-tight">24/7 Support</h3>
              <p className="text-sm text-gray-600 font-medium leading-relaxed">Round-the-clock expert monitoring and maintenance. We never leave you hanging.</p>
            </div>
            <div className="bg-white border border-gray-200 shadow-sm p-8 rounded-[2rem] hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-bold text-gray-900 text-lg mb-3 tracking-tight">Secure & Reliable</h3>
              <p className="text-sm text-gray-600 font-medium leading-relaxed">Ironclad security protocols, continuous backups, and proactive threat monitoring.</p>
            </div>
            <div className="bg-white border border-gray-200 shadow-sm p-8 rounded-[2rem] hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-bold text-gray-900 text-lg mb-3 tracking-tight">On-Time Delivery</h3>
              <p className="text-sm text-gray-600 font-medium leading-relaxed">Transparent communication and strict adherence to clear, predictable timelines.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 relative z-10 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-16 text-left">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Executive Leadership</h2>
            <p className="text-base font-medium text-gray-600 max-w-2xl">Guided by veterans of the technology industry.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            
            {/* Profile 1 (Charan) */}
            <div className="text-left bg-white p-8 md:p-10 rounded-[32px] border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
              <div className="w-full aspect-[4/5] bg-gray-100 rounded-[28px] mb-6 overflow-hidden border border-gray-200 group">
                <img 
                  src="/images/team-charan.avif" 
                  alt="Mr. E. Charan Kumar Reddy" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out" 
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 tracking-tight mb-1">Mr. E. Charan Kumar Reddy</h3>
              <p className="text-green-600 font-bold text-[11px] uppercase tracking-wider mb-1">AI Enthusiast & Explorer</p>
              <p className="text-gray-500 font-semibold text-[11px] tracking-wider mb-5">Electronics & Communication Engineering</p>
              
              <p className="text-sm text-gray-600 font-medium leading-relaxed mb-8 flex-grow">
                Curious explorer of AI technologies and data-driven solutions. Combines technical curiosity with a passion for building web applications as a creative outlet.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {['AI/ML', 'Data Analysis', 'Python', 'Research', 'Web Development', 'Automation'].map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-gray-50 text-gray-700 text-[11px] font-semibold rounded-full border border-gray-200">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-6 border-t border-gray-100 mt-auto">
                <a href="https://github.com/reddycharan348" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://reddycharan.me/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-600 transition-colors">
                  <Globe size={20} />
                </a>
                <a href="mailto:reddycharan348@gmail.com" className="text-gray-400 hover:text-pink-600 transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Profile 2 (Shakthi) */}
            <div className="text-left bg-white p-8 md:p-10 rounded-[32px] border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
              <div className="w-full aspect-[4/5] bg-gray-100 rounded-[28px] mb-6 overflow-hidden border border-gray-200 group">
                <img 
                  src="/images/team-shakthi.avif" 
                  alt="Mr. R. Shakthi Prasad" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out" 
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 tracking-tight mb-1">Mr. R. Shakthi Prasad</h3>
              <p className="text-green-600 font-bold text-[11px] uppercase tracking-wider mb-1">AI Enthusiast & Explorer</p>
              <p className="text-gray-500 font-semibold text-[11px] tracking-wider mb-5">Electronics & Communication Engineering</p>
              
              <p className="text-sm text-gray-600 font-medium leading-relaxed mb-8 flex-grow">
                Passionate about exploring artificial intelligence and its real-world applications. Web development is a creative hobby that brings ideas to life through intuitive digital experiences.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {['AI/ML', 'Prompt Engineering', 'Web Development', 'UI/UX Design', 'Problem Solving', 'Innovation'].map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-gray-50 text-gray-700 text-[11px] font-semibold rounded-full border border-gray-200">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-6 border-t border-gray-100 mt-auto">
                <a href="https://github.com/shakthiprasad243" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://shakthiprasad.me/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-600 transition-colors">
                  <Globe size={20} />
                </a>
                <a href="mailto:shakthiprasad243@gmail.com" className="text-gray-400 hover:text-pink-600 transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <Motive />
    </div>
  );
};

export default About;
