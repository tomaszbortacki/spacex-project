import React, { useEffect, useState } from "react";
import { GET_LAUNCHES } from "../../GraphQl/launches";
import LaunchesList from "../launchesList/LaunchesList";
import { useQuery } from "@apollo/client";
import { TLaunches } from "../../model";

const LaunchesQuery = () => {
  const [offset, setOffset] = useState<number>(0);
  const [launches, setLaunches] = useState<TLaunches>([]);
  const { data, loading, error, refetch } = useQuery(GET_LAUNCHES, {
    variables: {
      offset,
    },
  });

  const loadMore = () => {
    setOffset(launches.length);
  };

  useEffect(() => {
    console.log(data);

    if (data && "launches" in data) {
      setLaunches((prevState) => [...prevState, ...data.launches]);
    }
  }, [data]);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Something went wrong</h1>;

  return (
    launches.length && (
      <>
        {/* <LaunchesList launches={data.launches} loadMore={loadMore} /> */}
        <button onClick={loadMore}>LoadMore</button>
      </>
    )
  );
};

export default LaunchesQuery;
