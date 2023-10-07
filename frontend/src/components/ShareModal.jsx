import React from "react";

const ShareModal = ({ closeModal }) => {
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
            <button class='bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded'>
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
