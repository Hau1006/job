import customFetch, { checkForUnauthorizedResponse } from "../../utils/axios";
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
    return checkForUnauthorizedResponse(error, thunkAPi);
  }
};
