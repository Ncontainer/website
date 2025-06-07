import { useState, useEffect } from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Menu,
  X,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("home"); // Default active item is 'home'
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  // Handle scroll event to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Set active item based on current URL path on component mount and when URL changes
  useEffect(() => {
    const handleRouteChange = () => {
      const path = window.location.pathname;
      if (path === "/") setActiveItem("home");
      else if (path === "/about") setActiveItem("about");
      else if (path.startsWith("/products")) setActiveItem("products");
      else if (path === "/resources") setActiveItem("resources");
      else if (path === "/contact") setActiveItem("contact");
      else if (path === "/feedback") setActiveItem("feedback");
    };

    // Set initial active item based on current path
    handleRouteChange();

    // Listen for URL changes (useful for single-page applications)
    window.addEventListener("popstate", handleRouteChange);
    return () => window.removeEventListener("popstate", handleRouteChange);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProducts = () => {
    setIsProductsOpen(!isProductsOpen);
  };
  const handleNavClick = (item, keepMenuOpen = false) => {
    setActiveItem(item);
    if (window.innerWidth < 768 && !keepMenuOpen) {
      // Close mobile menu when clicking a nav item on mobile, unless specified to keep open
      setIsMenuOpen(false);
    }
  };

  return (    <header className={`bg-white shadow-sm w-full content-center fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "scrolled-header" : ""}`}>
      <div className="w-[90%] mx-auto">
        {/* Top bar with contact info and social icons - Hidden on mobile but content moved to mobile menu */}
        <div className="hidden md:flex justify-between items-center px-6 py-2 text-gray-700 border-b">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-1">
            <span className="text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </span>
            <span className="text-sm" style={{fontFamily:'Roboto, sans-serif'}} >
              794 Mcallister St San Francisco, 94102
            </span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </span>
            <span className="text-sm" style={{fontFamily:'Roboto, sans-serif'}}>+91 9876543210</span>
          </div>
        </div>
        <div className="flex space-x-3">
          <Link
            to="#"
            className="text-gray-500 hover:text-secondary transition-colors"
          >
            <Facebook size={16} />
          </Link>
          <Link
            to="#"
            className="text-gray-500 hover:text-secondary transition-colors"
          >
            <Twitter size={16} />
          </Link>
          <Link
            to="#"
            className="text-gray-500 hover:text-secondary transition-colors"
          >
            <Instagram size={16} />
          </Link>
          <Link
            to="#"
            className="text-gray-500 hover:text-secondary transition-colors"
          >
            <Linkedin size={16} />
          </Link>
          <Link
            to="#"
            className="text-gray-500 hover:text-secondary transition-colors"
          >
            <Youtube size={16} />
          </Link>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo (Centered on mobile) */}
        <div className="flex-1 md:flex-none flex justify-center md:justify-start items-center">
          <Link
            to="/"
            className="flex items-center"
            onClick={() => handleNavClick("home")}
          >
            <div className="font-bold text-2xl uppercase">LOGO</div>
            {/* If you want to use an image instead:
            <img src="/api/placeholder/120/40" alt="Company Logo" className="h-8" /> */}
          </Link>
        </div>        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:space-x-4 lg:space-x-6 xl:space-x-8">
          <NavItem
            text="Home"
            to="/"
            isActive={activeItem === "home"}
            onClick={() => handleNavClick("home")}
          />
          <NavItem
            text="About Us"
            to="/about"
            isActive={activeItem === "about"}
            onClick={() => handleNavClick("about")}
          />          {/* Products dropdown */}
          <div className="relative group">
            <button
              className={`flex items-center text-sm md:text-sm lg:text-base font-medium ${
                activeItem === "products"
                  ? "text-secondary"
                  : "text-gray-800 group-hover:text-secondary"
              }`}
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
              onClick={() => handleNavClick("products")}
            >
              <span>Products</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-20 transition-all duration-300 ${
                isProductsOpen ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >              <Link
                to="/products/dry_Container"
                className="block px-4 py-2 text-gray-800 hover:bg-orange-50 hover:text-secondary text-sm"
                onClick={() => handleNavClick("products")}
              >
                Dry Container
              </Link>              <Link
                to="/products/tanks"
                className="block px-4 py-2 text-gray-800 hover:bg-orange-50 hover:text-secondary text-sm"
                onClick={() => handleNavClick("products")}
              >
                Tanks
              </Link>
              <Link
                to="/products/coil_containers"
                className="block px-4 py-2 text-gray-800 hover:bg-orange-50 hover:text-secondary text-sm"
                onClick={() => handleNavClick("products")}
              >
                Coil Containers
              </Link>
              <Link
                to="/products/modular_containers"    
                className="block px-4 py-2 text-gray-800 hover:bg-orange-50 hover:text-secondary text-sm"
                onClick={() => handleNavClick("products")}
              >
                Modular Containers
              </Link>
              <Link
                to="/products/refrigerated_containers"
                className="block px-4 py-2 text-gray-800 hover:bg-orange-50 hover:text-secondary text-sm"
                onClick={() => handleNavClick("products")}
              >
                Referigerated Containers
              </Link>
            </div>
            <div
              className={`h-0.5 bg-secondary transition-all duration-300 ${
                activeItem === "products" || isProductsOpen ? "w-full" : "w-0"
              } group-hover:w-full`}
            ></div>
          </div>

          <NavItem
            text="Resources"
            to="/resources"
            isActive={activeItem === "resources"}
            onClick={() => handleNavClick("resources")}
          />
          <NavItem
            text="Contact Us"
            to="/contact"
            isActive={activeItem === "contact"}
            onClick={() => handleNavClick("contact")}
          />
          <NavItem
            text="Feedback"
            to="/feedback"
            isActive={activeItem === "feedback"}
            onClick={() => handleNavClick("feedback")}
          />
        </nav>

        {/* Call to Action Button and Mobile Menu Button (Right) */}
        <div className="flex items-center">
          {/* CTA Button (desktop only) */}
          <div className="hidden md:block">
            <Link
              to="/brochure"
              className="bg-secondary hover:bg-secondary text-white py-2 px-4 rounded-md flex items-center transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Brochure
            </Link>
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

      {/* Mobile Menu */}      <div className={`md:hidden fixed inset-0 z-60 ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="fixed inset-0 bg-black bg-opacity-50" onClick={toggleMenu}></div>
        <div className="absolute right-0 top-0 h-full w-[80%] max-w-xs bg-secondary shadow-lg overflow-y-auto">
          <div className="flex justify-end p-4">
            <button 
              onClick={toggleMenu}
              className="text-white focus:outline-none" 
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="px-6 pb-6 space-y-5">            <Link
              to="/"
              className="block py-3 px-4 border-b border-white/20 text-white font-medium hover:bg-white hover:text-secondary transition-colors"
              onClick={() => {
                handleNavClick("home");
                toggleMenu();
              }}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block py-3 px-4 border-b border-white/20 text-white font-medium hover:bg-white hover:text-secondary transition-colors"
              onClick={() => {
                handleNavClick("about");
                toggleMenu();
              }}
            >
              About Us
            </Link>            {/* Mobile Products Dropdown */}
            <div>              <button
                onClick={(e) => {
                  e.preventDefault();
                  toggleProducts();
                  // Don't call handleNavClick here to prevent menu from closing
                }}
                className="flex justify-between w-full py-3 px-4 border-b border-white/20 text-white font-medium hover:bg-white/25 hover:text-white transition-colors"
              >
                <span>Products</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 transform text-inherit ${
                    isProductsOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className={`${isProductsOpen ? "block" : "hidden"}`}>                <Link
                  to="/products/dry_Container"
                  className="block py-2 px-8 text-white hover:bg-white/25 hover:text-white transition-colors"
                  onClick={() => {
                    handleNavClick("products", false);
                    toggleMenu();
                  }}
                >
                  Dry Container
                </Link>                <Link
                  to="/products/tanks"
                  className="block py-2 px-8 text-white hover:bg-white/25 hover:text-white transition-colors"
                  onClick={() => {
                    handleNavClick("products", false);
                    toggleMenu();
                  }}
                >
                  Tanks
                </Link>
                <Link
                  to="/products/coil_containers"
                  className="block py-2 px-8 text-white hover:bg-white/25 hover:text-white transition-colors"
                  onClick={() => {
                    handleNavClick("products");
                  }}
                >
                  Coil Containers
                </Link>
                <Link
                  to="/products/modular_containers"
                  className="block py-2 px-8 text-white hover:bg-white/25 hover:text-white transition-colors"
                  onClick={() => {
                    handleNavClick("products");
                  }}
                >
                  Modular Containers
                </Link>
                <Link
                  to="/products/refrigerated_containers"
                  className="block py-2 px-8 text-white hover:bg-white/25 hover:text-white transition-colors"
                  onClick={() => {
                    handleNavClick("products");
                  }}
                >
                  Referigerated Containers
                </Link>
              </div>
            </div>            <Link
              to="/resources"
              className="block py-3 px-4 border-b border-white/20 text-white font-medium hover:bg-white hover:text-secondary transition-colors"
              onClick={() => {
                handleNavClick("resources");
                toggleMenu();
              }}
            >
              Resources
            </Link>
            <Link
              to="/contact"
              className="block py-3 px-4 border-b border-white/20 text-white font-medium hover:bg-white hover:text-secondary transition-colors"
              onClick={() => {
                handleNavClick("contact");
                toggleMenu();
              }}
            >
              Contact Us
            </Link>
            <Link
              to="/feedback"
              className="block py-3 px-4 border-b border-white/20 text-white font-medium hover:bg-white hover:text-secondary transition-colors"
              onClick={() => {
                handleNavClick("feedback");
                toggleMenu();
              }}
            >
              Feedback
            </Link>

            {/* Mobile Social Icons */}
            <div className="pt-3 flex space-x-5 border-b border-white/20 pb-5">
              <Link to="#" className="text-white hover:text-white/80" onClick={toggleMenu}>
                <Facebook size={20} />
              </Link>
              <Link to="#" className="text-white hover:text-white/80" onClick={toggleMenu}>
                <Twitter size={20} />
              </Link>
              <Link to="#" className="text-white hover:text-white/80" onClick={toggleMenu}>
                <Instagram size={20} />
              </Link>
              <Link to="#" className="text-white hover:text-white/80" onClick={toggleMenu}>
                <Linkedin size={20} />
              </Link>
              <Link to="#" className="text-white hover:text-white/80" onClick={toggleMenu}>
                <Youtube size={20} />
              </Link>
            </div>

            {/* Mobile Contact Info */}
            <div className="space-y-4 pt-3 border-b border-white/20 pb-5">
              <div className="flex items-center space-x-3">
                <span className="text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </span>
                <span className="text-sm text-white">
                  794 Mcallister St San Francisco, 94102
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </span>
                <span className="text-sm text-white">+91 9876543210</span>
              </div>
            </div>

            {/* Mobile CTA */}
            <div className="pt-4">
              <Link
                to="/brochure"
                className="block w-full border border-white text-white py-3 px-4 rounded-md text-center font-medium hover:bg-white hover:text-secondary transition-colors"
                onClick={toggleMenu}
              >
                Download Brochure
              </Link>
            </div>          </div>
        </div>
      </div>
      </div>
    </header>
  );
}

// Helper component for nav items with underline effect
function NavItem({ text, to, isActive = false, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        to={to}
        className={`font-medium text-sm md:text-sm lg:text-base ${isHovered ? "text-secondary" : "text-gray-800 group-hover:text-secondary"}
          ${isActive ? "text-secondary" : "text-gray-800 group-hover:text-secondary"}
        `}
        onClick={onClick}
      >
        {text}
      </Link>
      <div
        className={`h-0.5 bg-secondary transition-all duration-300 ${
          isActive || isHovered ? "w-full" : "w-0"
        } group-hover:w-full`}
      ></div>
    </div>
  );
};
