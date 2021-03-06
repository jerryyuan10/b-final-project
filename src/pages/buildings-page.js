import React from "react";
import { Helmet } from "react-helmet";
import BuildingListing from "../components/building-listing";

function BuildingsPage(props) {
  return (
    <main>
      <Helmet>
        <title>Buildings</title>
      </Helmet>
      <BuildingListing {...props} />
    </main>
  );
}

export default BuildingsPage;
