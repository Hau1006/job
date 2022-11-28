import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteJobThunk, editJobThunk, getAllJobThunk, getStats } from "./alljobThunk";

export const allJob = createAsyncThunk("allJobs/getjobs", async (_, thunkAPi) => {
  const { page, search, searchStatus, searchType, sort } = thunkAPi.getState().allJobs;

  let url = `/jobs?status=${searchStatus}&jobType=${searchType}&sort=${sort}&page=${page}`;
  if (search) {
    url = url + `&search=${search}`;
  }
  return getAllJobThunk(url, _, thunkAPi);
});
export const deleteJob = createAsyncThunk("job/deleteJob", async (jobId, thunkAPi) => {
  return deleteJobThunk(`/jobs/${jobId}`, thunkAPi);
});
export const editJob = createAsyncThunk("job/editJob", async ({ jobId, job }, thunkAPi) => {
  return editJobThunk(`/jobs/${jobId}`, job, thunkAPi);
});
export const showStats = createAsyncThunk("allJobs/showStats", async (_, thunkAPi) => {
  return getStats("/jobs/stats", thunkAPi);
});
