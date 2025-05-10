import React from "react";
import img1 from "../images/rcimg1.png";
import img2 from "../images/rcimg2.png";
import img3 from "../images/rcimg3.png";
import img4 from "../images/rcimg4.png";


export default function RefrigeratedContainerComp() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section - Stack vertically on mobile, side by side on larger screens */}
      <div className="flex py-6 w-[90%] m-auto flex-col lg:flex-row">
        {/* Left side - Text content */}
        <div className="bg-white p-4 lg:p-8 lg:w-1/2">
          <h1 className="text-4xl md:text-4xl font-semibold text-black mb-4">
            REFRIGERATED CONTAINER
          </h1>
        </div>
        <div className="text-gray-600 mx-8 text-sm md:text-base space-y-3">
          <p>
            NCON, a leader in intermodal container solutions, now offers
            refrigerated containers for the secure and efficient transport of
            your temperature-sensitive cargo. Whether transporting food,
            pharmaceuticals, or delicate floral arrangements, these refrigerated
            containers ensure that cargo remains in optimal condition from
            origin to destination.
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

      {/* 10ft Reefer Containers */}
      <div className="w-[95%] m-auto bg-white p-6 md:p-12">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
          {/* Left side - Text content */}
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">
              10ft Reefer Containers:
            </h2>
            <p className="py-4">
              The 10ft refrigerated shipping container is an excellent choice
              for businesses requiring precise temperature control in a compact
              form. This container is ideal for shipping small volumes of
              temperature-sensitive cargo such as pharmaceuticals, perishable
              food items, and specialty chemicals, ensuring product quality
              during transport. It provides businesses with a versatile solution
              for transporting sensitive goods in environments with space
              constraints..
            </p>
            <h3 className="font-bold text-lg mb-4">Key Features</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-orange-500 flex-shrink-0 mt-1 mr-3"></div>
                <div>
                  <span className="font-bold"> Compact Design: </span> Fits
                  seamlessly into limited spaces, making it suitable for urban
                  storage and transport.
                </div>
              </li>

              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-orange-500 flex-shrink-0 mt-1 mr-3"></div>
                <div>
                  <span className="font-bold">
                    Advanced Temperature Control:
                  </span>
                  Maintains temperatures from -30°C to +25°C, ensuring optimal
                  cargo preservation.
                </div>
              </li>

              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-orange-500 flex-shrink-0 mt-1 mr-3"></div>
                <div>
                  <span className="font-bold">
                    Energy-Efficient Cooling Systems:
                  </span>
                  Designed to minimize power consumption while maintaining
                  reliability
                </div>
              </li>

              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-orange-500 flex-shrink-0 mt-1 mr-3"></div>
                <div>
                  <span className="font-bold">Robust Construction:</span> Built
                  with durable, corrosion-resistant materials for extended life.
                </div>
              </li>

              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-orange-500 flex-shrink-0 mt-1 mr-3"></div>
                <div>
                  <span className="font-bold">Applications:</span>
                  Perfect for niche industries, small-scale shipments, or
                  localized cold storage.
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

      {/* 20ft Reefer Containers - Image on left, content on right */}
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
            20ft Reefer Containers:
            </h2>
            <p>
            The 20ft refrigerated shipping container is the most versatile solution for medium-sized cargo loads. Built to meet global shipping standards, it is ideal for industries requiring temperature stability during transport or storage, such as food and beverages, pharmaceuticals, and chemicals. A dependable choice for businesses that need flexibility and capacity without compromising on temperature control.
            </p>
            <h3 className="font-bold text-lg mt-4">Key Features</h3>
            <ul className="space-y-3 py-4">
              
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-orange-500 flex-shrink-0 mt-1 mr-3"></div>
                <div>
                  <span className="font-bold">
                  Generous Capacity:
                  </span>
                  Offers 27.76 m³ of space for mid-sized shipments.
                </div>
              </li>

              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-orange-500 flex-shrink-0 mt-1 mr-3"></div>
                <div>
                  <span className="font-bold">
                  Temperature Versatility:
                  </span>
                  Supports a range from -30°C to +25°C, accommodating various cargo types.
                </div>
              </li>

              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-orange-500 flex-shrink-0 mt-1 mr-3"></div>
                <div>
                  <span className="font-bold">Intermodal Transport Compatibility:</span>Easily transferable across trucks, ships, and trains for seamless logistics.
                </div>
              </li>

              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-orange-500 flex-shrink-0 mt-1 mr-3"></div>
                <div>
                  <span className="font-bold">Enhanced Safety Standards:</span>
                  Fully ISO-compliant to ensure cargo integrity during transit.
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-orange-500 flex-shrink-0 mt-1 mr-3"></div>
                <div>
                  <span className="font-bold">  Applications:</span> Widely used in food exports, pharmaceutical supply chains, and temperature-controlled chemical shipments.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>





      {/* 40ft Reefer Containers - Image on right, content on left */}
      <div className="w-[95%] m-auto bg-white p-6 md:p-12">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
          {/* Left side - Text content */}
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">
            40ft Reefer Containers:
            </h2>
            <p>
            The 40ft refrigerated shipping container is built for large-scale, temperature-controlled logistics. Offering unmatched capacity, this container is a preferred choice for high-volume cargo transportation across industries such as food processing, pharmaceuticals, and industrial chemicals. It provides businesses with the ideal solution for high-capacity shipping, ensuring consistent performance, robust design, and exceptional reliability for global logistics operations.
            </p>
            <h3 className="font-bold text-lg mt-4">Key Features</h3>
            <ul className="space-y-3 py-4">
              
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-orange-500 flex-shrink-0 mt-1 mr-3"></div>
                <div>
                  <span className="font-bold">
                  Maximum Capacity:
                  </span>
                  Provides a spacious 68.47 m³ for large-scale operations.
                </div>
              </li>

              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-orange-500 flex-shrink-0 mt-1 mr-3"></div>
                <div>
                  <span className="font-bold">
                  Precise Cooling Systems:
                  </span>
                  Maintains a consistent temperature range of -30°C to +25°C, ensuring product quality.
                </div>
              </li>

              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-orange-500 flex-shrink-0 mt-1 mr-3"></div>
                <div>
                  <span className="font-bold">Global Transport Compatibility:</span>Engineered for seamless intermodal transfers via road, rail, and sea.
                </div>
              </li>

              
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-orange-500 flex-shrink-0 mt-1 mr-3"></div>
                <div>
                  <span className="font-bold">  Sturdy Design:</span> Constructed with premium materials to endure harsh weather conditions and long-haul journeys.
                </div>
              </li>

              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-orange-500 flex-shrink-0 mt-1 mr-3"></div>
                <div>
                  <span className="font-bold">Applications:</span>
                  Ideal for bulk transport of frozen goods, medical supplies, and temperature-sensitive chemicals.
                </div>
              </li>

            </ul>
            
          </div>

          {/* Right side - Image */}
          <div className="md:w-2/5 flex ">
            <div className=" bg-blue-100 rounded-lg overflow-hidden">
              <img
                src={img4}
                alt="ARCON T11 ISO Tank Container"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
