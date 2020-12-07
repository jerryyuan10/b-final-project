import React from "react";
import LoadingSpinner from "./loading-spinner";
import ErrorMessage from "./error-message";
import useAllBuildings from "../hooks/use-all-buildings";
import "./building-listing.css";
import Building from "./building";

function BuildingListing() {
  const [buildings, isLoading, errorMessage, onButtonClickRating, onButtonClickHeight] = useAllBuildings();


  return (
    <div className="buildings-container">
      <h1>Buildings</h1>
      {isLoading && (
        <LoadingSpinner
          size="50px"
          spinnerColor="lightgray"
          backgroundColor="rgb(2, 50, 153)"
        />
      )}
      {errorMessage && <ErrorMessage displayAsCard>{errorMessage}</ErrorMessage>}
      <div>
      <button className="button-click" type="button" onClick={onButtonClickRating} >Sort by rating ⬇</button>
      <button className="button-click" type="button" onClick={onButtonClickHeight} >Sort by height ⬇</button>
      <ul className="building-list">
        {buildings.map((buildingDoc) => {
          const buildingName = buildingDoc.id;
          const buildingData = buildingDoc.data();
          return (
            <li className="building-list" key={buildingName}>
              <Building id={buildingName} data={buildingData} />
            </li>
          )
        })}
      </ul>
      </div>
    </div>
  );
}

export default BuildingListing;
