import React from 'react';
import { Check, X, ArrowRight, Star } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      tagline: 'Perfect for small businesses',
      popular: false,
      features: [
        { name: 'Website Design', value: 'Template-based', included: true },
        { name: 'Website Development', value: 'Up to 5 pages', included: true },
        { name: 'Mobile Responsive', value: true, included: true },
        { name: 'Basic SEO Setup', value: true, included: true },
        { name: 'Google Business Profile', value: false, included: false },
        { name: 'Google Analytics Setup', value: false, included: false },
        { name: 'Live Visitor Tracking', value: false, included: false },
        { name: 'Support', value: 'Email Support', included: true },
        { name: 'Maintenance', value: '1 Month Free', included: true },
      ],
      cta: 'Get Started',
    },
    {
      name: 'Professional',
      tagline: 'Most popular for growing businesses',
      popular: true,
      features: [
        { name: 'Website Design', value: 'Custom Design', included: true },
        { name: 'Website Development', value: 'Up to 15 pages', included: true },
        { name: 'Mobile Responsive', value: true, included: true },
        { name: 'Advanced SEO', value: 'Full Optimization', included: true },
        { name: 'Google Business Profile', value: 'Full Setup', included: true },
        { name: 'Google Analytics Setup', value: true, included: true },
        { name: 'Live Visitor Tracking', value: false, included: false },
        { name: 'Support', value: 'Priority (12h response)', included: true },
        { name: 'Maintenance', value: '3 Months Free', included: true },
      ],
      cta: 'Choose Professional',
    },
    {
      name: 'Enterprise',
      tagline: 'For businesses that want it all',
      popular: false,
      features: [
        { name: 'Website Design', value: 'Premium Custom', included: true },
        { name: 'Website Development', value: 'Unlimited Pages', included: true },
        { name: 'Mobile Responsive', value: true, included: true },
        { name: 'Full SEO Strategy', value: 'Complete Package', included: true },
        { name: 'Google Business Profile', value: 'Full Setup + Management', included: true },
        { name: 'Google Analytics Setup', value: 'Advanced Config', included: true },
        { name: 'Live Visitor Tracking', value: 'Real-time Dashboard', included: true },
        { name: 'Support', value: '24/7 Dedicated', included: true },
        { name: 'Maintenance', value: '6 Months Free', included: true },
      ],
      cta: 'Contact Us',
    },
  ];

  return (
    <section id="pricing" className="py-32 overflow-hidden relative" style={{ backgroundColor: '#f3f1ec' }}>
      
      {/* Background blobs (Opposite colors splitted at corners) */}
      <div 
        className="absolute animate-blob z-0 pointer-events-none"
        style={{
          width: '600px',
          height: '600px',
          backgroundColor: '#34e89e', /* green */
          top: '-15%',
          left: '-15%',
          borderRadius: '40% 50% 60% 40% / 50% 40% 50% 60%',
          opacity: 0.7
        }}
      ></div>
      <div 
        className="absolute animate-blob-alt z-0 pointer-events-none"
        style={{
          width: '700px',
          height: '700px',
          backgroundColor: '#fcd2f9', /* pink */
          bottom: '-15%',
          right: '-15%',
          borderRadius: '50% 60% 40% 50% / 60% 40% 50% 40%',
          opacity: 0.8
        }}
      ></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="text-xs font-bold tracking-wider text-pink-600 uppercase mb-4 block">Pricing</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Plans That Scale With You
          </h2>
          <p className="text-base text-gray-600 font-medium">
            Choose a package that fits your needs. Every plan includes responsive design, clean code, and our commitment to quality. Custom quotes available for unique requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`${plan.popular ? 'pricing-card pricing-card-popular' : 'pricing-card'}`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="flex items-center gap-1.5 mb-6 bg-green-50 w-max px-3 py-1.5 rounded-full border border-green-100">
                  <Star size={14} className="text-green-600 fill-green-600" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-green-700">Most Popular</span>
                </div>
              )}

              {/* Plan name */}
              <h3 className="text-2xl font-extrabold tracking-tight mb-1 text-gray-900">
                {plan.name}
              </h3>
              <p className="text-xs mb-8 text-gray-500 font-medium">
                {plan.tagline}
              </p>

              {/* Price */}
              <div className="mb-8">
                <span className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Contact Us
                </span>
                <span className="text-xs ml-2 text-gray-500 font-medium">
                  for custom quote
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-3.5 mb-10">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    {feature.included ? (
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${plan.popular ? 'bg-green-100' : 'bg-gray-100'}`}>
                        <Check size={12} className={plan.popular ? 'text-green-600' : 'text-gray-600'} />
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-gray-50 border border-gray-100">
                        <X size={12} className="text-gray-400" />
                      </div>
                    )}
                    <div>
                      <span className={`text-xs font-bold ${
                        feature.included ? 'text-gray-700' : 'text-gray-400'
                      }`}>
                        {feature.name}
                      </span>
                      {typeof feature.value === 'string' && (
                        <span className="text-[11px] block mt-0.5 text-gray-500 font-medium">
                          {feature.value}
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="/contact"
                className={`w-full text-center py-3.5 rounded-full font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                  plan.popular
                    ? 'bg-green-500 text-white hover:shadow-lg hover:-translate-y-1'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {plan.cta}
                <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
