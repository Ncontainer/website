import React from "react";
import RefrigeratedContainerComp from "../components/RefrigeratedContainerComp"
import WhyUs from "../components/WhyUs"
import OurOptions from "../components/OurOptions"
import OurExpertise from "../components/OurExpertise"
import ReContainerSpecifications from "../components/ReContainerSpecifications";
import WhyUsRefrigerated from "../components/WhyUsRefrigerated";
import WhyUsRefrigerated2 from "./WhyUsRefrigerated2";

const RefrigeratedContainers = () => {
    return (
        <>
        <RefrigeratedContainerComp />
         <WhyUsRefrigerated/>
        {/* <ReContainerSpecifications /> */}
       <WhyUsRefrigerated2/>
        <OurOptions/>
        <OurExpertise/>

        </>
    );
}

export default RefrigeratedContainers;
// import React from "react";