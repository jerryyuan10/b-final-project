import React from "react";
import { Helmet } from "react-helmet";
import AddMBuilding from "../components/add-building";

function AddBuildingPage() {
  return (
    <main>
      <Helmet>
        <title>Add</title>
      </Helmet>
      <AddMBuilding />
    </main>
  );
}

export default AddBuildingPage;
