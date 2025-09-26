import React from "react";
import img1 from "../images/tankcomp1.webp";
import img2 from "../images/tankcomp2_new.webp";
import img3 from "../images/tankcomp3_new.webp";
import img4 from "../images/tankcomp4.webp";
import img5 from "../images/tankcomp5_new.webp";
import img6 from "../images/tankcomp6.webp";

export default function TankComp() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <div className="flex sm:py-6 w-[90%] m-auto flex-col items-center">
        <div className="bg-white p-4 lg:p-8 w-full flex flex-col items-center">
          <h1 className="text-4xl sm:text-3xl md:text-4xl text-center text-black mb-4">
            LIQUID TRANSPORT SOLUTIONS
          </h1>
        </div>

        <div className="text-gray-600 mx-2 md:mx-8 text-sm md:text-base space-y-3 leading-relaxed mb-4 sm:mb-0 text-center max-w-7xl">
          <p>
          At NCON, we make transporting and storing bulk and hazardous chemicals simple and secure. Our flexible leasing options and wide range of tanks handle everything from food-grade liquids to highly corrosive acids. With modern, company-owned tanks—including T14 and T50 containers—you can trust your most challenging chemicals are managed safely and efficiently. All our tanks are fully ISO-certified, ensuring the highest global standards of safety and quality.

          </p>
        </div>
      </div>

      {/* Full width banner */}
      <div className="w-full h-64 md:h-96 lg:h-[450px] overflow-hidden">
        <img
          src={img1}
          alt="ISO tank containers in shipping yard"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Tank Container Cards Section */}
      <div className="w-[90%] m-auto py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* T11 Card */}
        <div className="flex flex-col items-center group">
          <div className="w-full h-64 rounded-2xl overflow-hidden shadow-md">
            <img
              src={img2}
              alt="T11 ISO Tank"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <h2 className="mt-3 text-lg font-semibold text-center">
            T11 ISO Tank Container
          </h2>
          <p className="mt-1 text-sm text-gray-600 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
           Capacity: Up to 26,000 liters <br />


Multi-modal: Road, sea, and rail transport <br />


Certified Safety: ISO-compliant <br />


Flexible Hire: Customizable options available <br />
          </p>
        </div>

        {/* T14 Card */}
        <div className="flex flex-col items-center group">
          <div className="w-full h-64 rounded-2xl overflow-hidden shadow-md">
            <img
              src={img3}
              alt="T14 ISO Tank"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <h2 className="mt-3 text-lg font-semibold text-center">
            T14 ISO Tank Container
          </h2>
          <p className="mt-1 text-sm text-gray-600 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Chemical Resistance: Specialty linings prevent corrosion
<br />

Capacity: 9,000 to 27,000 liters.  <br />


Multi-modal: Road, sea, and rail transport

<br />
Certified Safety: Fully ISO-compliant. <br />


Versatile Use: Suitable for petrochemical, pharmaceutical, and mining industries <br />
          </p>
        </div>

        {/* Specialty Lined Card */}
        <div className="flex flex-col items-center group">
          <div className="w-full h-64 rounded-2xl overflow-hidden shadow-md">
            <img
              src={img4}
              alt="Specialty Lined Tank"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <h2 className="mt-3 text-lg font-semibold text-center">
            Specialty Lined Liquid Tanks
          </h2>
          <p className="mt-1 text-sm text-gray-600 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
           Premium Linings: Maintain purity <br />


Corrosion Protection: Prevents interior damage. <br />


Safe & Flexible: Suitable for various chemical volumes. <br />
 
 
Tailored Solutions: Right tank for every cargo <br />

          </p>
        </div>

        {/* Cryogenic Card */}
        <div className="flex flex-col items-center group">
          <div className="w-full h-64 rounded-2xl overflow-hidden shadow-md">
            <img
              src={img5}
              alt="Cryogenic Tank"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <h2 className="mt-3 text-lg font-semibold text-center">
            Cryogenic / LNG Tanks
          </h2>
          <p className="mt-1 text-sm text-gray-600 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
           Applications: Nitrogen, Oxygen, Argon, CO2, LNG. <br />


Design: 40-ft ISO container with stainless steel & insulation. <br />
 

Safe Transport: Efficient and secure handling <br />
          </p> 
        </div>

        {/* Baffled Card */}
        <div className="flex flex-col items-center group">
          <div className="w-full h-64 rounded-2xl overflow-hidden shadow-md">
            <img
              src={img6}
              alt="Baffled Tank"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <h2 className="mt-3 text-lg font-semibold text-center">
            Baffled Liquid Tanks
          </h2>
          <p className="mt-1 text-sm text-gray-600 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
           Baffled Design: Reduces liquid movement at 80% capacity
<br />

Premium Linings: Maintain cargo purity
<br />


Capacity: Tare 4,060 kg | Max payload 31,940 kg <br />


ISO-Compliant: Meets international shipping standards <br />
          </p>
        </div>
      </div>
    </div>
  );
}
{/* <div className="w-full py-12 flex justify-center">
        <div className="w-[85%] relative">
          // {/* 16:9 Aspect Ratio Container */}
          // <div className="relative h-60 pt-[56.25%] rounded-lg overflow-hidden bg-gray-300">
          //   {/* Video Play Button */}
          //   <div className="absolute inset-0 flex items-center justify-center">
          //     {/* <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-white bg-opacity-80 cursor-pointer hover:bg-opacity-100 transition-all">
          //       <div className="w-5 h-5 md:w-6 md:h-6 border-t-0 border-b-[10px] border-l-0 border-r-[16px] border-transparent border-r-gray-800 ml-1"></div>
          //     </div> */}
          //     <svg
          //       width="44"
          //       height="44"
          //       viewBox="0 0 44 44"
          //       fill="none"
          //       xmlns="http://www.w3.org/2000/svg"
          //     >
          //       <mask
            //       id="mask0_12_4488"
            //       // style="mask-type:luminance"
            //       maskUnits="userSpaceOnUse"
            //       x="0"
            //       y="0"
            //       width="44"
            //       height="44"
            //     >
            //       <path
            //         d="M22.0013 42.8346C33.5076 42.8346 42.8346 33.5076 42.8346 22.0013C42.8346 10.4951 33.5076 1.16797 22.0013 1.16797C10.4951 1.16797 1.16797 10.4951 1.16797 22.0013C1.16797 33.5076 10.4951 42.8346 22.0013 42.8346Z"
            //         fill="white"
            //         stroke="white"
            //         stroke-width="2"
            //         stroke-linejoin="round"
            //       />
            //       <path
            //         d="M17.8359 22.0018V14.7852L24.0859 18.3935L30.3359 22.0018L24.0859 25.6102L17.8359 29.2185V22.0018Z"
            //         fill="black"
            //         stroke="black"
            //         stroke-width="2"
            //         stroke-linejoin="round"
            //       />
            //     </mask>
            //     <g mask="url(#mask0_12_4488)">
            //       <path d="M-3 -3H47V47H-3V-3Z" fill="white" />
            //     </g>
            //   </svg>
            // </div>
            {/* This would be replaced with actual video embed code */}
            {/* For now using a placeholder with play button overlay */}
          {/* </div>
        </div>
      </div> */}