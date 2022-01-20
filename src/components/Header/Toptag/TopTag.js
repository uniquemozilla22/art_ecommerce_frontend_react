import { Grid, Icon, Item, Tooltip } from "@mui/material";
import React from "react";
import classes from "./TopTag.module.css";
import { FacebookOutlined, Instagram, Twitter } from "@mui/icons-material";
import Social from "../../Social/Social";
const TopTag = () => {
  return (
    <div className={classes.topTag}>
      <div className="container-fluid">
        <div className="row">
          <div className={"col-md-10 " + classes.topTag__contact}>
            <p>Customer Care:</p>
            <p>+977 9812345123 </p>
            <p> Get Assistance Now</p>
          </div>
          <Social />
        </div>
      </div>
    </div>
  );
};

export default TopTag;
