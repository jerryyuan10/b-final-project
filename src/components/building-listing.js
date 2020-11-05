import React, { useState } from "react";
import LoadingSpinner from "./loading-spinner";
import ErrorMessage from "./error-message";
import "./building-listing.css";

// useEffect Hook:
// > Guide, https://reactjs.org/docs/hooks-effect.html
// > API Docs, https://reactjs.org/docs/hooks-reference.html#useeffect

function BuildingListing() {
  const [buildings, setBuildings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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
      <ul className="building-list">Buildings show here!</ul>
    </div>
  );
}

export default BuildingListing;
