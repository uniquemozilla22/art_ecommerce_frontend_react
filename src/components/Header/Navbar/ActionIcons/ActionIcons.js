import React, { useEffect, useState } from "react";
import { Badge, Tooltip } from "@mui/material";
import {
  HelpOutline,
  PersonOutlineOutlined,
  ShoppingCartOutlined,
  SearchOutlined,
  ListAltTwoTone,
  RemoveRedEyeOutlined,
  LogoutOutlined,
  FavoriteBorderOutlined,
  AccountCircleOutlined,
} from "@mui/icons-material";
import classes from "./ActionIcon.module.css";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardBalance from "./Card/Card";

const ActionIcons = (props) => {
  const [token, setToken] = useState(props.loggedIn);
  useEffect(() => {
    setToken(props.loggedIn);
  }, [props.loggedIn]);
  console.log(props);
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

      {token ? (
        <Tooltip title="Wishlist">
          <Link to="/wishlist">
            <FavoriteBorderOutlined className={classes.navigation_icons} />
          </Link>
        </Tooltip>
      ) : null}
      {token ? (
        <>
          <Tooltip title="Cart">
            <Badge
              color="primary"
              badgeContent={props.cartContent.cartItems.length}
            >
              <ShoppingCartOutlined
                className={classes.navigation_icons}
                onClick={() => props.toggleCart()}
              />
            </Badge>
          </Tooltip>
          <Dropdown className={classes.dropdown___link}>
            <Dropdown.Toggle
              id="dropdown-autoclose-true"
              className={classes.profileButton}
              variant="none"
            >
              <Tooltip title="Profile">
                {token ? (
                  <CardBalance
                    balance={props.user.balance}
                    username={props.user.username}
                  />
                ) : (
                  <PersonOutlineOutlined className={classes.navigation_icons} />
                )}
              </Tooltip>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item disabled>
                <CardBalance
                  balance={props.user.balance}
                  email={props.user.username || props.user.email}
                />
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>
                <Link to="/orders" className={classes.dropdown__link}>
                  <ListAltTwoTone /> Orders
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="/mybids" className={classes.dropdown__link}>
                  <RemoveRedEyeOutlined />
                  My Bids
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="/editprofile" className={classes.dropdown__link}>
                  <AccountCircleOutlined />
                  Profile
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
