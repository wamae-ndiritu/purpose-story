import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import purposeReducer from "./slices/purposeSlice";
import formReducer from "./slices/formSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    purpose: purposeReducer,
    form: formReducer,
  },
});
