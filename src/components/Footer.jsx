import { Mail, MapPin, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="w-full bg-[#1E1E1E] text-white py-10">
      <div className="mx-auto w-4/5">
        {/* Logo and Tagline */}        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">LOGO</h1>
          <p className="text-sm md:text-base text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>{/* Contact Info */}
        <div
          className={`grid ${
            isMobile ? "grid-cols-1 gap-4" : "grid-cols-3 gap-2"
          } mb-12`}
        >          <div
            className={`flex items-center ${
              isMobile ? "justify-center" : ""
            } bg-white/25 p-4 rounded`}
          >
            <MapPin className="text-orange-500 mr-2" size={isMobile ? 16 : 20} />
            <span className="text-[0.8rem] sm:text-sm">794 Mcallister St San Francisco, 94102</span>
          </div>
          <div
            className={`flex items-center ${
              isMobile ? "justify-center" : ""
            } bg-white/25 p-4 rounded`}
          >
            <Mail className="text-orange-500 mr-2" size={isMobile ? 16 : 20} />
            <span className="text-[0.8rem] sm:text-sm">containers@shippingcompany.com</span>
          </div>
          <div
            className={`flex items-center ${
              isMobile ? "justify-center" : ""
            } bg-white/25 p-4 rounded`}
          >
            <Phone className="text-orange-500 mr-2" size={isMobile ? 16 : 20} />
            <span className="text-[0.8rem] sm:text-sm">+91 9876543210</span>
          </div>
        </div>        {/* Footer Links - Headings */}
        <div className="flex justify-between mb-6">
          <div className="text-left w-1/3">
            <h2 className="text-base md:text-xl font-bold">Product</h2>
          </div>
          <div className="text-center w-1/3">
            <h2 className="text-base md:text-xl font-bold">Company</h2>
          </div>
          <div className="text-center w-1/3">
            <h2 className="text-base md:text-xl font-bold">Support</h2>
          </div>
        </div>

        {/* Footer Links - Content */}        <div className="flex justify-between mb-10">
          <div className="text-left w-1/3">
            <ul className="space-y-2">
              <li>
                <Link to="/products/dry_Container" className="text-sm md:text-base hover:text-orange-500">
                Dry Container
                </Link>
              </li>
              <li>
                <Link to="/products/tanks" className="text-sm md:text-base hover:text-orange-500">
                Liquid Transport Solutions
                </Link>
              </li>              <li>
                <Link to="/products/coil_containers" className="text-sm md:text-base hover:text-orange-500">
                Coil Containers
                </Link>
              </li>
              <li>
                <Link to="/products/modular_containers" className="text-sm md:text-base hover:text-orange-500">
                Modular Containers
                </Link>
              </li>
              <li>
                <Link to="/products/refrigerated_containers" className="text-sm md:text-base hover:text-orange-500">
                Refrigerated Container
                </Link>
              </li>
            </ul>          </div>          <div className="text-center w-1/3">
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm md:text-base hover:text-orange-500">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm md:text-base hover:text-orange-500">
                  Contact us
                </Link>
              </li>
              <li>
                <Link to="/feedback" className="text-sm md:text-base hover:text-orange-500">
                  Feedback
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-sm md:text-base hover:text-orange-500">
                Resources
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm md:text-base hover:text-orange-500">
                  Blog
                </Link>
              </li>
            </ul>
          </div>          <div className="text-center w-1/3">
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-sm md:text-base hover:text-orange-500">
                  Getting started
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm md:text-base hover:text-orange-500">
                  Help center
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm md:text-base hover:text-orange-500">
                  Server status
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm md:text-base hover:text-orange-500">
                  Report a bug
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm md:text-base hover:text-orange-500">
                  Chat support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>        {/* Copyright */}
        <div
          className={`flex ${
            isMobile ? "flex-col space-y-4" : "flex-row justify-between items-center"
          } text-sm md:text-base`}
        >
          <div>Copyright © 2025 Company</div>
          <div>
            All Rights Reserved |{" "}
            <Link to="#" className="hover:underline">
              Terms and Conditions
            </Link>{" "}
            |{" "}
            <Link to="#" className="hover:underline">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}