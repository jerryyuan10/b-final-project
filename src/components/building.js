import React, { useState } from "react";
import { Delete, Edit } from "@material-ui/icons";
import ErrorMessage from "./error-message";
import "./building.css";
import { usersCollection } from "../data/firebase";
import { useHistory } from "react-router-dom";

function Building(props) {
  const { id, data, userId } = props;
  const { name, completeYear, rating, height, review, materials, buildingLocation } = data;

  const ratingString = "💙".repeat(rating) + "🤍".repeat(5.9 - rating);

  const history = useHistory();
  const [isDeleting, setIsDeleting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const deleteBuilding = async () => {
    setIsDeleting(true);
    setErrorMessage("");
    try {
      const docRef = usersCollection.doc(userId).collection("buildings").doc(id);
      await docRef.delete();
    } catch (error) {
      console.error(error);
      setErrorMessage("Something went wrong while deleting. Please try again.");
      setIsDeleting(false);
    }
  };

  return (
    <div className="building">
      <div className="building__contents">
        <div className="building__name">{name}</div>
        <div className="building__height">{height} ft</div>
        <div className="building__rating">Completed Year: {completeYear}</div>
        <div className="building__rating">{ratingString}</div>
        <div className="building__rating">{rating}</div>
        <div className="building__materials">Materials: {materials ? `${materials.join(",")}` : "No data saved."}</div>
        <div className="building__review">Review: "{review ? review : "No review saved."}"</div>
        {/* <div>{buildingLocation.latitude}, {buildingLocation.longitude}</div> */}
        <div className="building__location">Location: {buildingLocation ? `${buildingLocation.latitude}, ${buildingLocation.longitude}` : "No location saved."}</div>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </div>
      <div>
        <button className="building__button" disabled={isDeleting} onClick={deleteBuilding}>
          <Delete />
        </button>
        <button className="building__button" onClick={() => history.push(`/edit/${id}`)}>
          <Edit />
        </button>
      </div>
    </div>
  );
}

export default Building;
