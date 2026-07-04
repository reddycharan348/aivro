import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { servicesData, industriesData } from '../data/constants';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesHover, setServicesHover] = useState(false);
  const [industriesHover, setIndustriesHover] = useState(false);
  
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesHover(false);
    setIndustriesHover(false);
  }, [location]);

  // On homepage, navbar starts transparent over the hero
  const isTransparent = isHome && !isScrolled;

  const NavItem = ({ name, href, isActive, onMouseEnter, onMouseLeave, hasDropdown }) => (
    <div 
      className="relative h-full flex items-center"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Link 
        to={href}
        className={`text-[15px] font-medium tracking-wide transition-colors relative py-2 ${
          isActive || hasDropdown // active or hovered dropdown parent
            ? 'text-green-500' 
            : isTransparent 
              ? 'text-gray-800 hover:text-green-500' 
              : 'text-gray-600 hover:text-green-500'
        }`}
      >
        {name}
        {/* Active Bottom Border Line (like in screenshot) */}
        {(isActive || hasDropdown) && (
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-green-500 rounded-t-sm" />
        )}
      </Link>
    </div>
  );

  return (
    <nav className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
      isTransparent
        ? 'bg-transparent py-4'
        : 'bg-white/80 backdrop-blur-xl border-b border-gray-200 py-2 shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="/images/logo/aivrologo.png" 
                alt="Aivro Logo" 
                className={`w-12 h-12 object-cover rounded-full shadow-sm border border-gray-200`}
              />
              <span className={`font-bold text-xl tracking-tight text-gray-900`}>
                Aivro<span className="text-green-500">.</span>
              </span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center h-full space-x-8">
            <NavItem name="Home" href="/" isActive={location.pathname === '/'} />
            <NavItem name="About Us" href="/about" isActive={location.pathname === '/about'} />

            {/* Services Dropdown */}
            <div 
              className="relative h-full flex items-center"
              onMouseEnter={() => setServicesHover(true)}
              onMouseLeave={() => setServicesHover(false)}
            >
              <NavItem name="Services" href="/services" isActive={location.pathname === '/services'} hasDropdown={servicesHover} />
              
              {/* Simple Vertical Dropdown */}
              <div 
                className={`absolute left-0 top-[calc(100%-4px)] w-72 bg-white rounded-b-lg rounded-tr-lg shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-gray-100 transition-all duration-200 origin-top-left ${
                  servicesHover ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-95 invisible'
                }`}
              >
                <div className="py-2 flex flex-col max-h-[70vh] overflow-y-auto custom-scrollbar">
                  {servicesData.map((service) => (
                    <Link 
                      key={service.id} 
                      to={`/services/${service.id}`}
                      className="px-6 py-3 text-[14px] font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Industries Dropdown */}
            <div 
              className="relative h-full flex items-center"
              onMouseEnter={() => setIndustriesHover(true)}
              onMouseLeave={() => setIndustriesHover(false)}
            >
              <NavItem name="Industries" href="/industries" isActive={location.pathname === '/industries'} hasDropdown={industriesHover} />
              
              {/* Simple Vertical Dropdown */}
              <div 
                className={`absolute left-0 top-[calc(100%-4px)] w-64 bg-white rounded-b-lg rounded-tr-lg shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-gray-100 transition-all duration-200 origin-top-left ${
                  industriesHover ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-95 invisible'
                }`}
              >
                <div className="py-2 flex flex-col max-h-[70vh] overflow-y-auto custom-scrollbar">
                  {industriesData.map((industry) => (
                    <Link 
                      key={industry.id} 
                      to={`/industries/${industry.id}`}
                      className="px-6 py-3 text-[14px] font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                    >
                      {industry.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <NavItem name="Our Work" href="/portfolio" isActive={location.pathname === '/portfolio'} />
            <NavItem name="Blog" href="/blog" isActive={location.pathname === '/blog'} />
            <NavItem name="Contact" href="/contact" isActive={location.pathname === '/contact'} />

            <div className="pl-4 border-l border-gray-200">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-6 py-2 text-sm font-semibold text-white bg-green-500 hover:bg-green-600 rounded-full transition-all active:scale-95 shadow-md"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="focus:outline-none text-gray-800"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-xl overflow-y-auto max-h-[calc(100vh-60px)]">
          <div className="px-4 py-4 flex flex-col">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 text-base font-medium text-gray-700 border-b border-gray-100">Home</Link>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 text-base font-medium text-gray-700 border-b border-gray-100">About Us</Link>
            <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 text-base font-medium text-gray-700 border-b border-gray-100">Services</Link>
            <Link to="/industries" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 text-base font-medium text-gray-700 border-b border-gray-100">Industries</Link>
            <Link to="/portfolio" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 text-base font-medium text-gray-700 border-b border-gray-100">Our Work</Link>
            <Link to="/blog" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 text-base font-medium text-gray-700 border-b border-gray-100">Blog</Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 text-base font-medium text-gray-700 border-b border-gray-100">Contact</Link>
            <Link 
              to="/contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 px-4 py-3 text-center text-base font-semibold text-white bg-green-500 rounded-full mx-4"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}

      {/* Custom scrollbar for dropdowns */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e5e7eb; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #d1d5db; }
      `}</style>
    </nav>
  );
};

export default Navbar;
