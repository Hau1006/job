import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
const reducer = combineReducers({
  // here we will be adding reducers
  user: userSlice
});
export const store = configureStore({
  reducer
});
