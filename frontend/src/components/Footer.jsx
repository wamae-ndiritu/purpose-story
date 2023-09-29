import React from "react";

const Footer = () => {
  return (
    <div className='bg-gray-800 text-white py-3 text-center'>
      <div className='container mx-auto'>
        <ul className='flex justify-center space-x-6'>
          <li>
            <a
              href='#'
              className='text-sm hover:text-gray-400 transition duration-300'
            >
              Get Started
            </a>
          </li>
          <li>
            <a
              href='#'
              className='text-sm hover:text-gray-400 transition duration-300'
            >
              Purpose Clarification Tool
            </a>
          </li>
        </ul>
        <p className='mt-2 text-sm'>© 2023 KOMEBC. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
