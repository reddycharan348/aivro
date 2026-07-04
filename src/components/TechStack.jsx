import React from 'react';

const TechStack = () => {
  const technologies = [
    { name: 'React', category: 'Frontend' },
    { name: 'Next.js', category: 'Framework' },
    { name: 'Tailwind CSS', category: 'Styling' },
    { name: 'WordPress', category: 'CMS' },
    { name: 'Shopify', category: 'E-Commerce' },
    { name: 'Figma', category: 'Design' },
    { name: 'Google Analytics', category: 'Analytics' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'Vercel', category: 'Hosting' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'Firebase', category: 'Backend' },
    { name: 'Stripe', category: 'Payments' },
    { name: 'WhatsApp API', category: 'Automation' },
    { name: 'SEMrush', category: 'SEO' },
  ];

  return (
    <section id="tech-stack" className="relative py-32 overflow-hidden" style={{ backgroundColor: '#f3f1ec' }}>
      
      {/* Background blobs (Opposite colors splitted at corners) */}
      <div 
        className="absolute animate-blob z-0 pointer-events-none"
        style={{
          width: '500px',
          height: '500px',
          backgroundColor: '#3b82f6', /* blue */
          top: '-10%',
          right: '-10%',
          borderRadius: '60% 40% 50% 50% / 50% 60% 40% 50%',
          opacity: 0.6
        }}
      ></div>
      <div 
        className="absolute animate-blob-alt z-0 pointer-events-none"
        style={{
          width: '600px',
          height: '600px',
          backgroundColor: '#fcd34d', /* yellow */
          bottom: '-15%',
          left: '-15%',
          borderRadius: '40% 50% 60% 40% / 50% 40% 50% 60%',
          opacity: 0.7
        }}
      ></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs font-bold tracking-wider text-green-600 uppercase mb-3 block">Technology Stack</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Built With the Best Tools
          </h2>
          <p className="text-base text-gray-600 font-medium">
            We use industry-leading technologies to ensure your website is fast, secure, scalable, and future-proof.
          </p>
        </div>

        {/* Tech grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group relative bg-white border border-gray-100 shadow-sm rounded-2xl p-5 text-center hover:bg-gray-50 hover:shadow-md transition-all duration-500 hover:-translate-y-1 cursor-default"
            >
              <div className="relative z-10">
                <h3 className="text-sm font-bold text-gray-900 mb-1 tracking-tight group-hover:text-green-600 transition-colors">
                  {tech.name}
                </h3>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                  {tech.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
