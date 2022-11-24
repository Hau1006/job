import customFetch from "../../utils/axios";
import { logoutUser } from "../user/userSlice";
import { clearValues } from "./jobSlice";

export const createJobThunk = async (job, thunkAPi) => {
  try {
    const res = await customFetch.post("/jobs", job, {
      headers: {
        authorization: ` Bearer ${thunkAPi.getState().user.user.token}`
      }
    });
    thunkAPi.dispatch(clearValues());
    return res.data.msg;
  } catch (error) {
    if (error.response.status === 401) {
      thunkAPi.dispatch(logoutUser());
      return thunkAPi.rejectWithValue("Unauthorized! Logging Out... ");
    }
    return thunkAPi.rejectWithValue(error.response.data.msg);
  }
};
