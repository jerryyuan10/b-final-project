import React, { useState } from "react";
import ErrorMessage from "./error-message";
import "./building-form.css";
import firebase from "firebase/app";
// import db, { buildingsCollection } from "../data/firebase";

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

  const onBuildingSubmit = async (event) => {
    event.preventDefault();

    setErrorMessage("");

    if (name === "" ) {
      setErrorMessage("Please enter a building's name.");
      return;
    }
    if (height === "" ) {
      setErrorMessage("Please enter a building's height.");
      return;
    }
    if (completeYear === "" ) {
      setErrorMessage("Please enter a complete year.");
      return;
    }
    if (rating === "" ) {
      setErrorMessage("Please enter a rating.");
      return;
    }

    const ratingAsNum = Number(rating);
    if (Number.isNaN(ratingAsNum) || ratingAsNum < 1 || ratingAsNum > 5) {
      setErrorMessage("Please enter a number rating between 1 and 5.");
      return;
    }
    const heightAsNum = Number(height);
    if (Number.isNaN(heightAsNum) || heightAsNum < 1 ) {
      setErrorMessage("Please enter a valid height.");
      return;
    }
    const yearAsNum = Number(completeYear);
    if (Number.isNaN(yearAsNum) || yearAsNum % 1 !== 0 || yearAsNum < 0 || yearAsNum > 2021) {
      setErrorMessage("Please enter a valid year.");
      return;
    }
    const latitudeAsNum = Number(latitude);
    if (Number.isNaN(latitudeAsNum) || latitudeAsNum < -90 || latitudeAsNum > 90) {
      setErrorMessage("Please enter a valid latitude.");
      return;
    }
    const longitudeAsNum = Number(longitude);
    if (Number.isNaN(longitudeAsNum) || longitudeAsNum < -180 || longitudeAsNum > 180) {
      setErrorMessage("Please enter a valid longitude.");
      return;
    }

    onSubmit(name, heightAsNum, yearAsNum, ratingAsNum, materials, review, buildingLocation);
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
          max="2021"
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
        <label className="building-form__label">latitude ( -90 to 90) : </label>
        <input className="building-form__input" type="number"  value={latitude}  onChange={onLatitudeChange} />
        <label className="building-form__label">longitude ( -180 to 180):</label>
        <input className="building-form__input" type="number" value={longitude}  onChange={onLongitudeChange} />
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
