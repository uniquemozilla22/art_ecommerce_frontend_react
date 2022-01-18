import React from "react";
import classes from "./Logo.module.css";

const Logo = ({ image, alt }) => {
  return (
    <div className={classes.logo_container}>
      <img src={image} alt={alt} />
    </div>
  );
};

export default Logo;
