import { Modal } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import classes from "../EditAddress/EditAddress.module.css";
import EditAddressModal, {
  EditedClick,
  FormCreatorAddress,
} from "../EditAddress/EditAddressModal.comp";
import { SelectionContainer } from "../PaymentItem/PaymentItem";
import { FormCreator } from "./../../DetailsEditor/DetailsEditor";

const SelectAddress = ({
  show,
  handleHide,
  handleOpen,
  data,
  handleSelection,
  selected,
  handleUpdatedData,
  handleDeleteData,
  handleAddDatas,
  showEditAddressModal,
  handleEditAddressModal,
  showAddForm,
  hideAddForm,
}) => {
  const [addresses, setAddresses] = useState(data);

  useEffect(() => {
    setAddresses(data);
  }, [data]);

  const [selectedAddress, setSelectedAddress] = useState(null);

  const handleAddData = (data) => {
    handleAddDatas(data);
    hideAddForm();
  };
  const handleShowAddressForm = (count, data) => {
    hideAddForm(true);
    setSelectedAddress({ count, data });
    console.log("selected Address", count, data);
  };
  return (
    <>
      <Modal open={show} onClose={handleHide}>
        <div className={classes.modal__body}>
          <h2>Select Address</h2>
          <Form
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            {addresses.map((address, index) => (
              <SelectionContainer
                key={index}
                comp={<EditedClick key={index} address={address} selection />}
                handleSelected={handleSelection}
                checked={address.id === selected}
                id={address.id}
                count={index}
              />
            ))}
            {selected && (
              <>
                <button
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    border: "1px solid red",
                    background: "none",
                    padding: "1rem",
                    margin: "1rem",
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleEditAddressModal(true);
                  }}
                >
                  {addresses.length !== 0 ? "Edit" : "Add"} Address
                </button>
              </>
            )}
          </Form>
        </div>
      </Modal>
      <EditAddressModal
        show={showEditAddressModal}
        handleHide={() => handleEditAddressModal(false)}
        updateData={handleUpdatedData}
        addData={handleAddData}
        data={addresses}
        deleteData={handleDeleteData}
        showAddForm={showAddForm}
        hideAddForm={hideAddForm}
        handleShowAddressForm={handleShowAddressForm}
      />
      <Modal open={showAddForm} onClose={() => hideAddForm(false)}>
        <div className={classes.modal__body__child}>
          <FormCreatorAddress
            data={selectedAddress?.data}
            addData={(d) => {
              handleAddData(d);
              hideAddForm();
            }}
            updateData={(id, d) => {
              handleUpdatedData(selectedAddress?.count, id, d);
              hideAddForm();
            }}
            classes={classes}
            cancel={hideAddForm}
          />
        </div>
      </Modal>
    </>
  );
};

export default SelectAddress;
