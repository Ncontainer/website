import React from "react";
import img1 from "../images/mcimg1.webp";
import img2 from "../images/mcimg2.webp";
import img3 from "../images/mcimg3.webp";
import img4 from "../images/mcimg4.webp";
import img5 from "../images/mcimg5.webp";
import img6 from "../images/mcimg6.webp";

export default function ModularContainerComp() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <div className="flex sm:py-6 w-[90%] m-auto flex-col items-center">
        <div className="bg-white p-4 lg:p-8 w-full flex flex-col items-center">
          <h1 className="text-4xl sm:text-3xl md:text-4xl text-center text-black mb-4">
            MODULAR CONTAINER
          </h1>
        </div>

        <div className="text-gray-600 mx-2 md:mx-8 text-sm md:text-base space-y-3 leading-relaxed mb-4 sm:mb-0 text-center max-w-7xl">
          <p>
            NCON's modular containers are designed to meet your diverse needs
            providing reliable, versatile and cost-effective applications for a
            wide range of applications. Whether creating portable offices,
            security cabins, or portable toilets, these containers ensure that
            the space is functional and secure from installation to use.
          </p>
        </div>
      </div>

      {/* Full width banner */}
      <div className="w-full h-64 md:h-96 lg:h-[450px] overflow-hidden">
        <img
          src={img1}
          alt="Modular container banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Cards Section */}
      <div className="w-[90%] m-auto py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Portable Security Cabin */}
        <div className="flex flex-col items-center group">
          <div className="w-full h-64 rounded-2xl overflow-hidden shadow-md">
            <img
              src={img2}
              alt="Portable Security Cabin"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <h2 className="mt-3 text-lg font-semibold text-center">
            Portable Security Cabin
          </h2>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
            <p className="mt-1 text-sm text-gray-600">
              A durable, movable structure providing a secure workspace for
              security personnel. Built with robust materials to withstand
              weather conditions, customizable with CCTV and reinforced doors.
            </p>
            <table className="w-[80%] m-auto border-collapse rounded-2xl overflow-hidden border-solid shadow-md mt-3">
              <thead>
                <tr>
                  <th className="bg-secondary text-white p-2 text-center">
                    Length
                  </th>
                  <th className="bg-secondary text-white p-2 text-center">
                    Width
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border border-gray-100 text-center bg-white">
                    10'
                  </td>
                  <td className="p-2 border border-gray-100 text-center bg-white">
                    10'
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* PUF Cabin */}
        <div className="flex flex-col items-center group">
          <div className="w-full h-64 rounded-2xl overflow-hidden shadow-md">
            <img
              src={img3}
              alt="PUF Cabin"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <h2 className="mt-3 text-lg font-semibold text-center">PUF Cabin</h2>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
            <p className="mt-1 text-sm text-gray-600">
              Prefabricated cabin with PUF insulation for thermal control.
              Lightweight yet sturdy, ideal for temporary offices and remote
              sites, with customizable layouts and finishes.
            </p>
            <table className="w-[80%] m-auto border-collapse rounded-2xl overflow-hidden border-solid shadow-md mt-3">
              <thead>
                <tr>
                  <th className="bg-secondary text-white p-2 text-center">
                    Length
                  </th>
                  <th className="bg-secondary text-white p-2 text-center">
                    Width
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border border-gray-100 text-center bg-white">
                    20'
                  </td>
                  <td className="p-2 border border-gray-100 text-center bg-white">
                    10'
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Portable Toilet */}
        <div className="flex flex-col items-center group">
          <div className="w-full h-64 rounded-2xl overflow-hidden shadow-md">
            <img
              src={img4}
              alt="Portable Toilet"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <h2 className="mt-3 text-lg font-semibold text-center">
            Portable Container Toilet
          </h2>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
            <p className="mt-1 text-sm text-gray-600">
              Self-contained sanitation units with toilets and sinks. Ideal for
              construction sites, events, and remote areas with optional solar
              panels and ventilation.
            </p>
            <table className="w-[80%] m-auto border-collapse rounded-2xl overflow-hidden border-solid shadow-md mt-3">
              <thead>
                <tr>
                  <th className="bg-secondary text-white p-2 text-center">
                    Length
                  </th>
                  <th className="bg-secondary text-white p-2 text-center">
                    Width
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border border-gray-100 text-center bg-white">
                    20'
                  </td>
                  <td className="p-2 border border-gray-100 text-center bg-white">
                    10'
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-100 text-center bg-white">
                    15'
                  </td>
                  <td className="p-2 border border-gray-100 text-center bg-white">
                    10'
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-100 text-center bg-white">
                    10'
                  </td>
                  <td className="p-2 border border-gray-100 text-center bg-white">
                    10'
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Office Cabin */}
        <div className="flex flex-col items-center group">
          <div className="w-full h-64 rounded-2xl overflow-hidden shadow-md">
            <img
              src={img5}
              alt="Office Cabin"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <h2 className="mt-3 text-lg font-semibold text-center">
            Office Cabin
          </h2>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
            <p className="mt-1 text-sm text-gray-600">
              Shipping containers converted into cost-effective office spaces.
              Fully customizable with windows, doors, insulation, and HVAC
              systems for year-round functionality.
            </p>
            <table className="w-[80%] m-auto border-collapse rounded-2xl overflow-hidden border-solid shadow-md mt-3">
              <thead>
                <tr>
                  <th className="bg-secondary text-white p-2 text-center">
                    Length
                  </th>
                  <th className="bg-secondary text-white p-2 text-center">
                    Width
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border border-gray-100 text-center bg-white">
                    20'
                  </td>
                  <td className="p-2 border border-gray-100 text-center bg-white">
                    10'
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-100 text-center bg-white">
                    40'
                  </td>
                  <td className="p-2 border border-gray-100 text-center bg-white">
                    10'
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Prefabricated Cabin */}
        <div className="flex flex-col items-center group">
          <div className="w-full h-64 rounded-2xl overflow-hidden shadow-md">
            <img
              src={img6}
              alt="Prefabricated Cabin"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <h2 className="mt-3 text-lg font-semibold text-center">
            Prefabricated Cabin
          </h2>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
            <p className="mt-1 text-sm text-gray-600">
              Modular prefabricated cabins with customizable interiors, HVAC,
              and efficient insulation. Quick to install, sustainable, and ideal
              for both temporary and permanent setups.
            </p>
            <table className="w-[80%] m-auto border-collapse rounded-2xl overflow-hidden border-solid shadow-md mt-3">
              <thead>
                <tr>
                  <th className="bg-secondary text-white p-2 text-center">
                    Length
                  </th>
                  <th className="bg-secondary text-white p-2 text-center">
                    Width
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border border-gray-100 text-center bg-white">
                    20'
                  </td>
                  <td className="p-2 border border-gray-100 text-center bg-white">
                    10'
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-100 text-center bg-white">
                    40'
                  </td>
                  <td className="p-2 border border-gray-100 text-center bg-white">
                    10'
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}