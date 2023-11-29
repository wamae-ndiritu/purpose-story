import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import {
  getPurposeStory,
  updatePurposeStory,
} from "../redux/actions/purposeActions";
import { useDispatch, useSelector } from "react-redux";

const QuestionSix = ({ page, totalPages, changePage }) => {
  const dispatch = useDispatch();
  const purposeStory = useSelector((state) => state.purposeStory);
  const { item } = purposeStory;
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
    <div>
      <div className='flex flex-col md:flex-row md:items-start justify-center pb-16 pt-12'>
        {/* Question Side */}
        <div className='md:w-1/2 mb-6 md:mb-0 px-4'>
          <h2 className='text-2xl md:text-3xl font-bold mb-4 text-maroon-red'>
            6. Actions and Commitments
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
          <label className='block text-lg font-semibold text-maroon-red mt-3'>
            Actions and Initiatives:
          </label>
          <textarea
            className='w-full p-4 border border-gray-300 rounded mb-3 focus:outline-none focus:border-blue-500'
            rows={3}
            value={actions}
            onChange={handleActionsChange}
            placeholder='Outline your actions and initiatives here...'
          ></textarea>
        </div>

        {/* Form Side */}
        <div className='md:w-1/2 px-4'>
          <label className='block text-lg font-semibold mb-2 text-maroon-red'>
            Examples of Projects/Partnerships:
          </label>
          <textarea
            className='w-full p-4 border border-gray-300 rounded mb-3 focus:outline-none focus:border-blue-500'
            rows={3}
            value={examples}
            onChange={handleExamplesChange}
            placeholder='Provide examples of projects, partnerships, or collaborations...'
          ></textarea>
          <label className='block text-lg font-semibold mb-2 text-maroon-red'>
            Ongoing Dedication:
          </label>
          <textarea
            className='w-full p-4 border border-gray-300 rounded mb-3 focus:outline-none focus:border-blue-500'
            rows={3}
            value={dedication}
            onChange={handleDedicationChange}
            placeholder='Describe your ongoing dedication and continuous efforts...'
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

export default QuestionSix;
