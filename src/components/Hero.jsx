import { useState, useEffect } from 'react';
import hero1 from "../images/Hero1.png";
import herovideo from "../images/herovideo.mp4";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallMobile, setIsSmallMobile] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsSmallMobile(width < 480);
      setIsMediumScreen(width >= 768 && width < 1024);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video - Non-mobile */}
      {!isMobile && (
        <div
          className={`absolute overflow-hidden rounded-xl inset-x-0 bottom-0 w-[90%] mx-auto z-0 ${
            isMediumScreen ? "h-[40%]" : "h-[48%]"
          }`}
        >
          <video
            className="object-cover w-full h-full rounded-xl"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={herovideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
      )}

      {/* Main Container */}
      <div className="relative z-10 flex flex-col w-full h-full">
        <div
          className={`w-full px-4 sm:px-6 md:px-8 lg:px-16 ${
            isMobile
              ? "mt-16"
              : isMediumScreen
              ? "mt-8 md:-translate-y-24"
              : "mt-12 -translate-y-28"
          }`}
        >
          <div
            className={`flex ${
              isMobile ? "flex-col" : "flex-row"
            } items-center justify-between w-full max-w-7xl mx-auto ${
              isMobile ? "mt-2" : isMediumScreen ? "mt-6" : "mt-10"
            }`}
          >
            {/* Text Section */}
            <div
              className={`${
                isMobile ? "w-full text-left" : "w-1/2 pr-8"
              } ${isMobile ? "order-1 mb-8" : "order-1"}`}
            >
              <div className="mb-2 md:mb-4 text-secondary">
                <span
                  className={`${
                    isSmallMobile ? "text-base" : "text-xl"
                  } font-medium`}
                >
                  WELCOME TO COMPANY
                </span>
              </div>
              <div
                className={`${
                  isSmallMobile ? "text-4xl" : "text-4xl"
                } ${
                  isMediumScreen
                    ? "md:text-4xl lg:text-5xl"
                    : "md:text-5xl lg:text-6xl"
                } text-black mb-4 md:mb-4 flex flex-col leading-tight`}
              >
                <span className="mb-1">Get Your Load</span>
                <span className="mb-1">to market</span>
                <span>Faster</span>
              </div>
              <p className="text-gray-600 mb-4 md:mb-8 max-w-md text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            {/* Container Image */}
            <div
              className={`${
                isMobile ? "w-full" : "w-1/2"
              } md:relative absolute z-30 top-[15rem] sm:top-[16rem] md:top-0 ${
                isMobile ? "order-2" : "order-2"
              } pointer-events-none`}
            >
              <div className="relative">
                <div
                  className={`relative z-20 transform ${
                    isMobile
                      ? "translate-y-0 scale-100"
                      : isMediumScreen
                      ? "translate-y-4 scale-[1.2]"
                      : "translate-y-8 md:translate-y-6 lg:translate-y-10 scale-[1.42]"
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

          {/* Mobile Video + Stats Bar (Attached) */}
          {isMobile && (
            <div className="w-screen relative -ml-4 sm:-ml-6 md:-ml-8 lg:-ml-16 mt-[12rem] z-10">
              <div className="relative">
                <video
                  className="object-cover w-full"
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ aspectRatio: "16/9" }}
                >
                  <source src={herovideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              </div>

              {/* Attached Stats Bar */}
              <div className="flex bg-secondary bg-opacity-85 overflow-hidden w-full">
                {/* Stat 1 */}
                <div className="w-full py-2 flex flex-col items-center">
                  <span className="text-3xl text-white">25+</span>
                  <span
                    className="text-sm text-white mt-1 text-center"
                    style={{ fontFamily: "Roboto" }}
                  >
                    Years of experience
                  </span>
                </div>
                <div className="h-16 w-[1px] bg-white opacity-20 self-center my-auto"></div>

                {/* Stat 2 */}
                <div className="w-full py-2 flex flex-col items-center">
                  <span className="text-3xl text-white">950+</span>
                  <span
                    className="text-sm text-white mt-1 text-center"
                    style={{ fontFamily: "Roboto" }}
                  >
                    Collaborations
                  </span>
                </div>
                <div className="h-16 w-[1px] bg-white opacity-20 self-center my-auto"></div>

                {/* Stat 3 */}
                <div className="w-full py-2 flex flex-col items-center">
                  <span className="text-3xl text-white">30M+</span>
                  <span
                    className="text-sm text-white mt-1 text-center"
                    style={{ fontFamily: "Roboto" }}
                  >
                    Containers Sold
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Stats Bar (Desktop Only) */}
        {!isMobile && (
          <div
            className={`status-bar absolute bottom-0 md:right-[5%] w-full sm:w-auto z-50 ${
              isMobile ? "right-0 left-0 mx-auto" : "right-[7.5%]"
            }`}
          >
            <div
              className={`flex bg-secondary bg-opacity-85 overflow-hidden mx-auto ${
                isMobile ? "w-full" : isMediumScreen ? "rounded-l-lg" : "rounded-lg"
              } ${isMediumScreen ? "text-sm" : ""}`}
            >
              {/* Stat 1 */}
              <div
                className={`${
                  isMobile ? "w-full py-2" : isMediumScreen ? "px-6 py-5" : "px-12 py-8"
                } flex flex-col items-start ${isMobile ? "items-center" : ""}`}
              >
                <span
                  className={`${
                    isSmallMobile ? "text-2xl" : "text-3xl"
                  } ${isMediumScreen ? "md:text-3xl" : "md:text-5xl"} text-white`}
                >
                  25+
                </span>
                <span
                  className={`${
                    isSmallMobile ? "text-xs text-center" : "text-sm"
                  } ${isMediumScreen ? "text-xs" : ""} text-white mt-1`}
                  style={{ fontFamily: "Roboto" }}
                >
                  Years of experience
                </span>
              </div>
              <div
                className={`${
                  isMediumScreen ? "h-12" : "h-16"
                } w-[1px] bg-white opacity-20 self-center my-auto`}
              />
              {/* Stat 2 */}
              <div
                className={`${
                  isMobile ? "w-full py-2" : isMediumScreen ? "px-6 py-5" : "px-16 py-8"
                } flex flex-col items-start ${isMobile ? "items-center" : ""}`}
              >
                <span
                  className={`${
                    isSmallMobile ? "text-2xl" : "text-3xl"
                  } ${isMediumScreen ? "md:text-3xl" : "md:text-5xl"} text-white`}
                >
                  950+
                </span>
                <span
                  className={`${
                    isSmallMobile ? "text-xs text-center" : "text-sm"
                  } ${isMediumScreen ? "text-xs" : ""} text-white mt-1`}
                  style={{ fontFamily: "Roboto" }}
                >
                  Collaborations
                </span>
              </div>
              <div
                className={`${
                  isMediumScreen ? "h-12" : "h-16"
                } w-[1px] bg-white opacity-20 self-center my-auto`}
              />
              {/* Stat 3 */}
              <div
                className={`${
                  isMobile ? "w-full py-2" : isMediumScreen ? "px-6 py-5" : "px-16 py-8"
                } flex flex-col items-start ${isMobile ? "items-center" : ""}`}
              >
                <span
                  className={`${
                    isSmallMobile ? "text-2xl" : "text-3xl"
                  } ${isMediumScreen ? "md:text-3xl" : "md:text-5xl"} text-white`}
                >
                  30M+
                </span>
                <span
                  className={`${
                    isSmallMobile ? "text-xs text-center" : "text-sm"
                  } ${isMediumScreen ? "text-xs" : ""} text-white mt-1`}
                  style={{ fontFamily: "Roboto" }}
                >
                  Containers Sold
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}