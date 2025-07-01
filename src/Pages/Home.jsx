import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import LogisticsOverview from "../components/LogisticsOverview";
import OurServices from "../components/OurServices";
import GetStarted from "../components/GetStarted";
import LookingFor from "../components/LookingFor";
import Testimonial from "../components/Testimonial";
import ContactUs from "../components/ContactUs";
import Blog from "../components/Blog";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Header />
      <Hero />
      <section id="logistics-overview">
        <LogisticsOverview />
      </section>
      <section id="our-services">
        <OurServices />
      </section>
      <GetStarted />
      <LookingFor />
      <Testimonial />
      <ContactUs />
      <Blog />
      {/* <Footer /> nigger*/}
    </div>
  );
};

export default Home;