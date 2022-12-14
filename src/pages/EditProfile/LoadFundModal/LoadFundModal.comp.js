import { Modal } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Payment from "../../../components/CheckoutInformation/PaymentItem/PaymentItem";
import FetchPaymentMethods from "../../../store/actions/Payment/Payment.fetch";
import classes from "./LoadFundModal.module.css";
import LoadBalance from "./../../../store/actions/Balance/LoadBalance.post";

const LoadFundModal = ({ loadModal, handleHideLoadModal }) => {
  const [payments, setPayments] = useState(null);
  const [selectedPayments, setSelectedPayments] = useState(null);
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => fetchPayment(), []);

  const fetchPayment = async () => {
    const pay = await dispatch(FetchPaymentMethods());
    setPayments(pay);
  };

  const handlePaymentMethodSelection = (id, name) => {
    setSelectedPayments({ id, name });
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const data = await dispatch(LoadBalance(selectedPayments.id, amount));
    console.log(data);
  };
  return (
    <Modal open={loadModal} onClose={handleHideLoadModal}>
      <div className={classes.load__modal}>
        <h5>Select Load Fund Method</h5>
        <div className={classes.payment__selection}>
          {payments ? (
            payments.map((pay, index) => (
              <Payment
                key={index}
                {...pay}
                handleSelected={(id, name) => {
                  console.log(id, name, "Selection");
                  handlePaymentMethodSelection(id, name);
                }}
              />
            ))
          ) : (
            <Spinner />
          )}
        </div>
        {selectedPayments && (
          <div className={classes.amount__wrapper}>
            <h5>Enter Your Amount</h5>
            <form className={classes.inputForm} onSubmit={onSubmitHandler}>
              <input
                type="number"
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter Amount"
              />
              <input type="submit" value={"Load Fund"} />
            </form>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default LoadFundModal;
