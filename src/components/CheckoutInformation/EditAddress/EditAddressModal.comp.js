import { DeleteOutlineRounded, EditOutlined } from "@mui/icons-material";
import { Modal, Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { animated } from "react-spring";
import classes from "./EditAddress.module.css";

const EditAddressModal = ({
  show,
  handleHide,
  updateData,
  data,
  addData,
  deleteData,
}) => {
  const [showAddAddress, setShowAddAddress] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);

  const handleAddData = (data) => addData(data);
  const handleShowAddressForm = (count, data) => {
    setShowAddAddress(true);
    setSelectedAddress({ count, data });
  };
  const handleHideAddressForm = () => setShowAddAddress(false);
  const [addresses, setAddresses] = useState(data);

  useEffect(() => {
    setAddresses(data);
  }, [data]);

  useEffect(() => {
    setAddresses(data);
  }, [data]);
  return (
    <Modal open={show} onClose={handleHide}>
      <div className={classes.modal__body}>
        <h2>Address</h2>
        {console.log(addresses)}
        {addresses.map((address, index) => (
          <EditedClick
            updateData={(id, address) => updateData(index, id, address)}
            key={index}
            count={index}
            address={address}
            deleteData={(id) => deleteData(index, id)}
            handleShowAddressForm={handleShowAddressForm}
          />
        ))}

        {addresses.length <= 5 && (
          <>
            <Button
              className={classes.button_add}
              onClick={(e) => handleShowAddressForm(null)}
            >
              Add Address
            </Button>
            <Modal open={showAddAddress} onClose={handleHideAddressForm}>
              <div className={classes.modal__body__child}>
                <FormCreator
                  data={selectedAddress?.data}
                  addData={(d) => {
                    handleAddData(d);
                  }}
                  updateData={(id, d) => {
                    updateData(selectedAddress?.count, id, d);
                  }}
                  classes={classes}
                  cancel={handleHideAddressForm}
                />
              </div>
            </Modal>
          </>
        )}
      </div>
    </Modal>
  );
};

export const EditedClick = ({
  updateData,
  address,
  deleteData,
  handleShowAddressForm,
  count,
}) => {
  return (
    <div>
      <div className={classes.information__container}>
        <div>
          <h2>
            {address.name.charAt(0).toUpperCase() + address.name.slice(1)}
          </h2>
          <p>
            <p>
              {address.city} {address.postal_code} {address.country}
            </p>
            <p>Contact: {address.mobile_number}</p>
            Landmark : <span>{address.landmark}</span>
          </p>
        </div>

        <div className={classes.icon}>
          {updateData && (
            <Tooltip title={"Edit Address"}>
              <EditOutlined
                className={classes.icon}
                onClick={(e) => handleShowAddressForm(count, address)}
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
    </div>
  );
};

const FormCreator = ({ data, updateData, addData, classes, cancel }) => {
  const [name, setName] = useState(data?.name);
  const [city, setCity] = useState(data?.city);
  const [country, setCountry] = useState(data?.country);
  const [mobile_number, setMobileNumber] = useState(data?.mobile_number);
  const [postal_code, setPostalCode] = useState(data?.postal_code);
  const [stateName, setStateName] = useState(data?.state);
  const [landmark, setLandmark] = useState(data?.landmark);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data) {
      updateData(data.id, {
        name,
        city,
        mobile_number,
        country,
        postal_code,
        state: stateName,
        landmark,
      });
    } else {
      addData({
        name,
        city,
        mobile_number,
        country,
        postal_code,
        state: stateName,
        landmark,
      });
    }
  };

  return (
    <animated.form
      className={classes.form__modal}
      onSubmit={(e) => handleSubmit(e)}
    >
      <input
        type="text"
        placeholder={name || "Name"}
        name={name}
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder={country || "Country"}
        name={country}
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder={stateName || "State"}
        name={stateName}
        value={stateName}
        onChange={(e) => setStateName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder={city || "City"}
        name={city}
        value={city}
        onChange={(e) => setCity(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder={postal_code || "Postal Code"}
        name={postal_code}
        value={postal_code}
        onChange={(e) => setPostalCode(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder={mobile_number || "Mobile Number"}
        name={mobile_number}
        value={mobile_number}
        onChange={(e) => setMobileNumber(e.target.value)}
        required
      />
      <textarea
        type="textarea"
        placeholder={landmark || "Landmark"}
        name={landmark || ""}
        onChange={(e) => setLandmark(e.target.value)}
        rows="2"
      />
      <div className={classes.buttons__container}>
        <input type="submit" value="Submit" />
      </div>
      <div className={classes.cancel__container} onClick={(e) => cancel()}>
        Cancel
      </div>
    </animated.form>
  );
};

export default EditAddressModal;
