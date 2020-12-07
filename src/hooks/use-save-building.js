import { useState } from "react";
import { buildingsCollection } from "../data/firebase";

function useSaveBuilding() {
    const [isSaving, setIsSaving] = useState(false);
    const [formMessage, setFormMessage] = useState("");
  
    const save = async (buildingData, id) => {
      setIsSaving(true);
      setFormMessage("");
  
      try {
        if (id === undefined) {
            await buildingsCollection.add(buildingData);
        } else {
            await buildingsCollection.doc(id).set(buildingData);
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