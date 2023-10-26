import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className='bg-gray-800 text-white py-4 w-full md:py-16 flex flex-wrap md:flew-row items-center justify-between'>
      {/* Left Section */}
      <div className='md:w-1/2 p-6'>
        <h1 className='text-3xl md:text-4xl font-bold mb-4 text-yellow-gold'>
          Your Purpose Story
        </h1>
        <p className='text-lg mb-8'>
          Craft your narrative and make a difference in the world. Share your
          purpose and inspire others.
        </p>
        <button className='bg-maroon-red text-white font-semibold px-6 py-2 rounded'>
          <Link to='/questions/purpose'>Get Started</Link>
        </button>
      </div>

      {/* Right Section */}
      <div className='w-full md:w-1/2 relative'>
        <div className='absolute border-4 border-yellow-500 top-0 left-0 h-full w-80 md:w-full z-10 mx-4 md:mx-0'></div>
        <img
          src='/assets/images/good-success.jpeg'
          alt='Purpose Story'
          className='w-80 md:w-full ml-4 md:ml-0 h-full object-cover'
        />
      </div>
    </div>
  );
};

export default Hero;
