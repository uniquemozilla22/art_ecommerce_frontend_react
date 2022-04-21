import React, { useEffect, useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import classes from "./CheckoutInformation.module.css";
import { animated, useSpring } from "react-spring";
import Payment from "./PaymentItem/PaymentItem";
import { useDispatch } from "react-redux";
import FetchPaymentMethods from "../../store/actions/Payment/Payment.fetch";
import UpdateOrderAddress from "../../store/actions/Address/UpdateOrderAddress.post";
import AddOrderAddress from "../../store/actions/Address/AddOrderAddress.post";
import { showConfirmation } from "../../store/actions/Confirmation/Confirmation.action";
import DeleteOrderAddress from "../../store/actions/Address/DeleteOrderAddress.delete";
import PostPayment from "../../store/actions/Payment/Payment.post";
import PaymentMethodSelection from "../../store/actions/Payment/PaymentMethod.post";
import FetchUserAddress from "../../store/actions/Address/FetchUserAddress.fetch";
import { EditOutlined } from "@mui/icons-material";
import SelectAddress from "./SelectAddress/SelectAddress.comp";

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

  const onHideAddressModal = () => setShowAddressModal(false);
  const onOpenAddressModal = () => setShowAddressModal(true);

  const [showEditAddressModal, setShowEditAddressModal] = useState(false);

  const handleUpdatedData = async (index, id, d) => {
    console.log(index, id, d);
    const updated = await dispatch(
      UpdateOrderAddress(id, {
        ...d,
        country: d.country.id,
        region: d.region.id,
        district: d.district.id,
        state: d.state.id,
      })
    );
    if (updated) {
      let updatingAddress = address;
      updatingAddress[index] = {
        ...updatingAddress[index],
        ...updated,
      };

      setAddress(updatingAddress);
    }
  };

  const handleEditAddressModal = (content) => {
    setShowEditAddressModal(content);
  };

  const fetchAddress = async () => {
    const address = await dispatch(FetchUserAddress());
    setAddress(address);
    setAddressId(address[0]?.id);
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
    const updated = await dispatch(
      AddOrderAddress({
        ...data,
        country: data.country.id,
        region: data.region.id,
        district: data.district.id,
        state: data.state.id,
      })
    );
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

  const getSubTotal = () => {
    return parseInt(
      orderInformation.orderItems.reduce((previousValue, currentValue) => {
        console.log(previousValue, currentValue);
        return previousValue + currentValue.data.unit_price;
      }, 0)
    ).toLocaleString("en-IN", {
      maximumFractionDigits: 2,
      style: "currency",
      currency: "NRS",
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
              <div className={classes.buttons__address}>
                {address.length !== 0 ? (
                  addressId ? (
                    address
                      .filter((add) => add.id === addressId)
                      .map((selectedAddress) => (
                        <>
                          <div
                            className={classes.address__line}
                            onClick={(e) => setShowAddressModal(true)}
                          >
                            <h3>{selectedAddress.name}</h3>
                            {selectedAddress.region.name && (
                              <>
                                <h4>{selectedAddress.region.name}</h4>
                                <h4>{selectedAddress.landmark}</h4>
                              </>
                            )}
                          </div>
                          <div className={classes.editAddress}>
                            <EditOutlined />
                          </div>
                        </>
                      ))
                  ) : (
                    <>
                      <div
                        className={classes.address__line}
                        onClick={(e) => setShowAddressModal(true)}
                      >
                        <h3>{address[0].name}</h3>
                        {address[0].city && <h4>{address[0].landmark}</h4>}
                      </div>
                      <div className={classes.editAddress}>
                        <EditOutlined />
                      </div>
                    </>
                  )
                ) : (
                  <div
                    className={classes.no__address_prompt}
                    onClick={(e) => handleEditAddressModal(true)}
                  >
                    <h3>Please Add Address</h3>
                  </div>
                )}
              </div>
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
        <div className={classes.shipping__container}>
          <div className={classes.sub_total__price}>
            <h3>
              Sub-Total <span>{getSubTotal()}</span>
            </h3>
          </div>
          <div className={classes.shipping__price}>
            <h3>
              Shipping{" "}
              <span>
                {parseInt(3000).toLocaleString("en-IN", {
                  maximumFractionDigits: 2,
                  style: "currency",
                  currency: "NRS",
                })}
              </span>
            </h3>
          </div>
          <div className={classes.shipping__price}>
            <h3>
              Coupon{" "}
              <span>
                {parseInt(0).toLocaleString("en-IN", {
                  maximumFractionDigits: 2,
                  style: "currency",
                  currency: "NRS",
                })}
              </span>
            </h3>
          </div>
          <div className={classes.total__price}>
            <h3>
              {" "}
              Total{" "}
              <div>
                <span>
                  {parseInt(6000).toLocaleString("en-IN", {
                    maximumFractionDigits: 2,
                    style: "currency",
                    currency: "NRS",
                  })}
                </span>
                <p>* Terms and Conditions Apply</p>
              </div>
            </h3>
          </div>
        </div>
        <Button
          className={classes.checkout}
          variant="none"
          onClick={(e) => handleConfirmationCheckout()}
        >
          Checkout
        </Button>
      </animated.div>
      {address && (
        <SelectAddress
          show={showAddressModal}
          handleHide={onHideAddressModal}
          handleOpen={onOpenAddressModal}
          data={address}
          handleSelection={(id) => setAddressId(id)}
          selected={addressId}
          handleUpdatedData={handleUpdatedData}
          handleAddData={handleAddData}
          handleDeleteData={handleConfirmationDelete}
          showEditAddressModal={showEditAddressModal}
          handleEditAddressModal={handleEditAddressModal}
        />
      )}
    </>
  );
};

export default CheckoutInformation;
