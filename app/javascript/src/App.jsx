import React, { Suspense } from "react";
import { RelayEnvironmentProvider, loadQuery } from "react-relay/hooks";
import { Environment, Network, RecordSource, Store } from "relay-runtime";
import fetchGraphqlQuery from "../helpers/fetchGraphqlQuery";
import Items from "./Items";

const environment = new Environment({
  network: Network.create(fetchGraphqlQuery),
  store: new Store(new RecordSource()),
});

export default function App() {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <Suspense fallback={"Loading..."}>
        <Items />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}
