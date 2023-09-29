import React from "react";
import { useNavigate } from "react-router-dom";
import html2pdf from "html2pdf.js";

const ViewAnswers = () => {
  const navigate = useNavigate();
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
      <div className='mx-4 md:mx-0 md:w-3/5 bg-white p-4 md:p-8' id='printable'>
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
      <div className='md:w-3/5 flex justify-between'>
        <button
          className='bg-red-500 text-white rounded px-4 py-1'
          onClick={() => navigate("/question/response")}
        >
          Go Back to Form
        </button>
        <button
          className='bg-green-500 text-white rounded px-4 py-1'
          onClick={downloadPDF}
        >
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default ViewAnswers;
