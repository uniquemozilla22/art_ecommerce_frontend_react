import React, { useState } from "react";
import classes from "./ProductCard.module.css";
import { Card, Modal } from "react-bootstrap";
import {
  Favorite,
  FavoriteBorder,
  FavoriteBorderOutlined,
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
import addCartItem from "../../store/actions/Cart/AddItem.post.js";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import AddWishlistItem from "./../../store/actions/Wishlist/wishlistItem.post";
import isWishlist from "../../store/actions/Wishlist/isWishlist.check";

const BiddingCard = (props) => {
  const useAnimationStyle = (delay) => {
    return useSpring({
      loop: false,
      from: { y: 50, opacity: 0 },
      to: { y: 0, opacity: 1 },
      delay: delay * 200,
    });
  };
  const dispatch = useDispatch();
  const { id, productData, time, delay } = props;

  const isOnWishlist = () => dispatch(isWishlist(id));

  const [isOnWishList, setIsOnWishList] = useState(isOnWishlist());

  const removeFromWishList = () => {
    AddToWishList(id);
    setIsOnWishList(false);
  };

  const AddToWishList = (id) => {
    dispatch(AddWishlistItem(id));
    setIsOnWishList(true);
  };

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

  const goToProduct = (id) => navigate(`/products/${id}`);

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
                {props.token ? (
                  isOnWishList ? (
                    <Tooltip title={`Remove from Wishlist ${productData.name}`}>
                      <Favorite
                        fontSize="small"
                        onClick={(e) => removeFromWishList()}
                      />
                    </Tooltip>
                  ) : (
                    <Tooltip title={`Add to Wishlist ${productData.name}`}>
                      <FavoriteBorderOutlined
                        fontSize="small"
                        onClick={(e) => AddToWishList(id)}
                      />
                    </Tooltip>
                  )
                ) : null}
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
              {props.token ? (
                isOnWishList ? (
                  <button
                    className={classes.button}
                    onClick={(e) => removeFromWishList(id)}
                  >
                    <FavoriteBorderOutlined fontSize="small" />
                    Remove from Wishlist
                  </button>
                ) : (
                  <button
                    className={classes.button}
                    onClick={(e) => AddToWishList(id)}
                  >
                    <FavoriteBorderOutlined fontSize="small" />
                    Add to Wishlist
                  </button>
                )
              ) : null}
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
            {...props}
            removeFromWishList={removeFromWishList}
            AddToWishList={AddToWishList}
            isOnWishList={isOnWishList}
          />
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

  const dispatch = useDispatch();

  const goToProduct = (id) => {
    navigate(`/products/${id}`);
  };
  const { id, productData, delay } = props;

  const isOnWishlist = () => dispatch(isWishlist(id));

  const [isOnWishList, setIsOnWishList] = useState(isOnWishlist());

  const removeFromWishList = () => {
    dispatch(AddWishlistItem(id));
    setIsOnWishList(false);
  };

  const AddToWishList = (id) => {
    dispatch(AddWishlistItem(id));
    setIsOnWishList(true);
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
                {props.token ? (
                  <>
                    {isOnWishList ? (
                      <Tooltip
                        title={`Remove from Wishlist ${productData.name}`}
                      >
                        <Favorite
                          fontSize="small"
                          onClick={(e) => removeFromWishList()}
                        />
                      </Tooltip>
                    ) : (
                      <Tooltip title={`Add to Wishlist ${productData.name}`}>
                        <FavoriteBorderOutlined
                          fontSize="small"
                          onClick={(e) => AddToWishList(id)}
                        />
                      </Tooltip>
                    )}
                    <Tooltip title={`Add to Cart ${productData.name}`}>
                      <ShoppingCartCheckoutOutlined
                        fontSize="small"
                        onClick={(e) =>
                          props.addToCart({
                            id,
                            image_url: productData.image_url,
                            name: productData.name,
                            unit_price: productData.unit_price,
                            description: productData.description,
                          })
                        }
                      />
                    </Tooltip>
                  </>
                ) : null}
              </div>
            </div>
            <div className={classes.priceContainer}>
              <p> Nrs. {productData.unit_price}</p>
            </div>
            <div className={"d-flex d-lg-none " + classes.button__container}>
              <button
                className={classes.button}
                onClick={(e) =>
                  goToProduct({
                    id,
                    name: productData.name,
                    image_url: productData.image_url,
                    unit_price: productData.unit_price,
                    description: productData.description,
                  })
                }
              >
                <RemoveRedEyeOutlined />
                Visit {productData.name}
              </button>
              {props.token ? (
                <>
                  {isOnWishList ? (
                    <button
                      className={classes.button}
                      onClick={(e) => removeFromWishList(id)}
                    >
                      <FavoriteBorderOutlined fontSize="small" />
                      Remove from Wishlist
                    </button>
                  ) : (
                    <button
                      className={classes.button}
                      onClick={(e) => AddToWishList(id)}
                    >
                      <FavoriteBorderOutlined fontSize="small" />
                      Add to Wishlist
                    </button>
                  )}
                  <button
                    className={classes.button}
                    onClick={(e) =>
                      props.addToCart({
                        id,
                        name: productData.name,
                        image_url: productData.image_url,
                        unit_price: productData.unit_price,
                        description: productData.description,
                      })
                    }
                  >
                    <ShoppingCartCheckoutOutlined fontSize="small" />
                    Add to cart
                  </button>
                </>
              ) : null}
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
            {...props}
            removeFromWishList={removeFromWishList}
            AddToWishList={AddToWishList}
            isOnWishList={isOnWishList}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { ...state.user, ...ownProps };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (data) => dispatch(addCartItem(data)),
  };
};

const Products = (props) => {
  return props.time ? <BiddingCard {...props} /> : <ProductCard {...props} />;
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
