import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import {
  getPurposeStory,
  updatePurposeStory,
} from "../redux/actions/purposeActions";
import { useDispatch, useSelector } from "react-redux";

const QuestionFour = ({ page, totalPages, changePage }) => {
  const dispatch = useDispatch();
  const purposeStory = useSelector((state) => state.purposeStory);
  const { item } = purposeStory;
  const [values, setValues] = useState("");
  const [beliefs, setBeliefs] = useState("");

  const handleValuesChange = (event) => {
    setValues(event.target.value);
  };

  const handleBeliefsChange = (event) => {
    setBeliefs(event.target.value);
  };

  const handleSave = () => {
    dispatch(
      updatePurposeStory({
        valuesAndBeliefs: {
          values,
          beliefs,
        },
      })
    );
  };

  useEffect(() => {
    dispatch(getPurposeStory());
  }, [dispatch]);

  useEffect(() => {
    if (item) {
      setValues(item.valuesAndBeliefs?.values);
      setBeliefs(item.valuesAndBeliefs?.beliefs);
    }
  }, [item]);

  return (
    <div>
      <div className='flex flex-col md:flex-row md:items-start justify-center pb-16 pt-12'>
        {/* Question Side */}
        <div className='md:w-1/2 mb-6 md:mb-0 px-4'>
          <h2 className='text-2xl md:text-3xl font-bold mb-4 text-maroon-red'>
            4. Values and Beliefs
          </h2>
          <p className='text-gray-600'>
            Identify the core values or principles that underpin your purpose.
          </p>
          <p className='text-gray-600'>
            Explain the beliefs or convictions that guide decision-making and
            actions.
          </p>
          <p className='text-gray-600'>
            Showcase the ethical standards or responsible practices central to
            your purpose.
          </p>
        </div>

        {/* Form Side */}
        <div className='md:w-1/2 px-4'>
          <div className='flex justify-between items-center mb-2'>
            <label className='block text-lg font-semibold text-maroon-red'>
              Your Values:
            </label>
          </div>
          <textarea
            className='w-full p-4 border border-gray-300 rounded mb-3 focus:outline-none focus:border-blue-500'
            rows={3}
            value={values}
            onChange={handleValuesChange}
            placeholder='Enter your values here...'
          ></textarea>

          <label className='block text-lg font-semibold mb-2 text-maroon-red'>
            Your Beliefs:
          </label>
          <textarea
            className='w-full p-4 border border-gray-300 rounded mb-3 focus:outline-none focus:border-blue-500'
            rows={3}
            value={beliefs}
            onChange={handleBeliefsChange}
            placeholder='Enter your beliefs here...'
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

export default QuestionFour;
