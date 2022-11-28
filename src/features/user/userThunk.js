import customFetch, { checkForUnauthorizedResponse } from "../../utils/axios";
import { logoutUser } from "./userSlice";
import { clearValues } from "../job/jobSlice";
import { clearAllJobsState } from "../alljobs/alljobSlice";
export const clearStoreThunk = async (message, thunkAPi) => {
  try {
    thunkAPi.dispatch(logoutUser());
    thunkAPi.dispatch(clearAllJobsState());
    thunkAPi.dispatch(clearValues());
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  }
};
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
    return checkForUnauthorizedResponse(error, thunkAPi);
  }
};
