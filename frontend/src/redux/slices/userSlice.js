import { createSlice } from "@reduxjs/toolkit";

const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : {};

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: userInfoFromLocalStorage,
    loading: false,
    loadingLogin: false,
    error: null,
    errorLogin: null,
    success: false,
    resetPass: false,
    updatePass: false,
    users: [],
  },
  reducers: {
    loginStart: (state) => {
      state.loadingLogin = true;
      state.errorLogin = null;
      state.success = false;
    },
    loginSuccess: (state, action) => {
      state.loadingLogin = false;
      state.userInfo = action.payload;
      state.success = true;
    },
    loginFail: (state, action) => {
      state.loadingLogin = false;
      state.errorLogin = action.payload;
    },
    logoutUser: (state) => {
      state.userInfo = {};
    },
    registerStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    registerSuccess: (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
    },
    registerFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    resetPasswordStart: (state) => {
      state.loading = true;
      state.error = false;
      state.resetPass = false;
    },
    resetPasswordSuccess: (state) => {
      state.loading = false;
      state.resetPass = true;
    },
    resetPasswordFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updatePasswordStart: (state) => {
      state.loading = true;
      state.error = false;
      state.updatePass = false;
    },
    updatePasswordSuccess: (state) => {
      state.loading = false;
      state.updatePass = true;
    },
    updatePasswordFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getUsersStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    getUsersSuccess: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    getUsersFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    hideError: (state) => {
      state.error = null;
      state.errorLogin = null;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFail,
  logoutUser,
  registerStart,
  registerSuccess,
  registerFail,
  resetPasswordStart,
  resetPasswordSuccess,
  resetPasswordFail,
  updatePasswordStart,
  updatePasswordSuccess,
  updatePasswordFail,
  getUsersStart,
  getUsersSuccess,
  getUsersFail,
  hideError,
} = userSlice.actions;
export default userSlice.reducer;
