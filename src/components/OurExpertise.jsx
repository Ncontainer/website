import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import img from "../images/04.png";
import steel from "../images/steel.png";
import aluminum from "../images/steel.png";
import copper from "../images/steel.png";
import iron from "../images/steel.png";
import titanium from "../images/steel.png";

const IndustriesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const industryImages = [
    { id: 1, name: 'Steel', image: steel },
    { id: 2, name: 'Aluminum', image: aluminum },
    { id: 3, name: 'Copper', image: copper },
    { id: 4, name: 'Iron', image: iron },
    { id: 5, name: 'Titanium', image: titanium },
  ];

  const containerTypes = [
    { id: 1, name: 'Tanks' },
    { id: 2, name: 'Coil-tainers' },
    { id: 3, name: 'Modular Containers' },
    { id: 4, name: 'Refrigerated Containers' },
  ];

  const checkIsMobile = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const nextSlide = () => {
    if (currentSlide < industryImages.length - 1) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  return (
    <div className="w-full md:w-[95%] mx-auto pb-4 lg:py-8">
      {/* Industries we Cater to Section */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-8 mx-8">
        <div className="mb-6 md:mb-0 md:w-1/3">
          <h3 className="text-orange-500 uppercase font-medium text-sm mb-2">
            OUR EXPERTISE
          </h3>
          <h2 className="text-3xl md:text-4xl">Industries we Cater to</h2>
        </div>

        <div className="md:w-1/2">
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor
          </p>
        </div>
      </div>

      {/* Image slider */}
      <div className="relative overflow-hidden" ref={sliderRef}>
        {/* Arrows positioned on sides */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white p-2 rounded-full z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white p-2 rounded-full z-10"
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>

        <div
          className="flex flex-nowrap gap-4 mb-4 transition-all duration-300"
          style={{
            transform: `translateX(-${currentSlide * (isMobile ? 100 : 33.33)}%)`,
          }}
        >
          {industryImages.map((industry) => (
            <div
              key={industry.id}
              className={
                isMobile
                  ? "relative w-full flex-shrink-0"
                  : "relative w-full sm:w-1/2 md:w-1/3 flex-shrink-0"
              }
            >
              <div className="relative group cursor-pointer overflow-hidden md:rounded-lg">
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-[#00000080] flex items-center justify-center">
                  <h3 className="text-white text-3xl font-bold">{industry.name}</h3>
                <div className="absolute inset-0 bg-[#00000080] flex items-center justify-center">
                  <h3 className="text-white text-3xl font-bold">{industry.name}</h3>
                </div>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
        

      {/* We Also Solutions in */}
      <div className="bg-gradient-to-r from-[#FF8901] to-[#FFC107] md:rounded-lg p-1 flex flex-col md:flex-row items-center h-auto pt-4 sm:pt-1">
        <div className="md:w-1/2 mb-6 md:mb-0 pl-8">
          <h2 className="text-white text-2xl font-bold mb-4">We Also Solutions in</h2>
          <div className="flex flex-wrap gap-2">
            {containerTypes.map((container) => (
              <span
                key={container.id}
                className="bg-transparent border-2 border-white text-white font-medium px-4 py-2 rounded-full text-sm whitespace-nowrap"
              >
                {container.name}
              </span>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2 h-48 md:h-64 overflow-hidden">
          <img
            src={img}
            alt="Container with analytics"
            className="w-full h-full scale-150 transform translate-y-[2rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default IndustriesSection;