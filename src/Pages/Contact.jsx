import { useState } from "react";

import HexagonalWorldMap from "../components/HexagonalWorldMap"
import ContactUs from "../components/ContactUs";
import OurTeam from "../components/OurTeam";
import blog from "../images/04.png"

function Contact() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  
  const handleSubmit = () => {
    if (email && email.includes('@')) {
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

    return (
      <>
      <HexagonalWorldMap />
      <OurTeam />
      <ContactUs />
         {/* Newsletter Subscription */}
      <div className="w-[85%] m-auto mb-10 bg-secondary rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 p-6 md:p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Subscribe to our Newsletter
            </h3>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow">
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Email*"
                  className="w-full bg-transparent border-b border-white/70 pb-2 text-white placeholder-white/80 focus:outline-none focus:border-white"
                />
              </div>
              <button
                onClick={handleSubmit}
                className="px-8 py-2 bg-white text-secondary rounded-full font-medium hover:bg-white/90 transition-colors"
              >
                {isSubmitted ? "Thanks!" : "Submit"}
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-48 md:h-64">
            <img 
              src={blog} 
              alt="Container with analytics"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      </>
    );
  }
  
  export default Contact;