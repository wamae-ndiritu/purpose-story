import React, { useState } from "react";

const QuestionOne = () => {
  const [answer, setAnswer] = useState("");

  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
  };

  return (
    <div className='flex flex-col md:flex-row items-center justify-center py-16 mb-20'>
      {/* Question Side */}
      <div className='md:w-1/2 text-center md:text-left mb-6 md:mb-0 px-4'>
        <h2 className='text-3xl font-bold mb-4'>Purpose Statement</h2>
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
        <label className='block text-lg font-semibold mb-2'>Your Answer:</label>
        <textarea
          className='w-full h-40 p-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
          value={answer}
          onChange={handleAnswerChange}
          placeholder='Enter your purpose statement here...'
        ></textarea>
        <button className='mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded'>
          Submit
        </button>
      </div>
    </div>
  );
};

export default QuestionOne;
