import React, { useState } from "react";
import classes from "./BiddingCard.module.css";
import { Card, ListGroup, ListGroupItem, Modal } from "react-bootstrap";
import {
  FavoriteBorderOutlined,
  FavoriteOutlined,
  HeartBrokenOutlined,
  MonitorHeartOutlined,
  RemoveRedEyeOutlined,
  ShoppingCartCheckoutOutlined,
} from "@mui/icons-material";
import { animated, useSpring } from "react-spring";
import { Tooltip } from "@mui/material";
import ProductInformation, {
  BiddingInformation,
} from "../ProductInformation/ProductInformation";
export const BiddingCard = ({ id, name, image, currentPrice, time, delay }) => {
  const useAnimationStyle = (delay) => {
    return useSpring({
      loop: false,
      from: { y: 50, opacity: 0 },
      to: { y: 0, opacity: 1 },
      delay: delay * 200,
    });
  };

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(!showModal);

  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = new Date(time).getTime() - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  return (
    <>
      <animated.div
        className={classes.bidding__classes}
        style={useAnimationStyle(delay)}
      >
        <Card className={classes.bidding__card}>
          <Card.Img
            variant="bottom"
            src={image}
            className={classes.bidding__image}
            height="300px"
          />
          <Card.Body className={classes.card_body}>
            <div className={classes.Biddingcard__header}>
              <Card.Title>{name}</Card.Title>
              <div
                className={"d-none d-lg-block " + classes.actions__container}
              >
                <Tooltip title={`View ${name}`}>
                  <RemoveRedEyeOutlined
                    fontSize="small"
                    onClick={() => handleShowModal()}
                  />
                </Tooltip>
                <Tooltip title={`Add to Wishlist ${name}`}>
                  <FavoriteBorderOutlined fontSize="small" />
                </Tooltip>
              </div>
            </div>
            <div className={classes.priceContainer}>
              <p>Current Bid: Nrs. {currentPrice}</p>
              <h1 className={classes.time_Remaining}>
                {days + " days " + hours + " hours remaining"}
              </h1>
            </div>
          </Card.Body>
        </Card>
      </animated.div>
      <Modal
        show={showModal}
        onHide={() => handleShowModal()}
        size="xl"
        centered
        dialogClassName={classes.modal__container}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter"> </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <BiddingInformation
            image={image}
            name={name}
            price={currentPrice}
            supplier={1}
            like={99}
            tags={["Abstract", "Lovely", "Mystical"]}
            categories={["Abstract", "Lovely", "Mystical", "Natural"]}
            time={time}
            highestbidder={"Ramesh Yadav"}
            highestbidderImage={image}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export const ProductCard = ({ id, image, name, price, delay }) => {
  const useAnimationStyle = (delay) => {
    return useSpring({
      loop: false,
      from: { y: 50, opacity: 0 },
      to: { y: 0, opacity: 1 },
      delay: delay * 200,
    });
  };

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(!showModal);
  return (
    <>
      <animated.div
        className={classes.bidding__classes}
        style={useAnimationStyle(delay)}
      >
        <Card className={classes.bidding__card}>
          <Card.Img
            variant="bottom"
            src={image}
            className={classes.bidding__image}
            height="400px"
          />
          <Card.Body className={classes.card_body}>
            <div className={classes.Biddingcard__header}>
              <Card.Title>{name}</Card.Title>
              <div
                className={"d-none d-lg-block " + classes.actions__container}
              >
                <Tooltip title={`View ${name}`}>
                  <RemoveRedEyeOutlined
                    fontSize="small"
                    onClick={() => handleShowModal()}
                  />
                </Tooltip>
                <Tooltip title={`Add to Wishlist ${name}`}>
                  <FavoriteBorderOutlined fontSize="small" />
                </Tooltip>
                <Tooltip title={`Add to Cart ${name}`}>
                  <ShoppingCartCheckoutOutlined fontSize="small" />
                </Tooltip>
              </div>
            </div>
            <div className={classes.priceContainer}>
              <p> Nrs. {price}</p>
            </div>
          </Card.Body>
        </Card>
      </animated.div>
      <Modal
        show={showModal}
        onHide={() => handleShowModal()}
        size="xl"
        centered
        dialogClassName={classes.modal__container}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter"> </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ProductInformation
            image={image}
            name={name}
            price={price}
            supplier={1}
            like={99}
            tags={["Abstract", "Lovely", "Mystical"]}
            categories={["Abstract", "Lovely", "Mystical", "Natural"]}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};
