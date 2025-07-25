import React from "react";
import img from "../images/About.webp";
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
} from "lucide-react";

const About = () => {
  return (
    <>
      <section className="w-full">
        {/* Header Image */}
        <div className="w-full h-72 md:h-[450px] overflow-hidden">
          <img src={img} alt="Container Ship" className="w-full h-full object-cover" />
        </div>

        {/* Content Section */}
        <div className="w-[94%] m-auto flex flex-col sm:flex-row justify-between gap-6 px-4 sm:px-6 md:px-10 lg:px-16 py-8 sm:py-10 bg-white text-black">
          <div className="sm:max-w-[30%]">
            <p className="text-orange-500 uppercase text-base sm:text-lg font-semibold tracking-wide mb-2">
              About Us
            </p>
            <h2 className="text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6 w-full">
              NCON: Container as a <br className="hidden sm:block" /> Solution
            </h2>
          </div>
          <div className="text-gray-500 text-justify text-sm sm:text-base md:text-base sm:max-w-[65%]" style={{ fontFamily: 'Roboto' }}>
            Containerization is an industry that has rapidly evolved since its inception. Constant
            fluctuations and technological advancements in global supply trade has underscored the need
            to redefine container solutions. NCON is born out of a growing need to use technology and
            solutions to increase operational efficiency and enhance sustainability while creating an
            enriching workspace to reimagine the global logistics’ landscape. NCON is part of the
            Saksham Group of Companies, amongst the largest conglomerates in logistics spanning project
            logistics, chemical transportation, container trading, custom broking, and IT solutions.
          </div>
        </div>

        {/* Our Vision Section */}
        <div className="relative w-[94%] sm:w-[90%] lg:w-[88%] mx-auto py-10 px-6 sm:px-10 rounded-md text-white bg-[#f7921e] overflow-hidden">
          {/* Diagonal Lines */}
          <div className="absolute inset-0 pointer-events-none z-0">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="absolute top-0 h-full w-20 border border-white/20 opacity-30"
                style={{
                  left: `${i * 10}%`,
                  transform: "skewX(-20deg)",
                }}
              />
            ))}
          </div>

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold bg-white/20 inline-block px-6 py-2 rounded-md mb-4">
              Our Vision
            </h3>
            <p className="text-sm sm:text-base md:text-lg px-2">
              To be the most trusted and innovative container solutions provider, by empowering
              businesses with flexible, cost effective, sustainable, and technology-driven container
              management.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission & Our Values Section */}
      <section className="w-[94%] sm:w-[92%] lg:w-[90%] mx-auto flex flex-col gap-10 px-4 py-12">

        {/* Our Mission */}
        <div className="relative rounded-md text-white bg-[#1E1E1E] overflow-hidden p-6 sm:p-10">
          {/* Diagonal Lines */}
          <div className="absolute inset-0 pointer-events-none z-0">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="absolute top-0 h-full w-20 border border-white/10"
                style={{
                  left: `${i * 10}%`,
                  transform: "skewX(-20deg)",
                }}
              />
            ))}
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div className="grid gap-6 order-2 md:order-1">
              {[
                {
                  icon: <CheckCircle className="text-secondary w-6 h-6" />,
                  title: "Drive cost and operational efficiencies",
                  desc: "Assuring flexibility and unlocking value for our customers with the power of choice by aggregating the collective power of container inventory.",
                },
                {
                  icon: <UserCheck className="text-secondary w-6 h-6" />,
                  title: "Phygital Approach",
                  desc: "Leveraging the power of technology and people to forge lasting business relationships to redefine business processes.",
                },
                {
                  icon: <Leaf className="text-secondary w-6 h-6" />,
                  title: "Sustainable Innovation",
                  desc: "We aim to develop innovative business solutions which are sensitive to our environment and society, thus paving the way for a sustainable future.",
                },
                {
                  icon: <Briefcase className="text-secondary w-6 h-6" />,
                  title: "Enriching Workspace",
                  desc: "To provide an entrepreneurial environment which encourages bold thinking and innovation, to facilitate high productivity and enhance employees' happiness index.",
                },
              ].map(({ icon, title, desc }, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  {icon}
                  <div>
                    <h4 className="font-semibold text-base">{title}</h4>
                    <p className="text-sm text-gray-300">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Title */}
            <div className="order-1 md:order-2 flex justify-center items-center">
              <h3 className="bg-black text-white px-10 py-4 text-xl sm:text-2xl font-semibold">
                Our Mission
              </h3>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="relative rounded-md text-white bg-[#ff9215] overflow-hidden p-6 sm:p-10">
          {/* Diagonal Lines */}
          <div className="absolute inset-0 pointer-events-none z-0">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="absolute top-0 h-full w-20 border border-white/20"
                style={{
                  left: `${i * 10}%`,
                  transform: "skewX(-20deg)",
                }}
              />
            ))}
          </div>

          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
            {/* Title */}
            <div className="flex justify-center">
              <h3 className="bg-white/20 text-white px-10 py-3 text-xl sm:text-2xl rounded-md font-semibold">
                Our Values
              </h3>
            </div>

            {/* Value List */}
            <div className="grid gap-6">
              {[
                {
                  icon: <ShieldCheck className="w-6 h-6" />,
                  title: "Trust",
                  desc: "With the backing of a robust legacy, we inspire confidence in our customers and stakeholders when it comes to entrusting their requirements with us.",
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  title: "Customer-centricity",
                  desc: "We unlock maximum value for our customers at every step by keeping them at the core of decision making.",
                },
                {
                  icon: <Rocket className="w-6 h-6" />,
                  title: "Innovation",
                  desc: "We foster an innovative work-culture which translates into better solutions to customers, employees and stakeholders.",
                },
                {
                  icon: <Globe2 className="w-6 h-6" />,
                  title: "Diversity and inclusiveness",
                  desc: "We promote a culture where people from diverse backgrounds work seamlessly and in alignment with our vision and mission.",
                },
                {
                  icon: <Scale className="w-6 h-6" />,
                  title: "Integrity and ethics",
                  desc: "These are the foundations on which we have built our business and organization.",
                },
              ].map(({ icon, title, desc }, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  {icon}
                  <div>
                    <h4 className="font-semibold text-base">{title}</h4>
                    <p className="text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;