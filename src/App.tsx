import { ApolloProvider } from "@apollo/client";
import React from "react";
import { client } from "./graphQL/client";
import LaunchesQuery from "./components/launchesQuery/LaunchesQuery";
import "./app.scss";

function App() {
  return (
    <ApolloProvider client={client}>
      <LaunchesQuery />
    </ApolloProvider>
  );
}

export default App;
