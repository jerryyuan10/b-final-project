import React, { useState } from "react";
import ErrorMessage from "./error-message";
import "./building-form.css";
// import db, { buildingsCollection } from "../data/firebase";
import firebase from "firebase/app";
import { Label } from "@material-ui/icons";

function BuildingForm(props) {
  const { initialState = {}, message, isSaving, onSubmit } = props;

  if (initialState.name === undefined) initialState.name = "";
  if (initialState.height === undefined) initialState.height = 1597;
  if (initialState.completeYear === undefined) initialState.completeYear = 2020;
  if (initialState.rating === undefined) initialState.rating = 4;
  if (initialState.materials === undefined) initialState.materials = [""];
  if (initialState.review === undefined) initialState.review = "";
  // if (initialState.buildingLocation === undefined) initialState.buildingLocation = "";

  const [name, setName] = useState(initialState.name);
  const [height, setHeight] = useState(initialState.height);
  const [completeYear, setCompleteYear] = useState(initialState.completeYear);
  const [rating, setRating] = useState(initialState.rating);
  const [materials, setMaterials] = useState(initialState.materials);
  const [review, setReview] = useState(initialState.review);


  // const [buildingLocation, setBuildingLocation] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  

  const [errorMessage] = useState("");

  const onNameChange = (event) => {
    setName(event.target.value);
  };
  const onHeightChange = (event) => {    
    setHeight(Number(event.target.value));
  };
  const onYearCompletedChange = (event) => {
    setCompleteYear(Number(event.target.value));
  };
  const onRatingChange = (event) => {
    setRating(Number(event.target.value));
  };
  const onMaterialsChange = (event) => {
    setMaterials((event.target.value).split(","));
  };
  const onReviewChange = (event) => {
    setReview(event.target.value);
  };

  const onLatitudeChange = (event) => {
    setLatitude(Number(event.target.value));
  };

  const onLongitudeChange = (event) => {
    setLongitude(Number(event.target.value));
  };

  const buildingLocation = new firebase.firestore.GeoPoint(latitude, longitude);

  // console.log(setMaterials);

  // const onBuildingLocationChange = (event) => {
  //   setBuildingLocation(new firebase.firestore.GeoPoint(latitude, longitude));
  // };

  const onBuildingSubmit = async (event) => {
    event.preventDefault();
    onSubmit(name, height, completeYear, rating, materials, review, buildingLocation);
  };

  // console.log(latitude); 
  // console.log(longitude); 
  // console.log(buildingLocation);
  
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
         <label className="building-form__label">Materials: </label>
        <input className="building-form__input" type="text" value={materials} onChange={onMaterialsChange} />
        <label className="building-form__label">Review:</label>
        <textarea className="building-form__input" type="text" value={review} rows="3" onChange={onReviewChange} />
        {/* <label className="building-form__label">Location:</label> */}
        {/* <input className="building-form__input" type="number" value={buildingLocation} onChange={onBuildingLocationChange} /> */}
        <label className="building-form__label">latitude:</label>
        <input className="building-form__input" type="number" value={latitude} min="-90" max="90" onChange={onLatitudeChange} />
        <label className="building-form__label">longitude:</label>
        <input className="building-form__input" type="number" value={longitude} min="-180" max="180"onChange={onLongitudeChange} />
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
