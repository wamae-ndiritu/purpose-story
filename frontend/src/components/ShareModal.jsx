import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useSelector } from "react-redux";
import Loading from "../utils/Loading";

const ShareModal = ({ closeModal }) => {
  const purposeStory = useSelector((state) => state.purposeStory);
  const user = useSelector((state) => state.user);
  const { item } = purposeStory;
  const { userInfo } = user;

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
    answer_5: item.impactAndBeneficiaries?.beneficiaries,
    answer_6:
      item?.actionsAndCommitments?.actions +
      item?.actionsAndCommitments?.examples +
      item?.actionsAndCommitments?.dedication,
  };

  const templateParams = {
    user_name: userInfo.fullName,
    user_email: userInfo.email,
    app_name: "My Purpose Story",
    ...answers,
    ...questions,
  };

  const [loading, setLoading] = useState(false);

  const shareResponses = () => {
    setLoading(true);
    emailjs
      .send(
        "service_iz21rs6",
        "template_niqb61f",
        templateParams,
        "KehPQQgwKRR6ja30g"
      )
      .then((response) => {
        setLoading(false);
        console.log(response.text);
        closeModal();
      })
      .catch((error) => {
        setLoading(false);
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
          {loading && <Loading />}
          <p class='text-gray-700 mb-6'>
            By consenting to share your responses with the coach, you are
            agreeing to receive feedback aimed at enhancing your answers for a
            more refined sense of purpose. This process is designed to provide
            valuable insights and support in your journey toward a clearer and
            more meaningful purpose.
          </p>
          <div className='w-full flex justify-between'>
            <button
              class='bg-yellow-gold text-white py-2 px-4 rounded'
              onClick={shareResponses}
            >
              OK
            </button>
            <button
              class='bg-maroon-red hover:bg-red-700 text-white py-2 px-4 rounded'
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
