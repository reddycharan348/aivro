import React from 'react';
import SEO from '../components/SEO';

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#f3f1ec] min-h-screen pt-40 pb-24">
      <SEO title="Privacy Policy" description="Read Aivro's privacy policy and understand how we protect and manage your data." />
      <div className="container mx-auto px-4 max-w-4xl bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-gray-200 text-left">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 tracking-tight">Privacy Policy</h1>
        
        <div className="space-y-6 text-gray-600 font-medium leading-relaxed">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">1. Information We Collect</h2>
            <p>We collect information that you provide directly to us, such as when you create or modify your account, request on-demand services, contact customer support, or otherwise communicate with us. This information may include: name, email, phone number, postal address, profile picture, payment method, items requested (for delivery services), delivery notes, and other information you choose to provide.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">2. How We Use Your Information</h2>
            <p>We may use the information we collect about you to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>Provide, maintain, and improve our services.</li>
              <li>Perform internal operations, including troubleshooting, data analysis, testing, and research.</li>
              <li>Send you communications we think will be of interest to you, including information about products, services, promotions, news, and events.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">3. Sharing of Information</h2>
            <p>We may share the information we collect about you as described in this Statement or as described at the time of collection or sharing, including as follows:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>With third party service providers;</li>
              <li>In response to a request for information by a competent authority if we believe disclosure is in accordance with, or is otherwise required by, any applicable law, regulation, or legal process.</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">4. Contact Us</h2>
            <p>If you have any questions about this Privacy Statement, please contact us at aivro348@gmail.com.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
