import React from "react";
import { Link } from "react-router-dom";
import { PCT_LINK } from "../Url";

const IntroSection = () => {
  return (
    <section className='bg-gray-200 py-16 text-gray-600'>
      <div className='container mx-auto text-center px-4'>
        <h1 className='text-4xl font-bold mb-4 text-maroon-red'>
          <span className='text-gray-700'>
            Turn your purpose into actions with{" "}
          </span>
          My Purpose Story
        </h1>
        <p className='text-lg mb-8'>
          My Purpose Story (MPS) is a powerful narrative tool that helps
          individuals and organizations articulate their sense of purpose. It
          goes beyond the 'why' and dives deep into the 'why you,' allowing you
          to express the underlying motivations, values, and goals that drive
          your actions and decisions.
        </p>
        <p className='text-lg mb-8'>
          If you haven’t fully developed your purpose and purpose statement, My
          Purpose Story can guide you through the{" "}
          <a
            href={`${PCT_LINK}`}
            className='text-maroon-red'
            target='_blank'
            rel='noreferrer'
          >
            Purpose Clarification Tool
          </a>
          , setting you on the path to a more meaningful and purposeful
          existence.
        </p>
        <Link
          to='/questions/purpose'
          className='border text-white bg-maroon-red hover:bg-white hover:text-gray-700 py-2 px-6 rounded-full text-lg font-semibold inline-block transition duration-300'
        >
          <h6 className='text-white hover:text-gray-700'>Get Started</h6>
        </Link>
      </div>
    </section>
  );
};

export default IntroSection;
