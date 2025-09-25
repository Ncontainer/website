import { useState } from "react";
import drycontainer from "../images/drycontainer1.webp";
import drycontainer2 from "../images/drycontainer2.webp";
import drycontainer3 from "../images/drycontainer3.webp";

import generalPurpose from "../images/general-purpose-container.webp";
import flatRackContainer from "../images/flat-rack-container.webp";
import highCubeContainer from "../images/Gemini_Generated_Image_dkt5bzdkt5bzdkt5.webp";
import openRackContainer from "../images/Gemini_Generated_Image_gxu4z1gxu4z1gxu4.webp";

export default function DryAndSpecialContainer() {
  const [activeTab, setActiveTab] = useState("dry");

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero Section */}
     <div className="flex py-6 w-[90%] m-auto flex-col items-center">
  {/* Left side - Text content */}
  <div className="bg-white p-2 md:p-4 lg:p-8 md:w-full flex flex-col justify-center items-center">         
    <h1 className="text-4xl sm:text-3xl md:text-4xl text-black mb-4 text-center">
      DRY & SPECIAL CONTAINERS
    </h1>
  </div>

  {/* Paragraph section */}
  <div className="text-gray-600 mx-2 md:mx-8 text-sm md:text-base space-y-3 text-center max-w-7xl">
    <p>
      With NCON’s wide fleet of DRY and Special Containers, you can ship your cargo safely and confidently.
       Containers are the foundation of global trade, offering a secure and reliable way to transport goods
        of all kinds. At NCON, we understand that every shipment is unique. That’s why we provide a full
        range of container solutions—making sure there’s always the right option for your cargo, no matter 
        its size, shape, or special needs.
    </p>
  </div>
</div>
      {/* Full width container image for bottom section */}
      <div className="w-full h-64 md:h-96 lg:h-[450px] overflow-hidden">
        <img
          src={drycontainer}
          alt="ISO tank containers in shipping yard"
          className="w-full h-full object-fill"
        />
      </div>

      {/* Main Content Section */}
      <div className="container w-[90%] m-auto px-4 py-12">
        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-8">
          <button
            className={`px-4 py-2 font-medium text-sm md:text-base ${
              activeTab === "dry"
                ? "border-b-2 border-orange-500 text-orange-500"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("dry")}
          >
            Dry Van Containers
          </button>
          <button
            className={`px-4 py-2 font-medium text-sm md:text-base ${
              activeTab === "special"
                ? "border-b-2 border-orange-500 text-orange-500"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("special")}
          >
            Special Containers
          </button>
        </div>

        {/* Content based on active tab */}
        {activeTab === "dry" && (
          <div className="flex flex-col md:flex-row gap-8">            <div className="w-full md:w-1/2">
              {/* <h2 className="text-4xl sm:text-2xl md:text-3xl lg:text-4xl  mb-6">
                Dry Van Containers
              </h2> */}

              <div className="mb-6">
                <div className="flex items-start mb-3">
                  <div className="mr-2 mt-1">
                    <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                  </div>
                  <div>
                    {/* <p className="font-bold text-gray-800">
                      The foundation of global shipping:
                    </p> */}
                    <p className="text-gray-600">
                    Dry Van Containers are the backbone of worldwide shipping, designed to handle everyday cargo with reliability and ease. At NCON, our Dry Vans are built tough, fully compliant with ISO standards, and come with valid CSC certification—so you can trust your goods are in safe hands. Each container goes through strict quality checks, ensuring you always get top-notch equipment that’s ready to perform, wherever your shipment starts or wherever it’s headed.

                    </p>
                  </div>
                </div>

                {/* <div className="flex items-start mb-3">
                  <div className="mr-2 mt-1">
                    <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Built to last:</p>
                    <p className="text-gray-600">
                      NCON's Dry Van containers meet all ISO standards and have
                      valid CSC numbers, ensuring the highest quality and secure
                      for your goods.
                    </p>
                  </div>
                </div> */}

                {/* <div className="flex items-start mb-6">
                  <div className="mr-2 mt-1">
                    <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">
                      Global reach, guaranteed safety:
                    </p>
                    <p className="text-gray-600">
                      Our rigorous inspection processes guarantee you receive
                      best-in-class equipment, no matter where your shipment
                      originates or travels to.
                    </p>
                  </div>
                </div> */}

                <p className="font-medium text-gray-800 mb-4">Available in:</p>                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center">
                    <div className="bg-gray-100 p-2 rounded-md w-full h-40 flex items-center justify-center">
                      <img 
                        src={generalPurpose} 
                        alt="General Purpose Container" 
                        className="max-w-full max-h-full object-contain" 
                      />
                    </div>
                    <p className="text-center text-sm mt-2">
                      20 Ft General Purpose Container
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="bg-gray-100 p-2 rounded-md w-full h-40 flex items-center justify-center">
                      <img 
                        src={highCubeContainer} 
                        alt="High Cube Container" 
                        className="max-w-full max-h-full object-contain" 
                      />
                    </div>
                    <p className="text-center text-sm mt-2">
                      40 Ft High Cube Container
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <div className="bg-gray-100 rounded-lg overflow-hidden h-full">
                <img
                  src={drycontainer2}
                  alt="Stacked shipping containers"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === "special" && (
          <div className="flex flex-col md:flex-row gap-8">            <div className="w-full md:w-1/2">
              {/* <h2 className="text-4xl sm:text-2xl md:text-3xl lg:text-4xl  mb-6">
                Special Containers
              </h2> */}

              <div className="mb-6">
                <div className="flex items-start mb-3">
                  <div className="mr-2 mt-1">
                    <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                  </div>
                  <div>
                    {/* <p className="font-bold text-gray-800">
                      Specialized solutions:
                    </p> */}
                    <p className="text-gray-600">
                    Special Containers are built to handle cargo that needs more than the standard solution. Whether it’s temperature-sensitive goods that require refrigerated containers with precise cooling, or oversized shipments that fit best in open-top and flat rack designs, NCON has you covered. Each container is designed to meet unique transport needs, giving you flexibility, safety, and confidence no matter what you’re shipping.

                    </p>
                  </div>
                </div>

                {/* <div className="flex items-start mb-3">
                  <div className="mr-2 mt-1">
                    <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">
                      Temperature controlled:
                    </p>
                    <p className="text-gray-600">
                      Refrigerated containers for perishable goods with precise
                      temperature control
                    </p>
                  </div>
                </div> */}

                {/* <div className="flex items-start mb-6">
                  <div className="mr-2 mt-1">
                    <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">
                      Open top and flat rack:
                    </p>
                    <p className="text-gray-600">
                      Perfect for oversized cargo or goods that need top loading
                      capabilities
                    </p>
                  </div>
                </div> */}

                <p className="font-medium text-gray-800 mb-4">Available in:</p>                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center">
                    <div className="bg-gray-100 p-2 rounded-md w-full h-40 flex items-center justify-center">
                      <img 
                        src={flatRackContainer} 
                        alt="Flat Rack Container" 
                        className="max-w-full max-h-full object-contain" 
                      />
                    </div>
                    <p className="text-center text-sm mt-2">
                      20 Ft Flat Rack                                                    
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="bg-gray-100 p-2 rounded-md w-full h-40 flex items-center justify-center">
                      <img 
                        src={openRackContainer} 
                        alt="Open Top Container" 
                        className="max-w-full max-h-full object-contain" 
                      />
                    </div>
                    <p className="text-center text-sm mt-2">
                      40 Ft Open Top
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <div className="bg-gray-100 rounded-lg overflow-hidden h-full">
                <img
                  src={drycontainer3}
                  alt="Special shipping containers"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
