import React, { useState } from "react";
import { buildingsCollection } from "../data/firebase";
import "./add-building.css";
import BuildingForm from "./building-form";

function AddBuilding() {
  const [isSaving, setIsSaving] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  const onBuildingSumbit = async (name, height, completeYear, rating, review) => {
    
    setIsSaving(true);
    setFormMessage("");

    try {
      await buildingsCollection.add({
        name: name,
        height: height,
        completeYear: completeYear,
        rating: rating,
        // materials: materials,
        review: review,
        // buildingLocation,
      });
      setFormMessage("Saved successfully!")
      console.log("Saved!");
    } catch (error) {
      setFormMessage("Something went wrong. Please try again!")
      console.error(error);
    }

    setIsSaving(false);
  };

  return (
    <div className="add-container">
      <h1>Add Building</h1>
      <BuildingForm onSubmit={onBuildingSumbit} isSaving={isSaving} message={formMessage} />
    </div>
  );
}

export default AddBuilding;
