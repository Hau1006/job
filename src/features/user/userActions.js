import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from "../../utils/axios";
import { logoutUser } from "./userSlice";
import { clearStoreThunk, loginUserThunk, registerUserThunk, updateUserThunk } from "./userThunk";

//ScreenID: ### 12
//ScreenID: ### 15
export const registerUser = createAsyncThunk("user/registerUser", async (user, thunkAPi) => {
  return registerUserThunk("/auth/register", user, thunkAPi);
});
export const loginUser = createAsyncThunk("user/loginUser", async (user, thunkAPi) => {
  return loginUserThunk("/auth/login", user, thunkAPi);
});
export const updateUser = createAsyncThunk("user/updateUser", async (user, thunkAPi) => {
  return updateUserThunk("/auth/updateUser", user, thunkAPi);
});
export const clearStore = createAsyncThunk("user/clearStore", clearStoreThunk);
