import { useState, useEffect, useRef } from 'react';
import hero1 from "../images/Hero1.png";
import herovideo from "../images/herovideo.mp4";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  const [videoHeight, setVideoHeight] = useState(0);

  const videoRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsMediumScreen(width >= 768 && width < 1024);

      if (videoRef.current) {
        setVideoHeight(videoRef.current.offsetHeight);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const observer = new ResizeObserver(() => {
      if (videoRef.current) {
        setVideoHeight(videoRef.current.offsetHeight);
      }
    });
    if (videoRef.current) observer.observe(videoRef.current);

    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, []);

  const handleExploreClick = () => {
    const section = document.getElementById("logistics-overview");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Main Content */}
      <div className="relative z-20 flex flex-col w-full bg-transparent">
        <div
          className="w-full px-4 sm:px-6 md:px-8 lg:px-16 pt-6 sm:pt-10 md:pt-12 lg:pt-14"
        >
          <div
            className={`flex ${
              isMobile ? "flex-col" : "flex-row"
            } items-start justify-between w-full max-w-7xl mx-auto`}
          >
            {/* Text Section */}
            <div
              className={`${
                isMobile
                  ? "w-full text-center items-center flex flex-col mb-8"
                  : "w-1/2 pr-8 text-left"
              }`}
            >
              <div className="mb-2 md:mb-3 text-secondary">
                <span className="text-sm sm:text-base md:text-lg font-medium text-orange-600">
                  WELCOME TO COMPANY
                </span>
              </div>
              <div
                className={`${
                  isMobile
                    ? "text-2xl text-center"
                    : "text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-left"
                } text-black mb-4 font-saira leading-tight`}
              >
                Get Your Load <br />
                to market Faster
              </div>
              <p className="text-gray-600 mb-4 md:mb-6 max-w-md text-sm sm:text-base md:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="relative z-30">
                <button
                  className="bg-amber-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-600 transition duration-300"
                  onClick={handleExploreClick}
                >
                  Explore More
                </button>
              </div>
            </div>

            {/* Image Section */}
            <div
              className={`${
                isMobile ? "w-full mt-6 z-30" : "w-1/2"
              } relative pointer-events-none`}
            >
              <div className="relative hero-img w-[700px]">
                <div
                  className={`relative z-20 transform ${
                    isMobile
                      ? "scale-[1]"
                      : isMediumScreen
                      ? "scale-[1.05]"
                      : "scale-[1.1]"
                  }`}
                >
                  <img
                    src={hero1}
                    alt="Orange shipping container being lifted"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Video */}
      <div
        ref={videoRef}
        className={`relative z-10 video-block ${
          isMobile ? "h-[180px]" : isMediumScreen ? "h-[40%]" : "h-[40%]"
        } ${isMobile ? "rounded-none" : "rounded-xl w-[90%] mx-auto"}`}
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
        <div className="absolute bottom-0 right-0 z-20 w-full md:w-[60%]">
          <div className="flex bg-orange-500 w-full justify-around rounded-md py-2 sm:py-3 md:py-4">
            <div className="flex flex-col items-center w-full px-1">
              <span className="text-lg sm:text-xl md:text-3xl lg:text-4xl text-white">
                25+
              </span>
              <span className="text-[10px] sm:text-xs md:text-sm text-white mt-1 text-center whitespace-nowrap">
                Years of experience
              </span>
            </div>
            <div className="h-10 w-[1px] bg-white opacity-30 self-center"></div>
            <div className="flex flex-col items-center w-full px-1">
              <span className="text-lg sm:text-xl md:text-3xl lg:text-4xl text-white">
                950+
              </span>
              <span className="text-[10px] sm:text-xs md:text-sm text-white mt-1 text-center whitespace-nowrap">
                Collaborations
              </span>
            </div>
            <div className="h-10 w-[1px] bg-white opacity-30 self-center"></div>
            <div className="flex flex-col items-center w-full px-1">
              <span className="text-lg sm:text-xl md:text-3xl lg:text-4xl text-white">
                30M+
              </span>
              <span className="text-[10px] sm:text-xs md:text-sm text-white mt-1 text-center whitespace-nowrap">
                Containers Sold
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for 1440px screen adjustments */}
      <style jsx>{`
        @media (min-width: 1440px) {
          .hero-img {
            margin-top: -70px; /* Pull image closer to video */
          }
          .video-block {
            margin-top: -100px; /* Pull video closer to text */
          }
        }
      `}</style>
    </div>
  );
}