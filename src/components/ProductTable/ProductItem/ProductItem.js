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
}) => {
  const dispatch = useDispatch();
  return (
    <div className={classes.product__item__container}>
      <div className={classes.product__info}>
        <div className={classes.image__container}>
          <img src={image} alt={name} />
        </div>
        <div className={classes.product__content}>
          <h5>{name}</h5>
          <p>{description}</p>
          <p className={"d-block d-sm-none "}>{supplierName}</p>
        </div>
      </div>
      <div className={"d-none d-sm-block " + classes.product__by}>
        <h5>{supplierName}</h5>
      </div>
      <div className={classes.product__Price}>
        <h5>{price}</h5>
      </div>
      <div className={classes.delete__item}>
        {wishlist ? (
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
