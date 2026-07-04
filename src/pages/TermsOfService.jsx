import React from 'react';

const TermsOfService = () => {
  return (
    <div className="bg-[#f3f1ec] min-h-screen pt-40 pb-24">
      <div className="container mx-auto px-4 max-w-4xl bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-gray-200 text-left">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 tracking-tight">Terms of Service</h1>
        
        <div className="space-y-6 text-gray-600 font-medium leading-relaxed">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">1. Acceptance of Terms</h2>
            <p>By accessing or using the Aivro website and services, you agree to be bound by these Terms of Service. If you do not agree to all of the terms and conditions contained in this document, do not use our services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">2. Use of Services</h2>
            <p>You agree to use our services only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the services. Prohibited behavior includes harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within our services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">3. Intellectual Property</h2>
            <p>The content, organization, graphics, design, compilation, and other matters related to our services are protected under applicable copyrights, trademarks, and other proprietary rights. The copying, redistribution, use or publication by you of any such matters or any part of our services is strictly prohibited.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">4. Limitation of Liability</h2>
            <p>In no event will Aivro, or its suppliers or licensors, be liable with respect to any subject matter of this agreement under any contract, negligence, strict liability or other legal or equitable theory for: (i) any special, incidental or consequential damages; (ii) the cost of procurement for substitute products or services; (iii) for interruption of use or loss or corruption of data.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
