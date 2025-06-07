import React from 'react';

const ReContainerSpecifications = () => {
  return (
    <div className="w-full  mx-auto font-sans p-4">
      <h1 className="text-center text-xl sm:text-2xl md:text-3xl mb-6">Container Specification's</h1>
      <div className="flex flex-col gap-8 xl:max-w-7xl mx-auto">
        
        {/* 10 Feet Container */}
        <div>
          <h3 className="text-lg font-medium mb-2">10 Feet Container</h3>
          
          {/* Mobile View - Vertical Table */}
          <div className="block md:hidden w-full overflow-hidden rounded-xl border border-gray-100">
            <table className="w-full border-collapse">
              <tbody>
                <tr>
                  <td className="bg-[#FF7A00] text-white p-3 font-medium">Length</td>
                  <td className="p-3 text-center">10'</td>
                </tr>
                <tr>
                  <td className="bg-[#FF7A00] text-white p-3 font-medium">Width</td>
                  <td className="p-3 text-center">8'</td>
                </tr>
                <tr>
                  <td className="bg-[#FF7A00] text-white p-3 font-medium">Height</td>
                  <td className="p-3 text-center">8'</td>
                </tr>
                <tr>
                  <td className="bg-[#FF7A00] text-white p-3 font-medium">Cubic Capacity</td>
                  <td className="p-3 text-center">11.77 m³</td>
                </tr>
                <tr>
                  <td className="bg-[#FF7A00] text-white p-3 font-medium">Temperature</td>
                  <td className="p-3 text-center">-30°C to +25°C</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* Desktop View - Horizontal Table */}
          <div className="hidden md:block w-full overflow-hidden rounded-md">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="bg-[#FF7A00] text-white p-3 text-center w-1/5">Length</th>
                  <th className="bg-[#FF7A00] text-white p-3 text-center w-1/5">Width</th>
                  <th className="bg-[#FF7A00] text-white p-3 text-center w-1/5">Height</th>
                  <th className="bg-[#FF7A00] text-white p-3 text-center w-1/5">Cubic Capacity</th>
                  <th className="bg-[#FF7A00] text-white p-3 text-center w-1/5">Temperature</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-gray-200 text-center">10'</td>
                  <td className="p-3 border border-gray-200 text-center">8'</td>
                  <td className="p-3 border border-gray-200 text-center">8'</td>
                  <td className="p-3 border border-gray-200 text-center">11.77 m³</td>
                  <td className="p-3 border border-gray-200 text-center">-30°C to +25°C</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>        {/* 20 Feet Container */}
        <div>
          <h3 className="text-lg font-medium mb-2">20 Feet Container</h3>
          
          {/* Mobile View - Vertical Table */}
          <div className="block md:hidden w-full overflow-hidden rounded-xl border border-gray-100">
            <table className="w-full border-collapse">
              <tbody>
                <tr>
                  <td className="bg-[#FF7A00] text-white p-3 font-medium">Length</td>
                  <td className="p-3 text-center">20'</td>
                </tr>
                <tr>
                  <td className="bg-[#FF7A00] text-white p-3 font-medium">Width</td>
                  <td className="p-3 text-center">8'</td>
                </tr>
                <tr>
                  <td className="bg-[#FF7A00] text-white p-3 font-medium">Height</td>
                  <td className="p-3 text-center">8.6'</td>
                </tr>
                <tr>
                  <td className="bg-[#FF7A00] text-white p-3 font-medium">Cubic Capacity</td>
                  <td className="p-3 text-center">27.76 m³</td>
                </tr>
                <tr>
                  <td className="bg-[#FF7A00] text-white p-3 font-medium">Temperature</td>
                  <td className="p-3 text-center">-30°C to +25°C</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* Desktop View - Horizontal Table */}
          <div className="hidden md:block w-full overflow-hidden rounded-md">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="bg-[#FF7A00] text-white p-3 text-center w-1/5">Length</th>
                  <th className="bg-[#FF7A00] text-white p-3 text-center w-1/5">Width</th>
                  <th className="bg-[#FF7A00] text-white p-3 text-center w-1/5">Height</th>
                  <th className="bg-[#FF7A00] text-white p-3 text-center w-1/5">Cubic Capacity</th>
                  <th className="bg-[#FF7A00] text-white p-3 text-center w-1/5">Temperature</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-gray-200 text-center">20'</td>
                  <td className="p-3 border border-gray-200 text-center">8'</td>
                  <td className="p-3 border border-gray-200 text-center">8.6'</td>
                  <td className="p-3 border border-gray-200 text-center">27.76 m³</td>
                  <td className="p-3 border border-gray-200 text-center">-30°C to +25°C</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        {/* 40 Feet Container */}
        <div>
          <h3 className="text-lg font-medium mb-2">40 Feet Container</h3>
          
          {/* Mobile View - Vertical Table */}
          <div className="block md:hidden w-full overflow-hidden rounded-xl border border-gray-100">
            <table className="w-full border-collapse">
              <tbody>
                <tr>
                  <td className="bg-[#FF7A00] text-white p-3 font-medium">Length</td>
                  <td className="p-3 text-center">40'</td>
                </tr>
                <tr>
                  <td className="bg-[#FF7A00] text-white p-3 font-medium">Width</td>
                  <td className="p-3 text-center">8'</td>
                </tr>
                <tr>
                  <td className="bg-[#FF7A00] text-white p-3 font-medium">Height</td>
                  <td className="p-3 text-center">9.5'</td>
                </tr>
                <tr>
                  <td className="bg-[#FF7A00] text-white p-3 font-medium">Cubic Capacity</td>
                  <td className="p-3 text-center">68.47 m³</td>
                </tr>
                <tr>
                  <td className="bg-[#FF7A00] text-white p-3 font-medium">Temperature</td>
                  <td className="p-3 text-center">-30°C to +25°C</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* Desktop View - Horizontal Table */}
          <div className="hidden md:block w-full overflow-hidden rounded-md">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="bg-[#FF7A00] text-white p-3 text-center w-1/5">Length</th>
                  <th className="bg-[#FF7A00] text-white p-3 text-center w-1/5">Width</th>
                  <th className="bg-[#FF7A00] text-white p-3 text-center w-1/5">Height</th>
                  <th className="bg-[#FF7A00] text-white p-3 text-center w-1/5">Cubic Capacity</th>
                  <th className="bg-[#FF7A00] text-white p-3 text-center w-1/5">Temperature</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-gray-200 text-center">40'</td>
                  <td className="p-3 border border-gray-200 text-center">8'</td>
                  <td className="p-3 border border-gray-200 text-center">9.5'</td>
                  <td className="p-3 border border-gray-200 text-center">68.47 m³</td>
                  <td className="p-3 border border-gray-200 text-center">-30°C to +25°C</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReContainerSpecifications;