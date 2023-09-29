import React from "react";

const ViewAnswers = () => {
  // Dummy answers for testing
  const answers = {
    questionOne:
      "Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear claw gummies.",
    questionTwo:
      "I had a life-changing experience that inspired my purpose Jelly bear claw gummi bears lollipop cotton candy gummi bears chocolate bar cake cookie. Cupcake muffin danish muffin cookie gummies.",
    questionThree:
      "My vision is to Jelly beans tiramisu pudding. Toffee soufflé chocolate cake pastry brownie. Oat cake halvah sweet roll cotton candy croissant lollipop. Macaroon tiramisu chocolate bar candy candy carrot cake jelly sweet. Gummies croissant macaroon dessert. Chocolate cake dragée pie.",
    questionFour:
      "My core values include Next level tbh everyday carry, blog copper mug forage kitsch roof party pickled hammock kale chips tofu. Etsy shoreditch 8-bit microdosing, XOXO viral butcher banh mi humblebrag listicle woke bicycle rights brunch before they sold out ramps.",
    questionFive:
      "I aim to create a positive impact by Twee shabby chic taiyaki flannel, enamel pin venmo vape four loko. Hexagon kale chips typewriter kitsch 8-bit organic plaid small batch keffiyeh ethical banh mi narwhal echo park cronut.",
    questionSix:
      "I am currently working on projects such as..., collaborating with..., and dedicating my efforts to drive change. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. ",
  };

  return (
    <div className='w-full flex justify-center py-12'>
      <div className='mx-4 md:mx-0 md:w-3/5 bg-white p-4 md:p-8'>
        <h2 className='text-2xl md:text-3xl text-center font-bold mb-3 text-gray-700'>
          My Purpose Story
        </h2>
        <div className='mb-4'>
          <h2 className='text-xl md:text-2xl font-semibold text-gray-700 mb-2'>
            Purpose Statement
          </h2>
          <p className='text-gray-600'>{answers.questionOne}</p>
        </div>
        <div className='mb-4'>
          <h2 className='text-xl md:text-2xl font-semibold text-gray-700 mb-2'>
            Origin and Personal Connection
          </h2>
          <p className='text-gray-600'>{answers.questionTwo}</p>
        </div>
        <div className='mb-4'>
          <h2 className='text-xl md:text-2xl font-semibold text-gray-700 mb-2'>
            Vision and Mission
          </h2>
          <p className='text-gray-600'>{answers.questionThree}</p>
        </div>
        <div className='mb-4'>
          <h2 className='text-xl md:text-2xl font-semibold text-gray-700 mb-2'>
            Values and Beliefs
          </h2>
          <p className='text-gray-600'>{answers.questionFour}</p>
        </div>
        <div className='mb-4'>
          <h2 className='text-xl md:text-2xl font-semibold text-gray-700 mb-2'>
            Impact and Beneficiaries
          </h2>
          <p className='text-gray-600'>{answers.questionFive}</p>
        </div>
        <div className='mb-4'>
          <h2 className='text-xl md:text-2xl font-semibold text-gray-700 mb-2'>
            Actions and Commitments
          </h2>
          <p className='text-gray-600'>{answers.questionSix}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewAnswers;