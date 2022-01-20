import React from "react";
import classes from "./Social.module.css";
import { Tooltip } from "@mui/material";
import { FacebookOutlined, Instagram, Twitter } from "@mui/icons-material";

const Social = () => {
  return (
    <div className={"col-md-2 " + classes.topTag__social_icons}>
      <Tooltip title="Facebook">
        <FacebookOutlined className={classes.icon} />
      </Tooltip>
      <Tooltip title="Instagram">
        <Instagram className={classes.icon} />
      </Tooltip>
      <Tooltip title="Twitter">
        <Twitter className={classes.icon} />
      </Tooltip>
    </div>
  );
};

export default Social;
