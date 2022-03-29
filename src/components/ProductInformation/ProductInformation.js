import React, { useState } from "react";
import classes from "./ProductInformation.module.css";
import FeatherIcon from "feather-icons-react";
import { Link, useLocation } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Avatar, Tooltip } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import AddCartItem from "../../store/actions/Cart/AddItem.post";
import {
  AccessTimeFilledOutlined,
  Favorite,
  ThumbUp,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import toggleLikeOnProduct from "../../store/actions/Likes/likesOnPorducts";
import isLikedByUser from "../../store/actions/Likes/isLiked.check";
import { WarningMessage } from "../../store/actions/Message/Message";
import AddWishlistItem from "./../../store/actions/Wishlist/wishlistItem.post";
import isWishlist from "../../store/actions/Wishlist/isWishlist.check";
import BidOnProduct from "../../store/actions/Bid/BidOnProduct.post";
import IsBiddingUser from "../../store/actions/Bid/isBiddingUser.check";

export const ProductInformation = (props) => {
  const dispatch = useDispatch();
  const locations = useLocation();
  console.log(locations);
  const { id, productData, supplier, category, likes, tags } = props;

  const token = useSelector((state) => state.user.token);

  const [likeCount, setLikeCount] = useState(likes);

  const isLikedAction = () => dispatch(isLikedByUser(id));

  const [isLiked, setIsLiked] = useState(isLikedAction);

  const toggleLike = (id) => {
    dispatch(toggleLikeOnProduct(id));
    setIsLiked(!isLiked);
    isLiked ? setLikeCount(likeCount - 1) : setLikeCount(likeCount + 1);
  };

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
  return (
    <div className={"row " + classes.product__information__container}>
      <div
        className={
          "col-12 col-sm-12 col-md-12 col-lg-6 " + classes.image__container
        }
      >
        <img src={productData.image_url} alt={productData.name} />
      </div>

      <div
        className={
          "col-12 col-sm-12 col-md-12 col-lg-6 " + classes.content__container
        }
      >
        <div className={classes.information__content__container}>
          <div className={classes.supplier__information}>
            <h3 className={classes.supplier_heading}>Artist Information</h3>
            <div className={classes.supplierAvatar}>
              <div className={classes.supplierAvatar__img}>
                {supplier.image_url ? (
                  <img src={supplier.image_url} alt={supplier.name} />
                ) : (
                  <Avatar>{supplier.first_name.charAt(0).toUpperCase()}</Avatar>
                )}
              </div>
              <div className={classes.supplierAvatar_content}>
                <h1>
                  {supplier.first_name.charAt(0).toUpperCase() +
                    supplier.first_name.slice(1) +
                    " " +
                    supplier.middle_name +
                    " " +
                    supplier.last_name}
                </h1>
                <h2>Abstract Artist</h2>
              </div>
            </div>
            <hr />
            <div className={classes.product__info}>
              <h1>{productData.name}</h1>
              <h2>NPR. {productData.unit_price}</h2>
              <p>{productData.description ? productData.description : null}</p>
            </div>
            <div
              className={classes.like__container}
              onClick={token ? (e) => toggleLike(id) : null}
            >
              {isLiked ? <ThumbUp /> : <ThumbUpAltOutlined />}

              <p>{likeCount}</p>
            </div>
            {token ? (
              <div className={classes.buttons__container}>
                <div
                  className={classes.add_to_cart}
                  onClick={(e) =>
                    dispatch(
                      AddCartItem({
                        data: productData,
                        supplierInfo: supplier,
                        tags,
                        likesCount: likes,
                        category,
                      })
                    )
                  }
                >
                  <FeatherIcon icon="shopping-cart" />
                  <p>Add to cart</p>
                </div>

                {isOnWishList ? (
                  <div
                    className={classes.add_to_wishlist}
                    onClick={(e) => removeFromWishList()}
                  >
                    <Favorite />
                    <p>Remove from Wishlist</p>
                  </div>
                ) : (
                  <div
                    className={classes.add_to_wishlist}
                    onClick={(e) => AddToWishList(id)}
                  >
                    <FeatherIcon icon="heart" />
                    <p>Wishlist</p>
                  </div>
                )}
              </div>
            ) : null}

            <hr />

            {tags ? (
              <div className={classes.tags}>
                <h1>Tags</h1>
                <div className={classes.tag__container}>
                  {tags.map((tag, index) => (
                    <Link key={index} to={`/tag/${tag}`}>
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
            <div className={classes.categories}>
              <h1>Categories</h1>
              <div className={classes.categories__container}>
                <Link to={`/category/${category.id}`}>{category.name}</Link>
              </div>
            </div>
            <div className={classes.share}>
              <h1>Share</h1>
              <div className={classes.icons__container}>
                <div className={classes.icon}>
                  <a
                    target="_blank"
                    href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}&amp;src=sdkpreparse`}
                    class="fb-xfbml-parse-ignore"
                  >
                    <FeatherIcon icon="facebook" />
                  </a>
                </div>
                <div className={classes.icon}>
                  <FeatherIcon icon="twitter" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const BiddingInformation = (props) => {
  const dispatch = useDispatch();

  let {
    id,
    productData,
    supplier,
    time,
    auction,
    category,
    delay,
    currentBid,
    likes,
    tags,
  } = props;
  const tokens = useSelector((state) => state.user.token);
  const [token, setToken] = useState(tokens);

  useEffect(() => {
    setToken(tokens);
    if (tokens) {
      checkBiddingUser();
    }
  }, [tokens]);

  const [isBidder, setIsBidder] = useState({
    bid_status: false,
  });

  const checkBiddingUser = async () => {
    const isBidderCheck = await dispatch(IsBiddingUser(id));
    setIsBidder(isBidderCheck);
  };
  const [likeCount, setLikeCount] = useState(likes);

  const isLikedAction = () => dispatch(isLikedByUser(id));

  const [isLiked, setIsLiked] = useState(isLikedAction);

  const toggleLike = (id) => {
    dispatch(toggleLikeOnProduct(id));
    setIsLiked(!isLiked);
    isLiked ? setLikeCount(likeCount - 1) : setLikeCount(likeCount + 1);
  };

  const [bidAmount, setBidAmount] = useState(0);
  const [showSubmit, setShowSubmit] = useState(false);

  const handleChange = (e) => {
    setBidAmount(e.target.value);
  };

  const onSubmitBidAmount = (e) => {
    e.preventDefault();
    if (isBidder.bid_status === true) {
      handleBiddingSubmit();
    } else {
      handleNewBid();
    }
  };

  const handleBiddingSubmit = () => {
    if (
      parseInt(isBidder.recentBid) + parseInt(bidAmount) <=
      parseInt(currentBid.price)
    ) {
      dispatch(
        WarningMessage({
          message: "You should add a winning amount.",
        })
      );
    } else {
      dispatch(BidOnProduct(auction.id, bidAmount));
    }
  };

  const handleNewBid = () => {
    if (bidAmount <= productData.unit_price) {
      dispatch(
        WarningMessage({
          message: "Bid cannot be less than or equal to the current price.",
        })
      );
    } else {
      dispatch(BidOnProduct(auction.id, bidAmount));
    }
  };

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

  const [days, setDays] = useState(null);
  const [hours, setHours] = useState(null);
  const [mins, setMins] = useState(null);
  const [sec, setSec] = useState(null);

  const timedInteval = setInterval(() => {
    // Get today's date and time
    let now = new Date().getTime();
    // Find the distance between now and the count down date
    let distance = new Date(auction?.expiration_date).getTime() - now;
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

  return (
    <div className={"row " + classes.product__information__container}>
      <div
        className={
          "col-12 col-sm-12 col-md-12 col-lg-6 " + classes.image__container
        }
      >
        <img src={productData.image_url} alt={productData.name} />
      </div>
      <div
        className={
          "col-12 col-sm-12 col-md-12 col-lg-6 " + classes.content__container
        }
      >
        <div className={classes.information__content__container}>
          <div className={classes.supplier__information}>
            <h3 className={classes.supplier_heading}>Artist Information</h3>
            <div className={classes.supplierAvatar}>
              <div className={classes.supplierAvatar__img}>
                {supplier.image_url ? (
                  <img src={supplier.image_url} alt={supplier.name} />
                ) : (
                  <Avatar>{supplier.first_name.charAt(0).toUpperCase()}</Avatar>
                )}
              </div>
              <div className={classes.supplierAvatar_content}>
                <h1>
                  {supplier.first_name.charAt(0).toUpperCase() +
                    supplier.first_name.slice(1) +
                    " " +
                    supplier.middle_name +
                    " " +
                    supplier.last_name}{" "}
                </h1>
                <h2>Abstract Artist</h2>
              </div>
            </div>
            <hr />
            <div className={classes.product__info}>
              <h1>
                {productData.name}
                {isBidder.bid_status === true ? (
                  <Tooltip title={"You have bid on this product"}>
                    <AccessTimeFilledOutlined />
                  </Tooltip>
                ) : null}
              </h1>
              <div className={classes.bidding__information}>
                <p>
                  Ending :<span>{timed(days, mins, hours, sec)}</span>
                </p>
                <p>
                  Started At:
                  <span>
                    {" "}
                    {parseInt(auction.start_price).toLocaleString("en-IN", {
                      maximumFractionDigits: 2,
                      style: "currency",
                      currency: "NRS",
                    })}
                  </span>
                </p>
                {currentBid ? (
                  <p>
                    Current Bid:
                    <span>
                      <div className={classes.currentBid__container}>
                        {parseInt(currentBid.price).toLocaleString("en-IN", {
                          maximumFractionDigits: 2,
                          style: "currency",
                          currency: "NRS",
                        })}
                        {token && isBidder.bid_status ? (
                          isBidder.winStatus === false ? (
                            <div className={classes.losing}>
                              <FeatherIcon icon="chevron-down" />

                              {(
                                parseInt(currentBid.price) -
                                parseInt(isBidder.recentBid)
                              ).toLocaleString("en-IN", {
                                maximumFractionDigits: 2,
                                style: "currency",
                                currency: "NRS",
                              })}
                            </div>
                          ) : null
                        ) : null}
                      </div>
                      <div
                        className={
                          classes.currentHighBidder +
                          " " +
                          (isBidder?.winStatus === true
                            ? classes.winning
                            : classes.losing)
                        }
                      >
                        {currentBid?.image ? (
                          <img
                            src={currentBid.image}
                            alt={currentBid.first_name}
                          />
                        ) : (
                          <Avatar>{currentBid?.first_name?.charAt(0)}</Avatar>
                        )}
                        <p>
                          {currentBid?.first_name + " " + currentBid?.last_name}
                        </p>
                      </div>
                    </span>
                  </p>
                ) : null}
              </div>
              {productData.description ? (
                <p>{productData.description}</p>
              ) : null}
            </div>
            {token ? (
              isBidder.bid_status ? (
                <div className={classes.bidding__container}>
                  <h5>Add Amount</h5>
                  <p>
                    Add the amount to your previous bid *
                    <span>How Bidding Works ?</span>
                  </p>
                  <form
                    onSubmit={onSubmitBidAmount}
                    className={classes.bid__form}
                  >
                    <Form.Control
                      size="md"
                      type="number"
                      min={0}
                      className={classes.form__selection}
                      placeholder={"Add amount to increase Bid"}
                      onChange={(e) => handleChange(e)}
                    />
                    <input type="submit" />
                  </form>

                  <p>
                    This amount excludes shipping fees, applicable taxes, and
                    will have a Buyer's Premium based on the hammer price of the
                    lot: Buyer's Premium.
                  </p>
                </div>
              ) : (
                <div className={classes.bidding__container}>
                  <p>
                    Choose your Maximum Bid* <span>How Bidding Works ?</span>
                  </p>
                  <form
                    onSubmit={onSubmitBidAmount}
                    className={classes.bid__form}
                    onFocusCapture={(e) => setShowSubmit(true)}
                  >
                    <Form.Control
                      size="md"
                      type="number"
                      min={productData.unit_price}
                      className={classes.form__selection}
                      placeholder={"Enter amount to bid"}
                      onChange={(e) => handleChange(e)}
                    />
                    <input
                      type="submit"
                      className={showSubmit ? null : "d-none"}
                    />
                  </form>
                  <p>
                    This amount excludes shipping fees, applicable taxes, and
                    will have a Buyer's Premium based on the hammer price of the
                    lot: Buyer's Premium.
                  </p>
                </div>
              )
            ) : null}
            <div className={classes.buttons__container}>
              <div
                className={classes.like__container}
                onClick={token ? (e) => toggleLike(id) : null}
              >
                {isLiked ? <ThumbUp /> : <ThumbUpAltOutlined />}
                <p>{likeCount}</p>
              </div>
              {token ? (
                isOnWishList ? (
                  <div
                    className={classes.add_to_wishlist}
                    onClick={(e) => removeFromWishList()}
                  >
                    <Favorite />
                    <p>Remove from Wishlist</p>
                  </div>
                ) : (
                  <div
                    className={classes.add_to_wishlist}
                    onClick={(e) => AddToWishList(id)}
                  >
                    <FeatherIcon icon="heart" />
                    <p>Wishlist</p>
                  </div>
                )
              ) : null}
            </div>

            <hr />

            <div className={classes.tags}>
              <h1>Tags</h1>
              <div className={classes.tag__container}>
                {tags.map((tag, index) => (
                  <Link key={index} to={`/tag:${tag}`}>
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
            <div className={classes.categories}>
              <h1>Categories</h1>
              <div className={classes.categories__container}>
                <Link to={`/category/${category.id}`}>{category.name}</Link>
              </div>
            </div>
            <div className={classes.share}>
              <h1>Share</h1>
              <div className={classes.icons__container}>
                <div className={classes.icon}>
                  <FeatherIcon icon="facebook" />
                </div>
                <div className={classes.icon}>
                  <FeatherIcon icon="twitter" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductInfo = (props) => {
  return props.auction?.expiration_date ? (
    <BiddingInformation {...props} />
  ) : (
    <ProductInformation {...props} />
  );
};

export default ProductInfo;
