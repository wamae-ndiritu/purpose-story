import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const QuestionViewWrapper = ({ children }) => {
  return (
    <div className='bg-slate-100'>
      <Navbar />
      <div className='main-children lg:px-16'>{children}</div>
      <Footer />
    </div>
  );
};

export default QuestionViewWrapper;
