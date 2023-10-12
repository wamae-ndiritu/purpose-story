import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import {
  getPurposeStory,
  updatePurposeStory,
} from "../redux/actions/purposeActions";
import Loading from "../utils/Loading";
import Message from "../utils/Message";
import { useDispatch, useSelector } from "react-redux";

const QuestionFive = ({ page, totalPages, changePage }) => {
  const dispatch = useDispatch();
  const purposeStory = useSelector((state) => state.purposeStory);
  const { loading, error, item } = purposeStory;
  const [impact, setImpact] = useState("");
  const [beneficiaries, setBeneficiaries] = useState("");

  const handleImpactChange = (event) => {
    setImpact(event.target.value);
  };

  const handleBeneficiariesChange = (event) => {
    setBeneficiaries(event.target.value);
  };

  const handleSave = () => {
    dispatch(
      updatePurposeStory({
        impactAndBeneficiaries: {
          impact,
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
      setImpact(item.impactAndBeneficiaries?.impact);
      setBeneficiaries(item.impactAndBeneficiaries?.beneficiaries);
    }
  }, [item]);

  return (
    <div className='flex flex-col md:flex-row md:items-start justify-center pb-16 pt-12 mb-4'>
      {/* Question Side */}
      <div className='md:w-1/2 mb-6 md:mb-0 px-4'>
        <h2 className='text-2xl md:text-3xl font-bold mb-4 text-maroon-red'>
          5. Impact and Beneficiaries
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
        <div className='flex justify-between items-center mb-2'>
          <label className='block text-lg font-semibold text-maroon-red'>
            Impact Description:
          </label>
          <button
            className='bg-maroon-red rounded text-white py-1 px-4'
            onClick={handleSave}
          >
            Save
          </button>
        </div>
        <textarea
          className='w-full h-20 p-4 border border-gray-300 rounded mb-4 focus:outline-none focus:border-blue-500'
          value={impact}
          onChange={handleImpactChange}
          placeholder='Describe the impact here...'
        ></textarea>

        <label className='block text-lg font-semibold mb-2 text-maroon-red'>
          Beneficiaries:
        </label>
        <textarea
          className='w-full h-20 p-4 border border-gray-300 rounded mb-4 focus:outline-none focus:border-blue-500'
          value={beneficiaries}
          onChange={handleBeneficiariesChange}
          placeholder='Identify the beneficiaries here...'
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

export default QuestionFive;
