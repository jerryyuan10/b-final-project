import React, { useEffect, useState } from "react";
import "./edit-building.css";
import ErrorMessage from "./error-message";
import LoadingSpinner from "./loading-spinner";
import BuildingForm from "./building-form";
import { buildingsCollection } from "../data/firebase";

function EditBuilding(props) {
  const { id } = props;

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [buildingData, setBuildingData] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const [forMessage, setForMessage] = useState("");

  useEffect(() => {
    async function getBuilding() {
      setIsLoading(true);
      try {
        const buildingSnapShot = await buildingsCollection.doc(id).get();

        if(!buildingSnapShot.exists) {
          throw new Error("No such building exists!");
        }

        const data = buildingSnapShot.data();
        setBuildingData(data);
      } catch (error) {
        setErrorMessage("Something went wrong. Please try again.");
        console.error(error);
      }
      setIsLoading(false);
    }

    getBuilding();
  }, [id]);

  const onBuildingSubmit = async (name, height, completeYear, rating, materials, review) => {
    setIsSaving(true);
    setForMessage("");

    try {
      await buildingsCollection.doc(id).set({
        name,
        height,
        completeYear,
        rating,
        materials,
        review,
      })
      setForMessage("Savd successfully!");
    } catch (error) {
      setForMessage("Something went wrong editing this building. Please try again.");
      console.error(error);
    }

    setIsSaving(false);
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
      {buildingData && <BuildingForm initialState={buildingData} onSubmit={onBuildingSubmit} isSaving={isSaving} message={forMessage} />}
    </div>
  );
}

export default EditBuilding;
