import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPurposeStory } from "../redux/actions/purposeActions";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../utils/Loading";
import Message from "../utils/Message";
import ShareModal from "./ShareModal";

const ViewAnswers = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const purposeStory = useSelector((state) => state.purposeStory);
  const { loading, error, item } = purposeStory;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  // Dummy answers for testing
  const answers = {
    questionOne: item?.purpose,
    questionTwo: item?.origin,
    questionThree:
      item?.vissionAndMission?.vision +
      item?.vissionAndMission?.mission +
      item?.vissionAndMission?.impact,
    questionFour:
      item?.valuesAndBeliefs?.values + item?.valuesAndBeliefs?.beliefs,
    questionFive: item.impactAndBeneficiaries?.beneficiaries,
    questionSix:
      item?.actionsAndCommitments?.actions +
      item?.actionsAndCommitments?.examples +
      item?.actionsAndCommitments?.dedication,
  };

  useEffect(() => {
    dispatch(getPurposeStory());
  }, [dispatch]);

  const downloadPDF = () => {
    const element = document.getElementById("printable");

    if (!element) {
      console.error("Element not found");
      return;
    }

    const printWindow = window.open("", "", "width=600,height=600");
    printWindow.document.open();
    printWindow.document.write(`
    <html>
      <head>
        <title>My Purpose Story</title>
        <style>
          body { font-family: Arial, sans-serif; color: rgb(75 85 99); }
          h2 {font-size: 14px, margin: 0, padding: 0; color: #000000;}
          p {font-size: 14px, color: #000000; padding: 3px;}
        </style>
      </head>
      <body>
        ${element.innerHTML}
      </body>
    </html>
  `);
    printWindow.document.close();

    printWindow.print();
    printWindow.onafterprint = () => {
      printWindow.close();
    };
  };

  return (
    <div className='w-full flex flex-col items-center gap-5 justify-center py-12'>
      {isModalOpen && <ShareModal closeModal={closeModal} />}
      <div className='mx-4 md:mx-0 md:w-3/5 bg-white p-4 md:p-8' id='printable'>
        <h2 className='text-2xl md:text-3xl text-center font-bold mb-3 text-maroon-red'>
          My Purpose Story
        </h2>
        {loading ? <Loading /> : error && <Message>{error}</Message>}
        <div className='mb-4'>
          {/* <h2 className='text-xl md:text-2xl font-semibold text-gray-700 mb-2'>
            Purpose Statement
          </h2> */}
          <p className='text-gray-600'>{answers.questionOne}</p>
        </div>
        <div className='mb-4'>
          {/* <h2 className='text-xl md:text-2xl font-semibold text-gray-700 mb-2'>
            Origin and Personal Connection
          </h2> */}
          <p className='text-gray-600'>{answers.questionTwo}</p>
        </div>
        <div className='mb-4'>
          {/* <h2 className='text-xl md:text-2xl font-semibold text-gray-700 mb-2'>
            Vision and Mission
          </h2> */}
          <p className='text-gray-600'>{answers.questionThree}</p>
        </div>
        <div className='mb-4'>
          {/* <h2 className='text-xl md:text-2xl font-semibold text-gray-700 mb-2'>
            Values and Beliefs
          </h2> */}
          <p className='text-gray-600'>{answers.questionFour}</p>
        </div>
        <div className='mb-4'>
          {/* <h2 className='text-xl md:text-2xl font-semibold text-gray-700 mb-2'>
            Impact and Beneficiaries
          </h2> */}
          <p className='text-gray-600'>{answers.questionFive}</p>
        </div>
        <div className='mb-4'>
          {/* <h2 className='text-xl md:text-2xl font-semibold text-gray-700 mb-2'>
            Actions and Commitments
          </h2> */}
          <p className='text-gray-600'>{answers.questionSix}</p>
        </div>
      </div>
      <div className='w-full md:px-4 md:px-0 md:w-3/5 flex gap-3 md:gap-0 md:justify-between'>
        <button
          className='bg-maroon-red text-white rounded px-4 py-1'
          onClick={() => navigate("/questions/purpose")}
        >
          Back to Form
        </button>
        <div className='flex items-center gap-3'>
          <div
            className='cursor-pointer bg-maroon-red hover:bg-red-700 px-2 py-1 text-white rounded shadow'
            onClick={openModal}
          >
            Share with Coach
          </div>
          <div
            className='cursor-pointer bg-maroon-red hover:bg-red-700 px-2 py-1 text-white rounded shadow'
            onClick={downloadPDF}
          >
            Download
          </div>
          {/* <button className='bg-green-500 text-white rounded px-4 py-1'>
            Download PDF
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default ViewAnswers;
