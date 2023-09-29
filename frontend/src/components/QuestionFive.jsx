import React, { useState } from "react";
import Pagination from "./Pagination";

const QuestionFive = ({ page, totalPages, changePage }) => {
  const [impact, setImpact] = useState("");
  const [beneficiaries, setBeneficiaries] = useState("");

  const handleImpactChange = (event) => {
    setImpact(event.target.value);
  };

  const handleBeneficiariesChange = (event) => {
    setBeneficiaries(event.target.value);
  };

  return (
    <div className='flex flex-col md:flex-row md:items-start justify-center py-16 mb-4'>
      {/* Question Side */}
      <div className='md:w-1/2 mb-6 md:mb-0 px-4'>
        <h2 className='text-2xl md:text-3xl text-center md:text-left font-bold mb-4'>
          Impact and Beneficiaries
        </h2>
        <p className='text-gray-600'>
          Describe the tangible impact or positive outcomes your purpose seeks
          to create.
        </p>
        <p className='text-gray-600'>
          Identify the specific stakeholders, communities, or beneficiaries who
          stand to benefit from your purpose.
        </p>
        <p className='text-gray-600'>
          Highlight how your purpose addresses their needs, challenges, or
          aspirations.
        </p>
      </div>

      {/* Form Side */}
      <div className='md:w-1/2 px-4'>
        <label className='block text-lg font-semibold mb-2'>
          Impact Description:
        </label>
        <textarea
          className='w-full h-20 p-4 border border-gray-300 rounded mb-4 focus:outline-none focus:border-blue-500'
          value={impact}
          onChange={handleImpactChange}
          placeholder='Describe the impact here...'
        ></textarea>

        <label className='block text-lg font-semibold mb-2'>
          Beneficiaries:
        </label>
        <textarea
          className='w-full h-20 p-4 border border-gray-300 rounded mb-4 focus:outline-none focus:border-blue-500'
          value={beneficiaries}
          onChange={handleBeneficiariesChange}
          placeholder='Identify the beneficiaries here...'
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

export default QuestionFive;
