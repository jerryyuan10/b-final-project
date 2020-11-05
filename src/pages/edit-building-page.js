import React from "react";
import { Helmet } from "react-helmet";
import EditBuilding from "../components/edit-building";

function EditBuildingPage() {
  return (
    <main>
      <Helmet>
        <title>Edit</title>
      </Helmet>
      <EditBuilding />
    </main>
  );
}

export default EditBuildingPage;
