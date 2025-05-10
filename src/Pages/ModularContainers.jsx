import ModularContainerComp from "../components/ModularContainerComp";
import OurOptions from "../components/OurOptions"
import OurExperties from "../components/OurExpertise"
import WhyUs from "../components/WhyUs"


import React from "react";

const ModularContainers = () => {
  return (
    <>
      <ModularContainerComp />
      <WhyUs/>
      <OurOptions />
      <OurExperties/>
    </>
  );
};

export default ModularContainers;
