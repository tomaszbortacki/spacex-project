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
    <section className={"launchesList"}>
      <h1 className={"launchesList__header"}>Launches</h1>
      {launches.length ? (
        <ul className={"launchesList__list"} onScroll={(event) => handleScroll(event, loadMore)}>
          {launches.map((launch, key) => (
            <Launch key={key} {...launch} />
          ))}
        </ul>
      ) : (
        ""
      )}
    </section>
  );
};

export default LaunchesList;
