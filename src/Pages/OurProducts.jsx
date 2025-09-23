// src/pages/OurProducts.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import dryImage from '../images/drycontainer1.webp';
import liquidImage from '../images/tankcomp1.webp';
import coilImage from '../images/coilimg1.webp';
import modularImage from '../images/mcimg1.webp';
import refrigeratedImage from '../images/rcimg1.webp';
import OurOptions from '../components/OurOptions';
import WhyUs from '../components/WhyUs';
import OurExpertise from "../components/OurExpertise";

const products = [
  {
    title: " Your Everyday Cargo Hero – Reliable, Versatile, Global",
    description:
      "From everyday cargo to unique shipments, our Dry & Special Containers make global trade seamless. Standardized, durable, and ready for any challenge, they’re the backbone of safe and efficient shipping worldwide.",
    image: dryImage,
    route: "/products/dry_container",
  },
  {
    title: " Liquid Cargo, Solid Solutions",
    description:
      "Moving liquids safely is complex — we make it simple.NCON’s ISO Tank Containers are designed for both hazardous and non-hazardous liquids, with flexible leasing options. From food-grade products to industrial chemicals, we’ve got a secure solution for every industry.",
    image: liquidImage,
    route: "/products/tanks",
  },
  // {
  //   title: "Coil-Containers",
  //   description:
  //     "Ensure safety and stability for your steel and aluminum coils. Our coil containers include lashing systems to prevent shifting, keeping your cargo secure during transport.",
  //   image: coilImage,
  //   route: "/products/coil_containers",
  // },
  {
    title: "Cabin Containers – Spaces That Move With You",
    description:
      "Need a portable office, storage room, or temporary setup? Our Cabin Containers give you flexible, ready-to-use space — fast. Easy to deploy, secure, and adaptable for multiple uses.",
    image: modularImage,
    route: "/products/modular_containers",
  },
  {
    title: "Cool Cargo, Warm Confidence",
    description:
      "Keep it cool, keep it safe. NCON’s Reefer Containers maintain precise temperatures for perishable goods like food, medicine, or flowers. Your products arrive as fresh as they left, every single time.",
    image: refrigeratedImage,
    route: "/products/refrigerated_containers",
  },
];

export default function OurProducts() {
  return (
    <div className="px-6 md:px-20 py-12 bg-gray-50 text-gray-800">
      <h1 className="text-[40px] leading-[40px] font-normal text-center mb-4 uppercase">
        Smart Container Choices for Smarter Trade
      </h1>
      <p className="text-center text-gray-600 max-w-7xl mx-auto mb-10">
       At NCON, we know that every cargo is different — from everyday goods to specialized shipments. That’s why we provide a wide range of container solutions, each built with safety, reliability, and efficiency at the core. Explore our containers designed to protect your cargo, simplify logistics, and power global trade.
      </p>

      {products.map((product, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row ${
            index % 2 === 0 ? 'md:flex-row-reverse' : ''
          } items-center gap-6 mb-12`}
        >
          <div className="md:w-1/2">
            <img
              src={product.image}
              alt={product.title}
              className="rounded-lg shadow-lg object-cover w-full h-64 md:h-80"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-[40px] leading-[40px] font-normal mb-2 uppercase">
              {product.title}
            </h2>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <Link to={product.route}>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full transition">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      ))}

      <OurOptions />
      <WhyUs />
      <OurExpertise />
    </div>
  );
}