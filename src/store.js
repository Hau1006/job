import { combineReducers, configureStore } from "@reduxjs/toolkit";
import jobSlice from "./features/job/jobSlice";
import userSlice from "./features/user/userSlice";
const reducer = combineReducers({
  // here we will be adding reducers
  user: userSlice,
  job: jobSlice
});
export const store = configureStore({
  reducer
});
