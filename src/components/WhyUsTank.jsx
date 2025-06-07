import React from 'react';
import { Shield, Briefcase, Users, Clock, BarChart2, Zap } from 'lucide-react';

export default function WhyUsTank() {
  const benefits = [
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: "Expert Guidance",
      description: "Our team of specialists will help you choose the right tank and lining material for your specific corrosive liquids, ensuring optimal compatibility and safety."
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-500" />,
      title: "Unparalleled Safety",
      description: "NCON prioritizes safety with advanced tank features and strict adherence to regulations."
    },
    {
      icon: <Briefcase className="w-8 h-8 text-orange-500" />,
      title: "Flexible Lease Options",
      description: "Choose the lease term that best suits your project needs and budget."
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      title: "Long-Lasting Durability and Performance",
      description: "Our tanks are built with the highest quality materials and construction techniques to ensure reliable storage over extended periods."
    },
    {
      icon: <BarChart2 className="w-8 h-8 text-orange-500" />,
      title: "Streamlined Storage Management",
      description: "NCON's efficient systems simplify your bulk corrosive liquid storage, saving you time and resources."
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      title: "State-of-the-Art Technology",
      description: "NCON utilizes the latest technology in tank construction and maintenance, ensuring cutting-edge solutions for your corrosive liquid storage needs."
    }
  ];

  return (
    <div className="w-full bg-white pb-6 sm:py-16 px-4">
      <div className="container mx-auto">
        {/* Section Header */}        <div className="text-center mb-12">
          <p className="text-orange-500 font-medium mb-2">Why Us?</p>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">Benefits of Choosing ARCON for Highly Corrosive Tanks</h2>
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
              <h3 className="text-base sm:text-lg font-medium mb-2">
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