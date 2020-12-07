import { useState, useEffect } from "react";
import { buildingsCollection } from "../data/firebase";

// useEffect Hook:
// > Guide, https://reactjs.org/docs/hooks-effect.html
// > API Docs, https://reactjs.org/docs/hooks-reference.html#useeffect

function useAllBuildings() {
    const [buildings, setBuildings] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
  
    const [sort, setSort] = useState(null);
  
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

      let unsubscribe;

      if (sort === "height") {
        unsubscribe = buildingsCollection.orderBy("height","desc").onSnapshot(onNext, onError);
      } else if (sort === "rating") {
        unsubscribe = buildingsCollection.orderBy("rating","desc").onSnapshot(onNext, onError);
      } else {
        unsubscribe = buildingsCollection.onSnapshot(onNext, onError);
      };

      return unsubscribe;
      }, [sort]);

      const onButtonClickRating = () => {
        setSort("rating");
      }
  
      const onButtonClickHeight = () => {
        setSort("height");
      }

    return [buildings, isLoading, errorMessage, onButtonClickRating, onButtonClickHeight];
}

export default useAllBuildings;