import React, { useState } from "react";
import { Delete, Edit } from "@material-ui/icons";
import ErrorMessage from "./error-message";
import "./building.css";

function Building(props) {
  const { id, data } = props;
  const { name, completeYear, rating } = data;

  const [isDeleting, setIsDeleting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const deleteBuilding = async () => {};

  return (
    <div className="building">
      <div className="building__contents">
        <div className="building__title"></div>
        <div className="building__rating"></div>
        <div className="building__year"></div>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </div>
      <div>
        <button className="building__button" disabled={isDeleting} onClick={deleteBuilding}>
          <Delete />
        </button>
        <button className="building__button" onClick={() => {}}>
          <Edit />
        </button>
      </div>
    </div>
  );
}

export default Building;
