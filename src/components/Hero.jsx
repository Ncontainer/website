import { useState, useEffect } from 'react';
import hero1 from "../images/Hero1.png";
import herovideo from "../images/herovideo.mp4";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsMediumScreen(width >= 768 && width < 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden ">
      {/* Background Video */}
      <div
        className={`absolute overflow-hidden bottom-0 z-0 ${
          isMobile ? "inset-x-0 w-full px-0 rounded-none" : "inset-x-0 w-[90%] mx-auto rounded-xl"
        } ${isMobile ? "h-[180px]" : isMediumScreen ? "h-[38%]" : "h-[46%]"}`}
      >
        <video
          className={`object-cover w-full h-full ${
            isMobile ? "rounded-none" : "rounded-xl"
          }`}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={herovideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div
          className={`absolute inset-0 bg-black bg-opacity-40 ${
            isMobile ? "rounded-none" : "rounded-xl"
          }`}
        ></div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 right-0 z-10 w-[60%]">
          <div className="flex bg-secondary bg-opacity-85 w-full justify-around rounded-md py-2 sm:py-3 md:py-4">
            <div className="flex flex-col items-center w-full px-1">
              <span className="text-base sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl text-white">
                25+
              </span>
              <span className="text-[9px] sm:text-[10px] md:text-xs text-white mt-1 text-center whitespace-nowrap">
                Years of experience
              </span>
            </div>
            <div className="h-10 w-[1px] bg-white opacity-20 self-center"></div>
            <div className="flex flex-col items-center w-full px-1">
              <span className="text-base sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl text-white">
                950+
              </span>
              <span className="text-[9px] sm:text-[10px] md:text-xs text-white mt-1 text-center whitespace-nowrap">
                Collaborations
              </span>
            </div>
            <div className="h-10 w-[1px] bg-white opacity-20 self-center"></div>
            <div className="flex flex-col items-center w-full px-1">
              <span className="text-base sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl text-white">
                30M+
              </span>
              <span className="text-[9px] sm:text-[10px] md:text-xs text-white mt-1 text-center whitespace-nowrap">
                Containers Sold
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col w-full h-full">
        <div
          className={`w-full px-4 sm:px-6 md:px-8 lg:px-16 ${
            isMobile ? "mt-0" : isMediumScreen ? "mt-8" : "mt-12"
          }`}
        >
          <div
            className={`flex ${
              isMobile ? "flex-col" : "flex-row"
            } items-center justify-between w-full max-w-7xl mx-auto ${
              isMobile ? "mt-0" : isMediumScreen ? "mt-6" : "mt-10"
            }`}
          >
            {/* Text Section */}
            <div
              className={`${
                isMobile ? "w-full text-left" : "w-1/2 pr-8"
              } ${isMobile ? "order-1 mb-6" : "order-1"}`}
            >
              <div className="mb-2 md:mb-4 text-secondary">
                <span className="text-sm sm:text-base md:text-lg font-medium">
                  WELCOME TO COMPANY
                </span>
              </div>
              <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-black mb-4 md:mb-4 flex flex-col leading-tight">
                <span className="mb-1">Get Your Load</span>
                <span className="mb-1">to market</span>
                <span>Faster</span>
              </div>
              <p className="text-gray-600 mb-4 md:mb-8 max-w-md text-xs sm:text-sm md:text-base lg:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            {/* Image Section */}
            <div
              className={`${
                isMobile ? "w-full mt-[-12%] z-30" : "w-1/2"
              } relative pointer-events-none ${isMobile ? "order-2" : "order-2"}`}
            >
              <div className="relative">
                <div
                  className={`relative z-20 transform ${
                    isMobile
                      ? "scale-[1.1]"
                      : isMediumScreen
                      ? "scale-[1.1]"
                      : "scale-[1.2]"
                  }`}
                >
                  <img
                    src={hero1}
                    alt="Orange shipping container being lifted"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}