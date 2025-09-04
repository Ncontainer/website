import React from "react";
import img from "../images/About.webp";
import bg1 from "../images/Section 3 About Us.webp";
import bg2 from "../images/Section 4 About Us.webp";
import bg3 from "../images/Section 5 About Us.webp";
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
          <div className="sm:max-w-[50%]">
            <p className="text-orange-500 uppercase text-lg sm:text-2xl  tracking-wide mb-2">
  About Us
</p>
            <h2 className="text-4xl sm:text-3xl md:text-6xl mb-4 sm:mb-6 w-full">
          Redefining Container 
Solutions with Trust & 
Innovation
        </h2>
          </div>
        <div 
  className="text-gray-500 text-justify text-sm sm:text-base md:text-base max-w-[800px] mx-auto px-4" 
  style={{ fontFamily: 'Roboto' }}
>
At NCON, we don t just move containers we move businesses forward. In an 
industry crowded with one-size-fits-all players, we stand apart by offering container 
solutions designed for safety, speed, sustainability, and trust.
<br />
<br />

From secure storage facilities to hassle-free rentals, and from buying and selling 
containers to custom logistics support, we bring more than just boxes on wheels 
we bring reliability, transparency, and efficiency that redefine what container 
logistics should mean.
<br />
<br />

<div className="font-bold">Our Edge Over Competitors </div>


At NCON, containers aren t commodities they re strategic assets. With a techdriven approach and personalized service, we deliver solutions that unlock value, 
cut costs, and future-proof logistics. We re not just another provider; we re partners 
in innovation, integrity, and growth.
</div>
        </div>

        {/* Our Vision Section */}
        <div className="relative w-[94%] sm:w-[90%] lg:w-[88%] mx-auto py-10 px-6 sm:px-10 rounded-md text-white bg-[#f7921e] overflow-hidden"
         style={{
    backgroundImage: `url(${bg1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}>
          {/* Diagonal Lines */}
        
          <div
  className="relative z-10 text-center max-w-3xl mx-auto px-4 py-6 rounded-md"
 
>
  <h3 className="bg-white/20 px-10 py-3  text-white text-xl sm:text-2xl md:text-3xl rounded-md font-semibold  inline-block mb-4">
    Our Vision
  </h3>
  <p className="text-sm sm:text-base md:text-lg text-white">
    We envision a future where logistics isn t just about moving containers, but about moving with purpose. By 
blending technology, sustainability, and trust, NCON strives to be the most reliable partner in containerized 
solutions making logistics faster, safer, and smarter for businesses worldwide.
  </p>
</div>
        </div>
      </section>

      {/* Our Mission & Our Values Section */}
      <section className="w-[94%] sm:w-[92%] lg:w-[90%] mx-auto flex flex-col gap-10 px-4 py-12">

        {/* Our Mission */}
        <div className="relative rounded-md text-white bg-[#1E1E1E] overflow-hidden p-6 sm:p-10"
        style={{
    backgroundImage: `url(${bg2})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}>
         

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div className="grid gap-6 order-2 md:order-1">
              {[
                {
                  icon: <CheckCircle className="text-secondary w-6 h-6" />,
                  title: "Customer Empowerment Mission",
                  desc: "To give businesses of every size access to world-class container solutions that are flexible, transparent, and affordable — helping them grow without limits..",
                },
                {
                  icon: <UserCheck className="text-secondary w-6 h-6" />,
                  title: "Industry Transformation Mission",
                  desc: "To challenge the outdated ways of container management by bringing innovation, technology, and speed that redefine global logistics standards."
                },
                {
                  icon: <Leaf className="text-secondary w-6 h-6" />,
                  title: "Safety & Trust Mission",
                  desc: "To create a logistics ecosystem where safety, reliability, and trust are non-negotiable, ensuring every container we move carries peace of mind along with goods.",
                },
                {
                  icon: <Briefcase className="text-secondary w-6 h-6" />,
                  title: "Global Vision Mission",
                  desc: "To position NCON as a trusted global partner for containerized solutions, seamlessly connecting businesses across borders with speed, safety, and innovation.",
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
              <h3 className="bg-black text-white px-10 py-4 text-xl sm:text-2xl md:text-3xl font-semibold ">
                Our Mission
              </h3>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="relative rounded-md text-white bg-[#ff9215] overflow-hidden p-6 sm:p-10"  
         style={{
    backgroundImage: `url(${bg3})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}>
          

          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
            {/* Title */}
            <div className="flex justify-center">
              <h3 className="bg-white/20 text-white px-10 py-3 text-xl sm:text-2xl md:text-3xl rounded-md font-semibold">
                Our Values
              </h3>
            </div>

            {/* Value List */}
            <div className="grid gap-6">
              {[
                {
                  icon: <ShieldCheck className="w-6 h-6" />,
                  title: "Safety",
                  desc: "Every container, every journey, protected with the highest standards.",
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  title: "Speed",
                  desc: "Fast, efficient, and reliable solutions that save time and costs.",
                },
                {
                  icon: <Rocket className="w-6 h-6" />,
                  title: "Innovation",
                  desc: "We cultivate a forward-thinking work culture that leads to smarter, more efficient solutions for our clients and partners.",
                },
                {
                  icon: <Globe2 className="w-6 h-6" />,
                  title: "Sustainibilty",
                  desc: "Greener practices today for a better tomorrow.",
                },
                // {
                //   icon: <Scale className="w-6 h-6" />,
                //   title: "Integrity and ethics",
                //   desc: "These are the foundations on which we have built our business and organization.",
                // },
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