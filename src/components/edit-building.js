import React, { useState } from "react";
import "./edit-building.css";
import ErrorMessage from "./error-message";
import LoadingSpinner from "./loading-spinner";
import MovieForm from "./building-form";

function EditBuilding(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [buildingData, setBuildingData] = useState(null);

  const onBuildingSubmit = async (name, rating, completeYear) => {};

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
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      {buildingData && <MovieForm />}
    </div>
  );
}

export default EditBuilding;
