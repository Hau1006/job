import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChartsContainer, Loading, StatsContainer } from "../../components";
import { showStats } from "../../features/alljobs/alljobAction";
const Stats = () => {
  const { isLoading, monthlyApplicationState } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showStats());
  }, []);
  if (isLoading) {
    <Loading center />;
  }
  return (
    <>
      <StatsContainer />
      {monthlyApplicationState.length > 0 && <ChartsContainer />}
    </>
  );
};

export default Stats;
