import React from "react";
import { Nav } from "react-bootstrap";
import classes from "./ProfileNavigationLink.module.css";
const ProfileNavigationLink = () => {
  return (
    <Nav className={"flex-column " + classes.navigation__link}>
      <h3>Manage Account</h3>
      <Nav.Item>
        <Nav.Link eventKey="first">Tab 1</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="second">Tab 2</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default ProfileNavigationLink;
