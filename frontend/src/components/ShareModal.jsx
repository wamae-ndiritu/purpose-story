import React from "react";
import emailjs from "@emailjs/browser";
import { useSelector } from "react-redux";

const serviceID = process.env.REACT_APP_SERVICE_ID;
const templateID = process.env.REACT_APP_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_PUBLIC_KEY;

const ShareModal = ({ closeModal }) => {
  const purposeStory = useSelector((state) => state.purposeStory);
  const { item } = purposeStory;

  const questions = {
    question_1: "Purpose Statement",
    question_2: "Origin and Personal Connection",
    question_3: "Vision and Mission",
    question_4: "Values and Beliefs",
    question_5: "Impact and Beneficiaries",
    question_6: "Actions and Commitments",
  };

  const answers = {
    answer_1: item?.purpose,
    answer_2: item?.origin,
    answer_3:
      item?.vissionAndMission?.vision +
      item?.vissionAndMission?.mission +
      item?.vissionAndMission?.impact,
    answer_4: item?.valuesAndBeliefs?.values + item?.valuesAndBeliefs?.beliefs,
    answer_5:
      item?.impactAndBeneficiaries?.impact +
      item.impactAndBeneficiaries?.beneficiaries,
    answer_6:
      item?.actionsAndCommitments?.actions +
      item?.actionsAndCommitments?.examples +
      item?.actionsAndCommitments?.dedication,
  };

  const templateParams = {
    user_name: "Ndiritu Wa Wamai",
    user_email: "nelitetech@gmail.com",
    ...answers,
    ...questions,
  };

  console.log(templateParams);
  const shareResponses = () => {
    emailjs
      .send(
        "service_iz21rs6",
        "template_niqb61f",
        templateParams,
        "KehPQQgwKRR6ja30g"
      )
      .then((response) => {
        console.log(response.text);
        closeModal();
      })
      .catch((error) => {
        console.log("FAILED...", error);
        closeModal();
      });
  };
  return (
    <div class='fixed inset-0 flex items-center justify-center z-50'>
      <div class='fixed inset-0 bg-black opacity-50'></div>
      <div class='w-1/3 bg-white p-8 rounded-lg z-50'>
        <button
          class='absolute top-2 right-2 text-gray-700 hover:text-gray-900'
          onClick='closeModal'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            class='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>
        <div>
          <h2 class='text-2xl font-semibold mb-4'>Share your Story</h2>
          <p class='text-gray-700 mb-6'>
            By consenting to share your responses with the coach, you are
            agreeing to receive feedback aimed at enhancing your answers for a
            more refined sense of purpose. This process is designed to provide
            valuable insights and support in your journey toward a clearer and
            more meaningful purpose.
          </p>
          <div className='w-full flex justify-between'>
            <button
              class='bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded'
              onClick={shareResponses}
            >
              OK
            </button>
            <button
              class='bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded'
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
