import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import QuestionOne from "../components/QuestionOne";
import QuestionTwo from "../components/QuestionTwo";
import QuestionThree from "../components/QuestionThree";
import QuestionFour from "../components/QuestionFour";
import QuestionFive from "../components/QuestionFive";
import QuestionSix from "../components/QuestionSix";
import Pagination from "../components/Pagination";
import QuestionViewWrapper from "../components/QuestionViewWrapper";

const PurposeQuestion = () => {
  const location = useLocation();
  const [page, setPage] = useState(1);

  const changePage = (page) => {
    setPage(page);
  };

  const questionViews = [
    {
      pageNo: 1,
      element: (
        <QuestionOne page={page} changePage={changePage} totalPages={6} />
      ),
    },
    {
      pageNo: 2,
      element: (
        <QuestionTwo page={page} changePage={changePage} totalPages={6} />
      ),
    },
    {
      pageNo: 3,
      element: (
        <QuestionThree page={page} changePage={changePage} totalPages={6} />
      ),
    },
    {
      pageNo: 4,
      element: (
        <QuestionFour page={page} changePage={changePage} totalPages={6} />
      ),
    },
    {
      pageNo: 5,
      element: (
        <QuestionFive page={page} changePage={changePage} totalPages={6} />
      ),
    },
    {
      pageNo: 6,
      element: (
        <QuestionSix page={page} changePage={changePage} totalPages={6} />
      ),
    },
  ];

  // Use map to create an array of components
  const renderedQuestions = questionViews.map((view) => {
    if (view.pageNo === page) {
      return (
        <QuestionViewWrapper key={view.pageNo}>
          {view.element}
        </QuestionViewWrapper>
      );
    }
    // Return null for pages that are not the current page
    return null;
  });

  return (
    <div>
      {renderedQuestions}
      {/* Include your pagination component here */}
    </div>
  );
};

export default PurposeQuestion;
