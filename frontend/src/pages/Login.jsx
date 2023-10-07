import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/actions/userActions";
import Loading from "../utils/Loading";
import Message from "../utils/Message";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const { loading, error, userInfo } = user;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginErr, setLoginErr] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    setLoginErr(null);
    e.preventDefault();
    if (email !== "" && password !== "") {
      dispatch(login({ email, password }));
    }
  };

  useEffect(() => {
    if (userInfo?.token && userInfo?.account_type !== "MPS") {
      setLoginErr("Invalid credentials!");
    }
  }, [userInfo]);

  useEffect(() => {
    if (userInfo?.token && userInfo?.account_type === "MPS") {
      navigate("/");
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
        <h2 className='text-2xl text-center font-semibold mb-6'>Login</h2>
        {loginErr && <Message>{loginErr}</Message>}
        {loading ? <Loading /> : error && <Message>{error}</Message>}

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
          Login
        </button>
        <p className='text-sm py-1'>
          Don't have an account?{" "}
          <Link
            to='/account/register'
            className='text-green-500 cursor-pointer underline'
          >
            Sign Up
          </Link>
        </p>
        <p className='text-sm text-purple-800 underline'>Forgot password?</p>
      </form>
    </div>
  );
};

export default Login;
