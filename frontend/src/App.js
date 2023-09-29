import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Outlet, Navigate, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import { verifySession } from "./redux/actions/userActions";
import Login from "./pages/Login";
import "./index.css";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { userInfo } = user;
  const location = useLocation();
  const path = location.pathname;

  function AuthLayout() {
    if (true) {
      return <Outlet />;
    }
    return <Navigate to='/account/login' />;
  }

  useEffect(() => {
    dispatch(verifySession());
  }, [dispatch, path]);

  return (
    <Routes>
      <Route exact path='/account/login' element={<Login />} />
      <Route element={<AuthLayout />}>
        <Route exact path='/' element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
