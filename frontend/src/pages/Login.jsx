import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  login,
  resetPassword,
  updatePassword,
} from "../redux/actions/userActions";
import Loading from "../utils/Loading";
import Message from "../utils/Message";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector((state) => state.user);
  const { loading, error, userInfo, resetPass, updatePass } = user;

  const [inputErr, setInputErr] = useState(null);
  const [forgotPass, setForgotPass] = useState(false);
  const [showResetPass, setShowResetPass] = useState(false);
  const [forgotData, setForgotData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginErr, setLoginErr] = useState(null);

  const userId = location.search
    ? location.search.split("?")[1].split("&")[0].split("=")[1]
    : null;

  const loginAction = location.search
    ? location.search.split("?")[1].split("&")[1].split("=")[1]
    : null;

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

  const handleResetPass = (e) => {
    e.preventDefault();
    if (forgotData.email === "") {
      return;
    }
    dispatch(resetPassword(forgotData));
  };

  const handleForgotData = (e) => {
    setForgotData((prevState) => {
      const { name, value } = e.target;
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmitResetPassword = (e) => {
    e.preventDefault();
    setInputErr(null);
    if (forgotData.password === "" || forgotData.confirmPassword === "") {
      setInputErr("Please create and confirm password!");
      return;
    } else if (forgotData.password !== forgotData.confirmPassword) {
      setInputErr("Password do not match!");
      return;
    }
    dispatch(updatePassword(userId, { password: forgotData.password }));
  };

  useEffect(() => {
    if (loginAction) {
      setForgotPass(true);
      setShowResetPass(true);
    }
  }, [loginAction]);

  useEffect(() => {
    if (updatePass) {
      setShowResetPass(false);
      setForgotPass(false);
      setInputErr(null);
    }
  }, [updatePass]);

  useEffect(() => {
    if (userInfo?.token && userInfo?.account_type !== "MPS") {
      setLoginErr("Invalid credentials!");
    }
  }, [userInfo]);

  useEffect(() => {
    if (userInfo?.token && userInfo?.account_type === "MPS") {
      navigate("/");
    }
  }, [userInfo, navigate]);

  function hideError() {
    setLoginErr(null);
  }

  setInterval(hideError, 5000);

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
        {forgotPass ? (
          showResetPass ? (
            <section className='user'>
              <h2 className='text-2xl text-center font-semibold mb-6 text-maroon-red'>
                Reset Password
              </h2>
              {inputErr && <Message>{inputErr}</Message>}
              {loading ? <Loading /> : error && <Message>{error}</Message>}
              <p className='text-lg py-2 text-gray-600'>
                Create a new password and confirm to continue
              </p>
              <div className='mb-3'>
                <input
                  type='password'
                  className='mt-1 p-2 w-full border rounded-md'
                  placeholder='New Password'
                  name='password'
                  value={forgotData.password}
                  onChange={handleForgotData}
                />
              </div>
              <div className='mb-3'>
                <input
                  type='password'
                  className='mt-1 p-2 w-full border rounded-md'
                  placeholder='Confirm New Password'
                  name='confirmPassword'
                  value={forgotData.confirmPassword}
                  onChange={handleForgotData}
                />
              </div>
              <div className='mb-3'>
                <button
                  className='w-full bg-maroon-red text-white py-2 px-4 rounded hover:bg-gray-600'
                  onClick={handleSubmitResetPassword}
                >
                  Reset Password
                </button>
              </div>
            </section>
          ) : (
            <section className='user'>
              <h2 className='text-2xl text-center font-semibold mb-6 text-maroon-red'>
                Reset Password
              </h2>
              {loginErr && <Message>{loginErr}</Message>}
              {loading ? <Loading /> : error && <Message>{error}</Message>}
              {resetPass && (
                <div
                  className='bg-blue-100 border border-blue-400 text-green-500 px-4 py-3 mb-3 rounded relative'
                  role='alert'
                >
                  <p className='text-sm'>
                    A reset password link has been sent to your{" "}
                    <strong>Email.</strong> Please check to continue...
                  </p>
                </div>
              )}
              <p className='text-lg py-2 text-gray-600'>
                Enter your email to reset password
              </p>
              <div className='mb-3'>
                <input
                  type='email'
                  className='mt-1 p-2 w-full border rounded-md'
                  placeholder='Enter your email'
                  name='email'
                  value={forgotData.email}
                  onChange={handleForgotData}
                />
              </div>
              <div className='mb-3 d-flex flex-column justify-content-center align-items-center'>
                <button
                  className='w-full bg-maroon-red text-white py-2 px-4 rounded hover:bg-gray-600'
                  onClick={handleResetPass}
                >
                  Reset Password
                </button>
              </div>
            </section>
          )
        ) : (
          <>
            <h2 className='text-2xl text-center font-semibold mb-6 text-maroon-red'>
              Login
            </h2>
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
              className='w-full bg-maroon-red text-white py-2 px-4 rounded hover:bg-red-700'
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
            <p
              className='text-sm text-purple-800 underline cursor-pointer'
              onClick={() => setForgotPass(true)}
            >
              Forgot password?
            </p>
          </>
        )}
      </form>
    </div>
  );
};

export default Login;
