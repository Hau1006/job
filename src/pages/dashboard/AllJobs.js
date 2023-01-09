import React from "react";
import { SearchComponent, JobsContainer } from "../../components";

// const JobsContainer = React.lazy(() => import("../../components"));
//  apply Code Splitting in React to improve performance
const AllJobs = () => {
  return (
    <>
      <SearchComponent />
      {/* alt+ len / xuong de di chuyen code */}
      {/* <Suspense fallback={<Loading />}> */}
      <JobsContainer />
      {/* </Suspense> */}
    </>
  );
};

export default AllJobs;
