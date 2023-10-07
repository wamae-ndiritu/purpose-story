import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import {
  getPurposeStory,
  updatePurposeStory,
} from "../redux/actions/purposeActions";
import Loading from "../utils/Loading";
import Message from "../utils/Message";
import { useDispatch, useSelector } from "react-redux";

const QuestionFour = ({ page, totalPages, changePage }) => {
  const dispatch = useDispatch();
  const purposeStory = useSelector((state) => state.purposeStory);
  const { loading, error, item } = purposeStory;
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
    <div className='flex flex-col md:flex-row md:items-start justify-center py-16'>
      {/* Question Side */}
      <div className='md:w-1/2 mb-6 md:mb-0 px-4'>
        <h2 className='text-2xl md:text-3xl font-bold mb-4'>
          Values and Beliefs
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
          <label className='block text-lg font-semibold'>Your Values:</label>
          <button
            className='bg-green-400 rounded text-white py-1 px-4'
            onClick={handleSave}
          >
            Save
          </button>
        </div>
        <textarea
          className='w-full h-15 p-4 border border-gray-300 rounded mb-3 focus:outline-none focus:border-blue-500'
          value={values}
          onChange={handleValuesChange}
          placeholder='Enter your values here...'
        ></textarea>

        <label className='block text-lg font-semibold mb-2'>
          Your Beliefs:
        </label>
        <textarea
          className='w-full h-15 p-4 border border-gray-300 rounded mb-3 focus:outline-none focus:border-blue-500'
          value={beliefs}
          onChange={handleBeliefsChange}
          placeholder='Enter your beliefs here...'
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

export default QuestionFour;
