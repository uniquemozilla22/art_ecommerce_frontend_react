import React, { useState } from "react";
import classes from "./ProductCard.module.css";
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
import { connect } from "react-redux";
import addCartItem from "../../store/actions/Cart/AddItem";
import { useNavigate } from "react-router";

const BiddingCard = (props) => {
  const useAnimationStyle = (delay) => {
    return useSpring({
      loop: false,
      from: { y: 50, opacity: 0 },
      to: { y: 0, opacity: 1 },
      delay: delay * 200,
    });
  };
  const { id, productData, supplier, time, auction, category, delay } = props;

  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleShowModal = () => setShowModal(!showModal);

  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = new Date(time).getTime() - now;

  // Time calculations for days, hours, minutes and seconds
  // Time calculations for days, hours, minutes and seconds
  let days =
    Math.floor(distance / (1000 * 60 * 60 * 24)) > 0
      ? Math.floor(distance / (1000 * 60 * 60 * 24)) + " days"
      : 0;
  let hours =
    Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) > 0
      ? Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) +
        " hours"
      : 0;

  const goToProduct = (id) => {
    console.log(id);
    navigate(`/products/${id}`);
  };
  return (
    <>
      <animated.div
        className={classes.bidding__classes}
        style={useAnimationStyle(delay)}
      >
        <Card className={classes.bidding__card}>
          <Card.Img
            variant="bottom"
            src={productData.image_url}
            className={classes.bidding__image}
          />
          <Card.Body className={classes.card_body}>
            <div className={classes.Biddingcard__header}>
              <Card.Title>{productData.name}</Card.Title>
              <div
                className={"d-none d-lg-block " + classes.actions__container}
              >
                <Tooltip title={`View ${productData.name}`}>
                  <RemoveRedEyeOutlined
                    fontSize="small"
                    onClick={() => handleShowModal()}
                  />
                </Tooltip>
                <Tooltip title={`Add to Wishlist ${productData.name}`}>
                  <FavoriteBorderOutlined fontSize="small" />
                </Tooltip>
              </div>
            </div>
            <div className={classes.priceContainer}>
              <p>Current Bid: Nrs. {productData.unit_price}</p>
              <h1 className={classes.time_Remaining}>
                {days + hours === 0 ? "Ended" : days + hours}
              </h1>
            </div>
            <div className={"d-flex d-lg-none " + classes.button__container}>
              <button
                className={classes.button}
                onClick={(e) => goToProduct(id)}
              >
                <RemoveRedEyeOutlined fontSize="small" />
                Visit {productData.name}
              </button>
              <button
                className={classes.button}
                onClick={(e) => props.addToCart("data")}
              >
                <FavoriteBorderOutlined fontSize="small" />
                Add to cart
              </button>
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
          <BiddingInformation {...props} />
        </Modal.Body>
      </Modal>
    </>
  );
};

const ProductCard = (props) => {
  const useAnimationStyle = (delay) => {
    return useSpring({
      loop: false,
      from: { y: 50, opacity: 0 },
      to: { y: 0, opacity: 1 },
      delay: delay * 200,
    });
  };
  const navigate = useNavigate();

  const goToProduct = (id) => {
    navigate(`/products/${id}`);
  };
  const { id, productData, supplier, time, auction, category, delay } = props;

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
            src={productData.image_url}
            className={classes.bidding__image}
            height="400px"
          />
          <Card.Body className={classes.card_body}>
            <div className={classes.Biddingcard__header}>
              <Card.Title>{productData.name}</Card.Title>
              <div
                className={"d-none d-lg-block " + classes.actions__container}
              >
                <Tooltip title={`View ${productData.name}`}>
                  <RemoveRedEyeOutlined
                    fontSize="small"
                    onClick={() => handleShowModal()}
                  />
                </Tooltip>
                <Tooltip title={`Add to Wishlist ${productData.name}`}>
                  <FavoriteBorderOutlined fontSize="small" />
                </Tooltip>
                <Tooltip title={`Add to Cart ${productData.name}`}>
                  <ShoppingCartCheckoutOutlined
                    fontSize="small"
                    onClick={(e) => props.addToCart("data")}
                  />
                </Tooltip>
              </div>
            </div>
            <div className={classes.priceContainer}>
              <p> Nrs. {productData.unit_price}</p>
            </div>
            <div className={"d-flex d-lg-none " + classes.button__container}>
              <button
                className={classes.button}
                onClick={(e) => goToProduct(id)}
              >
                <RemoveRedEyeOutlined />
                Visit {productData.name}
              </button>
              <button
                className={classes.button}
                onClick={(e) => props.addToCart("data")}
              >
                <ShoppingCartCheckoutOutlined fontSize="small" />
                Add to cart
              </button>
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
          <ProductInformation {...props} />
        </Modal.Body>
      </Modal>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (data) => dispatch(addCartItem(data)),
  };
};

const Products = (props) => {
  return props.time ? <BiddingCard {...props} /> : <ProductCard {...props} />;
};

export default connect(mapDispatchToProps)(Products);
