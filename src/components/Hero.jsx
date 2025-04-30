import React from "react";

const Hero = () => {
  return (
    <div className="relative">
      <div className="max-w-7xl mt-0 px-6 lg:px-20 flex flex-col lg:flex-row items-center lg:items-start">
        <div className="mt-5 mb-8 lg:w-1/2">
          <p className="font-medium mb-1 text-orange-400">WELCOME TO COMPANY</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3">
            Get Your Load
            <br />
            to market
            <br />
            Faster
          </h1>
          <p className="text-gray-600 max-w-md mb-6">
            We're more than just shipping. Our integrated solutions ensure your
            cargo reaches its destination efficiently and securely, every time.
          </p>
        </div>
        <div className="lg:w-1/2 lg:pl-12 lg:-ml-10 relative z-10 mb-[-100px]">
          <img
            src="image10.png"
            alt="Hero Image"
            className="ml-96 w-full h-auto object-cover rounded-lg scale-105 lg:scale-150"
          />
        </div>
      </div>
      <div className="mt-0 px-6 lg:px-20 -z-0 relative">
        <img
          src="Hero2.png"
          alt="Hero Image 2"
          className="w-full h-96 object-cover shadow-lg rounded-md"
        />
        {/* <div className="bg-orange-400 w-2/5 h-28 absolute flex items-center justify-between lg:bottom-0 lg:right-20 text-white rounded-md">
          <p className="text-lg lg:text-xl font-bold">20+</p>
          <p className="text-lg lg:text-xl font-bold">1000+</p>
          <p className="text-lg lg:text-xl font-bold">1000+</p>
        </div> */}
        <div className="bg-orange-400 w-2/5 h-28 absolute flex items-center justify-between lg:bottom-0 lg:right-20 text-white rounded-md">
            <div className="flex space-x-4 md:space-x-12">
              <div className="text-center ml-10">
                <h3 className="text-white text-3xl md:text-4xl font-bold">25+</h3>
                <p className="text-white text-sm md:text-base">YEARS</p>
              </div>
              <div className="text-center ml-10">
                <h3 className="text-white text-3xl md:text-4xl font-bold">950+</h3>
                <p className="text-white text-sm md:text-base">PROJECTS</p>
              </div>
              <div className="text-center ml-10">
                <h3 className="text-white text-3xl md:text-4xl font-bold">30M+</h3>
                <p className="text-white text-sm md:text-base">CUSTOMERS</p>
                </div>
            </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between mt-10 px-6 lg:px-20">
        <img
          src="hero3.png"
          alt=""
          className="lg:w-1/2 w-full h-[750px] object-cover rounded-md"
        />
        <div className="md:w-1/2 mt-0 ml-10 mb-20 lg:mt-0 lg:ml-10">
          <p className="text-orange-400 font-medium mb-1">Overview</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Logistics Beyond <br />
            Expectation
          </h2>
          <p className="text-gray-600 mb-8">
            We provide creative solutions to help businesses globally. Our
            innovative approach ensures that we deliver the best logistics
            services that fit your needs precisely.
          </p>

          <div className="grid grid-cols-1  md:grid-cols-2 gap-8 mb-8">
            <div className="flex flex-col border-r border-gray-500">
              <h3 className="font-bold text-xl mb-2">Our Vision</h3>
              <p className="text-gray-600">
                To be the global leader in innovative logistics solutions,
                setting industry standards.
              </p>
              <button
                variant="outline"
                className=" border-gray-600 text-primary hover:bg-orange-400 hover:text-white mt-4 self-start"
              >
                Learn More
              </button>
            </div>

            <div className="flex flex-col">
              <h3 className="font-bold text-xl mb-2">Our Mission</h3>
              <p className="text-gray-600">
                To deliver exceptional value through integrated logistics
                services that exceed expectations.
              </p>
              {/* <button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white mt-4 self-start"
                  >
                    Learn More
                  </button> */}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2">
              <div className="relative h-full">
                <img
                  src="hero3.png"
                  alt="Logistics Ship"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:w-1/2 mt-40">
              <p className="text-primary font-medium mb-1">ABOUT US</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Logistics Beyond Expectation
              </h2>
              <p className="text-gray-600 mb-8">
                We provide creative solutions to help businesses globally. Our
                innovative approach ensures that we deliver the best logistics
                services that fit your needs precisely.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="flex flex-col">
                  <h3 className="font-bold text-xl mb-2">Our Vision</h3>
                  <p className="text-gray-600">
                    To be the global leader in innovative logistics solutions,
                    setting industry standards.
                  </p>
                  <button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white mt-4 self-start"
                  >
                    Learn More
                  </button>
                </div>

                <div className="flex flex-col">
                  <h3 className="font-bold text-xl mb-2">Our Mission</h3>
                  <p className="text-gray-600">
                    To deliver exceptional value through integrated logistics
                    services that exceed expectations.
                  </p>
                  <button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white mt-4 self-start"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
