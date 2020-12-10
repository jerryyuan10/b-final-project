import React from "react";
import { Helmet } from "react-helmet";
import AddBuilding from "../components/add-building";

function AddBuildingPage(props) {
  return (
    <main>
      <Helmet>
        <title>Add</title>
      </Helmet>
      <AddBuilding {...props}/>
    </main>
  );
}

export default AddBuildingPage;
