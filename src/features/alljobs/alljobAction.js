import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteJobThunk, editJobThunk, getAllJobThunk } from "./alljobThunk";

export const allJob = createAsyncThunk("allJobs/getjobs", async (_, thunkAPi) => {
  return getAllJobThunk("/jobs", _, thunkAPi);
});
export const deleteJob = createAsyncThunk("job/deleteJob", async (jobId, thunkAPi) => {
  return deleteJobThunk(`/jobs/${jobId}`, thunkAPi);
});
export const editJob = createAsyncThunk("job/editJob", async ({ jobId, job }, thunkAPi) => {
  return editJobThunk(`/jobs/${jobId}`, job, thunkAPi);
});
