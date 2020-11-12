import React from "react";
import { Helmet } from "react-helmet";
import AddBuilding from "../components/add-building";

function AddBuildingPage() {
  return (
    <main>
      <Helmet>
        <title>Add</title>
      </Helmet>
      <AddBuilding />
    </main>
  );
}

export default AddBuildingPage;
