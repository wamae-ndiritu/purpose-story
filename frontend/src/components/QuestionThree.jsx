import React, { useState } from "react";

const QuestionThree = () => {
  const [vision, setVision] = useState("");
  const [mission, setMission] = useState("");
  const [impact, setImpact] = useState("");

  const handleVisionChange = (event) => {
    setVision(event.target.value);
  };

  const handleMissionChange = (event) => {
    setMission(event.target.value);
  };

  const handleImpactChange = (event) => {
    setImpact(event.target.value);
  };

  return (
    <div className='flex flex-col md:flex-row items-center justify-center md:items-start py-8 md:py-16'>
      {/* Question Side */}
      <div className='md:w-1/2 mb-6 md:mb-0 px-4'>
        <h2 className='text-2xl md:text-3xl text-center md:text-left font-bold mb-4'>
          Vision and Mission
        </h2>
        <p className='text-gray-600'>
          Clearly articulate the overarching vision for the future in line with
          your purpose.
        </p>
        <p className='text-gray-600'>
          Define the mission or specific goals that align with the vision.
        </p>
        <p className='text-gray-600'>
          Convey the intended impact or change that your purpose aims to
          achieve.
        </p>
      </div>

      {/* Form Side */}
      <div className='md:w-1/2 px-4'>
        <label className='block text-lg font-semibold mb-2'>Your Vision:</label>
        <textarea
          className='w-full h-10 px-4 py-1 border border-gray-300 rounded mb-3 focus:outline-none focus:border-blue-500'
          value={vision}
          onChange={handleVisionChange}
          placeholder='Enter your vision here...'
        ></textarea>

        <label className='block text-lg font-semibold mb-2'>
          Your Mission:
        </label>
        <textarea
          className='w-full h-15 p-4 border border-gray-300 rounded mb-3 focus:outline-none focus:border-blue-500'
          value={mission}
          onChange={handleMissionChange}
          placeholder='Enter your mission here...'
        ></textarea>

        <label className='block text-lg font-semibold mb-2'>
          Intended Impact:
        </label>
        <textarea
          className='w-full h-20 p-4 border border-gray-300 rounded mb-3 focus:outline-none focus:border-blue-500'
          value={impact}
          onChange={handleImpactChange}
          placeholder='Describe the impact you aim to achieve...'
        ></textarea>

        <button className='mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded'>
          Submit
        </button>
      </div>
    </div>
  );
};

export default QuestionThree;
