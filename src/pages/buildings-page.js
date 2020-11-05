import React from "react";
import { Helmet } from "react-helmet";
import BuildingListing from "../components/building-listing";

function BuildingsPage() {
  return (
    <main>
      <Helmet>
        <title>Buildings</title>
      </Helmet>
      <BuildingListing />
    </main>
  );
}

export default BuildingsPage;
