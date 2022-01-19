import React from "react";
import classes from "./Logo.module.css";
import { BarChart } from "@mui/icons-material";
import { Tooltip } from "@mui/material";

const Logo = (props) => {
  return (
    <div className={classes.logo_container}>
      <Tooltip title="Categories Menu">
        <BarChart
          className={classes.menuIcon}
          onClick={(e) => props.toogleCategory()}
        />
      </Tooltip>

      <img src={props.image} alt={props.alt} />
    </div>
  );
};

export default Logo;
