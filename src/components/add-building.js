import React from "react";
import "./add-building.css";
import BuildingForm from "./building-form";

function AddMBuilding() {
  const onBuildingSumbit = async (name, rating, completeYear) => {};

  return (
    <div className="add-container">
      <h1>Add Building</h1>
      <BuildingForm />
    </div>
  );
}

export default AddMBuilding;
