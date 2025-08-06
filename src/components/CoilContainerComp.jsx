import React from 'react';
import img1 from "../images/coilimg1.webp";
import img2 from "../images/coilimg2.webp";
import img3 from "../images/coilimg3.webp";
import img4 from "../images/coilimg4.webp";
import ContainerSpecifications from './ContainerSpecifications';

export default function CoilContainerComp() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
     <div className="flex sm:py-6 w-[90%] m-auto flex-col items-center">
  {/* Title Section */}
  <div className="bg-white p-4 lg:p-8 w-full flex flex-col items-center">
    <h1 className="text-2xl sm:text-3xl md:text-4xl text-center text-black mb-4">
      COIL-CONTAINERS
    </h1>
  </div>

  {/* Paragraph Section */}
  <div className="text-gray-600 mx-2 md:mx-8 text-sm md:text-base space-y-3 mb-4 sm:mb-0 text-center max-w-7xl">
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
                  <span className="font-bold">Reinforced Flooring:</span> Coil-tainers have reinforced floors to support the heavy weight of metal coils.
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 bg-orange-500 rounded-full mt-1 mr-3 flex-shrink-0"></div>
                <div>
                  <span className="font-bold">V-Shaped Beds:</span> Many coil-tainers feature V-shaped beds or cradles that securely hold the coils in place.
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 bg-orange-500 rounded-full mt-1 mr-3 flex-shrink-0"></div>
                <div>
                  <span className="font-bold">Strapping Systems:</span> Straps or other securing mechanisms are often used to prevent the coils from shifting during transit.
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 bg-orange-500 rounded-full mt-1 mr-3 flex-shrink-0"></div>
                <div>
                  <span className="font-bold">Accessibility:</span> Some designs allow for easy loading and unloading through doors that open fully or through removable sections.
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
                  <span className="font-bold">Cranes and Forklifts:</span> Metal coils are typically loaded and unloaded using cranes or specialized forklifts.
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 bg-orange-500 rounded-full mt-1 mr-3 flex-shrink-0"></div>
                <div>
                  <span className="font-bold">Positioning:</span> The V-shaped beds help position the coils correctly, reducing movement during transport.
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
                  <span className="font-bold">Intermodal Capability:</span> Coil-tainers can be used in various modes of transport, including road, rail, and sea, offering flexibility in logistics.
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 bg-orange-500 rounded-full mt-1 mr-3 flex-shrink-0"></div>
                <div>
                  <span className="font-bold">Protection:</span> The design of coil-tainers protects the coils from external elements such as moisture and impacts, which is critical for maintaining the integrity of the metal.
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

     
     
    </div>
  );
}