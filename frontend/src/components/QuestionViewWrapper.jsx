import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Pagination from "./Pagination";

const QuestionViewWrapper = ({ children }) => {
  return (
    <div className='bg-slate-100'>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default QuestionViewWrapper;
