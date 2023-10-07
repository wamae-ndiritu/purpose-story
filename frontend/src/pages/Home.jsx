import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HowItWorksSection from "../components/HowItWorks";
import Footer from "../components/Footer";
import IntroSection from "../components/IntroSection";

const Home = () => {
  return (
    <div>
      <Navbar />
      <IntroSection />
      <Hero />
      <HowItWorksSection />
      <Footer />
    </div>
  );
};

export default Home;
