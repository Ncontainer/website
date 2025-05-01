import { Mail, MapPin, Phone } from "lucide-react";
import { useState, useEffect } from "react";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Set initial state
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="w-full bg-gray-900 text-white py-10">
      <div className="mx-auto w-4/5">
        {/* Logo and Tagline */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">LOGO</h1>
          <p className="text-base text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Contact Info */}
        <div
          className={`flex ${
            isMobile ? "flex-col" : "flex-row"
          } justify-between mb-12 gap-4`}
        >
          <div
            className={`flex items-center ${
              isMobile ? "justify-center" : ""
            } bg-gray-800 p-4 rounded`}
          >
            <MapPin className="text-orange-500 mr-2" size={20} />
            <span>794 Mcallister St San Francisco, 94102</span>
          </div>
          <div
            className={`flex items-center ${
              isMobile ? "justify-center" : ""
            } bg-gray-800 p-4 rounded`}
          >
            <Mail className="text-orange-500 mr-2" size={20} />
            <span>containers@shippingcompany.com</span>
          </div>
          <div
            className={`flex items-center ${
              isMobile ? "justify-center" : ""
            } bg-gray-800 p-4 rounded`}
          >
            <Phone className="text-orange-500 mr-2" size={20} />
            <span>+91 9876543210</span>
          </div>
        </div>

        {/* Footer Links - Headings */}
        <div
          className={`flex ${
            isMobile ? "flex-col" : "flex-row"
          } justify-between mb-6`}
        >
          <div
            className={`${isMobile ? "mb-2 text-center" : "w-1/3 text-center"}`}
          >
            <h2 className="text-xl font-bold">Product</h2>
          </div>
          <div
            className={`${isMobile ? "mb-2 text-center" : "w-1/3 text-center"}`}
          >
            <h2 className="text-xl font-bold">Company</h2>
          </div>
          <div
            className={`${isMobile ? "mb-2 text-center" : "w-1/3 text-center"}`}
          >
            <h2 className="text-xl font-bold">Support</h2>
          </div>
        </div>

        {/* Footer Links - Content */}
        <div
          className={`flex ${
            isMobile ? "flex-col" : "flex-row"
          } justify-between mb-10`}
        >
          <div
            className={`${isMobile ? "mb-6 text-center" : "w-1/3 text-center"}`}
          >
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-orange-500">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Updates
                </a>
              </li>
            </ul>
          </div>
          <div
            className={`${isMobile ? "mb-6 text-center" : "w-1/3 text-center"}`}
          >
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-orange-500">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Culture
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className={`${isMobile ? "text-center" : "w-1/3 text-center"}`}>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-orange-500">
                  Getting started
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Help center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Server status
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Report a bug
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Chat support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Copyright */}
        <div
          className={`flex ${
            isMobile ? "flex-col space-y-4" : "flex-row"
          } justify-between items-center`}
        >
          <div>Copyright © 2025 Company</div>
          <div>
            All Rights Reserved |{" "}
            <a href="#" className="hover:underline">
              Terms and Conditions
            </a>{" "}
            |{" "}
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
