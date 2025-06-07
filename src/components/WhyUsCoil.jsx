import React from 'react';
import { Truck, Shield, BarChart2, Container, RotateCw, Grid } from 'lucide-react';

export default function WhyUsCoil() {
  const benefits = [
    {
      icon: <Truck className="w-8 h-8 text-orange-500" />,
      title: "Enhanced Handling",
      description: "Utilizes existing lashing materials to streamline the process of loading and securing coils and eliminates the need for additional blocking or bracing."
    },
    {
      icon: <RotateCw className="w-8 h-8 text-orange-500" />,
      title: "Improved Efficiency",
      description: "Integrates seamlessly into the logistics chain with a decreased handling duration and heightened terminal velocity."
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-500" />,
      title: "Safety and Security",
      description: "Operates safely by avoiding the chances of accidents and complete weather protection, minimizing the risk of damage."
    },
    {
      icon: <Container className="w-8 h-8 text-orange-500" />,
      title: "Containerized Solution",
      description: "Offers more cost-effective and frequent shipping alternatives compared to traditional breakbulk methods."
    },
    {
      icon: <Grid className="w-8 h-8 text-orange-500" />,
      title: "Versatility",
      description: "Can be transported without a lid similar to a flat rack for domestic shipments, resulting in time and cost savings."
    },
    {
      icon: <BarChart2 className="w-8 h-8 text-orange-500" />,
      title: "Backhaul Capability",
      description: "Cradles can be grouped at one end of the container, enabling flat deck backhaul shipments."
    }
  ];

  return (
    <div className="w-full bg-white pb-6  sm:py-16 px-4">
      <div className="container mx-auto">
        {/* Section Header */}        <div className="text-center mb-12">
          <p className="text-orange-500 font-medium mb-2">Why Us?</p>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">Why Choose our Coil-tainers?</h2>
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