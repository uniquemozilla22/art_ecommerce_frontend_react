import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import classes from "./CheckoutInformation.module.css";
import { animated, useSpring } from "react-spring";
import FeatherIcon from "feather-icons-react";
import Payment from "./PaymentItem/PaymentItem";
import { useDispatch } from "react-redux";
import FetchPaymentMethods from "../../store/actions/Payment/Payment.fetch";
import EditAddressModal from "./EditAddress/EditAddressModal.comp";
import UpdateOrderAddress from "../../store/actions/Address/UpdateOrderAddress.post";
import AddOrderAddress from "../../store/actions/Address/AddOrderAddress.post";
import { showConfirmation } from "../../store/actions/Confirmation/Confirmation.action";
import DeleteOrderAddress from "../../store/actions/Address/DeleteOrderAddress.delete";
import PostPayment from "../../store/actions/Payment/Payment.post";
import PaymentMethodSelection from "../../store/actions/Payment/PaymentMethod.post";

const CheckoutInformation = ({ order, data, handleOrderPaymentChange }) => {
  const [payments, setPayments] = useState(null);
  const dispatch = useDispatch();
  const [orderInformation, setOrderInformation] = useState(data);
  const [paymentSelected, setPaymentSelected] = useState(
    orderInformation.payment_type
  );
  const [paymentSelectedID, setPaymentSelectedID] = useState();
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [addressId, setAddressId] = useState();
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

  const handlePaymentMethodSelection = async (id, name) => {
    setPaymentSelectedID(id);
    const res = await dispatch(
      PaymentMethodSelection(orderInformation.id, name)
    );
    if (res) {
      handleOrderPaymentChange(order.indexOf(data), name);
      setPaymentSelected(name);
    }
  };

  const handleAddData = async (data) => {
    const updated = await dispatch(AddOrderAddress(data));
    if (updated) {
      setOrderInformation({
        ...orderInformation,
        address: [...orderInformation.address, updated],
      });
    }
  };

  const handleConfirmationDelete = (index, id) => {
    dispatch(
      showConfirmation(
        "Your Address Will Be removed. Are you Sure?",
        async () => handleDeleteAddressData(index, id)
      )
    );
  };

  const handleConfirmationCheckout = () => {
    dispatch(
      showConfirmation("Are you sure about checking out the order?", async () =>
        Checkout()
      )
    );
  };

  const Checkout = () =>
    dispatch(PostPayment(orderInformation.id, paymentSelectedID, addressId));

  const handleDeleteAddressData = async (index, id) => {
    const deletedData = await dispatch(DeleteOrderAddress(id));
    if (deletedData) {
      const address = orderInformation.address;
      address.splice(index, 1);
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
    const activepayment = pay.filter(
      (method) => method.name == paymentSelected
    );
    setPaymentSelectedID(activepayment[0].id);
    setPayments(pay);
  };

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
                    handleSelected={(id, name) =>
                      handlePaymentMethodSelection(id, name)
                    }
                    checked={data?.payment_type === pay.name ? true : null}
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
                onChange={(e) => setAddressId(address.id)}
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
            <Button
              className={classes.checkout}
              variant="none"
              onClick={(e) => handleConfirmationCheckout()}
            >
              Checkout
            </Button>
          </div>
        </div>
      </animated.div>
      <EditAddressModal
        show={showAddressModal}
        handleHide={onHideAddressModal}
        updateData={handleUpdatedData}
        addData={handleAddData}
        data={orderInformation?.address}
        deleteData={handleConfirmationDelete}
      />
    </>
  );
};

export default CheckoutInformation;
