import React from 'react';
import img1 from "../images/coilimg1.png"
import img2 from "../images/coilimg2.png"
import img3 from "../images/coilimg3.png"
import img4 from "../images/coilimg4.png"
import ContainerSpecifications from './ContainerSpecifications';


export default function CoilContainerComp() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section - Stack vertically on mobile, side by side on larger screens */}
      <div className="flex py-6 w-[90%] m-auto flex-col lg:flex-row">
        {/* Left side - Text content */}
        <div className="bg-white p-4 lg:p-8 lg:w-1/2">
          <h1 className="text-4xl md:text-4xl font-semibold text-black mb-4">
          COIL-CONTAINERS
          </h1>
          </div>
          <div className="text-gray-600 mx-8 text-sm md:text-base space-y-3">
            <p>
            Ensure safety and security for your steel and aluminum coils while transporting with NCON's coils containers. These specialized coil containers are designed to prevent accidents and damage to coils and ensure stability, with secure lashing and protection against shifting during transit. This ensures that both types of coils reach their destinations intact and undamaged.
            </p>
            
          </div>
       
      </div>

      {/* Full width container image for bottom section */}
      <div className="w-full h-64 md:h-96 lg:h-[450px] overflow-hidden">
        <img 
          src={img1}
          alt="ISO tank containers in shipping yard" 
          className="w-full h-full object-cover"
        />
      </div>

      <ContainerSpecifications />

      {/* T11 ISO Tank Container Section */}
      <div className="w-[95%] m-auto bg-white p-6 md:p-12">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
          {/* Left side - Text content */}
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">
              Design and Structure:
            </h2>
            
                       
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-orange-500 flex-shrink-0 mt-1 mr-3"></div>
                <div>
                  <span className="font-bold">Reinforced Flooring:</span> Coil-tainers have reinforced floors to support the heavy weight of metal coils.
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-orange-500 flex-shrink-0 mt-1 mr-3"></div>
                <div>
                  <span className="font-bold">V-Shaped Beds: </span> Many coil-tainers feature V-shaped beds or cradles that securely hold the coils in place.
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-orange-500 flex-shrink-0 mt-1 mr-3"></div>
                <div>
                  <span className="font-bold">Strapping Systems:</span>  Straps or other securing mechanisms are often used to prevent the coils from shifting during transit.
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-orange-500 flex-shrink-0 mt-1 mr-3"></div>
                <div>
                  <span className="font-bold">Accessibility:</span> Some designs allow for easy loading and unloading through doors that open fully or through removable sections.
                </div>
              </li>
            </ul>
          </div>
          
          {/* Right side - Image */}
          <div className="md:w-2/5 flex ">
            <div className=" bg-blue-100 rounded-lg overflow-hidden">
              <img 
                src={img2} 
                alt="ARCON T11 ISO Tank Container" 
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* T14 ISO Tank Container Section - Image on left, content on right */}
      <div className="w-[95%] m-auto bg-white p-6 md:p-12">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
          {/* Left side - Image */}
          <div className="md:w-2/5 mb-6 md:mb-0">
            <div className="bg-blue-100 rounded-lg overflow-hidden">
              <img 
                src={img3} 
                alt="ARCON T14 ISO Tank Container" 
                className="w-full object-cover"
              />
            </div>
          </div>
          
          {/* Right side - Text content */}
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">
            Loading and Unloading:
            </h2>
                      
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-orange-500 flex-shrink-0 mt-1 mr-3"></div>
                <div>
                  <span className="font-bold"> Cranes and Forklifts: </span> Metal coils are typically loaded and unloaded using cranes or specialized forklifts.
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-orange-500 flex-shrink-0 mt-1 mr-3"></div>
                <div>
                  <span className="font-bold">Positioning:</span> The V-shaped beds help position the coils correctly, reducing movement during transport.
                </div>
              </li>
              
            </ul>
          </div>
        </div>
      </div>

      {/* Speciality Lined Liquid Tanks Section - Content on left, image on right */}
      <div className="w-[95%] m-auto bg-white p-6 md:p-12">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
          {/* Left side - Text content */}
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">
            Transport:
            </h2>

            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-orange-500 flex-shrink-0 mt-1 mr-3"></div>
                <div>
                  <span className="font-bold">Intermodal Capability:</span> Coil-tainers can be used in various modes of transport, including road, rail, and sea, offering flexibility in logistics.
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-orange-500 flex-shrink-0 mt-1 mr-3"></div>
                <div>
                  <span className="font-bold">Protection:</span> The design of coil-tainers protects the coils from external elements such as moisture and impacts, which is critical for maintaining the integrity of the metal.
                </div>
              </li>
              
            </ul>
            
          </div>
          
          {/* Right side - Image */}
          <div className="md:w-2/5">
            <div className="bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src= {img4}
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





