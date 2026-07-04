import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {

  return (
    <div className="bg-[#f3f1ec] min-h-screen relative overflow-hidden">
      
      {/* Background blobs (Opposite colors splitted at corners) */}
      <div 
        className="absolute animate-blob-alt z-0 pointer-events-none"
        style={{
          width: '550px',
          height: '550px',
          backgroundColor: '#34e89e', /* green */
          top: '-5%',
          right: '-10%',
          borderRadius: '50% 60% 40% 50% / 60% 40% 50% 40%',
          opacity: 0.6
        }}
      ></div>
      <div 
        className="absolute animate-blob z-0 pointer-events-none"
        style={{
          width: '650px',
          height: '650px',
          backgroundColor: '#fcd2f9', /* pink */
          bottom: '-5%',
          left: '-10%',
          borderRadius: '40% 50% 60% 40% / 50% 40% 50% 60%',
          opacity: 0.7
        }}
      ></div>

      {/* Editorial Page Header */}
      <div className="pt-40 pb-24 relative z-10 text-center border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="text-xs font-bold tracking-wider text-pink-600 uppercase mb-4 block">Get in Touch</span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight mb-8 leading-[1.1]">
            Contact Our Engineering Team
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed">
            Whether you are planning a massive cloud migration, a bespoke web application, or need technical consulting, our senior architects are ready to discuss your requirements.
          </p>
        </div>
      </div>

      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            
            {/* Contact Information (2 columns wide) */}
            <div className="lg:col-span-2 space-y-8 text-left">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-6 tracking-tight">Global Headquarters</h2>
                <p className="text-sm text-gray-600 font-medium leading-relaxed mb-8">
                  Aivro operates globally with our primary engineering hubs positioned to serve enterprise clients across major time zones. Reach out directly or fill out the consultation request to speak with a systems architect.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-1">Office Location</h4>
                    <p className="text-sm text-gray-600 font-medium leading-relaxed">100 Tech Innovation Way<br/>Suite 500<br/>San Francisco, CA 94105</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-1">Email Inquiries</h4>
                    <p className="text-sm text-gray-600 font-medium leading-relaxed">aivro348@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-1">Direct Lines</h4>
                    <p className="text-sm text-gray-600 font-medium leading-relaxed">+1 (800) 555-0199<br/>Mon-Fri, 9am - 6pm PST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Bento Card (3 columns wide) */}
            <div className="lg:col-span-3">
              <form 
                className="bg-white border border-gray-200 shadow-sm hover:shadow-lg p-8 md:p-10 rounded-[32px] text-left transition-all duration-300"
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target);
                  const name = formData.get('name');
                  const whatsapp = formData.get('whatsapp');
                  const businessType = formData.get('businessType');
                  
                  const text = `Hi, I would like to get a free quote.%0A%0A*Name:* ${name}%0A*WhatsApp:* ${whatsapp}%0A*Business Type:* ${businessType}`;
                  
                  // Note: Replace 919032517427 with your actual WhatsApp business number if needed
                  window.open(`https://wa.me/919032517427?text=${text}`, '_blank');
                }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">Get Your Free Quote</h2>
                <p className="text-sm text-gray-600 font-medium mb-6">Fill this form or chat on WhatsApp</p>
                
                <div className="mb-4">
                  <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wider">Your Name *</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-900 font-medium placeholder-gray-400 focus:bg-white focus:border-green-500/50 focus:ring-4 focus:ring-green-500/10 outline-none transition-all" 
                    placeholder="John Smith" 
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wider">WhatsApp Number *</label>
                  <input 
                    type="tel" 
                    name="whatsapp"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-900 font-medium placeholder-gray-400 focus:bg-white focus:border-green-500/50 focus:ring-4 focus:ring-green-500/10 outline-none transition-all" 
                    placeholder="+91 90325 17427" 
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wider">Business Type *</label>
                  <select 
                    name="businessType"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm font-medium text-gray-900 focus:bg-white focus:border-green-500/50 focus:ring-4 focus:ring-green-500/10 outline-none transition-all appearance-none" 
                  >
                    <option value="" disabled selected>Select business type</option>
                    <option value="Software Dev">Software Dev</option>
                    <option value="Automation">Automation</option>
                    <option value="Consulting">Consulting</option>
                    <option value="E-Commerce">E-Commerce</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full py-4 rounded-full bg-green-500 text-white text-sm font-bold hover:shadow-[0_10px_30px_rgba(74,222,128,0.3)] transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2"
                >
                  Get My Free Quote <span className="text-lg">→</span>
                </button>
                <div className="text-center mt-4 space-y-2">
                  <p className="text-[12px] text-gray-600 font-medium">We'll contact you on WhatsApp within 24 hours.</p>
                  <p className="text-[11px] text-gray-500 font-medium">Note: Hosting & domain costs are separate and charged by your provider.</p>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 relative z-10 border-t border-gray-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Frequently Asked Questions</h2>
            <p className="text-base font-medium text-gray-600">Common inquiries from our enterprise partners.</p>
          </div>
          
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 shadow-sm p-8 rounded-[2rem] text-left hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-lg font-bold text-gray-900 mb-3 tracking-tight">What is your typical project timeline?</h3>
              <p className="text-sm text-gray-600 font-medium leading-relaxed">Timelines vary depending on scope, but a standard project typically takes 10 to 30 days from discovery to initial deployment. Complex migrations or massive enterprise architectures may span longer across phased rollouts.</p>
            </div>
            
            <div className="bg-white border border-gray-200 shadow-sm p-8 rounded-[2rem] text-left hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-lg font-bold text-gray-900 mb-3 tracking-tight">How do you handle Intellectual Property (IP)?</h3>
              <p className="text-sm text-gray-600 font-medium leading-relaxed">Upon final payment, all custom code, assets, and infrastructure configurations are fully transferred to your organization. We sign comprehensive NDAs before any discovery call to ensure your proprietary concepts remain secure.</p>
            </div>
            
            <div className="bg-white border border-gray-200 shadow-sm p-8 rounded-[2rem] text-left hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-lg font-bold text-gray-900 mb-3 tracking-tight">Do you provide ongoing maintenance?</h3>
              <p className="text-sm text-gray-600 font-medium leading-relaxed">Yes. We offer continuous SLA-backed retainers that include 24/7 proactive telemetry monitoring, routine dependency updates, security patches, and a dedicated pool of hours for feature iteration.</p>
            </div>
            
            <div className="bg-white border border-gray-200 shadow-sm p-8 rounded-[2rem] text-left hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-lg font-bold text-gray-900 mb-3 tracking-tight">What is your technology stack?</h3>
              <p className="text-sm text-gray-600 font-medium leading-relaxed">While we are tech-agnostic and will choose the right tool for the job, our primary enterprise stack revolves around React/Next.js for the frontend, Node.js or Go for microservices, and AWS or GCP for cloud infrastructure.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
