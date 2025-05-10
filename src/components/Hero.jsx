import { useState, useEffect } from 'react';
import hero1 from "../images/Hero1.png"
import herovideo from "../images/herovideo.mp4"


export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallMobile, setIsSmallMobile] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsSmallMobile(window.innerWidth < 480);
    };
    
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div className="relative w-full h-screen overflow-hidden ">
      {/* Background Video - Taking only 60% height as per requirement */}
      <div className="absolute overflow-hidden rounded-xl inset-x-0 bottom-0 w-[85%] mx-auto h-3/5 z-0">
        <video 
          className="object-cover w-full h-full rounded-xl "
          autoPlay 
          loop 
          muted 
          playsInline
        >
          {/* In production, replace with your actual video */}
          <source src={herovideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      {/* Content Container - Shifted to top */}
      <div className="relative z-10 flex flex-col w-full h-full">
        {/* Text and image content - At top of page */}
        <div className={`w-full md:-translate-y-36 px-4 sm:px-6 md:px-8 lg:px-16 ${isMobile ? 'pt-6' : 'pt-12'}`}>
          {/* Hero Content */}
          <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} items-center justify-between w-full max-w-7xl mx-auto`}>
            {/* Text content with mobile optimizations */}
            <div className={`${isMobile ? 'w-full text-center' : 'w-1/2 pr-8'} ${isMobile ? 'order-2 mt-4' : 'order-1'}`}>
              <div className="inline-block mb-2 md:mb-4 px-2 py-1 md:px-3 md:py-1 text-[#ff8901] rounded-full">
                <span className={`${isSmallMobile ? 'text-ms' : 'text-xl'} font-semibold`}>WELCOME TO CONTAINER OPTIONS</span>
              </div>
              <h1 className={`${isSmallMobile ? 'text-3xl' : 'text-4xl'} md:text-5xl lg:text-6xl font-bold text-black mb-2 md:mb-4 `}>
                Get Your Load<br />to market<br />Faster
              </h1>
              <p className="text-gray-800 mb-4 md:mb-8 max-w-lg text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              {/* <button className={`bg-[#ff8901] hover:bg-orange-600 transition-colors text-white font-bold ${isSmallMobile ? 'py-2 px-6 text-sm' : 'py-3 px-8'} rounded-lg`}>
                Get Started
              </button> */}
            </div>
            
            {/* Container Image - Optimized for mobile */}
            <div className={`${isMobile ? 'w-full max-w-sm mx-auto' : 'w-1/2'} relative ${isMobile ? 'order-1' : 'order-2'}`}>
              <div className="relative">
                {/* Container being lifted by crane - Optimized for mobile */}
                <div className="relative z-20 transform translate-y-2 md:-translate-y-0.5 scale-150">
                  <img 
                    src={hero1} 
                    alt="Orange shipping container being lifted" 
                    className=" translate-y-10 translate-x--2 w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Bar - In right bottom corner */}
        <div className={`${isMobile ? 'relative w-full mt-auto mb-2 px-16' : 'absolute bottom-0 right-8 md:right-36 w-auto'}`}>
          <div className={`flex ${isMobile ? 'flex-col space-y-1' : 'flex-row'} bg-[#ff8901] bg-opacity-85 rounded-lg overflow-hidden`}>
            <div className={`${isMobile ? 'w-full py-2' : 'px-12 py-8'} flex flex-col items-center justify-center ${!isMobile && 'border-r border-[#ff8901]'}`}>
              <span className={`${isSmallMobile ? 'text-2xl' : 'text-3xl'} md:text-4xl font-bold text-white`}>25+</span>
              <span className={`${isSmallMobile ? 'text-xs' : 'text-sm'} text-white`}>Years of experience</span>
            </div>
            <div className={`${isMobile ? 'w-full py-2' : 'px-16 py-8'} flex flex-col items-center justify-center ${!isMobile && 'border-r border-[#ff8901]'}`}>
              <span className={`${isSmallMobile ? 'text-2xl' : 'text-3xl'} md:text-4xl font-bold text-white`}>950+</span>
              <span className={`${isSmallMobile ? 'text-xs' : 'text-sm'} text-white`}>Collaborations</span>
            </div>
            <div className={`${isMobile ? 'w-full py-2' : 'px-16 py-8'} flex flex-col items-center justify-center`}>
              <span className={`${isSmallMobile ? 'text-2xl' : 'text-3xl'} md:text-4xl font-bold text-white`}>30M+</span>
              <span className={`${isSmallMobile ? 'text-xs' : 'text-sm'} text-white`}>Containers Sold</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}