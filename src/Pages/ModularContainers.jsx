import ModularContainerComp from "../components/ModularContainerComp";
import OurOptions from "../components/OurOptions"
import OurExperties from "../components/OurExpertise"
import WhyUs from "../components/WhyUs"


import React from "react";
import WhyUsModular from "../components/WhyUsModular";

const ModularContainers = () => {
  return (
    <>
      <ModularContainerComp />
      {/* <WhyUs/> */}
      <WhyUsModular/>
      <OurOptions />
      <OurExperties/>
    </>
  );
};

export default ModularContainers;
