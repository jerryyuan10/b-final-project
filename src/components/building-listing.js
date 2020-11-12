import React, { useEffect, useState } from "react";
import LoadingSpinner from "./loading-spinner";
import ErrorMessage from "./error-message";
import "./building-listing.css";
import { buildingsCollection } from "../data/firebase";
import Building from "./building";

// useEffect Hook:
// > Guide, https://reactjs.org/docs/hooks-effect.html
// > API Docs, https://reactjs.org/docs/hooks-reference.html#useeffect

function BuildingListing() {
  const [buildings, setBuildings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setIsLoading(true);
    const onNext = (snapshot) => {
      setIsLoading(false);
      const docs = snapshot.docs;
      setBuildings(docs);
    };
    const onError = (error) => {
      setErrorMessage("There was a problem. Please try again.");
      console.error(error);
    };
    const unsubscribe = buildingsCollection.onSnapshot(onNext, onError);
    return unsubscribe;
    }, []);

  // function ratingOrder() {
  //   setIsLoading(true);
  //     const onNext = (snapshot) => {
  //       setIsLoading(false);
  //       const docs = snapshot.docs;
  //       setBuildings(docs);
  //     };
  //       const onError = (error) => {
  //       setErrorMessage("There was a problem. Please try again.");
  //       console.error(error);
  //     };
  //       const unsubscribe = buildingsCollection.orderBy("rating", "desc").onSnapshot(onNext, onError);
  //       return unsubscribe; 
  //   };

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
      {/* <button type="button" onClick={ratingOrder} >Sort by height ⬇</button> */}
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
