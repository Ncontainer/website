import React from "react";
import TankComp from "../components/TankComp";
import WhyUs from "../components/WhyUs";
import OurExpertise from "../components/OurExpertise";
import OurOptions from "../components/OurOptions";
import WhyUsTank from "../components/WhyUsTank";


const Tanks= () => {
  return (
    <>
    <TankComp/>
    <WhyUsTank/>
    <OurOptions />
    <div className="container mx-auto py-8 w-[93%]">
      <div className="flex items-center">
        <div className="w-1/2 px-4">
          <h2 className="text-3xl  mb-4">Tanks at a Glance</h2>
       
       
        </div>
        <div className="w-1/2 ">
         <p className="text-gray-600 text-sm">
            Choose the best Tanks from the array of options available as per your business requirements. Our team of experts is keen to discuss your requirement and provide the best solution.
          </p>
        </div>
      </div>
    </div>
    <div className="container mx-auto py-8 w-[93%]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-gray-100 p-6 py-24 py-24 rounded-lg shadow-md">
       
      </div>
      <div className="bg-gray-100 p-6 py-24 py-24 rounded-lg shadow-md">
       
      </div>
      <div className="bg-gray-100 p-6 py-24 py-24 rounded-lg shadow-md">
      
      </div>
      </div>
    </div>
    <OurExpertise/>
    </>
  );
};

export default Tanks;
