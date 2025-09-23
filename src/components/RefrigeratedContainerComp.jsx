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
            NCON, a leader in intermodal container solutions, now offers
            refrigerated containers for the secure and efficient transport of
            your temperature-sensitive cargo. Whether transporting food,
            pharmaceuticals, or delicate floral arrangements, these refrigerated
            containers ensure that cargo remains in optimal condition from
            origin to destination.
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
            Compact solution for small-volume, temperature-sensitive cargo (-30°C to +25°C).
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
            Medium cargo, flexible, intermodal compatible.
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
            Large-scale, bulk shipments, high-capacity cooling (-30°C to +25°C).
          </p>
        </div>
      </div>
    </div>
  );
}