import {
  getUsersFail,
  getUsersStart,
  getUsersSuccess,
  hideError,
  loginFail,
  loginStart,
  loginSuccess,
  logoutUser,
  registerFail,
  registerStart,
  registerSuccess,
  resetPasswordFail,
  resetPasswordStart,
  resetPasswordSuccess,
  updatePasswordFail,
  updatePasswordStart,
  updatePasswordSuccess,
} from "../slices/userSlice";
import axios from "axios";
import { API_ENDPOINT } from "../../Url";

export const register = (details) => async (dispatch) => {
  dispatch(registerStart());
  try {
    const { data } = await axios.post(`${API_ENDPOINT}/user/register`, details);
    dispatch(registerSuccess(data));
  } catch (err) {
    dispatch(
      registerFail(err.response ? err.response.data.message : err.message)
    );
  }
};

export const login = (details) => async (dispatch) => {
  dispatch(loginStart());
  try {
    const { data } = await axios.post(`${API_ENDPOINT}/user/login`, details);
    dispatch(loginSuccess(data));
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (err) {
    dispatch(loginFail(err.response ? err.response.data.message : err.message));
  }
};

// Reset Password
export const resetPassword = (details) => async (dispatch) => {
  try {
    dispatch(resetPasswordStart());

    await axios.post(`${API_ENDPOINT}/user/forgot/password`, details);

    dispatch(resetPasswordSuccess());
  } catch (err) {
    dispatch(
      resetPasswordFail(err.response ? err.response.data.message : err.message)
    );
  }
};

export const updatePassword = (id, data) => async (dispatch) => {
  try {
    dispatch(updatePasswordStart());

    await axios.put(`${API_ENDPOINT}/user/update/${id}/password`, data);

    dispatch(updatePasswordSuccess());
  } catch (err) {
    dispatch(
      updatePasswordFail(err.response ? err.response.data.message : err.message)
    );
  }
};

export const hideLoginErr = () => (dispatch) => {
  dispatch(hideError());
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch(logoutUser());
};

export const verifySession = () => async (dispatch, getState) => {
  try {
    const {
      user: { userInfo },
    } = getState();

    const { data } = await axios.post(
      `${API_ENDPOINT}/user/auth/verification`,
      {
        token: userInfo.token,
      }
    );
    console.log(data);
  } catch (err) {
    let error = err.response ? err.response.data.message : err.message;
    if (error === "Not authorized, token failed!") {
      dispatch(logout());
    }
  }
};

// LIST USERS
export const listUsers = () => async (dispatch, getState) => {
  try {
    dispatch(getUsersStart());

    const {
      user: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`${API_ENDPOINT}/user/`, config);

    dispatch(getUsersSuccess(data));
  } catch (err) {
    let error = err.response ? err.response.data.message : err.message;
    if (
      error === "Not authorized, token failed!" ||
      error === "Not authorized, no token!" ||
      error === "Not authorized as an Admin!"
    ) {
      dispatch(logout());
    }
    dispatch(getUsersFail(error));
  }
};
