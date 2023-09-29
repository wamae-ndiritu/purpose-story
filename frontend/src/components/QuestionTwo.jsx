import React, { useState } from "react";
import Pagination from "./Pagination";

const QuestionTwo = ({ page, totalPages, changePage }) => {
  const [answer, setAnswer] = useState("");

  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
  };

  return (
    <div className='flex flex-col md:flex-row md:items-start justify-center py-16'>
      {/* Question Side */}
      <div className='md:w-1/2 mb-6 md:mb-0 px-4'>
        <h2 className='text-xl md:text-3xl font-bold mb-4'>
          Origin and Personal Connection
        </h2>
        <p className='text-gray-600 pt-1'>
          Introduce the background, experiences, or inspirations that led to the
          development of the purpose. This is the genesis of your purpose.
        </p>
        <p className='text-gray-600 pt-1'>
          Share personal anecdotes, pivotal moments, or influential individuals
          that shaped the purpose.
        </p>
        <p className='text-gray-600 pt-1'>
          Highlight the emotional connection and passion that drives you or your
          organization.
        </p>
      </div>

      {/* Form Side */}
      <div className='md:w-1/2 px-4'>
        <div className='flex justify-between items-center mb-2'>
          <label className='block text-lg font-semibold'>Your Answer:</label>
          <button className='bg-green-400 rounded text-white py-1 px-4'>
            Save
          </button>
        </div>
        <textarea
          className='w-full h-40 p-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
          value={answer}
          onChange={handleAnswerChange}
          placeholder='Share your story here...'
        ></textarea>
        <Pagination
          page={page}
          totalPages={totalPages}
          changePage={changePage}
        />
      </div>
    </div>
  );
};

export default QuestionTwo;
