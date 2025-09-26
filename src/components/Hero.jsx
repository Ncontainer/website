import { useState, useEffect, useRef } from 'react';
// import hero1 from "../images/Hero1.png";
import hero1 from "../images/Hero1_new.webp";
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
      {/* Main Content */}
      <div className="relative w-full h-auto bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start px-4 md:px-8 lg:px-16 pt-10">
          {/* Text */}
          <div className="w-full lg:w-[500px] mb-8">
            {/* <span className="text-orange-600 text-sm md:text-base font-medium">
              WELCOME TO COMPANY
            </span> */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font- text-black leading-tight mt-3">
              Get Your Load <br /> to market  —Faster, Safer, 
Smarter
            </h1>
            <p className="text-gray-600 mt-4 text-base md:text-lg max-w-md">
              Simplifying container buying, selling, leasing, and transport across India and international locations — all under one roof.
            </p>
          </div>
          {/* Image */}
          <div className="z-30 hero-img flex-1 flex justify-center lg:justify-end w-full">
            <img
              src={hero1}
              alt="Shipping container"
              className="w-full max-w-[70rem] object-contain"
            />
          </div>
        </div>
      </div>
      {/* Background Video */}
      <div
        ref={videoRef}
        className={`relative top-[-100px] md:top-[100px] mt-16  md:mt-0  video-block ${
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





















