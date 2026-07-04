import React from 'react';

const RefundPolicy = () => {
  return (
    <div className="bg-[#f3f1ec] min-h-screen pt-40 pb-24">
      <div className="container mx-auto px-4 max-w-4xl bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-gray-200 text-left">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 tracking-tight">Refund Policy</h1>
        
        <div className="space-y-6 text-gray-600 font-medium leading-relaxed">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">1. Overview</h2>
            <p>At Aivro, we strive to ensure that our clients are completely satisfied with the digital services we provide. Due to the custom nature of software development, web design, and digital services, our refund policy operates on a milestone-based approach.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">2. Initial Deposits</h2>
            <p>Initial deposits or kickoff fees are generally non-refundable once the discovery and planning phase has begun, as these cover the immediate time and resources allocated by our engineering and design teams.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">3. Milestone Payments</h2>
            <p>For large projects broken down into milestones, payments are made upon the approval of each milestone. Once a milestone is approved and paid for, that specific payment is non-refundable. If you decide to cancel the project before the next milestone, you will not be billed for future uncompleted work.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">4. Subscriptions and Retainers</h2>
            <p>For ongoing monthly retainers or subscription services (like SEO, maintenance, or hosting), you may cancel at any time with a 30-day notice. We do not offer prorated refunds for the current billing cycle.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">5. How to Request a Refund</h2>
            <p>If you believe there has been a billing error or a failure to deliver agreed-upon services, please contact our support team at aivro348@gmail.com with your project details. We review all requests on a case-by-case basis to ensure a fair resolution.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
