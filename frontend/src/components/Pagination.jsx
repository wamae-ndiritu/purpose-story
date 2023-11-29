import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Pagination = ({ page, totalPages, changePage }) => {
  const navigate = useNavigate();
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className='pagination-margin w-full md:w-1/2 flex flex-col md:flex-row items-center justify-around md:my-3 mx-auto'>
      <div className='big-pagination w-full md:w-auto flex justify-around md:justify-start items-center'>
        <Link
          to='/'
          className={`bg-maroon-red hover:bg-red-700 font-semibold py-2 px-4 rounded md:mr-2`}
        >
          <p className='text-white'>Home</p>
        </Link>
        <button
          onClick={() => changePage(page - 1)}
          className={`bg-maroon-red hover:bg-red-700 text-white font-semibold py-2 px-4 rounded md:mr-2 ${
            page === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={page === 1}
        >
          Prev
        </button>
      </div>
      <div className='flex justify-center'>
        {pages.map((item) => (
          <button
            key={item}
            onClick={() => changePage(item)}
            className={`hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded md:mx-2 ml-2 md:ml-0 ${
              item === page ? "bg-gray-300" : "bg-white"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <button
        onClick={() => {
          if (page === totalPages) {
            navigate("/questions/answers");
          } else {
            changePage(page + 1);
          }
        }}
        className={`big-pagination bg-maroon-red hover:bg-red-700 text-white font-semibold py-2 px-4 rounded ml-2 `}
      >
        {page === totalPages ? "View" : "Next"}
      </button>
      <div className='w-full mobile-pagination my-3 gap-4 justify-center items-center'>
        <Link
          to='/'
          className={`bg-maroon-red hover:bg-red-700 font-semibold py-2 px-4 rounded md:mr-2`}
        >
          <p className='text-white'>Home</p>
        </Link>
        <button
          onClick={() => changePage(page - 1)}
          className={`bg-maroon-red hover:bg-red-700 text-white font-semibold py-2 px-4 rounded md:mr-2 ${
            page === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={page === 1}
        >
          Prev
        </button>
        <button
          onClick={() => {
            if (page === totalPages) {
              navigate("/questions/answers");
            } else {
              changePage(page + 1);
            }
          }}
          className={`bg-maroon-red hover:bg-red-700 text-white font-semibold py-2 px-4 rounded`}
        >
          {page === totalPages ? "View" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default Pagination;
