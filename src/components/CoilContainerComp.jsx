import React from 'react';
import img1 from "../images/coilimg1.png";
import img2 from "../images/coilimg2.png";
import img3 from "../images/coilimg3.png";
import img4 from "../images/coilimg4.png";
import ContainerSpecifications from './ContainerSpecifications';

export default function CoilContainerComp() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <div className="flex sm:py-6 w-[90%] m-auto flex-col">
        <div className="bg-white p-4 lg:p-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-center text-black mb-4">
            COIL-CONTAINERS
          </h1>
        </div>
        <div className="text-gray-600 mx-2 md:mx-8 text-sm md:text-base space-y-3 mb-4 sm:mb-0">
          <p>
            Ensure safety and security for your steel and aluminum coils while transporting with NCON's coils containers. These specialized coil containers are designed to prevent accidents and damage to coils and ensure stability, with secure lashing and protection against shifting during transit. This ensures that both types of coils reach their destinations intact and undamaged.
          </p>
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full h-64 md:h-96 lg:h-[450px] overflow-hidden">
        <img
          src={img1}
          alt="ISO tank containers in shipping yard"
          className="w-full h-full object-cover"
        />
      </div>

      <ContainerSpecifications />

      {/* Section 1 - Design and Structure */}
      <div className="w-[95%] m-auto bg-white p-6 md:p-12">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
          <div className="w-full md:w-1/2 order-2 md:order-none mt-6 md:mt-0 mb-6 md:mb-0">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black mb-3">
              Design and Structure:
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="h-5 w-5 bg-orange-500 rounded-full mt-1 mr-3 flex-shrink-0"></div>
                <div>
                  <span className="font-medium">Reinforced Flooring:</span> Coil-tainers have reinforced floors to support the heavy weight of metal coils.
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 bg-orange-500 rounded-full mt-1 mr-3 flex-shrink-0"></div>
                <div>
                  <span className="font-medium">V-Shaped Beds:</span> Many coil-tainers feature V-shaped beds or cradles that securely hold the coils in place.
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 bg-orange-500 rounded-full mt-1 mr-3 flex-shrink-0"></div>
                <div>
                  <span className="font-medium">Strapping Systems:</span> Straps or other securing mechanisms are often used to prevent the coils from shifting during transit.
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 bg-orange-500 rounded-full mt-1 mr-3 flex-shrink-0"></div>
                <div>
                  <span className="font-medium">Accessibility:</span> Some designs allow for easy loading and unloading through doors that open fully or through removable sections.
                </div>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-2/5">
            <div className="bg-blue-100 rounded-lg overflow-hidden">
              <img
                src={img2}
                alt="ARCON T11 ISO Tank Container"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 - Loading and Unloading */}
      <div className="w-[95%] m-auto bg-white p-6 md:p-12">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
          <div className="w-full md:w-2/5 mb-6 md:mb-0">
            <div className="bg-blue-100 rounded-lg overflow-hidden">
              <img
                src={img3}
                alt="ARCON T14 ISO Tank Container"
                className="w-full object-cover"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black mb-3">
              Loading and Unloading:
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="h-5 w-5 bg-orange-500 rounded-full mt-1 mr-3 flex-shrink-0"></div>
                <div>
                  <span className="font-medium">Cranes and Forklifts:</span> Metal coils are typically loaded and unloaded using cranes or specialized forklifts.
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 bg-orange-500 rounded-full mt-1 mr-3 flex-shrink-0"></div>
                <div>
                  <span className="font-medium">Positioning:</span> The V-shaped beds help position the coils correctly, reducing movement during transport.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Section 3 - Transport */}
      <div className="w-[95%] m-auto bg-white p-6 md:p-12">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
          <div className="w-full md:w-1/2 order-2 md:order-none mt-6 md:mt-0 mb-6 md:mb-0">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black mb-3">
              Transport:
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="h-5 w-5 bg-orange-500 rounded-full mt-1 mr-3 flex-shrink-0"></div>
                <div>
                  <span className="font-medium">Intermodal Capability:</span> Coil-tainers can be used in various modes of transport, including road, rail, and sea, offering flexibility in logistics.
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 bg-orange-500 rounded-full mt-1 mr-3 flex-shrink-0"></div>
                <div>
                  <span className="font-medium">Protection:</span> The design of coil-tainers protects the coils from external elements such as moisture and impacts, which is critical for maintaining the integrity of the metal.
                </div>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-2/5">
            <div className="bg-gray-200 rounded-lg overflow-hidden">
              <img
                src={img4}
                alt="Worker spraying specialty lining in tank container"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Our Coil Containers */}
      <div className="w-[95%] m-auto bg-white py-6 md:py-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-black text-center mb-10">
          Why Choose Our Coil Containers
        </h2>

        <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          <div className="bg-gray-100 p-5 rounded-lg shadow-md w-full">
            <h3 className="text-xl font-semibold text-orange-600 mb-2">
              Enhanced Handling
            </h3>
            <p className="text-gray-700">
              Designed for optimal handling of metal coils, reducing damage and ensuring safe positioning during transit.
            </p>
          </div>

          <div className="bg-gray-100 p-5 rounded-lg shadow-md w-full">
            <h3 className="text-xl font-semibold text-orange-600 mb-2">
              Improved Efficiency
            </h3>
            <p className="text-gray-700">
              Faster loading and unloading operations enhance the overall logistics workflow and turnaround time.
            </p>
          </div>

          <div className="bg-gray-100 p-5 rounded-lg shadow-md w-full">
            <h3 className="text-xl font-semibold text-orange-600 mb-2">
              Safety and Security
            </h3>
            <p className="text-gray-700">
              Equipped with strapping systems and secure V-shaped beds to keep coils in place, reducing risk of injury and product damage.
            </p>
          </div>

          <div className="bg-gray-100 p-5 rounded-lg shadow-md w-full">
            <h3 className="text-xl font-semibold text-orange-600 mb-2">
              Containerized Solution
            </h3>
            <p className="text-gray-700">
              Facilitates intermodal transport — compatible with trucks, trains, and ships — for seamless transitions between logistics chains.
            </p>
          </div>

          <div className="bg-gray-100 p-5 rounded-lg shadow-md w-full">
            <h3 className="text-xl font-semibold text-orange-600 mb-2">
              Versatility & Backhaul Capability
            </h3>
            <p className="text-gray-700">
              Can be reused for backhaul operations, increasing overall asset utilization and reducing return costs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}