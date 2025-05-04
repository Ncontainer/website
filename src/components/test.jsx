import React from 'react';

export default function LiquidTransportSolutions() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section - Stack vertically on mobile, side by side on larger screens */}
      <div className="flex flex-col lg:flex-row w-full">
        {/* Left side - Text content */}
        <div className="bg-white p-6 lg:p-12 lg:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            LIQUID TRANSPORT SOLUTIONS
          </h1>
          <div className="text-gray-600 text-sm md:text-base space-y-3">
            <p>
              NCON, a premier ISO tank container supplier, specializes in providing tanks on
              lease for bulk and hazardous chemicals. Our flexible lease terms cater to your
              needs, offering ISO tank containers of various capacities for liquids, from food to
              corrosive acids.
            </p>
            <p>
              As a one-stop solution, we provide ISO tank containers for rent with options for
              tank types, purposes, durations, and terms. Safety is our priority; we offer
              company-owned modern ISO tank containers for secure storage at your facilities
              or our warehouse.
            </p>
            <p>
              Securely store and transport your most challenging chemicals with ARCON's
              industry-leading highly corrosive tank solutions, including the renowned T14 and
              T50 ISO tank containers designed to handle aggressive acids and bases.
            </p>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="lg:w-1/2 h-64 md:h-96 lg:h-auto overflow-hidden">
          <img 
            src="/api/placeholder/800/600" 
            alt="ISO tank containers stacked with shipping containers"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Full width container image */}
      <div className="w-full h-64 md:h-80 lg:h-96 overflow-hidden">
        <img 
          src="/api/placeholder/1200/400" 
          alt="ISO tank containers in shipping yard" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* T11 ISO Tank Container Section */}
      <div className="w-full bg-white p-6 md:p-12">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
          {/* Left side - Text content */}
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">
              T11 ISO Tank Container
            </h2>
            
            <p className="text-gray-700 mb-6">
              The ISO Tank T11 is designed for the safe and efficient transport of bulk liquids,
              chemicals, and gases. Ideal for industries handling hazardous and non-hazardous
              materials, it ensures reliable performance while meeting stringent
              international standards. Its versatile design supports seamless logistics across
              various transport modes.
            </p>
            
            <h3 className="font-bold text-lg mb-4">Key Features</h3>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-orange-500 flex-shrink-0 mt-1 mr-3"></div>
                <div>
                  <span className="font-bold">Large Capacity:</span> Up to 26,000 liters for bulk transport.
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-orange-500 flex-shrink-0 mt-1 mr-3"></div>
                <div>
                  <span className="font-bold">Multi-modal Compatibility:</span> Seamless transport by roads, sea, and rail.
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-orange-500 flex-shrink-0 mt-1 mr-3"></div>
                <div>
                  <span className="font-bold">Certified Safety:</span> ISO-compliant for hazardous and non-hazardous materials.
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-orange-500 flex-shrink-0 mt-1 mr-3"></div>
                <div>
                  <span className="font-bold">Customizable Options:</span> Available for hire with tailored modifications.
                </div>
              </li>
            </ul>
          </div>
          
          {/* Right side - Image */}
          <div className="md:w-1/2">
            <div className="bg-blue-100 rounded-lg overflow-hidden">
              <img 
                src="/api/placeholder/600/400" 
                alt="ARCON T11 ISO Tank Container" 
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* T14 ISO Tank Container Section - Image on left, content on right */}
      <div className="w-full bg-white p-6 md:p-12">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
          {/* Left side - Image */}
          <div className="md:w-1/2 mb-6 md:mb-0">
            <div className="bg-blue-100 rounded-lg overflow-hidden">
              <img 
                src="/api/placeholder/600/400" 
                alt="ARCON T14 ISO Tank Container" 
                className="w-full object-cover"
              />
            </div>
          </div>
          
          {/* Right side - Text content */}
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">
              T14 ISO Tank Container
            </h2>
            
            <p className="text-gray-700 mb-6">
              The T14 ISO Tank offers a reliable solution for transporting highly corrosive liquids
              and chemicals. With advanced safety features, it ensures secure handling of
              hazardous materials while meeting international standards. Its versatile design
              ensures smooth logistics across various modes of transportation.
            </p>
            
            <h3 className="font-bold text-lg mb-4">Key Features</h3>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-orange-500 flex-shrink-0 mt-1 mr-3"></div>
                <div>
                  <span className="font-bold">Chemical Resistance:</span> Specialty linings prevent corrosion for durability.
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-orange-500 flex-shrink-0 mt-1 mr-3"></div>
                <div>
                  <span className="font-bold">Capacity Range:</span> From 9,000 to 27,000 liters for bulk chemical transport.
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-orange-500 flex-shrink-0 mt-1 mr-3"></div>
                <div>
                  <span className="font-bold">Multi-modal Transport:</span> Ideal to transport with container ships, road chassis, and rail cars.
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-orange-500 flex-shrink-0 mt-1 mr-3"></div>
                <div>
                  <span className="font-bold">Certified Safety:</span> Fully ISO-compliant for global safety and efficiency.
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-orange-500 flex-shrink-0 mt-1 mr-3"></div>
                <div>
                  <span className="font-bold">Wide Applications:</span> Ideal for petrochemical, pharmaceutical, and mining industries.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Speciality Lined Liquid Tanks Section - Content on left, image on right */}
      <div className="w-full bg-gray-50 p-6 md:p-12">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
          {/* Left side - Text content */}
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">
              Speciality Lined Liquid Tanks- Corrosive Chemical
            </h2>
            
            <p className="text-gray-700">
              Lined tank containers help you safely transport the most aggressive chemicals, 
              without risk to your products or tanks. We use the highest quality linings available 
              in the market to maintain the purity of your cargo. Lined tank containers also 
              protect the interior against corrosion and pitting. Even your highly corrosive 
              products are quality ensured in our dedicated lined tanks. We provide the right 
              tank for your cargo. This way we ensure safety and quality to our customers.
            </p>
          </div>
          
          {/* Right side - Image */}
          <div className="md:w-1/2">
            <div className="bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="/api/placeholder/600/400" 
                alt="Worker spraying specialty lining in tank container" 
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Cryogenic/LNG Tanks Section - Image on left, content on right */}
      <div className="w-full bg-white p-6 md:p-12">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
          {/* Left side - Image */}
          <div className="md:w-1/2 mb-6 md:mb-0">
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <img 
                src="/api/placeholder/600/400" 
                alt="ARCON Cryogenic/LNG Tank" 
                className="w-full object-cover"
              />
            </div>
          </div>
          
          {/* Right side - Text content */}
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">
              Cryogenic / LNG Tanks
            </h2>
            
            <p className="text-gray-700">
              Offering specialized T75 cryogenic tank containers for transport and storage of 
              cryogenic gases and liquids. These highly specialized T75 tank containers are 
              used as an efficient way to store and transport liquefied cryogenic air gases like 
              nitrogen, oxygen, and argon (LIN/LOX/LAR), carbon dioxide (CO2) and liquefied 
              natural gas (LNG). The ISO containers are 40 feet containers which have an inner 
              tank made of stainless steel, an insulation layer and then an outer tank in 
              stainless steel.
            </p>
          </div>
        </div>
      </div>

      {/* Video Section - 90% width and responsive */}
      <div className="w-full bg-gray-100 py-12 flex justify-center">
        <div className="w-[90%] relative">
          {/* 16:9 Aspect Ratio Container */}
          <div className="relative pt-[56.25%] rounded-lg overflow-hidden bg-gray-400">
            {/* Video Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-white bg-opacity-80 cursor-pointer hover:bg-opacity-100 transition-all">
                <div className="w-5 h-5 md:w-6 md:h-6 border-t-0 border-b-[10px] border-l-0 border-r-[16px] border-transparent border-r-gray-800 ml-1"></div>
              </div>
            </div>
            {/* This would be replaced with actual video embed code */}
            {/* For now using a placeholder with play button overlay */}
          </div>
        </div>
      </div>
    </div>
  );
}