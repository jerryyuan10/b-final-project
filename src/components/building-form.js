import React, { useState } from "react";
import ErrorMessage from "./error-message";
import "./building-form.css";

function BuildingForm(props) {
  const { message, isSaving } = props;

  const [name, setName] = useState("");
  const [rating, setRating] = useState(3);
  const [completeYear, setCompleteYear] = useState(2020);
  const [errorMessage, setErrorMessage] = useState("");

  const onNameChange = (event) => {
    setName(event.target.value);
  };
  const onRatingChange = (event) => {
    setRating(event.target.value);
  };
  const onYearCompletedChange = (event) => {
    setCompleteYear(event.target.value);
  };

  const onBuildingSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <form className="building-form" onSubmit={onBuildingSubmit}>
      <h2 className="building-form__title">Building Details</h2>
      {message && <p className="building-form__message">{message}</p>}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <fieldset className="building-form__controls" disabled={isSaving}>
        <label className="building-form__label">Building Name:</label>
        <input className="building-form__input" type="text" value={name} onChange={onNameChange} />
        <label className="building-form__label">Rating:</label>
        <input
          className="building-form__input"
          type="number"
          value={rating}
          onChange={onRatingChange}
        />
        <label className="building-form__label">Year Completed:</label>
        <input
          className="building-form__input"
          type="number"
          value={completeYear}
          onChange={onYearCompletedChange}
        />
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
