import { ApolloProvider } from "@apollo/client";
import React from "react";
import { client } from "./GraphQl/client";
import LaunchesQuery from "./components/launchesQuery/LaunchesQuery";

function App() {
  return (
    <ApolloProvider client={client}>
      <LaunchesQuery />
    </ApolloProvider>
  );
}

export default App;
