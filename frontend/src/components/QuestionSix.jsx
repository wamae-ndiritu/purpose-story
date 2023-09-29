import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import {
  getPurposeStory,
  updatePurposeStory,
} from "../redux/actions/purposeActions";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../utils/Loading";
import Message from "../utils/Message";

const QuestionSix = ({ page, totalPages, changePage }) => {
  const dispatch = useDispatch();
  const purposeStory = useSelector((state) => state.purposeStory);
  const { loading, error, item } = purposeStory;
  const [actions, setActions] = useState("");
  const [examples, setExamples] = useState("");
  const [dedication, setDedication] = useState("");

  const handleActionsChange = (event) => {
    setActions(event.target.value);
  };

  const handleExamplesChange = (event) => {
    setExamples(event.target.value);
  };

  const handleDedicationChange = (event) => {
    setDedication(event.target.value);
  };

  const handleSave = () => {
    dispatch(
      updatePurposeStory({
        actionsAndCommitments: {
          actions,
          examples,
          dedication,
        },
      })
    );
  };

  useEffect(() => {
    dispatch(getPurposeStory());
  }, [dispatch]);

  useEffect(() => {
    if (item) {
      setActions(item.actionsAndCommitments?.actions);
      setExamples(item.actionsAndCommitments?.examples);
      setDedication(item.actionsAndCommitments?.dedication);
    }
  }, [item]);

  return (
    <div className='flex flex-col md:flex-row md:items-start justify-center py-16'>
      {/* Question Side */}
      <div className='md:w-1/2 mb-6 md:mb-0 px-4'>
        <h2 className='text-2xl md:text-3xl font-bold mb-4'>
          Actions and Commitments
        </h2>
        <p className='text-gray-600'>
          Outline the specific actions, initiatives, or commitments being
          undertaken to fulfill your purpose.
        </p>
        <p className='text-gray-600'>
          Provide examples of projects, partnerships, or collaborations that
          demonstrate your purpose in action.
        </p>
        <p className='text-gray-600'>
          Emphasize the ongoing dedication and continuous efforts to drive
          change.
        </p>
      </div>

      {/* Form Side */}
      <div className='md:w-1/2 px-4'>
        <div className='flex justify-between items-center mb-2'>
          <label className='block text-lg font-semibold'>
            Actions and Initiatives:
          </label>
          <button
            className='bg-green-400 rounded text-white py-1 px-4'
            onClick={handleSave}
          >
            Save
          </button>
        </div>
        <textarea
          className='w-full h-20 p-4 border border-gray-300 rounded mb-3 focus:outline-none focus:border-blue-500'
          value={actions}
          onChange={handleActionsChange}
          placeholder='Outline your actions and initiatives here...'
        ></textarea>

        <label className='block text-lg font-semibold mb-2'>
          Examples of Projects/Partnerships:
        </label>
        <textarea
          className='w-full h-20 p-4 border border-gray-300 rounded mb-3 focus:outline-none focus:border-blue-500'
          value={examples}
          onChange={handleExamplesChange}
          placeholder='Provide examples of projects, partnerships, or collaborations...'
        ></textarea>

        <label className='block text-lg font-semibold mb-2'>
          Ongoing Dedication:
        </label>
        <textarea
          className='w-full h-20 p-4 border border-gray-300 rounded mb-3 focus:outline-none focus:border-blue-500'
          value={dedication}
          onChange={handleDedicationChange}
          placeholder='Describe your ongoing dedication and continuous efforts...'
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

export default QuestionSix;
