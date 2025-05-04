import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import img from "../images/04.png"

const IndustriesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const industryImages = [
    { id: 1, name: 'Steel', image: 'https://placehold.co/400x320/EEE/31343C' }, // Using placeholder
    { id: 2, name: 'Aluminum', image: 'https://placehold.co/400x320/EEE/31343C' },
    { id: 3, name: 'Copper', image: 'https://placehold.co/400x320/EEE/31343C' },
    { id: 4, name: 'Iron', image: 'https://placehold.co/400x320/EEE/31343C' },
    { id: 5, name: 'Titanium', image: 'https://placehold.co/400x320/EEE/31343C' },
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
    <div className="w-full md:w-[85%] mx-auto py-8">
      {/* Industries we Cater to Section */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-8 mx-8">
        <div className="mb-6 md:mb-0 md:w-1/3">
          <h3 className="text-orange-500 uppercase font-medium text-sm mb-2">
            OUR EXPERTISE
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold">Industries we Cater to</h2>
        </div>

        <div className="md:w-1/2">
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor
          </p>

          <div className="flex mt-4">
            <button
              onClick={prevSlide}
              className="bg-orange-500 text-white p-2 rounded-full mr-2"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="bg-orange-500 text-white p-2 rounded-full"
              aria-label="Next slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Image slider */}
      <div className="relative overflow-hidden" ref={sliderRef}>
        <div
          className="flex flex-nowrap gap-4 mb-12 transition-all duration-300"
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
              <div className="relative group cursor-pointer overflow-hidden rounded-lg">
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-white text-xl font-semibold">{industry.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* We Also Solutions in */}
      <div
        className="bg-orange-400 rounded-lg p-1 flex flex-col md:flex-row items-center h-auto" //h-56 changed to h-auto
      >
        <div className="md:w-1/2 mb-6 md:mb-0 pl-8">
          <h2 className="text-white text-2xl font-bold mb-4">
            We Also Solutions in
          </h2>
          <div className="flex flex-wrap gap-2">
            {containerTypes.map((container) => (
              <span
                key={container.id}
                className="bg-white text-gray-700 px-4 py-2 rounded-full text-sm whitespace-nowrap"
              >
                {container.name}
              </span>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2 h-48 md:h-64">
                    <img 
                      src={img} 
                      alt="Container with analytics"
                      className="w-full h-full object-cover"
                    />
                  </div>
      </div>
    </div>
  );
};

export default IndustriesSection;
