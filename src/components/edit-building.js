import React from "react";
import useBuilding from "../hooks/use-building";
import useSaveBuilding from "../hooks/use-save-building";
import "./edit-building.css";
import ErrorMessage from "./error-message";
import LoadingSpinner from "./loading-spinner";
import BuildingForm from "./building-form";

function EditBuilding(props) {
  const userId = props.user.uid;
  const buildingId = props.id;

  const [buildingData, isLoading, errorMessage] = useBuilding(userId, buildingId);
  const [save, isSaving, formMessage] = useSaveBuilding();

  const onBuildingSubmit = async (name, height, completeYear, rating, materials, review, buildingLocation) => {
    save({ name, height, completeYear, rating, materials, review, buildingLocation }, userId, buildingId);
  };

  return (
    <div className="edit-container">
      <h2>Edit Building</h2>
      {isLoading && (
        <LoadingSpinner
          size="50px"
          spinnerColor="white"
          backgroundColor="rgb(255, 255, 255, 0.2)"
        />
      )}
      {errorMessage && <ErrorMessage displayAsCard>{errorMessage}</ErrorMessage>}
      {buildingData && <BuildingForm initialState={buildingData} onSubmit={onBuildingSubmit} isSaving={isSaving} message={formMessage} />}
    </div>
  );
}

export default EditBuilding;
