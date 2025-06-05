import React from "react";
import { useState } from 'react';
import blog from "../images/04.png";

const NewsLetter = () => {
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
  return  <div className="bg-secondary w-[95%] m-auto rounded-lg overflow-hidden">
          <div className="flex flex-row items-center">
            <div className="w-full md:w-1/2 p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl  text-white mb-6">
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
                  className="px-8 py-2 bg-transparent text-white border-white border rounded-full font-medium hover:bg-white/90 transition-colors"
                >
                  {isSubmitted ? "Thanks!" : "Submit"}
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2 h-48 md:h-64">
              <img 
                src={blog} 
                alt="Container with analytics"
                className="w-full h-full transform translate-y-[100px] scale-[1.3]"
              />
            </div>
          </div>
        </div>;
};

export default NewsLetter;
