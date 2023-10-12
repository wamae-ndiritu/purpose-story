import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/actions/userActions";

const Navbar = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const { userInfo } = user;
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className='sticky z-20 top-0 w-full bg-white text-white flex md:flex-row items-center justify-end px-3 py-2'>
      <div className='bg-white p-2 w-38 absolute top-1 left-0 bottom-1'>
        <Link to='/'>
          <img src='/kome-logo.png' className='h-12' />
        </Link>
      </div>
      <div className='flex md:flex-row md:items-center gap-3 float-right'>
        <ul className='d-none md:flex md:items-center gap-3 mr-10 p-0 m-0'>
          <li className='text-lg hover:underline hover:cursor-pointer text-gray-500'>
            <Link to='/questions/purpose'>Get Started</Link>
          </li>
          <li className='text-lg hover:underline hover:cursor-pointer text-gray-500'>
            Purpose Clarification Tool
          </li>
        </ul>
        <div className='flex flex-col items-center'>
          <p className='text-sm text-gray-500'>{userInfo?.fullName}</p>
          <button
            className='bg-yellow-gold rounded-full px-3 text-white text-sm'
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
        <img
          src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
          alt='...'
          className='w-12 h-12 rounded-full'
        />
      </div>
    </div>
  );
};

export default Navbar;
