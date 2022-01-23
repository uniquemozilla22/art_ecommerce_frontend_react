import React from "react";
import classes from "./CopyrightBanner.module.css";

const CopyrightBanner = () => {
  return (
    <div className={classes.copyrightBanner}>
      <p>Copyright © AIT Centre Pvt Ltd {new Date().getFullYear()}</p>
    </div>
  );
};

export default CopyrightBanner;
