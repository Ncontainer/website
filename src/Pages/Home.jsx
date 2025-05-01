import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import LogisticsOverview from "../components/LogisticsOverview";
import OurServices from "../components/OurServices";

const Home = () => {
  return (
    <>
      {/* <Header /> */}
      <Hero />
      <LogisticsOverview/>
      <OurServices/>
    </>
  );
};

export default Home;
