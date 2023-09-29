import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HowItWorksSection from "../components/HowItWorks";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HowItWorksSection />
    </div>
  );
};

export default Home;
