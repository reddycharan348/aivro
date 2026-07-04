import React from 'react';
import { ExternalLink, Target, Lightbulb, TrendingUp, Building2, ShieldCheck, ShoppingCart } from 'lucide-react';
import TiltCard from '../components/TiltCard';

const Portfolio = () => {
  const projects = [
    {
      title: "Naveen Textiles",
      category: "E-Commerce Platform",
      image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=800&auto=format&fit=crop",
      url: "https://naveentextiles.online",
      challenge: "Transforming a massive offline inventory into a seamless digital storefront without compromising mobile load speeds.",
      solution: "Engineered a high-performance e-commerce architecture with a dynamic global CDN for instant image delivery.",
      impact: "Reduced cart abandonment by 40% and drastically increased online sales in Q1."
    },
    {
      title: "RVS Hydraulics",
      category: "Industrial & Manufacturing",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
      url: "https://rvshydraulics.com",
      challenge: "Replacing an outdated PDF-based catalog with a professional, searchable digital platform for B2B clients.",
      solution: "Developed a structured B2B portal featuring advanced filtering and a direct quote-request pipeline.",
      impact: "Streamlined the entire sales process, increasing inbound B2B inquiries by over 200%."
    },
    {
      title: "Balu Associates",
      category: "Real Estate & Consulting",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",
      url: "https://baluassociates.net",
      challenge: "Establishing a premium corporate identity to attract high-net-worth investors in a competitive market.",
      solution: "Crafted an elegant, responsive platform emphasizing trust signals and dynamic property showcases.",
      impact: "Solidified market positioning and improved organic search visibility by 80%."
    },
    {
      title: "Kada GWRS",
      category: "Custom Web Application",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      url: "https://kadagwrs.vercel.app",
      challenge: "Processing and displaying highly complex data dynamically without any user-facing latency.",
      solution: "Architected a Next.js application deployed on edge networks for instantaneous real-time data fetching.",
      impact: "Achieved a perfect Lighthouse score, providing an incredibly fluid experience on all devices."
    }
  ];

  return (
    <div className="bg-[#f3f1ec] min-h-screen relative overflow-hidden">
      
      {/* Background blobs */}
      <div 
        className="absolute animate-blob-alt z-0 pointer-events-none"
        style={{
          width: '650px',
          height: '650px',
          backgroundColor: '#34e89e', /* green */
          top: '-10%',
          right: '-10%',
          borderRadius: '50% 60% 40% 50% / 60% 40% 50% 40%',
          opacity: 0.6
        }}
      ></div>
      <div 
        className="absolute animate-blob z-0 pointer-events-none"
        style={{
          width: '750px',
          height: '750px',
          backgroundColor: '#fcd2f9', /* pink */
          bottom: '-15%',
          left: '-15%',
          borderRadius: '40% 50% 60% 40% / 50% 40% 50% 60%',
          opacity: 0.7
        }}
      ></div>

      {/* Editorial Page Header */}
      <div className="pt-40 pb-24 relative z-10 text-center border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="text-xs font-bold tracking-wider text-pink-600 uppercase mb-4 block">Case Studies</span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight mb-8 leading-[1.1]">
            Engineering Success Stories
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
            Explore our curated gallery of enterprise deployments. Each case study details the unique technical challenges we faced, our architectural solutions, and the measurable business impact delivered.
          </p>
        </div>
      </div>

      {/* Case Studies Grid */}
      <section className="py-24 relative z-10 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <a 
                key={index} 
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full bg-white rounded-[2rem] overflow-hidden transition-all duration-500 border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 flex flex-col"
              >
                {/* Image Header */}
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-80"></div>
                  <div className="absolute top-6 left-6 w-14 h-14 rounded-full bg-white flex items-center justify-center text-green-600 shadow-md group-hover:scale-110 transition-transform duration-300">
                    <ExternalLink size={24} />
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8 pt-8 flex-grow flex flex-col bg-white">
                  <span className="text-xs font-bold text-green-600 mb-2 block uppercase tracking-wider">{project.category}</span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight group-hover:text-green-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[15px] text-gray-600 font-medium leading-relaxed mb-6 flex-grow">
                    {project.solution} {project.impact}
                  </p>
                  <div className="flex items-center text-gray-400 text-sm font-bold group-hover:text-green-600 transition-all duration-300 mt-auto">
                    View Live Project <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-24 relative z-10 border-t border-gray-200">
        <div className="container mx-auto px-4 max-w-7xl">
           <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Industries We Serve</h2>
            <p className="text-base font-medium text-gray-600">We engineer specialized solutions tailored to the strict compliance and performance requirements of complex sectors.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
             <div className="bg-white border border-gray-200 shadow-sm p-8 rounded-[2rem] text-center flex flex-col items-center hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-green-50 border border-green-100 flex items-center justify-center mb-6">
                  <Building2 className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 tracking-tight">Financial Technology</h3>
                <p className="text-sm text-gray-600 font-medium leading-relaxed">We build high-frequency trading dashboards, secure payment gateways, and scalable ledger databases that comply with PCI-DSS and SOC2 standards.</p>
             </div>
             
             <div className="bg-white border border-gray-200 shadow-sm p-8 rounded-[2rem] text-center flex flex-col items-center hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-green-50 border border-green-100 flex items-center justify-center mb-6">
                  <ShieldCheck className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 tracking-tight">Healthcare IT</h3>
                <p className="text-sm text-gray-600 font-medium leading-relaxed">Our HIPAA-compliant architectures ensure patient data security while providing interoperable APIs (FHIR) for modern telehealth applications.</p>
             </div>
             
             <div className="bg-white border border-gray-200 shadow-sm p-8 rounded-[2rem] text-center flex flex-col items-center hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-green-50 border border-green-100 flex items-center justify-center mb-6">
                  <ShoppingCart className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 tracking-tight">Enterprise E-Commerce</h3>
                <p className="text-sm text-gray-600 font-medium leading-relaxed">Headless commerce architectures capable of handling 10,000+ checkouts per minute without downtime during peak retail events.</p>
             </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Portfolio;
