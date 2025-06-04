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
      </div>

      {/* Content */}
      <div className=" w-[94%] m-auto flex justify-evenly px-6 md:px-16 py-10 bg-white text-black">
      <div>
        <p className="text-orange-500 uppercase text-lg font-semibold tracking-wide mb-2">
          About Us
        </p>
        <h2 className="text-3xl md:text-7xl font-semibold mb-6">
          NCON: Container as a Solution
        </h2>
      </div>
        <p className="text-gray-700 text-justify text-sm md:text-base max-w-4xl">
          Containerization is an industry that has rapidly evolved since its inception. Constant
          fluctuations and technological advancements in global supply trade has underscored the need
          to redefine container solutions. NCON is born out of a growing need to use technology and
          solutions to increase operational efficiency and enhance sustainability while creating an
          enriching workspace to reimagine the global logistics’ landscape. NCON is part of the
          Saksham Group of Companies, amongst the largest conglomerates in logistics spanning project
          logistics, chemical transportation, container trading, custom broking, and IT solutions.
        </p>
      </div>

      {/* Vision Box */}
      <div className="relative bg-secondary w-[88%] mx-auto py-10 px-6 md:px-16 text-white text-center overflow-hidden rounded-md">
  {/* Background diagonal strips */}
  <div className="absolute inset-0 pointer-events-none">
    {[...Array(10)].map((_, i) => (
      <div
        key={i}
        className="absolute top-0 h-full w-24 border border-orange-200 opacity-30"
        style={{
          left: `${i * 10}%`,
          transform: "skewX(-20deg)",
        }}
      />
    ))}
  </div>

  {/* Content */}
    <div className="relative max-w-3xl mx-auto">
      <h3 className="text-2xl md:text-4xl font-semibold mb-4 bg-[#ffa640] inline-block px-10 py-3 rounded">
        Our Vision
      </h3>
      <p className="text-sm md:text-lg">
        To be the most trusted and innovative container solutions provider, by empowering
        businesses with flexible, cost effective, sustainable, and technology-driven container
        management.
      </p>
    </div>
  </div>
</section>

{/* Our Mision and Our Values Section started from here */}
<section className="w-[90%] mx-auto flex flex-col gap-12 px-4 py-12">

{/* Our Mission Section */}
<div className="bg-gray-900 text-white rounded-md p-6 md:p-10">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    {/* Title on Left - Center Aligned */}
    <div className="w-full h-[400px] flex justify-center items-center">
      <h3 className="text-white text-xl md:text-2xl font-semibold bg-black px-16 py-6 rounded-md inline-block">
        Our Mission
      </h3>
    </div>

    {/* Content on Right */}
    <div className="grid gap-6">
      <div className="flex items-start gap-4">
        <CheckCircle className="text-secondary w-6 h-6 mt-1" />
        <div>
          <h4 className="font-semibold">Drive cost and operational efficiencies</h4>
          <p className="text-sm text-gray-300">
            Assuring flexibility and unlocking value for our customers with the power of choice by aggregating the collective power of container inventory.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <UserCheck className="text-secondary w-6 h-6 mt-1" />
        <div>
          <h4 className="font-semibold">Phygital Approach</h4>
          <p className="text-sm text-gray-300">
            Leveraging the power of technology and people to forge lasting business relationships to redefine business processes.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <Leaf className="text-secondary w-6 h-6 mt-1" />
        <div>
          <h4 className="font-semibold">Sustainable Innovation</h4>
          <p className="text-sm text-gray-300">
            We aim to develop innovative business solutions which are sensitive to our environment and society, thus paving the way for a sustainable future.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <Briefcase className="text-secondary w-6 h-6 mt-1" />
        <div>
          <h4 className="font-semibold">Enriching Workspace</h4>
          <p className="text-sm text-gray-300">
            To provide an entrepreneurial environment which encourages bold thinking and innovation, to facilitate high productivity and enhance employees' happiness index.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Our Values Section */}
<div className="bg-secondary text-white rounded-md p-6 md:p-10">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    {/* Content on Left */}
    <div className="grid gap-6">
      <div className="flex items-start gap-4">
        <ShieldCheck className="w-6 h-6 mt-1" />
        <div>
          <h4 className="font-semibold">Trust</h4>
          <p className="text-sm">
            With the backing of a robust legacy, we inspire confidence in our customers and stakeholders when it comes to entrusting their requirements with us.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <Users className="w-6 h-6 mt-1" />
        <div>
          <h4 className="font-semibold">Customer-centricity</h4>
          <p className="text-sm">
            We unlock maximum value for our customers at every step by keeping them at the core of decision making.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <Rocket className="w-6 h-6 mt-1" />
        <div>
          <h4 className="font-semibold">Innovation</h4>
          <p className="text-sm">
            We foster an innovative work-culture which translates into better solutions to customers, employees and stakeholders.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <Globe2 className="w-6 h-6 mt-1" />
        <div>
          <h4 className="font-semibold">Diversity and inclusiveness</h4>
          <p className="text-sm">
            We promote a culture where people from diverse backgrounds work seamlessly and in alignment with our vision and mission.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <Scale className="w-6 h-6 mt-1" />
        <div>
          <h4 className="font-semibold">Integrity and ethics</h4>
          <p className="text-sm">
            These are the foundations on which we have built our business and organization.
          </p>
        </div>
      </div>
    </div>

    {/* Title on Right - Center Aligned */}
    <div className="w-full h-[400px] flex justify-center items-center">
      <h3 className="px-16 py-6 rounded-md text-xl md:text-2xl font-semibold bg-white/20 inline-block">
        Our Values
      </h3>
    </div>
  </div>
</div>
</section>
</>
  );
};

export default About;
