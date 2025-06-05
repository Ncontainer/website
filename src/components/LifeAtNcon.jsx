import React from "react";
import img from "../images/blog2.png";

const LifeAtNcon = () => {
  return (
    <section className="w-[90%] m-auto my-10 px-4 md:px-8 lg:px-16">
      <div className="flex flex-col md:flex-row my-6 px-10 justify-between">
        <div className="text-left sm:text-center md:text-left m-6">
          <h2 className="text-orange-600 font-semibold uppercase text-lg">
            Glimpse at NCON
          </h2>
          <h1 className="text-3xl md:text-4xl font-semibold mt-2 ">
            Life at NCON
          </h1>
        </div>

          <div>
            <p className=" text-justify mt-4 max-w-2xl text-gray-700 mx-auto md:mx-0">
              Life’s too short to settle for anything less than aordinary. At
              NCON, we understand the value of work-life balance and the
              importance of enjoying every moment. That’s why our team is not
              only dedicated to delivering exceptional results but also knows
              how to let loose and have a blast. From team outings to
              spontaneous celebrations, we believe in creating an environment
              where work feels less like a chore and more like a fulfilling
              adventure.
            </p>
          </div>
        
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Top Left Large Image */}
        <div className="lg:col-span-2 lg:row-span-2">
          <img
            src={img}
            alt="Life at NCON 1"
            className="w-full h-full object-cover rounded"
          />
        </div>

        {/* Top Right Two Images */}
        <div className="lg:col-span-1">
          <img
            src={img}
            alt="Life at NCON 2"
            className="w-full h-full object-cover rounded"
          />
        </div>
        <div className="lg:col-span-1">
          <img
            src={img}
            alt="Life at NCON 3"
            className="w-full h-full object-cover rounded"
          />
        </div>

        {/* Middle Right Two Images */}
        <div className="lg:col-span-1">
          <img
            src={img}
            alt="Life at NCON 4"
            className="w-full h-full object-cover rounded"
          />
        </div>
        <div className="lg:col-span-1">
          <img
            src={img}
            alt="Life at NCON 5"
            className="w-full h-full object-cover rounded"
          />
        </div>

        {/* Bottom Left Two Images */}
        <div className="lg:col-span-1">
          <img
            src={img}
            alt="Life at NCON 6"
            className="w-full h-full object-cover rounded"
          />
        </div>
        <div className="lg:col-span-1">
          <img
            src={img}
            alt="Life at NCON 7"
            className="w-full h-full object-cover rounded"
          />
        </div>

        {/* Bottom Right Wide Image */}
        <div className="lg:col-span-2 lg:row-span-4">
          <img
            src={img}
            alt="Life at NCON 8"
            className="w-full h-full object-cover rounded"
          />
        </div>
      </div>
    </section>
  );
};

export default LifeAtNcon;
