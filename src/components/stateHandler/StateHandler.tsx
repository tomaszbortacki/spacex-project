import React from "react";
import { ApolloError } from "@apollo/client";
import "./stateHandler.scss";

interface Props {
  loading: Boolean;
  error: ApolloError | undefined;
}

const StateHandler = ({ loading, error }: Props) => {
  return (
    <section className="stateHandler">
      {error?.message && <h2>{error?.message}</h2>}
      {loading && <h2>Loading...</h2>}
    </section>
  );
};

export default StateHandler;
