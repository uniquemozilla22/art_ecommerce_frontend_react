import React from "react";
import classes from "./ProductItem.module.css";
import FeatherIcon from "feather-icons-react";
import { Tooltip } from "@mui/material";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { useDispatch } from "react-redux";

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
}) => {
  const dispatch = useDispatch();

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
  return (
    <div className={classes.product__item__container}>
      <div className={classes.product__info}>
        <div className={classes.image__container}>
          <img src={image} alt={name} />
        </div>
        <div className={classes.product__content}>
          <h5>{name}</h5>
          <p>{description}</p>
          {days + hours === 0 ? "Ended" : days + hours}
          <p className={"d-flex d-sm-none "}>{supplierName}</p>
        </div>
      </div>
      <div className={"d-none d-sm-flex " + classes.product__by}>
        <h5>{supplierName}</h5>
      </div>
      <div className={classes.product__Price}>
        <h5>NRS. {price}</h5>
      </div>
      <div className={classes.delete__item}>
        {wishlist && time === null ? (
          <Tooltip title={"Add " + name + " to cart"}>
            <ShoppingCartOutlined icon={"x"} onClick={(e) => removeItem(id)} />
          </Tooltip>
        ) : null}
        <Tooltip title={"Remove " + name}>
          <FeatherIcon icon={"x"} onClick={(e) => removeItem(id)} />
        </Tooltip>
      </div>
    </div>
  );
};

export default ProductItem;
