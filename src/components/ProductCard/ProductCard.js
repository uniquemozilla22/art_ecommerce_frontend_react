import React, { useState } from "react";
import classes from "./ProductCard.module.css";
import { Card, Modal } from "react-bootstrap";
import {
  Favorite,
  FavoriteBorderOutlined,
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
  const dispatch = useDispatch();
  const { id, productData, time, delay } = props;

  const [days, setDays] = useState(null);
  const [hours, setHours] = useState(null);
  const [mins, setMins] = useState(null);
  const [sec, setSec] = useState(null);

  const timedInterval = setInterval(() => {
    // Get today's date and time
    let now = new Date().getTime();
    // Find the distance between now and the count down date
    let distance = new Date(time).getTime() - now;
    // Time calculations for days, hours, minutes and seconds
    // Time calculations for days, hours, minutes and seconds
    setDays(
      Math.floor(distance / (1000 * 60 * 60 * 24)) > 0
        ? Math.floor(distance / (1000 * 60 * 60 * 24))
        : null
    );

    setHours(
      Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) > 0
        ? Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        : null
    );
    setMins(
      Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) > 0
        ? Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        : null
    );
    setSec(
      Math.floor((distance % (1000 * 60)) / 1000) > 0
        ? Math.floor((distance % (1000 * 60)) / 1000)
        : null
    );
  }, 1000);

  const timed = (days, mins, hour, sec) => {
    if (days) {
      days = days + " d ";
    } else {
      days = "";
    }
    if (mins) {
      mins = mins + " m ";
    } else {
      mins = "";
    }
    if (hour) {
      hour = hour + " h ";
    } else {
      hour = "";
    }
    if (sec) {
      sec = sec + " s ";
    } else {
      sec = 0;
    }
    return days + hour + mins + sec;
  };

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

  const goToProduct = (id) => navigate(`/products/${id}`);

  return (
    <>
      <animated.div className={classes.bidding__classes}>
        <Card className={classes.bidding__card}>
          <Card.Img
            variant="bottom"
            src={productData.image_url}
            className={classes.bidding__image}
            onClick={(e) => goToProduct(id)}
            alt={productData.name}
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
              <p>
                Current Bid:{" "}
                {parseInt(productData.unit_price).toLocaleString("en-IN", {
                  maximumFractionDigits: 2,
                  style: "currency",
                  currency: "NRS",
                })}
              </p>
              <h1 className={classes.time_Remaining}>
                {timed(days, mins, hours, sec)}
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
          <BiddingInformation {...props} />
        </Modal.Body>
      </Modal>
    </>
  );
};

const ProductCard = (props) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const goToProduct = (id) => {
    navigate(`/products/${id}`);
  };
  const { id, productData, delay, supplier, tags, likes, category } = props;

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
      <animated.div className={classes.bidding__classes}>
        <Card className={classes.bidding__card}>
          <Card.Img
            variant="bottom"
            src={productData.image_url}
            className={classes.bidding__image}
            height="400px"
            onClick={(e) => goToProduct(id)}
            alt={productData.name}
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
                            data: productData,
                            supplierInfo: supplier,
                            tags,
                            likesCount: likes,
                            category,
                          })
                        }
                      />
                    </Tooltip>
                  </>
                ) : null}
              </div>
            </div>
            <div className={classes.priceContainer}>
              <p>
                {parseInt(productData.unit_price).toLocaleString("en-IN", {
                  maximumFractionDigits: 2,
                  style: "currency",
                  currency: "NRS",
                })}
              </p>
              <p className={classes.product__description}>
                {productData.description.length >= 10
                  ? productData.description
                  : () => {
                      productData.description.length = 10;
                      return productData.description + "...";
                    }}
              </p>
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
                        data: productData,
                        supplierInfo: supplier,
                        tags,
                        likesCount: likes,
                        category,
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
          <ProductInformation {...props} />
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
