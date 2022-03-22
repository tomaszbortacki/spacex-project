import React from "react";
import { handleScroll } from "../../helpers";
import { TLaunches } from "../../model";
import Launch from "../launch/launch";
import "./launchesList.scss";

interface Props {
  launches: TLaunches;
  loadMore: Function;
}

const LaunchesList = ({ launches, loadMore }: Props) => {
  return (
    <ul className={"launchesList"} onScroll={(event) => handleScroll(event, loadMore)}>
      {launches.map((launch, key) => (
        <Launch key={key} {...launch} />
      ))}
    </ul>
  );
};

export default LaunchesList;
