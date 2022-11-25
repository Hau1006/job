import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getUserFromLocalStorage } from "../../utils/localStorage";
import { addJob } from "./jobAction";

const initialState = {
  isLoading: false,
  position: "",
  company: "",
  jobLocation: "",
  jobTypeOptions: ["full-time", "part-time", "remote", "intership"],
  jobType: "full-time",
  statusOptions: ["interview", "declined", "pending"],
  status: "pending",
  isEditing: false,
  editJobId: ""
};
const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    handleChange: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    clearValues: () => {
      return { ...initialState, jobLocation: getUserFromLocalStorage()?.location || "" };
    },
    setEditJob: (state, { payload }) => {
      return { ...initialState, isEditing: true, ...payload };
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(addJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addJob.fulfilled, (state) => {
        state.isLoading = false;
        toast.success("Job Createed");
      })
      .addCase(addJob.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  }
});
export const { handleChange, clearValues, setEditJob } = jobSlice.actions;
export default jobSlice.reducer;
