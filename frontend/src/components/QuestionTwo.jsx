import React, { useState } from "react";

const QuestionTwo = () => {
  const [answer, setAnswer] = useState("");

  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
  };

  return (
    <div className='flex flex-col md:flex-row items-center justify-center py-8 md:py-16'>
      {/* Question Side */}
      <div className='md:w-1/2 mb-6 md:mb-0 px-4'>
        <h2 className='text-xl md:text-3xl text-center md:text-left font-bold mb-4'>
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
        <label className='block text-lg font-semibold mb-2'>Your Answer:</label>
        <textarea
          className='w-full h-40 p-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
          value={answer}
          onChange={handleAnswerChange}
          placeholder='Share your story here...'
        ></textarea>
        <button className='mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded'>
          Submit
        </button>
      </div>
    </div>
  );
};

export default QuestionTwo;