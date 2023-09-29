import {
  hideError,
  loginFail,
  loginStart,
  loginSuccess,
  logoutUser,
} from "../slices/userSlice";
import axios from "axios";
import { API_ENDPOINT } from "../../Url";

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
