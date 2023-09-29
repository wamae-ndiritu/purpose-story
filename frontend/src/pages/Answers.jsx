import React from "react";
import Navbar from "../components/Navbar";
import ViewAnswers from "../components/ViewAnswers";
import Footer from "../components/Footer";

const Answers = () => {
  return (
    <div className='bg-slate-200'>
      <Navbar />
      <ViewAnswers />
      <Footer />
    </div>
  );
};

export default Answers;
