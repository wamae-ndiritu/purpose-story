import React from "react";
import Navbar from "../components/Navbar";
import QuestionOne from "../components/QuestionOne";
import Footer from "../components/Footer";
import QuestionTwo from "../components/QuestionTwo";
import QuestionThree from "../components/QuestionThree";
import QuestionFour from "../components/QuestionFour";
import QuestionFive from "../components/QuestionFive";
import QuestionSix from "../components/QuestionSix";

const PurposeQuestion = () => {
  return (
    <div className='bg-slate-100'>
      <Navbar />
      <QuestionOne />
      {/* <QuestionTwo /> */}
      {/* <QuestionThree /> */}
      {/* <QuestionFour /> */}
      {/* <QuestionFive /> */}
      {/* <QuestionSix /> */}
      <Footer />
    </div>
  );
};

export default PurposeQuestion;
