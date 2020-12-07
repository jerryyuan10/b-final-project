import { useState, useEffect } from "react";
import { buildingsCollection } from "../data/firebase";

function useBuilding(id) {
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [buildingData, setBuildingData] = useState(null);
  
    useEffect(() => {
      async function getBuilding() {
        setIsLoading(true);
        
        try {
          const buildingSnapShot = await buildingsCollection.doc(id).get();
  
          if(!buildingSnapShot.exists) {
            throw new Error("No such building exists!");
          }
  
          const data = buildingSnapShot.data();
          setBuildingData(data);
        } catch (error) {
          setErrorMessage("Something went wrong. Please try again.");
          console.error(error);
        }
        setIsLoading(false);
      }
  
      getBuilding();
    }, [id]);

    return [buildingData, isLoading, errorMessage];
};

export default useBuilding;