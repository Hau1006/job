import { createAsyncThunk } from "@reduxjs/toolkit";
import { createJobThunk } from "./jobThunks";

export const addJob = createAsyncThunk("job/createJob", async (job, thunkAPi) => {
  return createJobThunk(job, thunkAPi);
});
