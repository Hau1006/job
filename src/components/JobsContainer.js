import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../assets/wrappers/JobsContainer";
import { allJob } from "../features/alljobs/alljobAction";
import Job from "./Job";
import Loading from "./Loading";

const JobsContainer = () => {
  const { isLoading, jobs } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allJob());
  }, []);
  if (isLoading) {
    return (
      <Wrapper>
        <Loading center />
      </Wrapper>
    );
  }
  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobss to display...</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h5>{`${jobs.length} Jobs Found`}</h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
    </Wrapper>
  );
};

export default JobsContainer;
