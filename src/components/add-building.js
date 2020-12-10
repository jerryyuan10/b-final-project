import React from "react";
import useSaveBuilding from "../hooks/use-save-building";
import "./add-building.css";
import BuildingForm from "./building-form";

function AddBuilding(props) {
  const userId = props.user.uid;
  const [save, isSaving, formMessage] = useSaveBuilding();

  const onBuildingSumbit = async (name, height, completeYear, rating, review) => {
    save({name, height, completeYear, rating, review}, userId);
  };

  return (
    <div className="add-container">
      <h1>Add Building</h1>
      <BuildingForm onSubmit={onBuildingSumbit} isSaving={isSaving} message={formMessage} />
    </div>
  );
}

export default AddBuilding;
