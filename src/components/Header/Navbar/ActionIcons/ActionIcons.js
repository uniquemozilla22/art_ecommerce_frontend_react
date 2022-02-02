import React from "react";
import { Tooltip } from "@mui/material";
import {
  HelpOutline,
  PersonOutlineOutlined,
  ShoppingCartOutlined,
  SearchOutlined,
  ListAltTwoTone,
  RemoveRedEyeOutlined,
  LogoutOutlined,
} from "@mui/icons-material";
import classes from "./ActionIcon.module.css";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const ActionIcons = (props) => {
  return (
    <div className={classes.actionIcons}>
      <Tooltip title="Search">
        <SearchOutlined
          className={
            classes.navigation_icons + " " + classes.search__bar__icons
          }
          onClick={() => props.toggleSearch()}
        />
      </Tooltip>
      <Tooltip title="Help-Centre">
        <HelpOutline
          className={classes.navigation_icons}
          onClick={() => props.toggleHelpCenter()}
        />
      </Tooltip>
      <Tooltip title="Cart">
        <ShoppingCartOutlined
          className={classes.navigation_icons}
          onClick={() => props.toggleCart()}
        />
      </Tooltip>

      <Dropdown>
        <Dropdown.Toggle
          id="dropdown-autoclose-true"
          className={classes.profileButton}
          variant="none"
        >
          <Tooltip title="Profile">
            <PersonOutlineOutlined className={classes.navigation_icons} />
          </Tooltip>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">
            <ListAltTwoTone /> Orders
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/editprofile:1" className={classes.dropdown__link}>
              <RemoveRedEyeOutlined />
              View Profile
            </Link>
          </Dropdown.Item>
          <Dropdown.Item href="#">
            <LogoutOutlined /> Logout
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default ActionIcons;
