import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { hideValidationError, register } from "../redux/actions/userActions";
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
  const [registerMessage, setRegisterMessage] = useState(null);

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
    if (userInfo?.created) {
      // Show success message
      setRegisterMessage(
        "Your account has been created successfully! You will be redirected to login page shortly..."
      );

      setFullName("");
      setEmail("");
      setPassword("");

      // Set a timeout to navigate after (5 seconds)
      const timeoutId = setTimeout(() => {
        navigate("/account/login");

        // Clean up: clear the timeout when the component unmounts or when navigation occurs
        return () => clearTimeout(timeoutId);
      }, 5000);
    }
  }, [userInfo, navigate]);

  useEffect(() => {
    if (error) {
      setFullName("");
      setEmail("");
      setPassword("");
    }
  }, [error]);

  useEffect(() => {
    if (error) {
      // Set a timeout to dispatch hideValidationError after 2s
      const timeoutId = setTimeout(() => {
        dispatch(hideValidationError());
      }, 2000);

      // Cleanup the timeout if the component unmounts or if error changes before the timeout
      return () => clearTimeout(timeoutId);
    }
  }, [error, dispatch]);

  return (
    <div
      className='flex justify-center items-center h-screen'
      style={{
        backgroundImage: `url('/assets/images/tool-bg.jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <form onSubmit={handleSubmit} className='bg-white p-8 rounded shadow-md'>
        <h2 className='text-2xl text-center font-semibold mb-6 text-maroon-red'>
          <span className='font-bold'>My Purpose Story</span> <br />
          Sign Up
        </h2>
        {loading ? <Loading /> : error && <Message>{error}</Message>}
        {registerMessage && (
          <div
            className='bg-blue-100 max-w-xs border border-blue-400 text-blue-700 px-4 py-3 mb-3 rounded relative'
            role='alert'
          >
            {registerMessage}
          </div>
        )}
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
          className='w-full bg-maroon-red text-white py-2 px-4 rounded hover:bg-red-700'
        >
          Sign Up
        </button>
        <p className='text-sm py-1'>
          Already have an account?{" "}
          <Link
            to='/account/login'
            className='text-maroon-red cursor-pointer underline'
          >
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
