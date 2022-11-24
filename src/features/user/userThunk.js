import customFetch from "../../utils/axios";
import { logoutUser } from "./userSlice";
export const registerUserThunk = async (url, user, thunkAPi) => {
  try {
    // response only hve user Object
    const resp = await customFetch.post(url, user);
    return resp.data;
  } catch (error) {
    return thunkAPi.rejectWithValue(error.response.data.msg);
  }
};
export const loginUserThunk = async (url, user, thunkAPi) => {
  try {
    // response only hve user Object
    const resp = await customFetch.post(url, user);
    return resp.data;
  } catch (error) {
    return thunkAPi.rejectWithValue(error.response.data.msg);
  }
};
export const updateUserThunk = async (url, user, thunkAPi) => {
  try {
    const res = await customFetch.patch(url, user, {
      headers: {
        authorization: ` Bearer ${thunkAPi.getState().user.user.token}`
      }
    });
    return res.data;
  } catch (error) {
    if (error.response.status === 401) {
      thunkAPi.dispatch(logoutUser());
      return thunkAPi.rejectWithValue("Unauthorized! Logging Out... ");
    }
    return thunkAPi.rejectWithValue(error.response.data.msg);
  }
};
