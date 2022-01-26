import React from "react";
import classes from "./Logo.module.css";
import { BarChart } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import { Link } from "react-router-dom";

const Logo = (props) => {
  return (
    <Link className={classes.logo_container} to="/">
      <Tooltip title="Categories Menu">
        <BarChart
          className={classes.menuIcon}
          onClick={(e) => props.toogleCategory()}
        />
      </Tooltip>
      <img src={props.image} alt={props.alt} />
    </Link>
  );
};

export default Logo;
