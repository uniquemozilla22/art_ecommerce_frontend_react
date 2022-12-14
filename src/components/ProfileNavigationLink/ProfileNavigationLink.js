import React, { useCallback, useEffect, useState } from "react";
import { Nav, Tab } from "react-bootstrap";
import DetailsEditor from "../DetailsEditor/DetailsEditor";
import classes from "./ProfileNavigationLink.module.css";
import ProductGrid from "../AritistProductGrid/ProductGrid";
import ArtistsGrid from "../ArtistsGrid/ArtistsGrid";
import SocialEditor from "../SocialEditor/SocialEditor";
import DataNotFound from "../DataNotFound/DataNotFound";
import { useLocation } from "react-router";
import AddressComponentEditProfile from "./Address/Address.comp";
import { useDispatch } from "react-redux";
import GetOrderList from "../../store/actions/Order/OrderList.fetch";
import OrderComponent from "./../../pages/order/OrderComponent.comp";

export const ProfileNavigationLink = ({ title, links, social }) => {
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
  social,
}) => {
  const [orderData, setOrderData] = useState(null);

  const dispatch = useDispatch();

  const fetchOrder = async () => {
    const data = await dispatch(GetOrderList());
    console.log("Order DAta", data);
    setOrderData(data);
  };

  useEffect(() => fetchOrder(), []);
  const cancelled = (order) => {
    let updating = orderData;
    let cancelledIndex = orderData.findIndex((or) => or.id === order);
    console.log(cancelledIndex);
    updating[cancelledIndex] = {
      ...updating[cancelledIndex],
      status: "cancelled",
    };
    setOrderData(updating);
  };

  const deleteOrder = (order) => {
    let updated = orderData.filter((orders) => orders.id !== order);
    setOrderData(updated);
  };

  const functionCreator = (link) => {
    switch (link.title) {
      case "My Profile": {
        return (
          <DetailsEditor
            updateData={updateData}
            postPassword={postPassword}
            activeStatus={activeStatus}
            email={email}
            sendOTP={sendOTP}
            social={social}
          />
        );
      }
      case "Address": {
        return <AddressComponentEditProfile />;
      }
      case "Social":
        return <SocialEditor data={link.data} />;
      case "Order History":
        return (
          <OrderComponent
            orders={orderData?.filter((o) => o.status !== "cancelled")}
            fetchOrderData={fetchOrder}
            cancelled={cancelled}
            deleteOrder={deleteOrder}
          />
        );
      case "Cancellations":
        return (
          <OrderComponent
            orders={orderData?.filter((o) => o.status === "cancelled")}
            fetchOrderData={fetchOrder}
            cancelled={cancelled}
            deleteOrder={deleteOrder}
          />
        );
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
          <div className={classes.tab__container}>{functionCreator(link)}</div>
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
