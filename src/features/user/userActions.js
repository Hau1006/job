import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from "../../utils/axios";

//ScreenID: ### 12
//ScreenID: ### 15
export const registerUser = createAsyncThunk("user/registerUser", async (user, thunkAPi) => {
  try {
    // response only hve user Object
    const resp = await customFetch.post("/auth/register", user);
    return resp.data;
  } catch (error) {
    return thunkAPi.rejectWithValue(error.response.data.msg);
  }
});
export const loginUser = createAsyncThunk("user/loginUser", async (user, thunkAPi) => {
  try {
    const res = await customFetch.post("/auth/login", user);
    return res.data;
  } catch (error) {
    return thunkAPi.rejectWithValue(error.response.data.msg);
  }
});
