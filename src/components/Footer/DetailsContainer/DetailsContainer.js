import React from "react";
import classes from "./DetailsContainer.module.css";

const DetailsContainer = ({ name, logo, contactNumber, address }) => {
  return (
    <div className={classes.details__container}>
      <div className={classes.image__container}>
        <img src={logo} alt="logo" height={"140px"} width={"200px"} />
      </div>
      <div className={classes.details__content}>
        <h2>{name}</h2>
        <p>{address}</p>
      </div>
    </div>
  );
};

export default DetailsContainer;
