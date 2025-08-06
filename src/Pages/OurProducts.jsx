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
    title: "Dry & Special Containers",
    description:
      "Move any cargo with confidence using NCON’s extensive fleet of DRY and Special Containers. These containers are the cornerstone of global shipping and offer a safe, standardized way to transport cargo of all shapes and sizes.",
    image: dryImage,
    route: "/products/dry_container",
  },
  {
    title: "Liquid Transport Solutions",
    description:
      "NCON provides ISO tank containers for hazardous and non-hazardous liquid transportation. With flexible lease options, our tanks cater to industries ranging from food to chemicals.",
    image: liquidImage,
    route: "/products/tanks",
  },
  {
    title: "Coil-Containers",
    description:
      "Ensure safety and stability for your steel and aluminum coils. Our coil containers include lashing systems to prevent shifting, keeping your cargo secure during transport.",
    image: coilImage,
    route: "/products/coil_containers",
  },
  {
    title: "Modular Container",
    description:
      "Ideal for portable offices, storage, and temporary setups. Modular containers offer flexibility, fast deployment, and secure space for various uses.",
    image: modularImage,
    route: "/products/modular_containers",
  },
  {
    title: "Refrigerated Container",
    description:
      "Our reefers provide optimal temperature control for transporting food, pharmaceuticals, or floral goods. They ensure cargo remains in ideal condition from origin to destination.",
    image: refrigeratedImage,
    route: "/products/refrigerated_containers",
  },
];

export default function OurProducts() {
  return (
    <div className="px-6 md:px-20 py-12 bg-gray-50 text-gray-800">
      <h1 className="text-[40px] leading-[40px] font-normal text-center mb-4 uppercase">
        Our Products
      </h1>
      <p className="text-center text-gray-600 max-w-7xl mx-auto mb-10">
       At NCON, we prioritize the safety and security of your steel and aluminum coils during transportation. Our Coil Containers are expertly designed to safeguard your cargo against damage and accidents. These specialized containers feature secure lashing systems to prevent shifting, ensuring stability throughout the journey
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