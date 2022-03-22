import React, { useEffect } from "react";
import { ApolloError } from "@apollo/client";

interface Props {
  loading: Boolean;
  error: ApolloError | undefined;
}

const StateHandler = ({ loading, error }: Props) => {
  useEffect(() => {
    if (error) {
      console.error(error);
    }
  }, [error]);

  return null;
};

export default StateHandler;
