import React from "react";
import img1 from "../images/rcimg1.webp";
import img2 from "../images/rcimg2.webp";
import img3 from "../images/rcimg3.webp";
import img4 from "../images/rcimg4.webp";

export default function RefrigeratedContainerComp() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <div className="flex sm:py-6 w-[90%] m-auto flex-col items-center">
        <div className="bg-white p-4 lg:p-8 w-full flex flex-col items-center">
          <h1 className="text-4xl sm:text-3xl md:text-4xl text-center text-black mb-4">
            REFRIGERATED CONTAINER
          </h1>
        </div>
        <div className="text-gray-600 mx-2 md:mx-8 text-sm md:text-base space-y-3 mb-4 sm:mb-0 text-center max-w-7xl">
          <p>
            NCON brings you reliable refrigerated containers to keep your temperature-sensitive cargo safe and fresh. From food and pharmaceuticals to delicate flowers, our containers ensure your goods stay in perfect condition throughout the journey, no matter the distance.
          </p>
        </div>
      </div>

      {/* Full width banner image */}
      <div className="w-full h-64 md:h-96 lg:h-[450px] overflow-hidden">
        <img
          src={img1}
          alt="ISO tank containers in shipping yard"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Container Cards Section */}
      <div className="w-[90%] m-auto py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 10ft Card */}
        <div className="flex flex-col items-center group">
          <div className="w-full h-64 rounded-2xl overflow-hidden shadow-md">
            <img
              src={img2}
              alt="10ft Reefer Container"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <h2 className="mt-3 text-lg font-semibold text-center">
            10ft Reefer Containers
          </h2>
          <p className="mt-1 text-sm text-gray-600 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Compact Design: Ideal for tight spaces and urban transport <br />

Temperature Control: Maintains -30°C to +25°C
<br />

Energy Efficient: Reliable cooling with minimal power use
<br />
Durable Build: Corrosion-resistant for long-lasting use

<br />
Applications: Pharmaceuticals, perishable food, specialty chemicals, and small-scale shipments <br />
          </p>
        </div>

        {/* 20ft Card */}
        <div className="flex flex-col items-center group">
          <div className="w-full h-64 rounded-2xl overflow-hidden shadow-md">
            <img
              src={img3}
              alt="20ft Reefer Container"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <h2 className="mt-3 text-lg font-semibold text-center">
            20ft Reefer Containers
          </h2>
          <p className="mt-1 text-sm text-gray-600 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Capacity: 27.76 m³ for mid-sized shipments

<br />
Temperature Range: -30°C to +25°C for varied cargo
<br />

Intermodal Ready: Easy transfer via trucks, ships, and trains
<br />

ISO-Compliant: Ensures safe and secure transport
<br />

Applications: Food exports, pharmaceuticals, and temperature-controlled chemicals
<br />
          </p>
        </div>

        {/* 40ft Card */}
        <div className="flex flex-col items-center group">
          <div className="w-full h-64 rounded-2xl overflow-hidden shadow-md">
            <img
              src={img4}
              alt="40ft Reefer Container"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <h2 className="mt-3 text-lg font-semibold text-center">
            40ft Reefer Containers
          </h2>
          <p className="mt-1 text-sm text-gray-600 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
           Capacity: 68.47 m³ for bulk shipments. <br />


Temperature Control: -30°C to +25°C for consistent cargo preservation <br />


Intermodal Ready: Easy transfer via road, rail, and sea <br />


Durable Build: Premium materials for long-haul and harsh conditions. <br />


Applications: Frozen foods, medical supplies, and temperature-sensitive chemicals <br />
          </p>
        </div>
      </div>
    </div>
  );
}