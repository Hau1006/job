import { createAsyncThunk } from "@reduxjs/toolkit";
//ScreenID: ### 12
export const registerUser = createAsyncThunk("user/registerUser", async (user, thunkAPi) => {
  console.log("registerUser", `${JSON.stringify(user)}`);
});
export const loginUser = createAsyncThunk("user/loginUser", async (user, thunkAPi) => {
  console.log("loginUser", `${JSON.stringify(user)}`);
});
