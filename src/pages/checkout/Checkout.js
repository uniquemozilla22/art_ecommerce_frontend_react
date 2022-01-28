import { ClassNames } from "@emotion/react";
import React from "react";
import classes from "./Checkout.module.css";

const Checkout = () => {
  return (
    <div className={"checkout__page"}>
      <div className={classes.header__title}>
        <h1>Checkout.</h1>
      </div>
    </div>
  );
};

export default Checkout;
