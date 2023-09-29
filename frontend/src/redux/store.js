import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import purposeReducer from "./slices/purposeSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    purposeStory: purposeReducer,
  },
});
