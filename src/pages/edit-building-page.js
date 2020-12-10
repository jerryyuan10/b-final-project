import React from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import EditBuilding from "../components/edit-building";

function EditBuildingPage(props) {
  const { id } = useParams();

  return (
    <main>
      <Helmet>
        <title>Edit</title>
      </Helmet>
      <EditBuilding id={id} {...props} />
    </main>
  );
}

export default EditBuildingPage;
