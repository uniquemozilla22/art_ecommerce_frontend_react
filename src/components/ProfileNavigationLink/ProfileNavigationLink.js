import React, { useEffect, useState } from "react";
import { Nav, Tab } from "react-bootstrap";
import DetailsEditor from "../DetailsEditor/DetailsEditor";
import classes from "./ProfileNavigationLink.module.css";
import { Fade } from "react-reveal";
import OrderList from "../Profileproducts/OrderList";
import ProductGrid from "../AritistProductGrid/ProductGrid";
import ArtistsGrid from "../ArtistsGrid/ArtistsGrid";
import SocialEditor from "../SocialEditor/SocialEditor";
import DataNotFound from "../DataNotFound/DataNotFound";
import { useLocation } from "react-router";
import BiddingTable from "../BiddingTable/BiddingTable";
import { useDispatch } from "react-redux";
import FetchAllBids from "../../store/actions/Bid/bid.fetch";

export const ProfileNavigationLink = ({ title, links }) => {
  return links ? (
    <Nav className={"flex-column " + classes.navigation__link}>
      <h3>{title}</h3>
      {links.map((link, index) => (
        <Nav.Item key={index} className={classes.navigation__item}>
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

export const ProfileNavigationContent = ({
  title,
  links,
  updateData,
  postPassword,
  activeStatus,
  email,
  sendOTP,
}) => {
  const functionCreator = (link) => {
    switch (link.title) {
      case "My Profile" || "Address": {
        return (
          <DetailsEditor
            data={link.data}
            updateData={updateData}
            postPassword={postPassword}
            activeStatus={activeStatus}
            email={email}
            sendOTP={sendOTP}
          />
        );
      }
      case "Social":
        return <SocialEditor data={link.data} />;
      case "My Returns":
        return <OrderList datas={link.data} />;
      case "Cancellations":
        return <OrderList datas={link.data} cancelled />;
      case "My Arts":
        return <ProductGrid arts />;
      case "My Bids": {
        return <ProductGrid bids />;
      }
      case "My Artists":
        return <ArtistsGrid artists={link.data} />;
      default:
        return (
          <DataNotFound
            content="No Data Found"
            action={() => useLocation.reload()}
          />
        );
    }
  };

  return links ? (
    links.map((link, index) => (
      <Tab.Pane
        key={index}
        eventKey={link.title.toLowerCase().split(" ").join("")}
        className={classes.tab__pane__container}
      >
        <h3>{link.title}</h3>
        <Fade cascade>
          <div className={classes.tab__container}>{functionCreator(link)}</div>
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
