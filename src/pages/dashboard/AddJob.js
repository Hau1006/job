import React, { useEffect } from "react";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import FormRow from "../../components/FormRow";
import FormRowSelect from "../../components/FormRowSelect";
import { clearValues, handleChange } from "../../features/job/jobSlice";
import { addJob } from "../../features/job/jobAction";
import { editJob } from "../../features/alljobs/alljobAction";
const AddJob = () => {
  const dispatch = useDispatch();
  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobTypeOptions,
    jobType,
    status,
    isEditing,
    statusOptions,
    editJobId
  } = useSelector((store) => store.job);
  const { location } = useSelector((store) => store.user.user);
  const handleSubmit = (e) => {
    e.preventDefault();
    //  handle error job
    if (!position || !company || !jobLocation) {
      toast.error("Please Fill Out All Fields");
      return;
    }
    if (isEditing) {
      dispatch(
        editJob({ jobId: editJobId, job: { position, company, jobLocation, jobType, status } })
      );
      return;
    }
    dispatch(addJob({ position, company, jobLocation, jobType, status }));
  };
  const handleJobinput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };
  useEffect(() => {
    if (!isEditing) {
      dispatch(handleChange({ name: "jobLocation", value: location }));
    }
  }, []);
  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>{isEditing ? "Edit Job" : "Add Job"}</h3>
        <div className="form-center">
          {/* Position */}
          <FormRow type="text" name="position" value={position} handleChange={handleJobinput} />
          {/* company */}
          <FormRow type="text" name="company" value={company} handleChange={handleJobinput} />
          {/* job location */}
          <FormRow
            type="text"
            name="jobLocation"
            value={jobLocation}
            handleChange={handleJobinput}
          />
          {/* Status */}
          <FormRowSelect
            labelText="Status"
            name="status"
            value={status}
            handleChange={handleJobinput}
            list={statusOptions}
          />
          {/* job type */}
          <FormRowSelect
            labelText="Job Type"
            name="jobType"
            value={jobType}
            handleChange={handleJobinput}
            list={jobTypeOptions}
          />

          <button
            type="button"
            className="btn btn-block clear-btn"
            disabled={isLoading}
            onClick={() => dispatch(clearValues())}>
            Clear
          </button>
          <button type="submit" className="btn btn-block submit-btn" disabled={isLoading}>
            {isLoading ? "Please wait..." : "Submit"}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddJob;
