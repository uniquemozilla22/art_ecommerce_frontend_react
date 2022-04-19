import React, { useEffect, useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
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
import FetchUserAddress from "../../store/actions/Address/FetchUserAddress.fetch";
import BillingAddress from "./BillindAddress/BillingAddress.comp";

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
  const [address, setAddress] = useState(null);
  const [showDifferentBillingAddress, setShowDifferentBillingAddress] =
    useState(false);
  const [billingAddress, setBillingAddress] = useState(null);

  const onHideAddressModal = () => setShowAddressModal(false);

  const handleUpdatedData = async (index, id, d) => {
    const updated = await dispatch(UpdateOrderAddress(id, d));
    if (updated) {
      let updatingAddress = address;
      updatingAddress[index] = {
        ...updatingAddress[index],
        ...d,
      };
      setAddress(updatingAddress);
    }
  };

  const fetchAddress = async () => {
    const address = await dispatch(FetchUserAddress());
    setAddress(address);
    console.log(address);
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
      setAddress([...address, updated]);
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
      let updatingAddress = address;
      updatingAddress.splice(index, 1);
      setAddress([...updatingAddress]);
    }
  };
  useEffect(() => {
    fetchPayment();
    fetchAddress();
  }, []);

  useEffect(() => {
    setAddress(address);
  }, [address]);

  const fetchPayment = async () => {
    const pay = await dispatch(FetchPaymentMethods());
    const activepayment = paymentSelected
      ? pay.filter((method) => method.name === paymentSelected)
      : null;
    setPaymentSelectedID(activepayment[0]?.id);
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
        <div className={classes.payment__checkbox}>
          <h2>Payment Method</h2>
          <form className={classes.checkbox__container}>
            <div className={classes.checkbox_group}>
              {payments ? (
                payments.map((pay, index) => (
                  <Payment
                    key={index}
                    {...pay}
                    handleSelected={(id, name) =>
                      handlePaymentMethodSelection(id, name)
                    }
                    checked={data?.payment_type === pay.name ? true : null}
                  />
                ))
              ) : (
                <Spinner />
              )}
            </div>
          </form>
        </div>
        <div className={classes.address__container}>
          {address ? (
            <>
              <div>
                <h2>Address</h2>
              </div>
              <Form className={classes.checkbox__container}>
                <div className={classes.address__line}>
                  <h3>{address.name}</h3>
                  {address.landmark && <h4>{address.landmark}</h4>}
                </div>
                <div className={classes.buttons__address}>
                  <div
                    className={classes.editAddress}
                    onClick={(e) => setShowAddressModal(true)}
                  >
                    <FeatherIcon icon="edit-3" />
                    <h3>{address.length === 0 ? "Add" : "Edit"} Address</h3>
                  </div>
                  {addressId && (
                    <div
                      className={classes.billing__address}
                      onClick={(e) => setShowDifferentBillingAddress(true)}
                    >
                      <h3>Different Billing Address ?</h3>
                    </div>
                  )}
                </div>
              </Form>
            </>
          ) : (
            <Spinner />
          )}
        </div>
        <div className={classes.discount__container}>
          <h1>Discount.</h1>
          <Form className={classes.coupon__form}>
            <input type={"text"} placeholder="Apply Coupon" />
            <input type={"submit"} value={"Submit"} />
          </Form>
        </div>
        <Button
          className={classes.checkout}
          variant="none"
          onClick={(e) => handleConfirmationCheckout()}
        >
          Checkout
        </Button>
      </animated.div>
      {address ? (
        <EditAddressModal
          show={showAddressModal}
          handleHide={onHideAddressModal}
          updateData={handleUpdatedData}
          addData={handleAddData}
          data={address}
          deleteData={handleConfirmationDelete}
        />
      ) : null}
      {address && addressId ? (
        <BillingAddress
          show={showDifferentBillingAddress}
          handleHide={() => setShowDifferentBillingAddress(false)}
          data={address.filter((add) => add.id !== addressId)}
          handleSelection={(id) =>
            id ? setBillingAddress(id) : setBillingAddress(id)
          }
          selected={billingAddress ? billingAddress : null}
        />
      ) : null}
    </>
  );
};

export default CheckoutInformation;
