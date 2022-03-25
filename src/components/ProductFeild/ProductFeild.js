import React from "react";
import classes from "./ProductFeild.module.css";
import { CloseOutlined } from "@mui/icons-material";

const ProductFeild = (props) => {
  return (
    <div className={"container " + classes.product__feild}>
      <div className={classes.image__container}>
        <img src={props.image} alt="name" height="120px" width="120px" />
      </div>
      <div className={classes.product__content}>
        <h1>{props.title}</h1>
        <h2>NPR.{props.price}</h2>
        <p>{props.description}</p>
      </div>
      {props.remove ? (
        <div className={classes.closeIcon_cart}>
          <CloseOutlined onClick={(e) => props.remove()} />
        </div>
      ) : null}
    </div>
  );
};

export default ProductFeild;
