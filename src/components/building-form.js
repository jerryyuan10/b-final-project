import React, { useState } from "react";
import ErrorMessage from "./error-message";
import "./building-form.css";
import { buildingsCollection } from "../data/firebase";

function BuildingForm(props) {
  const { initialState = {}, message, isSaving, onSubmit } = props;

  if (initialState.name === undefined) initialState.name = "";
  if (initialState.height === undefined) initialState.height = 1111;
  if (initialState.completeYear === undefined) initialState.completeYear = 2020;
  if (initialState.rating === undefined) initialState.rating = 4;
  // if (initialState.materials === undefined) initialState.materials = [""];
  if (initialState.review === undefined) initialState.review = "";
  // if (initialState.buildingLocation === undefined) initialState.buildingLocation = [40.713112, -74.011345]

  const [name, setName] = useState(initialState.name);
  const [height, setHeight] = useState(initialState.height);
  const [completeYear, setCompleteYear] = useState(initialState.completeYear);
  const [rating, setRating] = useState(initialState.rating);
  // const [materials, setMaterials] = useState(initialState.materials);
  const [review, setReview] = useState(initialState.review);
  // const [buildingLocation, setBuildingLocation] = useState(initialState.buildingLocation);


  const [errorMessage, setErrorMessage] = useState("");

  const onNameChange = (event) => {
    setName(event.target.value);
  };
  const onHeightChange = (event) => {
    setHeight(event.target.value);
  };
  const onYearCompletedChange = (event) => {
    setCompleteYear(event.target.value);
  };
  const onRatingChange = (event) => {
    setRating(event.target.value);
  };
  // const onMaterialsChange = (event) => {
  //   setMaterials(event.target.value);
  // };
  const onReviewChange = (event) => {
    setReview(event.target.value);
  };
  // const onBuildingLocationChange = (event) => {
  //   setBuildingLocation(event.target.value);
  // };

  const onBuildingSubmit = async (event) => {
    event.preventDefault();
    onSubmit(name, height, completeYear, rating, review);
  };

  return (
    <form className="building-form" onSubmit={onBuildingSubmit}>
      <h2 className="building-form__name">Building Details</h2>
      {message && <p className="building-form__message">{message}</p>}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <fieldset className="building-form__controls" disabled={isSaving}>
        <label className="building-form__label">Building Name:</label>
        <input className="building-form__input" type="text" value={name} onChange={onNameChange} />
        <label className="building-form__label">Height:</label>
        <input className="building-form__input" type="text" value={height} onChange={onHeightChange} />
        <label className="building-form__label">Year Completed:</label>
        <input
          className="building-form__input"
          type="number"
          value={completeYear}
          max="2020"
          onChange={onYearCompletedChange}
        />
        <label className="building-form__label">Rating:</label>
        <input
          className="building-form__input"
          type="number"
          value={rating}
          max="5"
          onChange={onRatingChange}
        />
         {/* <label className="building-form__label">Materials:</label>
        <input className="building-form__input" type="text" value={materials} onChange={onMaterialsChange} /> */}
        <label className="building-form__label">Review:</label>
        <textarea className="building-form__input" type="text" value={review} rows="3" onChange={onReviewChange} />
        {/* <label className="building-form__label">Location:</label>
        <input className="building-form__input" type="text" value={buildingLocation} onChange={onBuildingLocationChange} /> */}
        <input
          className="building-form__submit"
          type="submit"
          value={isSaving ? "Saving..." : "Save"}
        />
      </fieldset>
    </form>
  );
}

export default BuildingForm;
