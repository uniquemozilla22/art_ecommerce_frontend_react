import { Modal, Tooltip } from "@mui/material";
import React, { useState } from "react";
import classes from "./Address.module.css";
import { DeleteOutlineRounded, EditOutlined } from "@mui/icons-material";
import { FormCreatorAddress } from "../../CheckoutInformation/EditAddress/EditAddressModal.comp";

const AddressComponentEditProfile = ({ data }) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [addressData, SelectAddressData] = useState(data);
  const [selectedAddress, setSelectedAddress] = useState({
    data: null,
    index: null,
  });
  console.log(data);
  const updateData = (index, id, data) => {};
  const deleteData = () => {};

  const handleAddData = (data) => {};

  const handleShowAddressForm = (payload) => {
    setShowAddForm(payload);
  };

  const handleSelectedAddress = (data, index) => {
    setSelectedAddress({ data, index });
  };
  return (
    <div className={classes.address__wrapper}>
      {data.map((address, index) => (
        <>
          <div className={classes.address__container}>
            <div className={classes.content__container}>
              <h4>{address.name}</h4>
              <p>
                {address.region.name},{address.district.name}
              </p>
              <p>
                {address.state.name} -{address.postal_code} ,
                {address.country.name}
              </p>
            </div>
            <div className={classes.action__buttons}>
              {updateData && (
                <Tooltip title={"Edit Address"}>
                  <EditOutlined
                    className={classes.icon}
                    onClick={(e) => {
                      handleSelectedAddress(address, index);
                      handleShowAddressForm(true);
                    }}
                  />
                </Tooltip>
              )}
              {address.status !== "primary" && deleteData && (
                <Tooltip title={"Delete Address"}>
                  <DeleteOutlineRounded
                    className={classes.icon}
                    onClick={(e) => deleteData(address.id)}
                  />
                </Tooltip>
              )}
            </div>
          </div>
        </>
      ))}
      {data.length <= 5 && (
        <button
          onClick={(e) => {
            handleShowAddressForm(true);
            handleSelectedAddress(null, null);
          }}
        >
          Add Address
        </button>
      )}
      <Modal open={showAddForm} onClose={() => handleShowAddressForm(false)}>
        <div className={classes.modal__body__child}>
          <FormCreatorAddress
            data={selectedAddress.data}
            addData={(d) => {
              handleAddData(d);
              handleShowAddressForm(false);
            }}
            updateData={(id, d) => {
              updateData(selectedAddress.index, id, d);
              handleShowAddressForm(false);
            }}
            classes={classes}
            cancel={() => handleShowAddressForm(false)}
          />
        </div>
      </Modal>
    </div>
  );
};

export default AddressComponentEditProfile;
