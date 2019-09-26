import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";
import fetch from "isomorphic-unfetch";

let apolloClient = null;

function create(initialState) {
  const isBrowser = typeof window !== "undefined";
  const isDocker = process.env.BACKEND_URL === "http://backend:4000/graphql";

  return new ApolloClient({
    connectToDevTools: isBrowser,
    ssrMode: !isBrowser,
    link: new HttpLink({
      uri:
        isDocker && isBrowser
          ? "http://localhost:4000/graphql"
          : process.env.BACKEND_URL,
      credentials: "same-origin",
      fetch: !isBrowser && fetch
    }),
    cache: new InMemoryCache().restore(initialState || {})
  });
}

export default function initApollo(initialState) {
  if (typeof window === "undefined") {
    return create(initialState);
  }

  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
}
