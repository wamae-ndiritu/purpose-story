import { createSlice } from "@reduxjs/toolkit";

export const purposeSlice = createSlice({
  name: "purposeStory",
  initialState: {
    item: null,
    loading: false,
    error: false,
    success: false,
  },
  reducers: {
    createPurposeStoryStart: (state) => {
      state.loading = true;
      state.error = false;
      state.success = false;
    },
    createPurposeStorySuccess: (state, action) => {
      state.loading = false;
      state.item = action.payload;
      state.success = true;
    },
    createPurposeStoryFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getPurposeStoryStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    getPurposeStorySuccess: (state, action) => {
      state.loading = false;
      state.item = action.payload;
    },
    getPurposeStoryFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updatePurposeStoryStart: (state) => {
      state.loading = true;
      state.error = false;
      state.success = false;
    },
    updatePurposeStorySuccess: (state, action) => {
      state.loading = false;
      state.item = action.payload;
      state.success = true;
    },
    updatePurposeStoryFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.success = false;
    },
    deletePurposeStoryStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    deletePurposeStorySuccess: (state, action) => {
      state.loading = false;
      state.success = true;
    },
    deletePurposeStoryFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
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
} = purposeSlice.actions;
export default purposeSlice.reducer;
