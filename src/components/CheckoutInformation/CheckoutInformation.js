import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import classes from "./CheckoutInformation.module.css";
import { animated, useSpring } from "react-spring";
import FeatherIcon from "feather-icons-react";
import Payment from "./PaymentItem/PaymentItem";
import { useDispatch } from "react-redux";
import FetchPaymentMethods from "../../store/actions/Payment/Payment.fetch";
import EditAddressModal from "./EditAddress/EditAddressModal.comp";
import UpdateOrderAddress from "../../store/actions/Order/UpdateOrderAddress.post";

const CheckoutInformation = ({ data }) => {
  const [payments, setPayments] = useState(null);
  const dispatch = useDispatch();
  const [orderInformation, setOrderInformation] = useState(data);
  const [selected, setSelected] = useState();
  const [showAddressModal, setShowAddressModal] = useState(true);

  console.log(data);
  const onHideAddressModal = () => setShowAddressModal(false);

  const handleUpdatedData = async (index, id, d) => {
    const updated = await dispatch(UpdateOrderAddress(id, d));
    if (updated) {
      let address = orderInformation.address;
      address[index].address = d.address;
      address[index].landmark = d.landmark;
      setOrderInformation({
        ...orderInformation,
        address,
      });
    }
  };

  useEffect(() => {
    fetchPayment();
  }, []);

  const fetchPayment = async () => {
    const pay = await dispatch(FetchPaymentMethods());
    setPayments(pay);
  };
  const handleSelected = (id) => setSelected(id);

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
    <>
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
            <div
              className={classes.editAddress}
              onClick={(e) => setShowAddressModal(true)}
            >
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
      <EditAddressModal
        show={showAddressModal}
        handleHide={onHideAddressModal}
        updateData={handleUpdatedData}
        data={orderInformation?.address}
      />
    </>
  );
};

export default CheckoutInformation;
