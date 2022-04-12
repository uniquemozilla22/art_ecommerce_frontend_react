import { Modal } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import classes from "../EditAddress/EditAddress.module.css";
import { EditedClick } from "../EditAddress/EditAddressModal.comp";
import { SelectionContainer } from "../PaymentItem/PaymentItem";

const BillingAddress = ({
  show,
  handleHide,
  data,
  handleSelection,
  selected,
}) => {
  const [showAddAddress, setShowAddAddress] = useState(show);
  const [addresses, setAddresses] = useState(data);

  useEffect(() => {
    setAddresses(data);
  }, [data]);
  return (
    <Modal open={show} onClose={handleHide}>
      <div className={classes.modal__body}>
        <h2>Select Billing Address</h2>
        <Form
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {addresses.map((address, index) => (
            <SelectionContainer
              comp={<EditedClick key={index} address={address} />}
              handleSelected={handleSelection}
              checked={address.id === selected}
              id={address.id}
            />
          ))}
          {selected && (
            <button
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                border: "none",
                padding: "0.5rem",
                marginTop: "1rem",
                borderRadius: "1rem",
              }}
              onClick={() => handleSelection()}
            >
              Remove Billing address
            </button>
          )}
        </Form>
      </div>
    </Modal>
  );
};

export default BillingAddress;
