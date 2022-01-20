import React from "react";
import PaymentImage from "../../../Assets/cards.png";
import classes from "./Payment.module.css";

const Payment = () => {
  return (
    <div className={classes.paymentcard}>
      <img src={PaymentImage} alt="Payment" height={"70px"} />
    </div>
  );
};

export default Payment;
