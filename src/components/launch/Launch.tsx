import React from "react";
import { ILaunches } from "../../model";
import "./launch.scss";

const Launch = ({ launch_success, mission_name, rocket }: ILaunches) => {
  return (
    <li className={`launch ${!launch_success && "launch_error"}`}>
      <h3>{mission_name}</h3>
      <span>Rocket: ${rocket.rocket_name}</span>
    </li>
  );
};

export default Launch;
