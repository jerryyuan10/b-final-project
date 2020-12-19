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
        <div className="building__name">
          <a href={'https://www.google.com/maps/search/' + name} id="name" target="_blank" rel="noreferrer">{name}</a></div>
        <div className="building__height">{height} ft</div>
        <div className="building__rating">Completed Year: {completeYear}</div>
        <div className="building__rating">{ratingString}</div>
        <div className="building__rating">{rating}</div>
        <div className="building__materials">Materials: {materials ? `${materials.join(",")}` : "No data saved."}</div>
        <div className="building__review">Review: "{review ? review : "No review saved."}"</div>
        {/* <div>{buildingLocation.latitude}, {buildingLocation.longitude}</div> */}
        <div className="building__location">
          <a href={'https://www.google.com/maps/search/' + buildingLocation.latitude + ',' + buildingLocation.longitude} id="name" target="_blank" rel="noreferrer">
          Location: {buildingLocation ? `${buildingLocation.latitude}"N, ${buildingLocation.longitude}"E` : "No location saved."}</a>
          </div>
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

// https://www.google.com/maps/search/`${buildingLocation.latitude}`, `${buildingLocation.longitude}`
// https://www.google.com/maps/search/31.23382989048938, 121.5056609133508

export default Building;
