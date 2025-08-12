import React from 'react';
import { Thermometer, Globe2, Cog, FileEdit, Wrench, HardHat } from 'lucide-react';

export default function WhyUsRefrigerated2() {
  const benefits = [
    {
      icon: <Thermometer className="w-8 h-8 text-orange-500" />,
      title: "Advanced Temperature Control",
      description:
        "Maintain precise temperatures for optimal product freshness."
    },
    {
      icon: <Globe2 className="w-8 h-8 text-orange-500" />,
      title: "Global Reach",
      description:
        "Ship your perishables with confidence across continents."
    },
    {
      icon: <Cog className="w-8 h-8 text-orange-500" />,
      title: "Advanced Technology",
      description:
        "Ship with peace of mind with real-time temperature monitoring and tracking."
    },
    {
      icon: <FileEdit className="w-8 h-8 text-orange-500" />,
      title: "Flexible Lease Options",
      description:
        "Stay on top of your investment by choosing the lease term that best suits your needs."
    },
    {
      icon: <Wrench className="w-8 h-8 text-orange-500" />,
      title: "Reliable Equipment",
      description:
        "Ensure optimal protection for your cargo powered by our durable construction."
    },
    {
      icon: <HardHat className="w-8 h-8 text-orange-500" />,
      title: "Unmatched Service",
      description:
        "Get unmatched support at every step of the way with our dedicated support team."
    }
  ];

  return (
    <div className="w-full bg-white pb-6 sm:py-16 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-orange-500 md:text-[20px] mb-2">Why Us?</p>
          <h2 className="text-4xl sm:text-2xl md:text-5xl lg:text-6xl">
            Why Choose our Refrigerated Containers?
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
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