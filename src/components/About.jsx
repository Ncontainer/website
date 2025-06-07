import React from "react";
import img from "../images/About.png"
import {
  ShieldCheck,
  Users,
  Rocket,
  Globe2,
  Scale,
  CheckCircle,
  UserCheck,
  Leaf,
  Briefcase,
} from "lucide-react"; // install via `npm install lucide-react`


const About = () => {
  return (
    <>
    <section className="w-full">
      {/* Header Image */}
      <div className="w-full h-72 md:h-[450px] overflow-hidden">
        <img
          src= {img}
          alt="Container Ship"
          className="w-full h-full object-cover"
        />
      </div>      {/* Content */}
      <div className="w-[94%] m-auto flex flex-col sm:flex-row justify-between gap-6 px-4 sm:px-6 md:px-10 lg:px-16 py-8 sm:py-10 bg-white text-black">
      <div className="sm:max-w-[30%]">
        <p className="text-orange-500 uppercase text-base sm:text-lg font-semibold tracking-wide mb-2">
          About Us
        </p>
        <h2 className="text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6 w-full">
          NCON: Container as a
          <br className="hidden sm:block"/> Solution
        </h2>
      </div>
        <div className="text-gray-500 text-justify text-sm sm:text-base md:text-base sm:max-w-[65%]"
        style={{ fontFamily: 'Roboto' }}
        >
          Containerization is an industry that has rapidly evolved since its inception. Constant
          fluctuations and technological advancements in global supply trade has underscored the need
          to redefine container solutions. NCON is born out of a growing need to use technology and
          solutions to increase operational efficiency and enhance sustainability while creating an
          enriching workspace to reimagine the global logistics’ landscape. NCON is part of the
          Saksham Group of Companies, amongst the largest conglomerates in logistics spanning project
          logistics, chemical transportation, container trading, custom broking, and IT solutions.
        </div>
      </div>
      
      {/* Vision Box */}
      <div className="relative bg-secondary w-[94%] sm:w-[90%] lg:w-[88%] mx-auto py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-10 lg:px-16 text-white text-center overflow-hidden rounded-md">
  {/* Background diagonal strips */}
  <div className="absolute inset-0 pointer-events-none">
    {[...Array(10)].map((_, i) => (
      <div
        key={i}
        className="absolute top-0 h-full w-16 sm:w-20 md:w-24 border border-orange-200 opacity-30"
        style={{
          left: `${i * 10}%`,
          transform: "skewX(-20deg)",
        }}
      />
    ))}
  </div>

  {/* Content */}
    <div className="relative max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto">
      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 bg-[#ffa640] inline-block px-4 sm:px-6 md:px-10 py-2 sm:py-3 rounded">
        Our Vision
      </h3>
      <p className="text-xs sm:text-sm md:text-base lg:text-lg px-2">
        To be the most trusted and innovative container solutions provider, by empowering
        businesses with flexible, cost effective, sustainable, and technology-driven container
        management.
      </p>
    </div>
  </div>
</section>

{/* Our Mision and Our Values Section started from here */}
<section className="w-[94%] sm:w-[92%] lg:w-[90%] mx-auto flex flex-col gap-8 sm:gap-10 md:gap-12 px-2 sm:px-4 py-8 sm:py-10 md:py-12">

{/* Our Mission Section */}
<div className="bg-[#1E1E1E] text-white rounded-md p-4 sm:p-6 md:p-8 lg:p-10 relative overflow-hidden">
  {/* SVG Background for desktop */}
  <div className="absolute inset-0 w-full h-full hidden md:block">
    <svg
      width="100%" height="100%" viewBox="0 0 257 211" fill="none" xmlns="http://www.w3.org/2000/svg"
      className="absolute right-0 top-0 h-full opacity-10"
    >
      <path d="M140.456 179.32L183.63 176.461L92.5407 367.657L45.2775 367.657L140.456 179.32Z" fill="black" fillOpacity="0.05"/>
      <path d="M92.3898 367.417L45.6665 367.417L140.608 179.549L183.238 176.726L92.3898 367.417Z" stroke="#8E8E8E" strokeOpacity="0.25" strokeWidth="0.479432"/>
      <path d="M268.491 69.3237L310.168 69.324L247.314 200.033L200.051 200.033L268.491 69.3237Z" fill="black" fillOpacity="0.05"/>
      <path d="M247.164 199.792L200.447 199.793L268.637 69.5621L309.787 69.5623L247.164 199.792Z" stroke="#8E8E8E" strokeOpacity="0.25" strokeWidth="0.479432"/>
      <path d="M106.564 74.9565L148.24 74.9568L85.3866 205.666L38.1234 205.666L106.564 74.9565Z" fill="black" fillOpacity="0.05"/>
      <path d="M85.236 205.425L38.5188 205.426L106.709 75.1949L147.86 75.1951L85.236 205.425Z" stroke="#8E8E8E" strokeOpacity="0.25" strokeWidth="0.479432"/>
      <path d="M216.681 19.0405L258.358 19.0408L195.504 149.75L148.241 149.75L216.681 19.0405Z" fill="black" fillOpacity="0.05"/>
      <path d="M195.353 149.509L148.636 149.51L216.826 19.2789L257.977 19.2791L195.353 149.509Z" stroke="#8E8E8E" strokeOpacity="0.25" strokeWidth="0.479432"/>
    </svg>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center relative z-10">
    {/* Content on Left */}
    <div className="grid gap-4 sm:gap-5 md:gap-6 order-2 md:order-1">
      <div className="flex items-start gap-3 sm:gap-4">
        <CheckCircle className="text-secondary w-5 h-5 sm:w-6 sm:h-6 mt-1 flex-shrink-0" />
        <div>
          <h4 className="font-semibold text-sm sm:text-base">Drive cost and operational efficiencies</h4>
          <p className="text-xs sm:text-sm text-gray-300">
            Assuring flexibility and unlocking value for our customers with the power of choice by aggregating the collective power of container inventory.
          </p>
        </div>      </div>
      
      <div className="flex items-start gap-3 sm:gap-4">
        <UserCheck className="text-secondary w-5 h-5 sm:w-6 sm:h-6 mt-1 flex-shrink-0" />
        <div>
          <h4 className="font-semibold text-sm sm:text-base">Phygital Approach</h4>
          <p className="text-xs sm:text-sm text-gray-300">
            Leveraging the power of technology and people to forge lasting business relationships to redefine business processes.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-3 sm:gap-4">
        <Leaf className="text-secondary w-5 h-5 sm:w-6 sm:h-6 mt-1 flex-shrink-0" />
        <div>
          <h4 className="font-semibold text-sm sm:text-base">Sustainable Innovation</h4>
          <p className="text-xs sm:text-sm text-gray-300">
            We aim to develop innovative business solutions which are sensitive to our environment and society, thus paving the way for a sustainable future.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-3 sm:gap-4">
        <Briefcase className="text-secondary w-5 h-5 sm:w-6 sm:h-6 mt-1 flex-shrink-0" />
        <div>
          <h4 className="font-semibold text-sm sm:text-base">Enriching Workspace</h4>
          <p className="text-xs sm:text-sm text-gray-300">
            To provide an entrepreneurial environment which encourages bold thinking and innovation, to facilitate high productivity and enhance employees' happiness index.
          </p>
        </div>
      </div>
    </div>

        {/* Title on Right - Center Aligned */}
    <div className="w-full h-auto order-1 py-4 sm:py-6 md:py-8 md:h-auto lg:h-[350px] xl:h-[400px] flex justify-center items-center">
      <h3 className="text-white text-lg sm:text-xl md:text-2xl bg-black px-6 sm:px-10 md:px-16 py-3 sm:py-4 inline-block">
        Our Mission
      </h3>
    </div>
    
  </div>
 

</div>

{/* Our Values Section */}
<div className="bg-secondary text-white rounded-md p-4 sm:p-6 md:p-8 lg:p-10">
  <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
        {/* Title on Left - Center Aligned */}
    <div className="w-full flex justify-center items-center">
      <h3 className="px-6 sm:px-10 md:px-16 py-2 sm:py-3 rounded-md text-lg sm:text-xl md:text-2xl bg-white/20 inline-block">
        Our Values
      </h3>
    </div>
    {/* Content on Right */}
    <div className="grid gap-4 sm:gap-5 md:gap-6">
      <div className="flex items-start gap-3 sm:gap-4">
        <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 mt-1 flex-shrink-0" />
        <div>
          <h4 className="font-semibold text-sm sm:text-base">Trust</h4>
          <p className="text-xs sm:text-sm">
            With the backing of a robust legacy, we inspire confidence in our customers and stakeholders when it comes to entrusting their requirements with us.
          </p>
        </div>
      </div>      <div className="flex items-start gap-3 sm:gap-4">
        <Users className="w-5 h-5 sm:w-6 sm:h-6 mt-1 flex-shrink-0" />
        <div>
          <h4 className="font-semibold text-sm sm:text-base">Customer-centricity</h4>
          <p className="text-xs sm:text-sm">
            We unlock maximum value for our customers at every step by keeping them at the core of decision making.
          </p>
        </div>
      </div>
      
      <div className="flex items-start gap-3 sm:gap-4">
        <Rocket className="w-5 h-5 sm:w-6 sm:h-6 mt-1 flex-shrink-0" />
        <div>
          <h4 className="font-semibold text-sm sm:text-base">Innovation</h4>
          <p className="text-xs sm:text-sm">
            We foster an innovative work-culture which translates into better solutions to customers, employees and stakeholders.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-3 sm:gap-4">
        <Globe2 className="w-5 h-5 sm:w-6 sm:h-6 mt-1 flex-shrink-0" />
        <div>
          <h4 className="font-semibold text-sm sm:text-base">Diversity and inclusiveness</h4>
          <p className="text-xs sm:text-sm">
            We promote a culture where people from diverse backgrounds work seamlessly and in alignment with our vision and mission.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-3 sm:gap-4">
        <Scale className="w-5 h-5 sm:w-6 sm:h-6 mt-1 flex-shrink-0" />
        <div>
          <h4 className="font-semibold text-sm sm:text-base">Integrity and ethics</h4>
          <p className="text-xs sm:text-sm">
            These are the foundations on which we have built our business and organization.
          </p>
        </div>
      </div>
    </div>


  </div>
</div>
</section>
</>
  );
};

export default About;
