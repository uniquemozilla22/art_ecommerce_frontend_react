import React from "react";
import { Tooltip } from "@mui/material";
import {
  HelpOutline,
  PersonOutlineOutlined,
  ShoppingCartOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import classes from "./ActionIcon.module.css";

const ActionIcons = () => {
  return (
    <div className={classes.actionIcons}>
      <Tooltip title="Search">
        <SearchOutlined
          className={
            classes.navigation_icons + " " + classes.search__bar__icons
          }
        />
      </Tooltip>
      <Tooltip title="Help-Centre">
        <HelpOutline className={classes.navigation_icons} />
      </Tooltip>
      <Tooltip title="Cart">
        <ShoppingCartOutlined className={classes.navigation_icons} />
      </Tooltip>
      <Tooltip title="Profile">
        <PersonOutlineOutlined className={classes.navigation_icons} />
      </Tooltip>
    </div>
  );
};

export default ActionIcons;
