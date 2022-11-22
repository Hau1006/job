import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { registerUser, loginUser } from "./userActions";
// ScreenID:### 12
const initialState = {
  isLoading: false,
  user: null
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
        toast.success(`Hello There ${user.name}`);
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  }
});
export default userSlice.reducer;
