import React from "react";
import { Nav, Tab } from "react-bootstrap";
import DetailsEditor from "../DetailsEditor/DetailsEditor";
import classes from "./ProfileNavigationLink.module.css";
import { useSpring, animated } from "react-spring";
import { Fade } from "react-reveal";
import OrderList from "../Profileproducts/OrderList";
import ProductGrid from "../AritistProductGrid/ProductGrid";
import ArtistsGrid from "../ArtistsGrid/ArtistsGrid";
import SocialEditor from "../SocialEditor/SocialEditor";

export const ProfileNavigationLink = ({ title, links }) => {
  return links ? (
    <Nav className={"flex-column " + classes.navigation__link}>
      <h3>{title}</h3>
      {links.map((link) => (
        <Nav.Item className={classes.navigation__item}>
          <Nav.Link eventKey={link.title.toLowerCase().split(" ").join("")}>
            {link.title}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  ) : (
    <Nav className={"flex-column " + classes.navigation__link}>
      <Nav.Item className={classes.navigation__item}>
        <Nav.Link eventKey={title.toLowerCase().split(" ").join("")}>
          <h3>{title}</h3>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export const ProfileNavigationContent = ({ title, links }) => {
  return links ? (
    links.map((link) => (
      <Tab.Pane
        eventKey={link.title.toLowerCase().split(" ").join("")}
        className={classes.tab__pane__container}
      >
        <h3>{link.title}</h3>
        <Fade cascade>
          <animated.div className={classes.tab__container}>
            {link.title === "My Profile" || link.title === "Address" ? (
              <DetailsEditor data={link.data} />
            ) : null}
            {link.title === "Social" ? <SocialEditor data={link.data} /> : null}
            {link.title === "My Returns" ? (
              <OrderList datas={link.data} />
            ) : null}
            {link.title === "Cancellations" ? (
              <OrderList datas={link.data} cancelled />
            ) : null}
            {link.title === "My Arts" ? (
              <ProductGrid products={link.data} />
            ) : null}
            {link.title === "My Artists" ? (
              <ArtistsGrid artists={link.data} />
            ) : null}
          </animated.div>
        </Fade>
      </Tab.Pane>
    ))
  ) : (
    <Tab.Pane
      eventKey={title.toLowerCase().split(" ").join("")}
      className={classes.tab__pane__container}
    >
      <h3>{title}</h3>
    </Tab.Pane>
  );
};
