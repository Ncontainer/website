import React from 'react';
import { Award, Zap, ClipboardCheck, Truck } from 'lucide-react';

export default function WhyUsRefrigerated() {
  const benefits = [
    {
      icon: <Award className="w-8 h-8 text-orange-500" />,
      title: "Preservation of Product Quality",
      description:
        "Refrigerated shipping containers ensure that temperature-sensitive goods remain in pristine condition throughout transit. By maintaining a stable temperature range (-30°C to +25°C), businesses can ship perishable food, pharmaceuticals, and chemicals without compromising quality."
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      title: "Energy Efficiency and Sustainability",
      description:
        "Modern reefers are designed to minimize energy consumption while maintaining optimal temperature control. By using advanced cooling systems, they reduce operational costs and support environmentally friendly shipping practices, helping businesses achieve sustainability goals."
    },
    {
      icon: <ClipboardCheck className="w-8 h-8 text-orange-500" />,
      title: "Regulatory Compliance",
      description:
        "All refrigerated containers are ISO-certified, ensuring compliance with international standards for handling hazardous and non-hazardous materials. This helps businesses adhere to global regulations and meet industry-specific guidelines."
    },
    {
      icon: <Truck className="w-8 h-8 text-orange-500" />,
      title: "Increased Shipping Flexibility",
      description:
        "Available in sizes like 10ft, 20ft, and 40ft, reefers cater to various shipping needs, from compact, localized transport to high-volume global logistics. They support seamless intermodal transport, allowing businesses to ship by road, rail, and sea."
    }
  ];

  return (
    <div className="w-full bg-white pb-6 sm:py-16 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-orange-500 md:text-[20px] mb-2">Why Us?</p>
          <h2 className="text-4xl sm:text-2xl md:text-5xl lg:text-6xl">
            Key Benefits of Refrigerated Containers
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-8">
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