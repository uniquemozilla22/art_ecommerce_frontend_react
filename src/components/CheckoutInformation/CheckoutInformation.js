import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import classes from "./CheckoutInformation.module.css";
import { animated, useSpring } from "react-spring";
import FeatherIcon from "feather-icons-react";
import Payment from "./PaymentItem/PaymentItem";
import { useDispatch } from "react-redux";
import FetchPaymentMethods from "../../store/actions/Payment/Payment.fetch";

const CheckoutInformation = ({ data }) => {
  const [payments, setPayments] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchPayment();
  }, []);

  const fetchPayment = async () => {
    const pay = await dispatch(FetchPaymentMethods());
    setPayments(pay);
  };

  const [selected, setSelected] = useState();

  const handleSelected = (id) => setSelected(id);

  const [orderInformation, setOrderInformation] = useState(data);
  useEffect(() => {
    setOrderInformation(data);
  }, [data]);

  const useAnimationStyle = () => {
    return useSpring({
      loop: false,
      from: { x: 50, opacity: 0 },
      to: { x: 0, opacity: 1 },
      delay: 200,
    });
  };
  return (
    <animated.div
      style={useAnimationStyle()}
      className={classes.checkout__information__container}
    >
      <h1 className={classes.heading__checkout__information}>
        Order #{data.id} Payment.
      </h1>
      <div className={classes.payment__checkbox}>
        <h2>Payment Method</h2>
        <form className={classes.checkbox__container}>
          <div className={classes.checkbox_group}>
            {payments &&
              payments.map((pay, index) => (
                <Payment
                  key={index}
                  {...pay}
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
          {orderInformation?.address.map((address, index) => (
            <Form.Check
              label={
                <div className={classes.address__line}>
                  <h3>{address.address}</h3>
                  {address.landmark && <h4>{address.landmark}</h4>}
                </div>
              }
              name="Address"
              type={"radio"}
              key={index}
              className={classes.checkbox}
            />
          ))}

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
    </animated.div>
  );
};

export default CheckoutInformation;
