import React from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import EditBuilding from "../components/edit-building";

function EditBuildingPage() {
  const { id } = useParams();

  return (
    <main>
      <Helmet>
        <title>Edit</title>
      </Helmet>
      <EditBuilding id={id}/>
    </main>
  );
}

export default EditBuildingPage;
