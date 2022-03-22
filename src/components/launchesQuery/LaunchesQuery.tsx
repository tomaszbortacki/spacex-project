import React, { useEffect, useState } from "react";
import { GET_LAUNCHES } from "../../GraphQl/launches";
import LaunchesList from "../launchesList/LaunchesList";
import { useQuery } from "@apollo/client";
import { TLaunches } from "../../model";
import StateHandler from "../stateHandler/StateHandler";

const LaunchesQuery = () => {
  const [offset, setOffset] = useState<number>(0);
  const [end, setEnd] = useState<boolean>(false);
  const [launches, setLaunches] = useState<TLaunches>([]);
  const { data, loading, error, refetch } = useQuery(GET_LAUNCHES, {
    variables: {
      offset,
    },
  });

  const loadMore = () => {
    if (!end) {
      setOffset(launches.length);
      refetch();
    }
  };

  useEffect(() => {
    if (data && "launches" in data) {
      if (!data.launches.length) {
        setEnd(true);
      }
      setLaunches((prevState) => [...prevState, ...data.launches]);
    }
  }, [data]);

  return (
    <>
      <StateHandler loading={loading} error={error} />
      <LaunchesList launches={launches} loadMore={loadMore} />
    </>
  );
};

export default LaunchesQuery;
