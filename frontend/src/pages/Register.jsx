import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, register } from "../redux/actions/userActions";
import Loading from "../utils/Loading";
import Message from "../utils/Message";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const { loading, error, userInfo } = user;

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fullName !== "" && email !== "" && password !== "") {
      dispatch(register({ fullName, email, password, account_type: "MPS" }));
    }
  };

  useEffect(() => {
    if (userInfo?.token) {
      navigate("/account/login");
    }
  }, [userInfo]);

  return (
    <div
      className='flex justify-center items-center h-screen'
      style={{
        backgroundImage: `url('https://i.ibb.co/QK89j83/purpose-1.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <form onSubmit={handleSubmit} className='bg-white p-8 rounded shadow-md'>
        <h2 className='text-2xl text-center font-semibold mb-6'>Sign Up</h2>
        {loading ? <Loading /> : error && <Message>{error}</Message>}
        <div className='mb-4'>
          <label
            htmlFor='name'
            className='block text-sm font-medium text-gray-600'
          >
            Your Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={fullName}
            onChange={handleNameChange}
            className='mt-1 p-2 w-full border rounded-md'
            required
          />
        </div>

        <div className='mb-4'>
          <label
            htmlFor='email'
            className='block text-sm font-medium text-gray-600'
          >
            Email Address
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={email}
            onChange={handleEmailChange}
            className='mt-1 p-2 w-full border rounded-md'
            required
          />
        </div>
        <div className='mb-6'>
          <label
            htmlFor='password'
            className='block text-sm font-medium text-gray-600'
          >
            Password
          </label>
          <input
            type='password'
            id='password'
            name='password'
            value={password}
            onChange={handlePasswordChange}
            className='mt-1 p-2 w-full border rounded-md'
            required
          />
        </div>
        <button
          type='submit'
          className='w-full bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-600'
        >
          Sign Up
        </button>
        <p className='text-sm py-1'>
          Already have an account?{" "}
          <Link
            to='/account/login'
            className='text-green-500 cursor-pointer underline'
          >
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
