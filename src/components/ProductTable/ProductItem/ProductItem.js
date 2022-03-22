import React, { useState } from "react";
import classes from "./ProductItem.module.css";
import FeatherIcon from "feather-icons-react";
import { Tooltip } from "@mui/material";
import { Delete, ShoppingCartOutlined } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import AddCartItem from "../../../store/actions/Cart/AddItem.post";

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
}) => {
  const dispatch = useDispatch();

  let addToCart = (data) => dispatch(AddCartItem(data));

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

  return (
    <div className={classes.product__item__container}>
      <div className={classes.product__info}>
        <div className={classes.image__container}>
          <img src={image} alt={name} />
        </div>
        <div className={classes.product__content}>
          <h5>{name}</h5>
          <p>{description}</p>
          {time ? <p>{timed(days, mins, hours, sec)}</p> : null}
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
        <Tooltip title={"Remove " + name}>
          <Delete onClick={(e) => removeItem(id)} />
        </Tooltip>
      </div>
    </div>
  );
};

export default ProductItem;
