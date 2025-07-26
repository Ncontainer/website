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
import logoImage from  "../images/blacklogo.png";
import dryImage from '../images/popup.png';


export default function Header() {
const [showBrochureSuccess, setShowBrochureSuccess] = useState(false);
const [showEmailPrompt, setShowEmailPrompt] = useState(false);
const [userEmail, setUserEmail] = useState("");

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  // Effect for handling header style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Effect for setting the active nav item based on the current URL
useEffect(() => {
  const path = location.pathname;
  if (path === "/") setActiveItem("home");
  else if (path === "/about") setActiveItem("about");
  else if (path === "/our-products" || path.startsWith("/products")) setActiveItem("products");
  else if (path === "/resources") setActiveItem("resources");
  else if (path === "/contact") setActiveItem("contact");
  else if (path === "/feedback") setActiveItem("feedback");
  else if (path === "/brochure") setActiveItem("brochure");
  else if (path === "/login") setActiveItem("login");
  else setActiveItem(""); // fallback
}, [location.pathname]);  // ← track actual route changes

  const [isLoggedIn, setIsLoggedIn] = useState(false);

useEffect(() => {
  const status = localStorage.getItem("isLoggedIn");
  setIsLoggedIn(status === "true");
}, [location.pathname]);

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
  const confirmLogout = window.confirm("Are you sure you want to log out?");
  if (confirmLogout) {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  }
  // else: do nothing, stay logged in
};
const handleBrochureClick = async () => {
  if (isLoggedIn) {
    try {
      // Download the brochure PDF from backend
      const response = await fetch("https://cktgf93ztd.us-east-1.awsapprunner.com/api/brochure/send", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "NCON_Brochure.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();

      setShowBrochureSuccess(true);
      setTimeout(() => setShowBrochureSuccess(false), 3000);
    } catch (error) {
      alert("Failed to download brochure.");
    }
  } else {
    setShowEmailPrompt(true);
  }
};
const sendBrochureToEmail = async () => {
  try {
    const response = await fetch("https://cktgf93ztd.us-east-1.awsapprunner.com/api/brochure/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: userEmail }),
    });

    if (!response.ok) {
      throw new Error("Failed to send brochure");
    }

    const data = await response.json();
    console.log("Email sent:", data);

    alert("Brochure will be sent to your email shortly.");
    setShowEmailPrompt(false);
    setUserEmail(""); // clear field
  } catch (error) {
    console.error("Error sending brochure email:", error);
    alert("Failed to send brochure. Please try again.");
  }
};
  return (
    <header className={`bg-white shadow-sm w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "scrolled-header" : ""}`}>
      <div className="w-[90%] mx-auto">
        {/* Top bar */}
        <div className="hidden md:flex justify-between items-center px-6 py-2 text-gray-700 border-b">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1">
              <span className="text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              <span className="text-sm font-sans">794 Mcallister St San Francisco, 94102</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              <span className="text-sm font-sans">+91 9876543210</span>
            </div>
          </div>
          <div className="flex space-x-3">
            <Link to="#" className="text-gray-500 hover:text-secondary transition-colors"><Facebook size={16} /></Link>
            <Link to="#" className="text-gray-500 hover:text-secondary transition-colors"><Twitter size={16} /></Link>
            <Link to="#" className="text-gray-500 hover:text-secondary transition-colors"><Instagram size={16} /></Link>
            <Link to="#" className="text-gray-500 hover:text-secondary transition-colors"><Linkedin size={16} /></Link>
            <Link to="#" className="text-gray-500 hover:text-secondary transition-colors"><Youtube size={16} /></Link>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex items-center justify-between px-6 py-4 gap-6 md:gap-10">
          <div className="flex-none flex justify-start items-center">
            <Link to="/" className="flex items-center" onClick={() => handleNavClick("home")}>
  {/* <img src={logoImage} alt="Logo" className="h-10 w-auto" /> */}
  <img src={logoImage} alt="Logo" className="h-11 w-auto object-cover " />
</Link>
          </div>
          <nav className="hidden lg:flex items-center gap-6 lg:gap-8 xl:gap-10">
            <NavItem text="Home" to="/" isActive={activeItem === "home"} onClick={() => handleNavClick("home")} />
            <NavItem text="About Us" to="/about" isActive={activeItem === "about"} onClick={() => handleNavClick("about")} />
            {/* Products Dropdown */}
           
              {/* <button
                className={`flex items-center text-sm md:text-sm lg:text-base font-medium whitespace-nowrap ${activeItem === "products" ? "text-secondary" : "text-gray-800 group-hover:text-secondary"}`}
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
                onClick={() => handleNavClick("products")}
              >
                <span>Products</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button> */}
              {/* <div
                className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-20 transition-all duration-300 ${isProductsOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                <Link to="/products/dry_Container" className="block px-4 py-2 text-gray-800 hover:bg-orange-50 hover:text-secondary text-sm whitespace-nowrap" onClick={() => handleNavClick("products")}>Dry Container</Link>
                <Link to="/products/tanks" className="block px-4 py-2 text-gray-800 hover:bg-orange-50 hover:text-secondary text-sm" onClick={() => handleNavClick("products")}>Tanks</Link>
                <Link to="/products/coil_containers" className="block px-4 py-2 text-gray-800 hover:bg-orange-50 hover:text-secondary text-sm whitespace-nowrap" onClick={() => handleNavClick("products")}>Coil Containers</Link>
                <Link to="/products/modular_containers" className="block px-4 py-2 text-gray-800 hover:bg-orange-50 hover:text-secondary text-sm whitespace-nowrap" onClick={() => handleNavClick("products")}>Modular Containers</Link>
                <Link to="/products/refrigerated_containers" className="block px-4 py-2 text-gray-800 hover:bg-orange-50 hover:text-secondary text-sm whitespace-nowrap" onClick={() => handleNavClick("products")}>Refrigerated Containers</Link>
              </div> */}
              {/* <div className={`h-0.5 bg-secondary transition-all duration-300 ${activeItem === "products" || isProductsOpen ? "w-full" : "w-0"} group-hover:w-full`}></div> */}
            
            <NavItem text="Products" to="/our-products" isActive={activeItem === "products"} onClick={() => handleNavClick("products")}/>
            <NavItem text="Resources" to="/resources" isActive={activeItem === "resources"} onClick={() => handleNavClick("resources")} />
            <NavItem text="Contact Us" to="/contact" isActive={activeItem === "contact"} onClick={() => handleNavClick("contact")} />
            <NavItem text="Feedback" to="/feedback" isActive={activeItem === "feedback"} onClick={() => handleNavClick("feedback")} />
           <NavItem text="Brochure" isActive={activeItem === "brochure"} onClick={handleBrochureClick}/>
          </nav>

          <div className="flex items-center">
            <div className="hidden lg:block">
             {isLoggedIn ? (
  <button
    onClick={handleLogout}
    className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md transition-colors"
  >
    Logout
  </button>
) : (
  <Link
    to="/login"
    className="bg-secondary hover:bg-secondary-dark text-white py-2 px-4 rounded-md transition-colors"
    onClick={() => handleNavClick("login")}
  >
    Login
  </Link>
)}
            </div>
            <div className="lg:hidden">
              <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed inset-0 z-60 ${isMenuOpen ? "block" : "hidden"}`}>
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={toggleMenu}></div>
          <div className="absolute right-0 top-0 h-full w-[80%] max-w-xs bg-secondary shadow-lg overflow-y-auto">
            <div className="flex justify-end p-4">
              <button onClick={toggleMenu} className="text-white focus:outline-none" aria-label="Close menu">
                <X size={24} />
              </button>
            </div>
            <div className="px-6 pb-6 space-y-5">
              <Link to="/" className="block py-3 px-4 border-b border-white/20 text-white font-medium hover:bg-white hover:text-secondary transition-colors" onClick={() => handleNavClick("home")}>Home</Link>
              <Link to="/about" className="block py-3 px-4 border-b border-white/20 text-white font-medium hover:bg-white hover:text-secondary transition-colors whitespace-nowrap" onClick={() => handleNavClick("about")}>About Us</Link>
              {/* Mobile Products Dropdown */}
              <div>
                <button onClick={toggleProducts} className="flex justify-between w-full py-3 px-4 border-b border-white/20 text-white font-medium hover:bg-white/25 transition-colors">
                  <span className="whitespace-nowrap">Products</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transform transition-transform ${isProductsOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`${isProductsOpen ? "block" : "hidden"} pl-4`}>
                  <Link to="/products/dry_Container" className="block py-2 px-8 text-white hover:bg-white/25 transition-colors whitespace-nowrap" onClick={() => handleNavClick("products")}>Dry Container</Link>
                  <Link to="/products/tanks" className="block py-2 px-8 text-white hover:bg-white/25 transition-colors" onClick={() => handleNavClick("products")}>Tanks</Link>
                  <Link to="/products/coil_containers" className="block py-2 px-8 text-white hover:bg-white/25 transition-colors whitespace-nowrap" onClick={() => handleNavClick("products")}>Coil Containers</Link>
                  <Link to="/products/modular_containers" className="block py-2 px-8 text-white hover:bg-white/25 transition-colors whitespace-nowrap" onClick={() => handleNavClick("products")}>Modular Containers</Link>
                  <Link to="/products/refrigerated_containers" className="block py-2 px-8 text-white hover:bg-white/25 transition-colors whitespace-nowrap" onClick={() => handleNavClick("products")}>Refrigerated Containers</Link>
                </div>
              </div>
              <Link to="/resources" className="block py-3 px-4 border-b border-white/20 text-white font-medium hover:bg-white hover:text-secondary transition-colors" onClick={() => handleNavClick("resources")}>Resources</Link>
              <Link to="/contact" className="block py-3 px-4 border-b border-white/20 text-white font-medium hover:bg-white hover:text-secondary transition-colors whitespace-nowrap" onClick={() => handleNavClick("contact")}>Contact Us</Link>
              <Link to="/feedback" className="block py-3 px-4 border-b border-white/20 text-white font-medium hover:bg-white hover:text-secondary transition-colors" onClick={() => handleNavClick("feedback")}>Feedback</Link>
              <Link to="/brochure" className="block py-3 px-4 border-b border-white/20 text-white font-medium hover:bg-white hover:text-secondary transition-colors" onClick={() => handleNavClick("brochure")}>Brochure</Link>
              {/* Mobile Extras */}
              <div className="pt-3 border-t border-white/20">
                <div className="flex space-x-5 pb-5 justify-center">
                  <Link to="#" className="text-white hover:text-white/80"><Facebook size={20} /></Link>
                  <Link to="#" className="text-white hover:text-white/80"><Twitter size={20} /></Link>
                  <Link to="#" className="text-white hover:text-white/80"><Instagram size={20} /></Link>
                  <Link to="#" className="text-white hover:text-white/80"><Linkedin size={20} /></Link>
                  <Link to="#" className="text-white hover:text-white/80"><Youtube size={20} /></Link>
                </div>
                <div className="space-y-4 pt-3 border-t border-white/20 pb-5">
                  <div className="flex items-center space-x-3">
                    <span className="text-white"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg></span>
                    <span className="text-sm text-white">794 Mcallister St, San Francisco, 94102</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-white"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg></span>
                    <span className="text-sm text-white">+91 9876543210</span>
                  </div>
                </div>
                <div className="pt-4">
                  {isLoggedIn ? (
  <button
    onClick={() => {
      handleLogout();
      toggleMenu();
    }}
    className="block w-full border border-white text-white py-3 px-4 rounded-md text-center font-medium hover:bg-white hover:text-secondary transition-colors"
  >
    Logout
  </button>
) : (
  <Link
    to="/login"
    className="block w-full border border-white text-white py-3 px-4 rounded-md text-center font-medium hover:bg-white hover:text-secondary transition-colors"
    onClick={toggleMenu}
  >
    Login
  </Link>
)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ✅ Confirmation Modal when logged in */}
{showBrochureSuccess && (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
    <div className="bg-white rounded-lg shadow-md p-6 text-center">
      <h2 className="text-lg font-semibold mb-2 text-green-600">Brochure downloaded successfully!</h2>
    </div>
  </div>
)}

{/* ✅ Email Input Modal when NOT logged in */}
{showEmailPrompt && (
  <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
    <div className="bg-white rounded-xl shadow-xl w-[90%] max-w-4xl p-8 flex flex-col md:flex-row items-center gap-6 relative">

      <button
        onClick={() => setShowEmailPrompt(false)}
        className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-xl font-bold"
        aria-label="Close"
      >
        &times;
      </button>
      {/* Left Illustration */}
      <div className="flex-1">
        <img
          src={dryImage}
          alt="Truck Illustration"
          className="w-full max-w-sm mx-auto"
        />
      </div>

      {/* Right Form Section */}
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-2">NCON Containers</h2>
        <div className="h-1 w-20 bg-orange-500 mx-auto md:mx-0 mb-4"></div>
        <p className="text-gray-700 mb-6">
          To download the Brochure, please enter your email ID. The Brochure will be sent to your email.
        </p>
        <input
          type="email"
          placeholder="Email ID"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-3 mb-6 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
       <button
  onClick={sendBrochureToEmail}
  className="px-4 py-2 bg-secondary hover:bg-secondary-dark text-white rounded-md"
>
  Submit
</button>
      </div>
    </div>
  </div>
)}
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