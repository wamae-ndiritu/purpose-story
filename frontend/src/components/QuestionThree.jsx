import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import {
  getPurposeStory,
  updatePurposeStory,
} from "../redux/actions/purposeActions";

const QuestionThree = ({ page, totalPages, changePage }) => {
  const dispatch = useDispatch();
  const purposeStory = useSelector((state) => state.purposeStory);
  const { item } = purposeStory;
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

  const handleSave = () => {
    dispatch(
      updatePurposeStory({
        vissionAndMission: {
          vision,
          mission,
          impact,
        },
      })
    );
  };

  useEffect(() => {
    dispatch(getPurposeStory());
  }, [dispatch]);

  useEffect(() => {
    if (item) {
      setVision(item.vissionAndMission?.vision);
      setMission(item.vissionAndMission?.mission);
      setImpact(item.vissionAndMission?.impact);
    }
  }, [item]);

  return (
    <div>
      <div className='flex flex-col md:flex-row md:justify-center pt-12 pb-16'>
        {/* Question Side */}
        <div className='md:w-1/2 mb-6 md:mb-0 px-4'>
          <h2 className='text-2xl md:text-3xl font-bold mb-4 text-maroon-red'>
            3. Vision, Mission and Impact
          </h2>
          <p className='text-gray-600'>
            Clearly articulate the overarching vision for the future in line
            with your purpose.
          </p>
          <p className='text-gray-600'>
            Define the mission or specific goals that align with the vision.
          </p>
          <p className='text-gray-600'>
            Convey the intended impact or change that your purpose aims to
            achieve.
          </p>
          <label className='block text-lg font-semibold text-maroon-red mt-3'>
            Your Vision:
          </label>
          <textarea
            className='w-full px-4 py-2 border border-gray-300 rounded mb-3 focus:outline-none focus:border-blue-500'
            rows={3}
            value={vision}
            onChange={handleVisionChange}
            placeholder='Enter your vision here...'
          ></textarea>
        </div>

        {/* Form Side */}
        <div className='md:w-1/2 px-4'>
          <label className='block text-lg font-semibold mb-2 text-maroon-red'>
            Your Mission:
          </label>
          <textarea
            className='w-full p-4 border border-gray-300 rounded mb-3 focus:outline-none focus:border-blue-500'
            rows={3}
            value={mission}
            onChange={handleMissionChange}
            placeholder='Enter your mission here...'
          ></textarea>

          <label className='block text-lg font-semibold mb-2 text-maroon-red'>
            Intended Impact:
          </label>
          <textarea
            className='w-full p-4 border border-gray-300 rounded mb-3 focus:outline-none focus:border-blue-500'
            rows={3}
            value={impact}
            onChange={handleImpactChange}
            placeholder='Describe the impact you aim to achieve...'
          ></textarea>
          <button
            className='w-full bg-maroon-red hover:bg-red-700 rounded text-white uppercase py-1 px-4 my-3'
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
      <Pagination page={page} totalPages={totalPages} changePage={changePage} />
    </div>
  );
};

export default QuestionThree;
