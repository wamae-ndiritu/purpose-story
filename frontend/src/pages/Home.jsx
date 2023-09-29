import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HowItWorksSection from "../components/HowItWorks";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HowItWorksSection />
      <Footer />
    </div>
  );
};

export default Home;
