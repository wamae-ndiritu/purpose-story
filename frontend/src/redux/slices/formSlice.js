import { createSlice } from "@reduxjs/toolkit";

const localStorageAnswers = localStorage.getItem("purposeInfo")
  ? JSON.parse(localStorage.getItem("purposeInfo"))
  : {
      you: "",
      what: "",
      love: "",
      serve: "",
      beneficiaries: "",
      transform: "",
      income: "",
      purpose_statement: "",
    };

export const formSlice = createSlice({
  name: "form",
  initialState: localStorageAnswers,
  reducers: {
    addState: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;

      localStorage.setItem("purposeInfo", JSON.stringify(state));
    },
  },
});

export const { addState } = formSlice.actions;
export default formSlice.reducer;
