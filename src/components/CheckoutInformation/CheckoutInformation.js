import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import classes from "./CheckoutInformation.module.css";

import FeatherIcon from "feather-icons-react";
import Payment from "./PaymentItem/PaymentItem";

const CheckoutInformation = () => {
  const paymentType = ["khalti", "esewa", "balance", "paypal", "stripe"];

  const [selected, setSelected] = useState("khalti");

  const handleSelected = (name) => setSelected(name);

  return (
    <div className={classes.checkout__information__container}>
      <h1 className={classes.heading__checkout__information}>Order Payment.</h1>
      <div className={classes.payment__checkbox}>
        <h2>Payment Method</h2>
        <form className={classes.checkbox__container}>
          <div className={classes.checkbox_group}>
            {paymentType.map((pay) => (
              <Payment
                name={pay}
                handleSelected={handleSelected}
                checked={selected === pay ? true : null}
              />
            ))}
          </div>
        </form>
      </div>

      <div className={classes.address__container}>
        <h2>Address</h2>
        <Form className={classes.checkbox__container}>
          <Form.Check
            label={
              <div className={classes.address__line}>
                <h3>Pokhara-17, Birauta</h3>
                <h4>SanchayKosh Awas, Opposite of Annapurna Petrol Pump</h4>
              </div>
            }
            name="Address"
            type={"radio"}
            className={classes.checkbox}
          />
          <Form.Check
            label={
              <div className={classes.address__line}>
                <h3>Kathmandu, New Baneshwor</h3>
                <h4>Alfa Beta House, Budhanagar</h4>
              </div>
            }
            name="Address"
            type={"radio"}
            className={classes.checkbox}
          />
          <div className={classes.editAddress}>
            <FeatherIcon icon="edit-3" />
            <h3>Edit Address</h3>
          </div>
        </Form>

        <div className={classes.discount__container}>
          <h1>Discount.</h1>
          <Form className={classes.coupon__form}>
            <input type={"text"} placeholder="Apply Coupon" />
            <input type={"submit"} value={"Submit"} />
          </Form>
        </div>

        <div className={classes.checkout__button}>
          <Button className={classes.checkout} variant="none">
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutInformation;
