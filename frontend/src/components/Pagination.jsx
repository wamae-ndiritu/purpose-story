import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Pagination = ({ page, totalPages, changePage }) => {
  const navigate = useNavigate();
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  console.log(page);

  return (
    <div className='flex items-center justify-center my-3 px-4'>
      <button
        onClick={() => changePage(page - 1)}
        className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded md:mr-2 ${
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
          className={`bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-2 md:px-4 rounded md:mx-2 ml-2 md:ml-0 ${
            page === item ? "bg-gray-200" : ""
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
        className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded ml-2 `}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
