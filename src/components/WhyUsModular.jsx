import React from 'react';
import { Layers, Shield, ArrowUpRight, Expand, PiggyBank, Package } from 'lucide-react';

export default function WhyUsModular() {
  const benefits = [
    {
      icon: <Layers className="w-8 h-8 text-orange-500" />,
      title: "Versatile Design",
      description: "Create a wide range of spaces to suit your specific needs."
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-500" />,
      title: "Durability and Security",
      description: "Protect your belongings with unmatched durability and security."
    },
    {
      icon: <ArrowUpRight className="w-8 h-8 text-orange-500" />,
      title: "Rapid Deployment",
      description: "Get operational quickly and efficiently."
    },
    {
      icon: <Expand className="w-8 h-8 text-orange-500" />,
      title: "Scalability",
      description: "Add or remove modules easily to adjust your space requirements."
    },
    {
      icon: <PiggyBank className="w-8 h-8 text-orange-500" />,
      title: "Cost-Effective",
      description: "Invest smarter with an economical alternative to traditional construction."
    },
    {
      icon: <Package className="w-8 h-8 text-orange-500" />,
      title: "Portable",
      description: "Relocate your containerized space as needed easily."
    }
  ];

  return (
    <div className="w-full bg-white pb-6 sm:py-16 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-orange-500 md:text-[20px] mb-2">Why Us?</p>
          <h2 className="text-3xl sm:text-2xl md:text-5xl lg:text-6xl">
            Why Choose our Modular Containers
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-6 rounded-lg flex flex-col items-start"
            >
              <div className="mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}