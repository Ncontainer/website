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
import NewsLetter from "../components/NewsLetter";

const Home = () => {
  return (
    <div className="w-full overflow-x-hidden">
     
     <Header />
  <div className="-mt-100">
  <Hero />
</div>
      <section id="logistics-overview"className=" mb-4">
        <LogisticsOverview />
      </section>
      <section id="our-services">
        <OurServices />
      </section>
      <GetStarted />
      <LookingFor />
      <Testimonial />
      <ContactUs />
      {/* <Blog /> */}
      {/* <Footer /> */}
     <section className="mb-8">
        <NewsLetter/>
      </section> 
    </div>
  );
};

export default Home;