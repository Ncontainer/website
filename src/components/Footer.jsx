import { Mail, MapPin, Phone, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/whitelogo.png";
import dryImage from "../images/popup.webp";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [showBrochureSuccess, setShowBrochureSuccess] = useState(false);
  const [showEmailPrompt, setShowEmailPrompt] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const navigate = useNavigate();

  // 📌 Resize listener
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 📌 Check login status
  useEffect(() => {
    const status = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(status === "true");
  }, [location.pathname]);

  // 📌 Close popup on back button
  useEffect(() => {
    const handlePopState = () => {
      if (showEmailPrompt) setShowEmailPrompt(false);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [showEmailPrompt]);

  // 📌 Push history state when popup opens
  useEffect(() => {
    if (showEmailPrompt) window.history.pushState({ popup: true }, "");
  }, [showEmailPrompt]);

  // 📌 Handle brochure download/send
  const handleBrochureClick = async () => {
    if (isLoggedIn) {
      try {
        const response = await fetch(
          "https://cktgf93ztd.us-east-1.awsapprunner.com/api/brochure/send",
          {
            method: "GET",
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
          }
        );

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
      const response = await fetch(
        "https://cktgf93ztd.us-east-1.awsapprunner.com/api/brochure/send",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: userEmail }),
        }
      );

      if (!response.ok) throw new Error("Failed to send brochure");

      alert("Brochure will be sent to your email shortly.");
      setShowEmailPrompt(false);
      setUserEmail("");
    } catch (error) {
      alert("Failed to send brochure. Please try again.");
    }
  };

  return (
    <section className="w-full bg-[#1E1E1E] text-white py-10 relative">
      <div className="mx-auto w-4/5">
        {/* Logo & Description */}
        <div className="text-center mb-8">
          <img src={logo} alt="Company Logo" className="mx-auto h-18 md:h-16 mb-2" />
          <p className="text-sm md:text-base text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Contact Info */}
        <div className={`grid ${isMobile ? "grid-cols-1 gap-4" : "grid-cols-3 gap-2"} mb-12`}>
          <ContactCard icon={<MapPin />} text="794 Mcallister St San Francisco, 94102" />
          <ContactCard icon={<Mail />} text="containers@shippingcompany.com" />
          <ContactCard icon={<Phone />} text="+91 9820420924" />
        </div>

        {/* Footer Links */}
        <div className="flex justify-between mb-6">
          <FooterColumn title="Product">
            <FooterLink to="/products/dry_Container" text="Dry Container" />
            <FooterLink to="/products/tanks" text="Liquid Transport Solutions" />
            <FooterLink to="/products/coil_containers" text="Coil Containers" />
            <FooterLink to="/products/modular_containers" text="Modular Containers" />
            <FooterLink to="/products/refrigerated_containers" text="Refrigerated Container" />
          </FooterColumn>

          <FooterColumn title="Company">
            <FooterLink to="/about" text="About" />
            <FooterLink to="/contact" text="Contact us" />
            <FooterLink to="/feedback" text="Feedback" />
            <FooterLink to="/resources" text="Resources" />
            <button onClick={handleBrochureClick} className="hover:text-orange-500">
              Brochure
            </button>
          </FooterColumn>

          <FooterColumn title="Support">
            <FooterLink to="#" text="Getting started" />
            <FooterLink to="#" text="Help center" />
            <FooterLink to="#" text="Server status" />
            <FooterLink to="#" text="Report a bug" />
            <FooterLink to="#" text="Chat support" />
          </FooterColumn>
        </div>

        <div className="border-t border-gray-700 my-6"></div>

        {/* Copyright */}
        <div className={`flex ${isMobile ? "flex-col space-y-4" : "flex-row justify-between items-center"} text-sm md:text-base`}>
          <div>Copyright © 2025 Company</div>
          <div>
            All Rights Reserved | <Link to="/terms-conditions">Terms and Conditions</Link> |{" "}
            <Link to="/privacy-policy">Privacy Policy</Link>
          </div>
        </div>
      </div>

      {/* ✅ Brochure Success Modal */}
      {showBrochureSuccess && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h2 className="text-lg font-semibold mb-2 text-green-600">
              Brochure downloaded successfully!
            </h2>
          </div>
        </div>
      )}

      {/* ✅ Email Prompt Modal */}
      {showEmailPrompt && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-xl w-[90%] max-w-4xl p-8 flex flex-col md:flex-row items-center gap-6 relative">
            <button
              onClick={() => setShowEmailPrompt(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-xl font-bold"
            >
              &times;
            </button>
            {/* Left Illustration */}
            <div className="flex-1">
              <img src={dryImage} alt="Truck Illustration" className="w-full max-w-sm mx-auto" />
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
    </section>
  );
}

function ContactCard({ icon, text }) {
  return (
    <div className="flex flex-col items-center justify-center bg-white/25 p-4 rounded text-center">
      <span className="text-orange-500 mb-2">{icon}</span>
      <span className="text-[0.8rem] sm:text-sm text-center">{text}</span>
    </div>
  );
}

function FooterColumn({ title, children }) {
  return (
    <div className="text-center w-1/3">
      <h2 className="text-base md:text-xl font-bold mb-2">{title}</h2>
      <ul className="space-y-2">{children}</ul>
    </div>
  );
}

function FooterLink({ to, text }) {
  return (
    <li>
      <Link to={to} className="text-sm md:text-base hover:text-orange-500">
        {text}
      </Link>
    </li>
  );
}