import { useState, useEffect } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('home'); // Default active item is 'home'
  
  // Set active item based on current URL path on component mount and when URL changes
  useEffect(() => {
    const handleRouteChange = () => {
      const path = window.location.pathname;
      if (path === '/') setActiveItem('home');
      else if (path === '/about') setActiveItem('about');
      else if (path.startsWith('/products')) setActiveItem('products');
      else if (path === '/resources') setActiveItem('resources');
      else if (path === '/contact') setActiveItem('contact');
      else if (path === '/feedback') setActiveItem('feedback');
    };

    // Set initial active item based on current path
    handleRouteChange();

    // Listen for URL changes (useful for single-page applications)
    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProducts = () => {
    setIsProductsOpen(!isProductsOpen);
  };

  const handleNavClick = (item, event) => {
    if (event) {
      // Don't set active here as it will happen via URL change and useEffect
      if (window.innerWidth < 768) { // Close mobile menu when clicking a nav item on mobile
        setIsMenuOpen(false);
      }
    } else {
      // Direct state change when no event (for programmatic changes)
      setActiveItem(item);
    }
  };

  return (
    <header className="bg-white shadow-sm w-[90%] mx-auto content-center">
      {/* Top bar with contact info and social icons - Hidden on mobile but content moved to mobile menu */}
      <div className="hidden md:flex justify-between items-center px-6 py-2 text-gray-700 border-b">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-1">
            <span className="text-[#ff8901]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </span>
            <span className="text-sm">794 Mcallister St San Francisco, 94102</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-[#ff8901]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </span>
            <span className="text-sm">+91 9876543210</span>
          </div>
        </div>
        <div className="flex space-x-3">
          <a href="#" className="text-gray-500 hover:text-[#ff8901] transition-colors">
            <Facebook size={16} />
          </a>
          <a href="#" className="text-gray-500 hover:text-[#ff8901] transition-colors">
            <Twitter size={16} />
          </a>
          <a href="#" className="text-gray-500 hover:text-[#ff8901] transition-colors">
            <Instagram size={16} />
          </a>
          <a href="#" className="text-gray-500 hover:text-[#ff8901] transition-colors">
            <Linkedin size={16} />
          </a>
          <a href="#" className="text-gray-500 hover:text-[#ff8901] transition-colors">
            <Youtube size={16} />
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo (Centered on mobile) */}
        <div className="flex-1 md:flex-none flex justify-center md:justify-start items-center">
          <a href="/" className="flex items-center" onClick={(e) => handleNavClick('home', e)}>
            <div className="font-bold text-2xl uppercase">LOGO</div>
            {/* If you want to use an image instead:
            <img src="/api/placeholder/120/40" alt="Company Logo" className="h-8" /> */}
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <NavItem 
            text="Home" 
            href="/" 
            isActive={activeItem === 'home'} 
            onClick={(e) => handleNavClick('home', e)}
          />
          <NavItem 
            text="About Us" 
            href="/about" 
            isActive={activeItem === 'about'} 
            onClick={(e) => handleNavClick('about', e)}
          />
          
          {/* Products dropdown */}
          <div className="relative group">
            <button 
              className={`flex items-center ${activeItem === 'products' ? 'text-[#ff8901]' : 'text-gray-800 group-hover:text-[#ff8901]'}`}
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
              onClick={(e) => handleNavClick('products', e)}
            >
              <span>Products</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div 
              className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-20 transition-all duration-300 ${
                isProductsOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <a 
                href="/products/page1" 
                className="block px-4 py-2 text-gray-800 hover:bg-orange-50 hover:text-[#ff8901]"
                onClick={(e) => handleNavClick('products', e)}
              >
                Product Page 1
              </a>
              <a 
                href="/products/page2" 
                className="block px-4 py-2 text-gray-800 hover:bg-orange-50 hover:text-[#ff8901]"
                onClick={(e) => handleNavClick('products', e)}
              >
                Product Page 2
              </a>
              <a 
                href="/products/page3" 
                className="block px-4 py-2 text-gray-800 hover:bg-orange-50 hover:text-[#ff8901]"
                onClick={(e) => handleNavClick('products', e)}
              >
                Product Page 3
              </a>
              <a 
                href="/products/page4" 
                className="block px-4 py-2 text-gray-800 hover:bg-orange-50 hover:text-[#ff8901]"
                onClick={(e) => handleNavClick('products', e)}
              >
                Product Page 4
              </a>
            </div>
            <div 
              className={`h-0.5 bg-[#ff8901] transition-all duration-300 ${
                activeItem === 'products' || isProductsOpen ? 'w-full' : 'w-0'
              } group-hover:w-full`}
            ></div>
          </div>
          
          <NavItem 
            text="Resources" 
            href="/resources" 
            isActive={activeItem === 'resources'} 
            onClick={(e) => handleNavClick('resources', e)}
          />
          <NavItem 
            text="Contact Us" 
            href="/contact" 
            isActive={activeItem === 'contact'} 
            onClick={(e) => handleNavClick('contact', e)}
          />
          <NavItem 
            text="Feedback" 
            href="/feedback" 
            isActive={activeItem === 'feedback'} 
            onClick={(e) => handleNavClick('feedback', e)}
          />
        </nav>

        {/* Call to Action Button and Mobile Menu Button (Right) */}
        <div className="flex items-center">
          {/* CTA Button (desktop only) */}
          <div className="hidden md:block">
            <a href="/brochure" className="bg-[#ff8901] hover:bg-[#ff8901] text-white py-2 px-4 rounded-md flex items-center transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Brochure
            </a>
          </div>
          
          {/* Mobile Menu Button (Right) */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-gray-700 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-4 pt-2 pb-4 space-y-3 bg-white border-t">
          <a 
            href="/" 
            className={`block py-2 border-b border-gray-100 ${activeItem === 'home' ? 'text-[#ff8901]' : 'text-gray-700 hover:text-[#ff8901]'}`}
            onClick={(e) => handleNavClick('home', e)}
          >
            Home
          </a>
          <a 
            href="/about" 
            className={`block py-2 border-b border-gray-100 ${activeItem === 'about' ? 'text-[#ff8901]' : 'text-gray-700 hover:text-[#ff8901]'}`}
            onClick={(e) => handleNavClick('about', e)}
          >
            About Us
          </a>
          
          {/* Mobile Products Dropdown */}
          <div>
            <button 
              onClick={() => {
                toggleProducts();
                handleNavClick('products', null); // Null event means direct state update
              }}
              className={`flex justify-between w-full py-2 border-b border-gray-100 ${
                activeItem === 'products' ? 'text-[#ff8901]' : 'text-gray-700 hover:text-[#ff8901]'
              }`}
            >
              <span>Products</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-4 w-4 transform ${isProductsOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`pl-4 ${isProductsOpen ? 'block' : 'hidden'}`}>
              <a 
                href="/products/page1" 
                className="block py-2 text-gray-600 hover:text-[#ff8901]"
                onClick={(e) => handleNavClick('products', e)}
              >
                Product Page 1
              </a>
              <a 
                href="/products/page2" 
                className="block py-2 text-gray-600 hover:text-[#ff8901]"
                onClick={(e) => handleNavClick('products', e)}
              >
                Product Page 2
              </a>
              <a 
                href="/products/page3" 
                className="block py-2 text-gray-600 hover:text-[#ff8901]"
                onClick={(e) => handleNavClick('products', e)}
              >
                Product Page 3
              </a>
              <a 
                href="/products/page4" 
                className="block py-2 text-gray-600 hover:text-[#ff8901]"
                onClick={(e) => handleNavClick('products', e)}
              >
                Product Page 4
              </a>
            </div>
          </div>
          
          <a 
            href="/resources" 
            className={`block py-2 border-b border-gray-100 ${activeItem === 'resources' ? 'text-[#ff8901]' : 'text-gray-700 hover:text-[#ff8901]'}`}
            onClick={(e) => handleNavClick('resources', e)}
          >
            Resources
          </a>
          <a 
            href="/contact" 
            className={`block py-2 border-b border-gray-100 ${activeItem === 'contact' ? 'text-[#ff8901]' : 'text-gray-700 hover:text-[#ff8901]'}`}
            onClick={(e) => handleNavClick('contact', e)}
          >
            Contact Us
          </a>
          <a 
            href="/feedback" 
            className={`block py-2 border-b border-gray-100 ${activeItem === 'feedback' ? 'text-[#ff8901]' : 'text-gray-700 hover:text-[#ff8901]'}`}
            onClick={(e) => handleNavClick('feedback', e)}
          >
            Feedback
          </a>
          
          {/* Mobile Social Icons */}
          <div className="pt-2 flex space-x-4 border-b border-gray-100 pb-3">
            <a href="#" className="text-gray-500 hover:text-[#ff8901]">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-[#ff8901]">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-[#ff8901]">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-[#ff8901]">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-[#ff8901]">
              <Youtube size={20} />
            </a>
          </div>

          {/* Mobile Contact Info */}
          <div className="space-y-2 pt-1 border-b border-gray-100 pb-3">
            <div className="flex items-center space-x-2">
              <span className="text-[#ff8901]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              <span className="text-sm text-gray-700">794 Mcallister St San Francisco, 94102</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-[#ff8901]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              <span className="text-sm text-gray-700">+91 9876543210</span>
            </div>
          </div>
          
          {/* Mobile CTA */}
          <div className="pt-2">
            <a href="/brochure" className="block w-full bg-[#ff8901] hover:bg-orange-600 text-white py-2 px-4 rounded-md text-center">
              Download Brochure
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

// Helper component for nav items with underline effect
function NavItem({ text, href, isActive = false, onClick }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a 
        href={href} 
        className={`${isActive ? 'text-[#ff8901]' : 'text-gray-800 group-hover:text-[#ff8901]'}`}
        onClick={onClick}
      >
        {text}
      </a>
      <div 
        className={`h-0.5 bg-[#ff8901] transition-all duration-300 ${
          isActive || isHovered ? 'w-full' : 'w-0'
        } group-hover:w-full`}
      ></div>
    </div>
  );
}