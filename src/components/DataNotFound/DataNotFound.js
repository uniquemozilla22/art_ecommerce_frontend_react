import React from "react";
import classes from "./DataNotFound.module.css";
import NotFoundImage from "../../Assets/not_found.png";
import FeatherIcons from "feather-icons-react";

const DataNotFound = ({ action, content }) => {
  return (
    <div className={classes.not_found__container}>
      <img src={NotFoundImage} alt="Data Not Found" />
      <h2>{content || " Data Not Found"}</h2>
      <button onClick={(e) => action()}>
        <FeatherIcons icon={"refresh-ccw"} />
        Refresh
      </button>
    </div>
  );
};

export default DataNotFound;
