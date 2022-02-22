import React from "react";
import { Link } from "react-router-dom";
import classes from "./Confirm_email.module.css";
import FeatherIcon from "feather-icons-react";
import { Tooltip } from "@mui/material";

const Confirm_email = () => {
  return (
    <div className={classes.confirmation__page}>
      <div className={"container"}>
        <div className={classes.title__container}>
          <h1>Your Email is now verified</h1>
          <Tooltip title="Verified">
            <FeatherIcon icon="check" className={classes.icon} />
          </Tooltip>
        </div>
        <Link to="/">Go to home</Link>
        <Link to="/editprofile">Go to Profile</Link>
      </div>
    </div>
  );
};

export default Confirm_email;
