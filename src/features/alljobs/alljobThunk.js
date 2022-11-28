import customFetch, { checkForUnauthorizedResponse } from "../../utils/axios";
import { clearValues } from "../job/jobSlice";
import { allJob } from "./alljobAction";
import { hideLoading } from "./alljobSlice";
//  mo this fucntion to utils.js
const authHeader = (thunkAPi) => {
  return {
    headers: {
      authorization: ` Bearer ${thunkAPi.getState().user.user.token}`
    }
  };
};
export const getAllJobThunk = async (url, _, thunkAPi) => {
  try {
    const res = await customFetch.get(url, authHeader(thunkAPi));
    return res.data;
  } catch (error) {
    return thunkAPi.rejectWithValue("There was an error");
  }
};
export const deleteJobThunk = async (url, thunkAPi) => {
  try {
    const res = await customFetch.delete(url, authHeader(thunkAPi));
    thunkAPi.dispatch(allJob());
    return res.data.msg;
  } catch (error) {
    thunkAPi.dispatch(hideLoading());
    return checkForUnauthorizedResponse(error, thunkAPi);
  }
};
export const editJobThunk = async (url, job, thunkAPi) => {
  try {
    const res = await customFetch.patch(url, job, authHeader(thunkAPi));
    thunkAPi.dispatch(clearValues());
    return res.data.msg;
  } catch (error) {
    thunkAPi.dispatch(hideLoading());
    return checkForUnauthorizedResponse(error, thunkAPi);
  }
};
export const getStats = async (url, thunkAPi) => {
  try {
    const res = await customFetch.get(url, authHeader(thunkAPi));
    return res.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPi);
  }
};
