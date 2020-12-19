import React from "react";
import { Delete, Edit } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import ErrorMessage from "./error-message";
import useDeleteBuilding from "../hooks/use-delete-building";
import "./building.css";

function Building(props) {
  const { id, data, userId } = props;
  const { name, completeYear, rating, height, review, materials, buildingLocation } = data;

  const ratingString = "💙".repeat(rating) + "🤍".repeat(5.9 - rating);

  const history = useHistory();
  const [isDeleting, errorMessage, deleteBuilding] = useDeleteBuilding(userId, id);


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
