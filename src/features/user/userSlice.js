import { createSlice } from "@reduxjs/toolkit";
import { registerUser, loginUser } from "./userActions";
// ScreenID:### 12
const initialState = {
  isLoading: false,
  user: null
};
const userSlice = createSlice({
  name: "user",
  initialState
});
export default userSlice.reducer;
