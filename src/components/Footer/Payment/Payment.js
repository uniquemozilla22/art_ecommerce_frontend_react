import React from "react";
import { Image } from "react-bootstrap";
import PaymentImage from "../../../Assets/cards.png";
import classes from "./Payment.module.css";

const Payment = () => {
  return (
    <div className={classes.paymentcard}>
      <Image src={PaymentImage} alt="Payment" fluid />
    </div>
  );
};

export default Payment;
