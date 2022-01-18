import React from "react";
import classes from "./Logo.module.css";
import { BarChart } from "@mui/icons-material";

const Logo = (props) => {
  return (
    <div className={classes.logo_container}>
      <BarChart
        className={classes.menuIcon}
        onClick={(e) => props.toogleCategory()}
      />
      <img src={props.image} alt={props.alt} />
    </div>
  );
};

export default Logo;
