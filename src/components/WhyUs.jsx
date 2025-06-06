import React from 'react';
import { Truck, Globe, User, Award, Headphones, DollarSign } from 'lucide-react';

export default function WhyUs() {
  const benefits = [
    {
      icon: <Truck className="w-8 h-8 text-orange-500" />,
      title: "Extensive and own fleet",
      description: "We offer a vast selection of Dry and Special Containers to meet any shipping requirement."
    },
    {
      icon: <Globe className="w-8 h-8 text-orange-500" />,
      title: "Global network",
      description: "With a well-established presence worldwide, NCON is your reliable partner for seamless international shipping."
    },
    {
      icon: <User className="w-8 h-8 text-orange-500" />,
      title: "Dedicated expertise",
      description: "Our team of container specialists is here to assist you in choosing the perfect container solution for your specific needs."
    },
    {
      icon: <Award className="w-8 h-8 text-orange-500" />,
      title: "Commitment to quality",
      description: "Our containers adhere to the strictest ISO standards and undergo thorough inspections, ensuring the safety and security of your cargo."
    },
    {
      icon: <Headphones className="w-8 h-8 text-orange-500" />,
      title: "Comprehensive customer support",
      description: "Our customer service team is available 24/7 to provide assistance and resolve any issues, ensuring a smooth shipping experience."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-orange-500" />,
      title: "Cost-effective solutions",
      description: "NCON offers competitive pricing and flexible leasing options, allowing you to maximize your budget while receiving top-quality containers."
    }
  ];

  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-orange-500 font-medium mb-2">Why Us?</p>
          <h2 className="text-3xl md:text-4xl ">Why Choose NCON Containers</h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-2  lg:grid-cols-3  gap-3 md:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-6 rounded-lg flex flex-col items-start"
            >
              <div className="mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-medium mb-2">
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