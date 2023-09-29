import { API_ENDPOINT } from "../../Url";
import {
  createPurposeStoryStart,
  createPurposeStorySuccess,
  createPurposeStoryFail,
  getPurposeStoryStart,
  getPurposeStorySuccess,
  getPurposeStoryFail,
  updatePurposeStoryStart,
  updatePurposeStorySuccess,
  updatePurposeStoryFail,
  deletePurposeStoryStart,
  deletePurposeStorySuccess,
  deletePurposeStoryFail,
} from "../slices/purposeSlice";
import axios from "axios";
import { logout } from "./userActions";

// CREATE PURPOSE STORY
export const createPurposeStory = (details) => async (dispatch, getState) => {
  try {
    dispatch({ type: createPurposeStoryStart });

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
      `${API_ENDPOINT}/purpose-stroy/create`,
      details,
      config
    );

    dispatch({ type: createPurposeStorySuccess, payload: data });
  } catch (err) {
    let error = err.response ? err.response.data.message : err.message;
    if (
      error === "Not authorized, token failed!" ||
      error === "Not authorized, no token!"
    ) {
      dispatch(logout());
    }
    dispatch(createPurposeStoryFail(error));
  }
};

// GET PURPOSE STORY
export const getPurposeStory = () => async (dispatch, getState) => {
  try {
    dispatch({ type: getPurposeStoryStart });

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
      `${API_ENDPOINT}/purpose-story/${userInfo._id}`,
      config
    );

    dispatch({ type: getPurposeStorySuccess, payload: data });
  } catch (err) {
    let error = err.response ? err.response.data.message : err.message;
    if (
      error === "Not authorized, token failed!" ||
      error === "Not authorized, no token!"
    ) {
      dispatch(logout());
    }
    dispatch(getPurposeStoryFail(error));
  }
};

// UPDATE PURPOSE STORY
export const updatePurposeStory = (details) => async (dispatch, getState) => {
  try {
    dispatch({ type: updatePurposeStoryStart });

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
      `${API_ENDPOINT}/purpose-story/${userInfo._id}`,
      details,
      config
    );

    dispatch({ type: updatePurposeStorySuccess, payload: data });
  } catch (err) {
    let error = err.response ? err.response.data.message : err.message;
    if (
      error === "Not authorized, token failed!" ||
      error === "Not authorized, no token!"
    ) {
      dispatch(logout());
    }
    dispatch(updatePurposeStoryFail(error));
  }
};

// DELETE PURPOSE STORY
export const deletePurposeStory = () => async (dispatch, getState) => {
  try {
    dispatch({ type: deletePurposeStoryStart });

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

    dispatch({ type: deletePurposeStorySuccess, payload: data });
  } catch (err) {
    let error = err.response ? err.response.data.message : err.message;
    if (
      error === "Not authorized, token failed!" ||
      error === "Not authorized, no token!"
    ) {
      dispatch(logout());
    }
    dispatch(deletePurposeStoryFail(error));
  }
};
