import { API_ENDPOINT } from "../../Url";
import {
  createItemFail,
  createItemStart,
  createItemSuccess,
  deleteItemFail,
  deleteItemStart,
  deleteItemSuccess,
  getItemFail,
  getItemStart,
  getItemSuccess,
  shareAnswersFail,
  shareAnswersStart,
  shareAnswersSuccess,
  updateItemFail,
  updateItemStart,
  updateItemSuccess,
} from "../slices/purposeSlice";
import axios from "axios";
import { logout } from "./userActions";

// CREATE ITEM
export const createItem = (details) => async (dispatch, getState) => {
  try {
    dispatch({ type: createItemStart });

    const {
      user: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(
      `${API_ENDPOINT}/purpose-clarity/create`,
      details,
      config
    );

    dispatch({ type: createItemSuccess, payload: data });
  } catch (err) {
    let error = err.response ? err.response.data.message : err.message;
    if (
      error === "Not authorized, token failed!" ||
      error === "Not authorized, no token!"
    ) {
      dispatch(logout());
    }
    dispatch(createItemFail(error));
  }
};

// GET ITEM
export const getItem = () => async (dispatch, getState) => {
  try {
    dispatch({ type: getItemStart });

    const {
      user: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(
      `${API_ENDPOINT}/purpose-clarity/${userInfo._id}`,
      config
    );

    dispatch({ type: getItemSuccess, payload: data });
  } catch (err) {
    let error = err.response ? err.response.data.message : err.message;
    if (
      error === "Not authorized, token failed!" ||
      error === "Not authorized, no token!"
    ) {
      dispatch(logout());
    }
    dispatch(getItemFail(error));
  }
};

// UPDATE ITEM
export const updateItem = (details) => async (dispatch, getState) => {
  try {
    dispatch({ type: updateItemStart });

    const {
      user: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `${API_ENDPOINT}/purpose-clarity/${userInfo._id}`,
      details,
      config
    );

    dispatch({ type: updateItemSuccess, payload: data });
  } catch (err) {
    let error = err.response ? err.response.data.message : err.message;
    if (
      error === "Not authorized, token failed!" ||
      error === "Not authorized, no token!"
    ) {
      dispatch(logout());
    }
    dispatch(updateItemFail(error));
  }
};

// DELETE ITEM
export const deleteItem = () => async (dispatch, getState) => {
  try {
    dispatch({ type: deleteItemStart });

    const {
      user: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.delete(
      `${API_ENDPOINT}/purpose-clarity/${userInfo._id}`,
      config
    );

    dispatch({ type: deleteItemSuccess, payload: data });
  } catch (err) {
    let error = err.response ? err.response.data.message : err.message;
    if (
      error === "Not authorized, token failed!" ||
      error === "Not authorized, no token!"
    ) {
      dispatch(logout());
    }
    dispatch(deleteItemFail(error));
  }
};

export const sharePurpose = (purposeInfo) => async (dispatch, getState) => {
  try {
    dispatch(shareAnswersStart());

    const {
      user: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.post(
      `${API_ENDPOINT}/purpose-clarity/send-feedback-email`,
      purposeInfo,
      config
    );

    dispatch(shareAnswersSuccess());
  } catch (err) {
    let error = err.response ? err.response.data.message : err.message;
    if (
      error === "Not authorized, token failed!" ||
      error === "Not authorized, no token!"
    ) {
      dispatch(logout());
    }
    dispatch(shareAnswersFail(error));
  }
};
