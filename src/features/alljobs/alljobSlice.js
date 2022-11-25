import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { allJob, deleteJob, editJob } from "./alljobAction";

const initialFiltersState = {
  search: "",
  searchStatus: "all",
  searchType: "all",
  sort: "lastes",
  sortOptions: ["lastes", "oldest", "a-z", "z-a"]
};
const initialState = {
  isLoading: false,
  jobs: [],
  totalJobs: 0,
  numOfPages: 1,
  page: 1,
  stats: {},
  monthlyApplicationState: [],
  ...initialFiltersState
};
const alljobSlice = createSlice({
  name: "allJobs",
  initialState,
  reducers: {
    showLoading: (state) => {
      state.isLoading = true;
    },
    hideLoading: (state) => {
      state.isLoading = false;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(allJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(allJob.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.jobs = payload.jobs;
      })
      .addCase(allJob.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(deleteJob.fulfilled, (state, { payload }) => {
        toast.success(payload);
      })
      .addCase(deleteJob.rejected, (state, { payload }) => {
        toast.error(payload);
      })
      .addCase(editJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editJob.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        toast.success("Job Modified Success");
      })
      .addCase(editJob.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  }
});
export const { showLoading, hideLoading } = alljobSlice.actions;
export default alljobSlice.reducer;
