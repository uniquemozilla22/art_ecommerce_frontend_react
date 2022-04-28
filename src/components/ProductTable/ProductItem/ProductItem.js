import React, { useState } from "react";
import classes from "./ProductItem.module.css";
import { Tooltip } from "@mui/material";
import {
  Close,
  Delete,
  FavoriteBorderOutlined,
  RemoveRedEyeOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import AddCartItem from "../../../store/actions/Cart/AddItem.post";
import { useNavigate } from "react-router";

const ProductItem = ({
  image,
  name,
  price,
  supplierName,
  description,
  removeItem,
  wishlist,
  id,
  time,
  productData,
  supplierInfo,
  tags,
  likesCount,
  category,
  wishlistFunction,
  modal,
  heading,
}) => {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  let addToCart = (data) => {
    dispatch(AddCartItem(data));
    if (modal) {
      modal();
    }
  };

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

  return heading ? (
    <div className={classes.product__item__container}>
      <div className={classes.product__info}>
        <div className={classes.image__container}>
          <img src={image} alt={name} />
        </div>
        <div className={classes.product__content}>
          <h5>{name}</h5>
          <p className={classes.description}>{description}</p>
          {time ? <p>{timed(days, mins, hours, sec)}</p> : null}
          <p className={"d-flex d-md-none "}>{supplierName}</p>
          <p className={"d-flex d-md-none "}>
            {parseInt(price).toLocaleString("en-IN", {
              maximumFractionDigits: 2,
              style: "currency",
              currency: "NRS",
            })}
          </p>
          <div className={"d-flex d-md-none " + classes.delete__item__buttons}>
            <div>
              <RemoveRedEyeOutlined
                onClick={(e) => {
                  if (modal) {
                    modal();
                  }
                  navigation(`/products/${id}`);
                }}
              />
              <p>{"View " + name}</p>
            </div>

            {wishlist && time === null ? (
              <div>
                <ShoppingCartOutlined
                  onClick={(e) =>
                    addToCart({
                      data: productData,
                      supplierInfo,
                      tags,
                      likesCount,
                      category,
                    })
                  }
                />
                <p>{"Add " + name + " to cart"}</p>
              </div>
            ) : null}
            {wishlistFunction && (
              <div>
                <FavoriteBorderOutlined onClick={(e) => wishlistFunction()} />
                <p>{"Add " + name + " to wishlist"}</p>
              </div>
            )}
            {removeItem && (
              <div>
                {" "}
                <Delete onClick={(e) => removeItem(id)} />
                <p>{"Remove " + name}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={"d-none d-md-flex " + classes.product__by}>
        <h5>{supplierName}</h5>
      </div>
      <div className={"d-none d-md-flex " + classes.product__Price}>
        <h5>
          {parseInt(price).toLocaleString("en-IN", {
            maximumFractionDigits: 2,
            style: "currency",
            currency: "NRS",
          })}
        </h5>
      </div>
      <div className={"d-none d-md-flex " + classes.delete__item}>
        <Tooltip title={"View " + name}>
          <RemoveRedEyeOutlined
            onClick={(e) => {
              if (modal) {
                modal();
              }
              navigation(`/products/${id}`);
            }}
          />
        </Tooltip>
        {wishlist && time === null ? (
          <Tooltip title={"Add " + name + " to cart"}>
            <ShoppingCartOutlined
              onClick={(e) =>
                addToCart({
                  data: productData,
                  supplierInfo,
                  tags,
                  likesCount,
                  category,
                })
              }
            />
          </Tooltip>
        ) : null}
        {wishlistFunction && (
          <Tooltip title={"Add " + name + " to wishlist"}>
            <FavoriteBorderOutlined onClick={(e) => wishlistFunction()} />
          </Tooltip>
        )}
        {removeItem && (
          <Tooltip title={"Remove " + name}>
            <Delete onClick={(e) => removeItem(id)} />
          </Tooltip>
        )}
      </div>
    </div>
  ) : (
    <div className={classes.product__item__container}>
      <div
        className={classes.product__item__info}
        onClick={() => navigation("../products/" + id)}
      >
        <div className={classes.image__container}>
          <img src={image} alt={name} />
        </div>
        <div className={classes.item__content}>
          <h5>{name}</h5>
          <p className={classes.description}>{description}</p>
          {time ? <p>{timed(days, mins, hours, sec)}</p> : null}
          <p className={classes.supplier__name}>{supplierName}</p>
          <p className={"d-flex d-md-none "}>
            {parseInt(price).toLocaleString("en-IN", {
              maximumFractionDigits: 2,
              style: "currency",
              currency: "NRS",
            })}
          </p>
        </div>
      </div>
      <div className={"d-none d-sm-flex " + classes.product__item__Price}>
        <h5>
          {parseInt(price).toLocaleString("en-IN", {
            maximumFractionDigits: 2,
            style: "currency",
            currency: "NRS",
          })}
        </h5>
        <div className={classes.delete_item__icon}>
          {removeItem && (
            <Tooltip title={"Remove " + name}>
              <Close onClick={(e) => removeItem(id)} />
            </Tooltip>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
