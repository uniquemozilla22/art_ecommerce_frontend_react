import React, { useState } from "react";
import classes from "./ProductInformation.module.css";
import FeatherIcon from "feather-icons-react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import AddCartItem from "../../store/actions/Cart/AddItem.post";
import { Favorite, ThumbUp, ThumbUpAltOutlined } from "@mui/icons-material";
import toggleLikeOnProduct from "../../store/actions/Likes/likesOnPorducts";
import isLikedByUser from "../../store/actions/Likes/isLiked.check";
import { WarningMessage } from "../../store/actions/Message/Message";

export const ProductInformation = (props) => {
  const dispatch = useDispatch();
  const {
    id,
    productData,
    supplier,
    category,
    likes,
    tags,
    removeFromWishList,
    AddToWishList,
    isOnWishList,
  } = props;

  const token = useSelector((state) => state.user.token);

  const [likeCount, setLikeCount] = useState(likes);

  const isLikedAction = () => dispatch(isLikedByUser(id));

  const [isLiked, setIsLiked] = useState(isLikedAction);

  const toggleLike = (id) => {
    dispatch(toggleLikeOnProduct(id));
    setIsLiked(!isLiked);
    isLiked ? setLikeCount(likeCount - 1) : setLikeCount(likeCount + 1);
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
                        id,
                        image_url: productData.image_url,
                        name: productData.name,
                        unit_price: productData.unit_price,
                        description: productData.description,
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
    removeFromWishList,
    AddToWishList,
    isOnWishList,
  } = props;
  const tokens = useSelector((state) => state.user.token);
  const [token, setToken] = useState(tokens);

  const [likeCount, setLikeCount] = useState(likes);

  const isLikedAction = () => dispatch(isLikedByUser(id));

  const [isLiked, setIsLiked] = useState(isLikedAction);

  const toggleLike = (id) => {
    dispatch(toggleLikeOnProduct(id));
    setIsLiked(!isLiked);
    isLiked ? setLikeCount(likeCount - 1) : setLikeCount(likeCount + 1);
  };

  const [bidAmount, setBidAmount] = useState(0);
  const [showSubmit, setShowSubmit] = useState(0);

  const handleChange = (e) => {
    setBidAmount(e.target.value);
  };

  const onSubmitBidAmount = (e) => {
    e.preventDefault();
    if (bidAmount <= productData.unit_price) {
      dispatch(
        WarningMessage({
          message: "Bid cannot be less than or equal to the current price.",
        })
      );
    } else {
    }
  };

  useEffect(() => {
    setToken(tokens);
  }, [tokens]);

  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = new Date(time).getTime() - now;

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
  let minutes =
    Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) > 0
      ? Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) + " minutes"
      : 0;
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
              <h1>{productData.name}</h1>
              <div className={classes.bidding__information}>
                <p>
                  Ending :
                  <span>
                    {days + hours + minutes === 0
                      ? "Ended"
                      : days + hours + minutes}
                  </span>
                </p>
                <p>
                  Started At:<span> NPR.{auction.start_price}</span>
                </p>
                {currentBid ? (
                  <p>
                    Current Bid:
                    <span>
                      {productData.unit_price}
                      <div className={classes.currentHighBidder}>
                        {currentBid?.image ? (
                          <img
                            src={currentBid.image}
                            alt={currentBid.first_name}
                          />
                        ) : (
                          <Avatar>{currentBid?.first_name?.charAt(0)}</Avatar>
                        )}
                        <h3>
                          {currentBid?.first_name + " " + currentBid?.last_name}
                        </h3>
                      </div>
                    </span>
                  </p>
                ) : null}
              </div>
              {productData.description ? (
                <p>{productData.description}</p>
              ) : null}
            </div>
            <div className={classes.bidding__container}>
              <p>
                Choose your Maximum Bid* <span>How Bidding Works ?</span>
              </p>
              <form onSubmit={onSubmitBidAmount} className={classes.bid__form}>
                <Form.Control
                  size="md"
                  type="number"
                  min={productData.unit_price}
                  className={classes.form__selection}
                  placeholder={"Enter amount to bid"}
                  onChange={(e) => handleChange(e)}
                  onBlur={(e) => setShowSubmit(false)}
                  onFocusCapture={(e) => setShowSubmit(true)}
                />
                <input type="submit" className={showSubmit ? null : "d-none"} />
              </form>

              <p>
                This amount excludes shipping fees, applicable taxes, and will
                have a Buyer's Premium based on the hammer price of the lot:
                Buyer's Premium.
              </p>
            </div>
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
