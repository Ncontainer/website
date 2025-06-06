import React from 'react';

const ReContainerSpecifications = () => {
  return (
    <div className="w-full md:w-[90%] mx-auto font-sans p-4">
      <h1 className="text-center text-2xl md:text-3xl mb-6">Container Specification's</h1>
      
      <div className="flex flex-col md:flex-row md:flex-wrap gap-4 justify-center">
        {/* 10 Feet Container Card Style */}
        <div className="w-full md:w-[45%] lg:w-[30%]">
          <h3 className="text-base font-medium mb-2">10 Feet Container</h3>
          <div className="rounded-xl overflow-hidden shadow-sm border border-gray-100">
            <div className="grid grid-cols-2">
              <div className="bg-secondary text-white p-3 font-medium">Length</div>
              <div className="bg-white p-3 text-center">10'</div>
              
              <div className="bg-secondary text-white p-3 font-medium">Width</div>
              <div className="bg-white p-3 text-center">8'</div>
              
              <div className="bg-secondary text-white p-3 font-medium">Height</div>
              <div className="bg-white p-3 text-center">8'</div>
              
              <div className="bg-secondary text-white p-3 font-medium">Cubic Capacity</div>
              <div className="bg-white p-3 text-center">11.77 m³</div>
              
              <div className="bg-secondary text-white p-3 font-medium">Temperature</div>
              <div className="bg-white p-3 text-center">-30°C to +25°C</div>
            </div>
          </div>
        </div>

        {/* 20 Feet Container Card Style */}
        <div className="w-full md:w-[45%] lg:w-[30%]">
          <h3 className="text-base font-medium mb-2">20 Feet Container</h3>
          <div className="rounded-xl overflow-hidden shadow-sm border border-gray-100">
            <div className="grid grid-cols-2">
              <div className="bg-secondary text-white p-3 font-medium">Length</div>
              <div className="bg-white p-3 text-center">20'</div>
              
              <div className="bg-secondary text-white p-3 font-medium">Width</div>
              <div className="bg-white p-3 text-center">8'</div>
              
              <div className="bg-secondary text-white p-3 font-medium">Height</div>
              <div className="bg-white p-3 text-center">8.6'</div>
              
              <div className="bg-secondary text-white p-3 font-medium">Cubic Capacity</div>
              <div className="bg-white p-3 text-center">27.76 m³</div>
              
              <div className="bg-secondary text-white p-3 font-medium">Temperature</div>
              <div className="bg-white p-3 text-center">-30°C to +25°C</div>
            </div>
          </div>
        </div>        {/* 40 Feet Container Card Style */}
        <div className="w-full md:w-[45%] lg:w-[30%]">
          <h3 className="text-base font-medium mb-2">40 Feet Container</h3>
          <div className="rounded-xl overflow-hidden shadow-sm border border-gray-100">
            <div className="grid grid-cols-2">
              <div className="bg-secondary text-white p-3 font-medium">Length</div>
              <div className="bg-white p-3 text-center">40'</div>
              
              <div className="bg-secondary text-white p-3 font-medium">Width</div>
              <div className="bg-white p-3 text-center">8'</div>
              
              <div className="bg-secondary text-white p-3 font-medium">Height</div>
              <div className="bg-white p-3 text-center">9.5'</div>
              
              <div className="bg-secondary text-white p-3 font-medium">Cubic Capacity</div>
              <div className="bg-white p-3 text-center">68.47 m³</div>
              
              <div className="bg-secondary text-white p-3 font-medium">Temperature</div>
              <div className="bg-white p-3 text-center">-30°C to +25°C</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReContainerSpecifications;