import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import img from "../images/04.png";
import steel from "../images/steel.png";
import aluminum from "../images/steel.png";
import copper from "../images/steel.png";
import iron from "../images/steel.png";
import titanium from "../images/steel.png";

const IndustriesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef(null);
  const [slideWidth, setSlideWidth] = useState(0);

  const industryImages = [
    { id: 1, name: 'Steel', image: steel },
    { id: 2, name: 'Aluminum', image: aluminum },
    { id: 3, name: 'Copper', image: copper },
    { id: 4, name: 'Iron', image: iron },
    { id: 5, name: 'Titanium', image: titanium },
  ];

  const containerTypes = [
    { id: 1, name: 'Tanks', path: '/products/tanks' },
    { id: 2, name: 'Coil-tainers', path: '/products/coil_containers' },
    { id: 3, name: 'Modular Containers', path: '/products/modular_containers' },
    { id: 4, name: 'Refrigerated Containers', path: '/products/refrigerated_containers' },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (sliderRef.current) {
        const singleSlide = sliderRef.current.querySelector('.slide-item');
        if (singleSlide) {
          setSlideWidth(singleSlide.offsetWidth);
        }
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const slides = [...industryImages, ...industryImages, ...industryImages]; // triple for infinite illusion

  const handleSlide = (direction) => {
    if (direction === 'next') {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const getTranslateX = () => {
    return -currentIndex * slideWidth;
  };

  // Reset index for infinite effect
  useEffect(() => {
    if (currentIndex >= industryImages.length * 2) {
      setTimeout(() => {
        setCurrentIndex(industryImages.length);
      }, 300);
    } else if (currentIndex <= industryImages.length - 1) {
      setTimeout(() => {
        setCurrentIndex(industryImages.length);
      }, 300);
    }
  }, [currentIndex]);

  useEffect(() => {
    // Start in the middle of the cloned array
    setCurrentIndex(industryImages.length);
  }, []);

  return (
    <div className="w-full md:w-[95%] mx-auto pb-4 lg:py-8">
      {/* Header */}
     <div className="flex flex-col md:flex-row justify-between items-start mb-8 mx-8">
  {/* Left section stays untouched */}
  <div className="mb-6 md:mb-0 md:w-1/3">
    <h3 className="text-orange-500 uppercase md:text-2xl text-sm mb-2">
      OUR EXPERTISE
    </h3>
    <h2 className="text-4xl md:text-7xl">
      Industries we Cater to
    </h2>
  </div>

  {/* Right section shifted down */}
  <div className="md:w-1/2 md:mt-[38px]">
    <p className="text-gray-600 text-sm">
     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
    </p>
  </div>
</div>

      {/* Slider */}
      <div className="relative overflow-hidden px-4">
        {/* Arrows */}
        <button
          onClick={() => handleSlide('prev')}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white p-2 rounded-full z-10"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => handleSlide('next')}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white p-2 rounded-full z-10"
        >
          <ChevronRight size={20} />
        </button>

        {/* Slide Wrapper */}
        <div className="overflow-hidden">
          <div
            ref={sliderRef}
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(${getTranslateX()}px)` }}
          >
            {slides.map((industry, index) => (
              <div
                key={`${industry.id}-${index}`}
                className={`slide-item ${
                  isMobile ? 'w-full' : 'w-full sm:w-1/2 md:w-1/3'
                } flex-shrink-0 px-2`}
              >
                <div className="relative group cursor-pointer overflow-hidden md:rounded-lg">
                  <img
                    src={industry.image}
                    alt={industry.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-[#00000080] flex items-center justify-center">
                    <h3 className="text-white text-3xl font-bold">{industry.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Container Types Section */}
      {/* <div className="bg-gradient-to-r from-[#FF8901] to-[#FFC107] md:rounded-lg p-1 flex flex-col md:flex-row items-center h-auto pt-4 sm:pt-1 mt-10">
        <div className="md:w-1/2 mb-6 md:mb-0 pl-8">
          <h2 className="text-white text-2xl font-bold mb-4">We Also Solutions in</h2>
          <div className="flex flex-wrap gap-2">
            {containerTypes.map((container) => (
              <Link
                key={container.id}
                to={container.path}
                className="bg-transparent border-2 border-white text-white font-medium px-4 py-2 rounded-full text-sm whitespace-nowrap hover:bg-white hover:text-orange-500 transition-colors"
              >
                {container.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/2 h-48 md:h-64 overflow-hidden">
          <img
            src={img}
            alt="Container with analytics"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div> */}
    </div>
  );
};

export default IndustriesSection;