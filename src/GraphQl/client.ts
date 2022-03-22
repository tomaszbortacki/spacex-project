import { ApolloClient, from, HttpLink, InMemoryCache } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message }) => {
      console.error(`Error ${message}`);
    });
  }
});

const link = from([errorLink, new HttpLink({ uri: "https://api.spacex.land/graphql/" })]);

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});
