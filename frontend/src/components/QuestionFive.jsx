import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import {
  getPurposeStory,
  updatePurposeStory,
} from "../redux/actions/purposeActions";
import { useDispatch, useSelector } from "react-redux";

const QuestionFive = ({ page, totalPages, changePage }) => {
  const dispatch = useDispatch();
  const purposeStory = useSelector((state) => state.purposeStory);
  const { item } = purposeStory;
  const [beneficiaries, setBeneficiaries] = useState("");

  const handleBeneficiariesChange = (event) => {
    setBeneficiaries(event.target.value);
  };

  const handleSave = () => {
    dispatch(
      updatePurposeStory({
        impactAndBeneficiaries: {
          beneficiaries,
        },
      })
    );
  };

  useEffect(() => {
    dispatch(getPurposeStory());
  }, [dispatch]);

  useEffect(() => {
    if (item) {
      setBeneficiaries(item.impactAndBeneficiaries?.beneficiaries);
    }
  }, [item]);

  return (
    <div>
      <div className='flex flex-col md:flex-row md:items-start justify-center pb-16 pt-12 mb-4'>
        {/* Question Side */}
        <div className='md:w-1/2 mb-6 md:mb-0 px-4'>
          <h2 className='text-2xl md:text-3xl font-bold mb-4 text-maroon-red'>
            5. Beneficiaries
          </h2>
          <p className='text-gray-600'>
            Identify the specific stakeholders, communities, or beneficiaries
            who stand to benefit from your purpose.
          </p>
          <p className='text-gray-600'>
            Highlight how your purpose addresses their needs, challenges, or
            aspirations.
          </p>
        </div>

        {/* Form Side */}
        <div className='md:w-1/2 px-4'>
          <div className='flex justify-between items-center mb-2'>
            <label className='block text-lg font-semibold mb-2 text-maroon-red'>
              Beneficiaries:
            </label>
          </div>
          <textarea
            className='w-full p-4 border border-gray-300 rounded mb-4 focus:outline-none focus:border-blue-500'
            rows={5}
            value={beneficiaries}
            onChange={handleBeneficiariesChange}
            placeholder='Identify the beneficiaries here...'
          ></textarea>
          <button
            className='w-full bg-maroon-red hover:bg-red-700 rounded text-white uppercase py-1 px-4 my-3'
            onClick={handleSave}
          >
            Save
          </button>
          <div className='h-28 invisible'></div>
        </div>
      </div>
      <Pagination page={page} totalPages={totalPages} changePage={changePage} />
    </div>
  );
};

export default QuestionFive;
