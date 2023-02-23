import React, { Suspense } from "react";
import { RelayEnvironmentProvider, loadQuery } from "react-relay/hooks";
import { Environment, Network, RecordSource, Store } from "relay-runtime";
import Artists from "./Artists";
import fetchGraphqlQuery from "../helpers/fetchGraphqlQuery";
import artistsQuery from "./artistsQuery";

const environment = new Environment({
  network: Network.create(fetchGraphqlQuery),
  store: new Store(new RecordSource()),
});

const preloadedQuery = loadQuery(environment, artistsQuery, {});

export default function App() {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <Suspense fallback={"Loading..."}>
        <Artists preloadedQuery={preloadedQuery} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}
