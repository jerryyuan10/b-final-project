import { useState } from "react";
import { usersCollection } from "../data/firebase";

function useSaveBuilding() {
    const [isSaving, setIsSaving] = useState(false);
    const [formMessage, setFormMessage] = useState("");
  
    const save = async (buildingData, userId, buildingId) => {
      setIsSaving(true);
      setFormMessage("");
  
      try {
        if (buildingId === undefined) {
            await usersCollection.doc(userId).collection("buildings").add(buildingData);
        } else {
            await usersCollection.doc(userId).collection("buildings").doc(buildingId).set(buildingData);
        }
        setFormMessage("Savd successfully!");
      } catch (error) {
        setFormMessage("Something went wrong editing this building. Please try again.");
        console.error(error);
      }
  
      setIsSaving(false);
    };

    return [save, isSaving, formMessage];
};

export default useSaveBuilding;