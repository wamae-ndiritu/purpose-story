import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "./Pagination";
import Loading from "../utils/Loading";
import Message from "../utils/Message";
import { createPurposeStory } from "../redux/actions/purposeActions";

const QuestionOne = ({ page, totalPages, changePage }) => {
  const dispatch = useDispatch();
  const purposeStory = useSelector((state) => state.purposeStory);
  const { loading, error, item } = purposeStory;

  const [answer, setAnswer] = useState("");

  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleSave = () => {
    dispatch(createPurposeStory({ purpose: answer }));
  };

  return (
    <div className='flex flex-col md:flex-row md:items-start justify-center py-16 mb-20'>
      {/* Question Side */}
      <div className='md:w-1/2 mb-6 md:mb-0 px-4'>
        <h2 className='text-2xl md:text-3xl font-bold mb-4'>
          Purpose Statement
        </h2>
        <p>Here just state your purpose.</p>
        <p>
          If you don’t have a concise purpose statement, use the{" "}
          <a href='#' className='text-sm text-purple-800'>
            Purpose Clarification Tool
          </a>{" "}
          to craft one.
        </p>
      </div>
      {/* Form Side */}
      <div className='md:w-1/2 px-4'>
        <div className='flex justify-between items-center mb-2'>
          <label className='block text-lg font-semibold'>Your Answer:</label>
          <button
            className='bg-green-400 rounded text-white py-1 px-4'
            onClick={handleSave}
          >
            Save
          </button>
        </div>
        <textarea
          className='w-full h-40 p-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
          value={answer}
          onChange={handleAnswerChange}
          placeholder='Enter your purpose statement here...'
        ></textarea>
        {loading ? <Loading /> : error && <Message>{error}</Message>}
        <Pagination
          page={page}
          totalPages={totalPages}
          changePage={changePage}
        />
      </div>
    </div>
  );
};

export default QuestionOne;
