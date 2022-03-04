import React, { useEffect, useState } from "react";
import { Tooltip } from "@mui/material";
import {
  HelpOutline,
  PersonOutlineOutlined,
  ShoppingCartOutlined,
  SearchOutlined,
  ListAltTwoTone,
  RemoveRedEyeOutlined,
  LogoutOutlined,
  SettingsVoice,
} from "@mui/icons-material";
import classes from "./ActionIcon.module.css";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const ActionIcons = (props) => {
  const [token, setToken] = useState(props.loggedIn);

  useEffect(() => {
    setToken(props.loggedIn);
  }, [props.loggedIn]);
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

      {token ? (
        <>
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
                <Link to="/editprofile" className={classes.dropdown__link}>
                  <RemoveRedEyeOutlined />
                  View Profile
                </Link>
              </Dropdown.Item>
              <Dropdown.Item onClick={(e) => props.Logout()}>
                <LogoutOutlined /> Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </>
      ) : (
        <Tooltip title="Login">
          <PersonOutlineOutlined
            className={classes.navigation_icons}
            onClick={(e) => props.loginModelToggle()}
          />
        </Tooltip>
      )}
    </div>
  );
};

export default ActionIcons;
