import { ApolloProvider } from "@apollo/client";
import React from "react";
import { client } from "./GraphQl/client";

function App() {
  return (
    <ApolloProvider client={client}>
      <div></div>
    </ApolloProvider>
  );
}

export default App;
