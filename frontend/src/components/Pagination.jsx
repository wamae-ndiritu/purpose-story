import React from "react";
import { useNavigate } from "react-router-dom";

const Pagination = ({ page, totalPages, changePage }) => {
  const navigate = useNavigate();
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className='flex items-center justify-center my-5 px-8'>
      <button
        onClick={() => changePage(page - 1)}
        className={`bg-maroon-red hover:bg-red-700 text-white font-semibold py-2 px-4 rounded md:mr-2 ${
          page === 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={page === 1}
      >
        Prev
      </button>
      {pages.map((item) => (
        <button
          key={item}
          onClick={() => changePage(item)}
          className={`hover:bg-gray-200 text-gray-800 font-semibold py-2 px-2 md:px-4 rounded md:mx-2 ml-2 md:ml-0 ${
            item === page ? "bg-gray-300" : "bg-white"
          }`}
        >
          {item}
        </button>
      ))}
      <button
        onClick={() => {
          if (page === totalPages) {
            navigate("/questions/answers");
          } else {
            changePage(page + 1);
          }
        }}
        className={`bg-maroon-red hover:bg-red-700 text-white font-semibold py-2 px-4 rounded ml-2 `}
      >
        {page === totalPages ? "View Responses" : "Next"}
      </button>
    </div>
  );
};

export default Pagination;
