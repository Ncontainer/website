import React from 'react';

const ContainerSpecifications = () => {
  return (
    <div className="w-[80%] mx-auto font-sans p-4 m-4">
      <h1 className="text-center text-2xl md:text-3xl font-bold mb-6">Container Specification's</h1>
      
      {/* Dimensions Tables - Side by side on desktop, stacked on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {/* External Dimensions */}
        <div>
          <p className="text-sm font-semibold mb-2">External Dimensions:</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-3xl overflow-hidden">
              <thead>
                <tr>
                  <th className="bg-secondary text-white p-2 text-center">Length</th>
                  <th className="bg-secondary text-white p-2 text-center">Width</th>
                  <th className="bg-secondary text-white p-2 text-center">Height</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border border-gray-100 text-center bg-white">6.058 m</td>
                  <td className="p-2 border border-gray-100 text-center bg-white">2.438 m</td>
                  <td className="p-2 border border-gray-100 text-center bg-white">2.591 m</td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-100 text-center bg-white">19' 10.5"</td>
                  <td className="p-2 border border-gray-100 text-center bg-white">8'</td>
                  <td className="p-2 border border-gray-100 text-center bg-white">8' 6"</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Internal Dimensions */}
        <div>
          <p className="text-sm font-semibold mb-2">Internal Dimensions:</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-3xl overflow-hidden">
              <thead>
                <tr>
                  <th className="bg-secondary text-white p-2 text-center">Length</th>
                  <th className="bg-secondary text-white p-2 text-center">Width</th>
                  <th className="bg-secondary text-white p-2 text-center">Height</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border border-gray-100 text-center bg-white">5.850 m</td>
                  <td className="p-2 border border-gray-100 text-center bg-white">2.232 m</td>
                  <td className="p-2 border border-gray-100 text-center bg-white">2.041 m</td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-100 text-center bg-white">19' 2"</td>
                  <td className="p-2 border border-gray-100 text-center bg-white">7' 4"</td>
                  <td className="p-2 border border-gray-100 text-center bg-white">6' 8"</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Load and Volume Capacity */}
      <div className="mt-6">
        <p className="text-sm font-semibold mb-2">Load and Volume Capacity</p>
        
        {/* Desktop View - Horizontal Layout */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse rounded-3xl overflow-hidden">
            <thead>
              <tr>
                <th className="bg-secondary text-white p-2 text-center">Max Gross Weight</th>
                <th className="bg-secondary text-white p-2 text-center">Tare Weight</th>
                <th className="bg-secondary text-white p-2 text-center">Max Payload</th>
                <th className="bg-secondary text-white p-2 text-center">Stacking Test Load</th>
                <th className="bg-secondary text-white p-2 text-center">Lid Weight</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border border-gray-100 text-center bg-white">35000 Kgs</td>
                <td className="p-2 border border-gray-100 text-center bg-white">4750 Kgs</td>
                <td className="p-2 border border-gray-100 text-center bg-white">30250 Kgs</td>
                <td className="p-2 border border-gray-100 text-center bg-white">86400 Kgs</td>
                <td className="p-2 border border-gray-100 text-center bg-white">1660 Kgs</td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-100 text-center bg-white">77160 Lbs</td>
                <td className="p-2 border border-gray-100 text-center bg-white">10470 Lbs</td>
                <td className="p-2 border border-gray-100 text-center bg-white">66690 Lbs</td>
                <td className="p-2 border border-gray-100 text-center bg-white">190480 Lbs</td>
                <td className="p-2 border border-gray-100 text-center bg-white">3659 Lbs</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        {/* Mobile View - Vertical Layout */}
        <div className="md:hidden overflow-x-auto">
          <table className="w-full border-collapse rounded-lg overflow-hidden">
            <tbody>
              <tr>
                <td className="bg-secondary text-white p-2 text-center">Max Gross Weight</td>
                <td className="p-2 border border-gray-100 text-center bg-white">35000 Kgs</td>
                <td className="p-2 border border-gray-100 text-center bg-white">77160 Lbs</td>
              </tr>
              <tr>
                <td className="bg-secondary text-white p-2 text-center">Tare Weight</td>
                <td className="p-2 border border-gray-100 text-center bg-white">4750 Kgs</td>
                <td className="p-2 border border-gray-100 text-center bg-white">10470 Lbs</td>
              </tr>
              <tr>
                <td className="bg-secondary text-white p-2 text-center">Max Payload</td>
                <td className="p-2 border border-gray-100 text-center bg-white">30250 Kgs</td>
                <td className="p-2 border border-gray-100 text-center bg-white">66690 Lbs</td>
              </tr>
              <tr>
                <td className="bg-secondary text-white p-2 text-center">Stacking Test Load</td>
                <td className="p-2 border border-gray-100 text-center bg-white">86400 Kgs</td>
                <td className="p-2 border border-gray-100 text-center bg-white">190480 Lbs</td>
              </tr>
              <tr>
                <td className="bg-secondary text-white p-2 text-center">Lid Weight</td>
                <td className="p-2 border border-gray-100 text-center bg-white">1660 Kgs</td>
                <td className="p-2 border border-gray-100 text-center bg-white">3659 Lbs</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ContainerSpecifications;