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
  const [activeItem, setActiveItem] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, [window.location.pathname]); // rerun on route change

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleRouteChange = () => {
      const path = window.location.pathname;
      if (path === "/") setActiveItem("home");
      else if (path === "/about") setActiveItem("about");
      else if (path.startsWith("/products")) setActiveItem("products");
      else if (path === "/resources") setActiveItem("resources");
      else if (path === "/contact") setActiveItem("contact");
      else if (path === "/feedback") setActiveItem("feedback");
      else if (path === "/brochure") setActiveItem("brochure");
      else if (path === "/login") setActiveItem("login");
    };

    handleRouteChange();
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
      setIsMenuOpen(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <header className={`bg-white shadow-sm w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "scrolled-header" : ""}`}>
      <div className="w-[90%] mx-auto">
        {/* ... Top Bar ... */}
        {/* ... skip unchanged top-bar code for brevity ... */}

        {/* Main Navigation */}
        <div className="flex justify-between items-center px-6 py-4">
          <div className="flex-1 md:flex-none flex justify-center md:justify-start items-center">
            <Link to="/" className="flex items-center" onClick={() => handleNavClick("home")}>
              <div className="font-bold text-2xl uppercase">LOGO</div>
            </Link>
          </div>
          <nav className="hidden md:flex md:space-x-4 lg:space-x-6 xl:space-x-8 items-center">
            <NavItem text="Home" to="/" isActive={activeItem === "home"} onClick={() => handleNavClick("home")} />
            <NavItem text="About Us" to="/about" isActive={activeItem === "about"} onClick={() => handleNavClick("about")} />
            <div className="relative group">
              <button
                className={`flex items-center text-sm md:text-sm lg:text-base font-medium whitespace-nowrap ${activeItem === "products" ? "text-secondary" : "text-gray-800 group-hover:text-secondary"}`}
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
                onClick={() => handleNavClick("products")}
              >
                <span>Products</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-20 transition-all duration-300 ${isProductsOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                <Link to="/products/dry_Container" className="block px-4 py-2 text-gray-800 hover:bg-orange-50 hover:text-secondary text-sm whitespace-nowrap" onClick={() => handleNavClick("products")}>Dry Container</Link>
                <Link to="/products/tanks" className="block px-4 py-2 text-gray-800 hover:bg-orange-50 hover:text-secondary text-sm" onClick={() => handleNavClick("products")}>Tanks</Link>
                <Link to="/products/coil_containers" className="block px-4 py-2 text-gray-800 hover:bg-orange-50 hover:text-secondary text-sm whitespace-nowrap" onClick={() => handleNavClick("products")}>Coil Containers</Link>
                <Link to="/products/modular_containers" className="block px-4 py-2 text-gray-800 hover:bg-orange-50 hover:text-secondary text-sm whitespace-nowrap" onClick={() => handleNavClick("products")}>Modular Containers</Link>
                <Link to="/products/refrigerated_containers" className="block px-4 py-2 text-gray-800 hover:bg-orange-50 hover:text-secondary text-sm whitespace-nowrap" onClick={() => handleNavClick("products")}>Refrigerated Containers</Link>
              </div>
              <div className={`h-0.5 bg-secondary transition-all duration-300 ${activeItem === "products" || isProductsOpen ? "w-full" : "w-0"} group-hover:w-full`}></div>
            </div>
            <NavItem text="Resources" to="/resources" isActive={activeItem === "resources"} onClick={() => handleNavClick("resources")} />
            <NavItem text="Contact Us" to="/contact" isActive={activeItem === "contact"} onClick={() => handleNavClick("contact")} />
            <NavItem text="Feedback" to="/feedback" isActive={activeItem === "feedback"} onClick={() => handleNavClick("feedback")} />
            <NavItem text="Brochure" to="/brochure" isActive={activeItem === "brochure"} onClick={() => handleNavClick("brochure")} />
          </nav>

          {/* Auth Button */}
          <div className="flex items-center">
            <div className="hidden md:block">
              {isLoggedIn ? (
                <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md flex items-center transition-colors whitespace-nowrap">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H3m0 0l4-4m-4 4l4 4m13-5v6a2 2 0 01-2 2h-4" />
                  </svg>
                  Logout
                </button>
              ) : (
                <Link to="/login" className="bg-secondary hover:bg-secondary-dark text-white py-2 px-4 rounded-md flex items-center transition-colors whitespace-nowrap" onClick={() => handleNavClick("login")}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                  Login
                </Link>
              )}
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu logic remains same — you can optionally also add logout there too */}
      </div>
    </header>
  );
}

function NavItem({ text, to, isActive = false, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative group" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <Link
        to={to}
        className={`font-medium text-sm md:text-sm lg:text-base whitespace-nowrap transition-colors ${isActive || isHovered ? "text-secondary" : "text-gray-800"}`}
        onClick={onClick}
      >
        {text}
      </Link>
      <div className={`h-0.5 bg-secondary transition-all duration-300 ${isActive || isHovered ? "w-full" : "w-0"} group-hover:w-full`}></div>
    </div>
  );
}