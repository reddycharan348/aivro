import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import ServiceDetail from './pages/ServiceDetail';
import Portfolio from './pages/Portfolio';
import IndustriesPage from './pages/IndustriesPage';
import IndustryDetail from './pages/IndustryDetail';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import RefundPolicy from './pages/RefundPolicy';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import VisitorCounter from './components/VisitorCounter';

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 flex flex-col min-h-screen bg-[#f3f1ec] selection:bg-pink-500/20">
      <Navbar />
      
      <main className="flex-grow pt-0 relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/industries/:id" element={<IndustryDetail />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
        </Routes>
      </main>

      {/* Premium Light Footer with Effects */}
      <footer className="relative bg-[#f3f1ec] text-gray-900 overflow-hidden border-t border-gray-200 z-10">
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-[40%_60%_50%_50%] bg-pink-400/20 blur-[100px] animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-[50%_40%_60%_50%] bg-blue-400/20 blur-[80px] animate-blob-alt"></div>
        </div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>

        {/* CTA Banner */}
        <div className="relative z-10 border-b border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2 text-gray-900">
                  Ready to Build Your <span className="text-pink-600">Dream Website?</span>
                </h3>
                <p className="text-sm text-gray-600 font-medium">Let's turn your vision into reality. Get a free consultation today.</p>
              </div>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-green-500 text-white text-sm font-semibold hover:shadow-[0_0_30px_rgba(74,222,128,0.4)] hover:scale-105 transition-all active:scale-95 whitespace-nowrap"
              >
                Start Your Project <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-10">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-8">
            {/* Brand column */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2.5 mb-4">
                <img 
                  src="/images/logo/aivrologo.png" 
                  alt="Aivro Logo" 
                  className="w-14 h-14 object-cover rounded-full shadow-sm border border-gray-200" 
                />
                <span className="font-bold text-lg tracking-tight text-gray-900">
                  Aivro<span className="text-green-500">.</span>
                </span>
              </div>
              <p className="text-xs text-gray-500 font-medium leading-relaxed mb-6">
                Premium web design & development agency helping businesses build stunning digital experiences.
              </p>
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 text-xs text-gray-600 font-medium">
                  <Mail size={14} className="text-pink-500" />
                  aivro348@gmail.com
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600 font-medium">
                  <Phone size={14} className="text-pink-500" />
                  +91 90325 17427
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600 font-medium">
                  <MapPin size={14} className="text-pink-500" />
                  India
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-gray-900 text-sm mb-3 tracking-tight">Services</h4>
              <ul className="space-y-2">
                <li><a href="/services" className="text-xs font-medium text-gray-500 hover:text-green-600 transition-colors">Website Design</a></li>
                <li><a href="/services" className="text-xs font-medium text-gray-500 hover:text-green-600 transition-colors">Website Development</a></li>
                <li><a href="/services" className="text-xs font-medium text-gray-500 hover:text-green-600 transition-colors">Web App Development</a></li>
                <li><a href="/services" className="text-xs font-medium text-gray-500 hover:text-green-600 transition-colors">SEO Optimization</a></li>
                <li><a href="/services" className="text-xs font-medium text-gray-500 hover:text-green-600 transition-colors">Google Analytics</a></li>
                <li><a href="/services" className="text-xs font-medium text-gray-500 hover:text-green-600 transition-colors">WhatsApp Automation</a></li>
              </ul>
            </div>

            {/* More Services */}
            <div>
              <h4 className="font-bold text-gray-900 text-sm mb-3 tracking-tight">More Services</h4>
              <ul className="space-y-2">
                <li><a href="/services" className="text-xs font-medium text-gray-500 hover:text-green-600 transition-colors">Google Profile Setup</a></li>
                <li><a href="/services" className="text-xs font-medium text-gray-500 hover:text-green-600 transition-colors">Social Media Marketing</a></li>
                <li><a href="/services" className="text-xs font-medium text-gray-500 hover:text-green-600 transition-colors">Logo & Brand Design</a></li>
                <li><a href="/services" className="text-xs font-medium text-gray-500 hover:text-green-600 transition-colors">E-Commerce Solutions</a></li>
                <li><a href="/services" className="text-xs font-medium text-gray-500 hover:text-green-600 transition-colors">Email Marketing</a></li>
                <li><a href="/services" className="text-xs font-medium text-gray-500 hover:text-green-600 transition-colors">24/7 Support</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-bold text-gray-900 text-sm mb-3 tracking-tight">Company</h4>
              <ul className="space-y-2">
                <li><a href="/about" className="text-xs font-medium text-gray-500 hover:text-green-600 transition-colors">About Aivro</a></li>
                <li><a href="/portfolio" className="text-xs font-medium text-gray-500 hover:text-green-600 transition-colors">Our Portfolio</a></li>
                <li><a href="/services" className="text-xs font-medium text-gray-500 hover:text-green-600 transition-colors">Our Process</a></li>
                <li><a href="/contact" className="text-xs font-medium text-gray-500 hover:text-green-600 transition-colors">Contact Us</a></li>
                <li><a href="/contact" className="text-xs font-medium text-gray-500 hover:text-green-600 transition-colors">Careers</a></li>
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h4 className="font-bold text-gray-900 text-sm mb-3 tracking-tight">Industries</h4>
              <ul className="space-y-2">
                <li><a href="/services" className="text-xs font-medium text-gray-500 hover:text-green-600 transition-colors">Education</a></li>
                <li><a href="/services" className="text-xs font-medium text-gray-500 hover:text-green-600 transition-colors">Health Care</a></li>
                <li><a href="/services" className="text-xs font-medium text-gray-500 hover:text-green-600 transition-colors">E-Commerce</a></li>
                <li><a href="/services" className="text-xs font-medium text-gray-500 hover:text-green-600 transition-colors">Real Estate</a></li>
                <li><a href="/services" className="text-xs font-medium text-gray-500 hover:text-green-600 transition-colors">Start-Ups</a></li>
                <li><a href="/services" className="text-xs font-medium text-gray-500 hover:text-green-600 transition-colors">+ 10 More</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row md:justify-between items-center gap-4">
            <div className="text-xs text-gray-500 font-medium">
              &copy; {new Date().getFullYear()} Aivro. All rights reserved.
            </div>
            <VisitorCounter />
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-gray-500">
              <a href="/privacy-policy" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
              <a href="/terms-of-service" className="hover:text-gray-900 transition-colors">Terms of Service</a>
              <a href="/refund-policy" className="hover:text-gray-900 transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
