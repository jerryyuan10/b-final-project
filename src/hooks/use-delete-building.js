import {useState} from "react";
import { usersCollection } from "../data/firebase";

function useDeleteBuilding(userId, buildingId) {
    const [isDeleting, setIsDeleting] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
  
    const deleteBuilding = async () => {
      setIsDeleting(true);
      setErrorMessage("");
      try {
        const docRef = usersCollection.doc(userId).collection("buildings").doc(buildingId);
        await docRef.delete();
      } catch (error) {
        console.error(error);
        setErrorMessage("Something went wrong while deleting. Please try again.");
        setIsDeleting(false);
      }
    };

    return [isDeleting, errorMessage, deleteBuilding];
}

export default useDeleteBuilding;