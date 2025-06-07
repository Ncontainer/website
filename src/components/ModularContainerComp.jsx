import React from "react";
import img1 from "../images/mcimg1.png";
import img2 from "../images/mcimg2.png";
import img3 from "../images/mcimg3.png";
import img4 from "../images/mcimg4.png";
import img5 from "../images/mcimg5.png";
import img6 from "../images/mcimg6.png";


export default function ModularContainerComp() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section - Stack vertically on mobile, side by side on larger screens */}
      <div className="flex sm:py-6 w-[90%] m-auto flex-col ">
        {/* Left side - Text content */}
        <div className="bg-white p-4 lg:p-8">          <h1 className="text-2xl sm:text-3xl md:text-4xl text-center text-black mb-4">
            MODULAR CONTAINER
          </h1>
        </div>
        <div className="text-gray-600 mx-8 text-sm md:text-base space-y-3  mb-4 sm:mb-0">
          <p>
            NCON's modular containers are designed to meet your diverse needs
            providing reliable, versatile and cost-effective applications for a
            wide range of applications. Whether creating portable offices,
            security cabins, or portable toilets, these containers ensure that
            the space is functional and secure from installation to use.
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

      {/* Portable Security Cabin */}
      <div className="w-[95%] m-auto bg-white p-6 md:p-12">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
          {/* Left side - Text content */}          <div className="md:w-1/2 mb-6 md:mb-0 order-1 mt-6 md:mt-0 md:order-none">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black mb-3">
              Portable Security Cabin:
            </h2>
            <p>
              A durable, movable structure providing a secure workspace for
              security personnel. Built with robust materials to withstand
              various weather conditions, these modular portable cabins come
              equipped with windows, ventilation, and electrical wiring. They
              are ideal for construction sites and events, offering easy
              relocation and setup. Customizable features like CCTV systems and
              reinforced doors enhance security, ensuring a comprehensive
              solution for temporary locations.
            </p>

            <div>
              <div className="w-[65%] m-auto p-4 my-4">
                <table className="w-full border-collapse rounded-2xl overflow-hidden border-solid shadow-md">
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

      {/* PUF Cabin - Image on left, content on right */}
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
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black mb-3">
              PUF Cabin:
            </h2>
            <p>
              A prefabricated modular cabin with polyurethane foam (PUF)
              insulation for superior thermal control. These energy-efficient
              cabins maintain comfortable temperatures in all climates.
              Lightweight yet sturdy, they allow for easy transportation and
              quick installation. Perfect for remote locations and temporary
              offices, they offer customizable layouts and finishes to meet
              specific needs, providing a versatile and efficient solution.
            </p>

            {/* Table Content */}

            <div className="w-[65%] m-auto p-4 my-4">
              <table className="w-full border-collapse rounded-2xl overflow-hidden border-solid shadow-md">
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
        </div>
      </div>

       {/* Portable Toilet Container - Image on right, content on left */}

       {/* Portable Security Cabin */}
      <div className="w-[95%] m-auto bg-white p-6 md:p-12">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
          {/* Left side - Text content */}
          <div className="md:w-1/2 mb-6 md:mb-0 order-2 mt-6 md:mt-0 md:order-none">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black mb-3">
            Portable Container Toilet:
            </h2>
            <p>
              Self-contained sanitation units designed for outdoor or temporary use. These robust and weather-resistant toilets include essential plumbing fixtures like toilets and sinks. Ideal for construction sites, events, and remote areas, they feature easy-to-clean surfaces and simple waste management systems. Additional options such as solar panels and enhanced ventilation ensure comfort and hygiene for users.
            </p>

            <div>
              <div className="w-[65%] m-auto p-4 my-4">
                <table className="w-full border-collapse rounded-2xl overflow-hidden border-solid shadow-md">
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

      {/* Office Cabin - Image on left, content on right */}
      <div className="w-[95%] m-auto bg-white p-6 md:p-12">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
          {/* Left side - Image */}
          <div className="md:w-2/5 mb-6 md:mb-0">
            <div className="bg-blue-100 rounded-lg overflow-hidden">
              <img
                src={img5}
                alt="ARCON T14 ISO Tank Container"
                className="w-full object-cover"
              />
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="md:w-1/2">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black mb-3">
            Office Cabin:
            </h2>
            <p>
            Repurposed shipping modular shipping containers transformed into durable and cost-effective office spaces. Offering a quick and sustainable alternative to traditional offices, these modular portable cabins can be customized with windows, doors, insulation, and partitions. Equipped with electrical, heating, and cooling systems, they are functional year-round. Ideal for remote sites and urban expansions, they provide flexible, stackable, and relocatable office solutions.
            </p>

            {/* Table Content */}

            <div className="w-[65%] m-auto p-4 my-4">
              <table className="w-full border-collapse rounded-2xl overflow-hidden border-solid shadow-md">
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

    {/* Portable Toilet Container - Image on right, content on left */}

       {/* Portable Security Cabin */}
       <div className="w-[95%] m-auto bg-white p-6 md:p-12">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
          {/* Left side - Text content */}
          <div className="md:w-1/2 mb-6 md:mb-0 order-2 mt-6 md:mt-0 md:order-none">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black mb-3">
            Prefabricated Cabin:
            </h2>
            <p>
            Modular shipping containers built from repurposed shipping containers for easy installation. These versatile cabins are suitable for various applications, featuring customizable interiors and efficient insulation. Constructed off-site, they allow for quick setup and are environmentally sustainable. Equipped with modern amenities like electrical systems and HVAC units, they offer comfort and functionality. Their modular design enables easy expansion or relocation, ideal for both temporary and permanent use. These portable container cabins offer a practical solution for diverse needs.
            </p>

            <div>
              <div className="w-[65%] m-auto p-4 my-4">
                <table className="w-full border-collapse rounded-2xl overflow-hidden border-solid shadow-md">
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

          {/* Right side - Image */}
          <div className="md:w-2/5 flex ">
            <div className=" bg-blue-100 rounded-lg overflow-hidden">
              <img
                src={img6}
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
