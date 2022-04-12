import {
  Delete,
  DeleteForeverRounded,
  DeleteOutlineRounded,
  Edit,
  EditOutlined,
} from "@mui/icons-material";
import { Modal, Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
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

  const handleAddData = (data) => addData(data);

  const [addresses, setAddresses] = useState(data);

  useEffect(() => {
    setAddresses(data);
  }, [data]);
  return (
    <Modal open={show} onClose={handleHide}>
      <div className={classes.modal__body}>
        <h2>Address</h2>
        {addresses.map((address, index) => (
          <EditedClick
            updateData={(id, address) => updateData(index, id, address)}
            key={index}
            address={address}
            deleteData={(id) => deleteData(index, id)}
          />
        ))}

        {addresses.length <= 5 && (
          <>
            <Button
              className={classes.button_add}
              onClick={(e) => setShowAddAddress(true)}
            >
              Add Address
            </Button>
            <Modal
              open={showAddAddress}
              onClose={() => setShowAddAddress(false)}
            >
              <div className={classes.modal__body__child}>
                <FormCreator
                  updateData={(d) => {
                    handleAddData(d);
                    setShowAddAddress(false);
                  }}
                  classes={classes}
                />
              </div>
            </Modal>
          </>
        )}
      </div>
    </Modal>
  );
};

export const EditedClick = ({ updateData, address, deleteData }) => {
  const [showEdit, setShowEdit] = useState(false);
  const [data, setData] = useState(address);
  const useAnimationStyle = () => {
    return useSpring({
      loop: false,
      from: { x: 50, opacity: 0 },
      to: { x: 0, opacity: 1 },
      delay: 200,
    });
  };

  useEffect(() => {
    setData(address);
  }, [address]);

  return (
    <animated.div style={useAnimationStyle()}>
      {showEdit ? (
        <FormCreator
          data={data}
          updateData={
            updateData &&
            ((d) => {
              setData(d);
              updateData(data.id, d);
              setShowEdit(false);
            })
          }
          classes={classes}
        />
      ) : (
        <animated.div className={classes.information__container}>
          <div>
            <h2>{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h2>
            <p>
              <p>
                {data.city} {data.postal_code} {data.country}
              </p>
              <p>Contact: {data.mobile_number}</p>
              Landmark : <span>{data.landmark}</span>
            </p>
          </div>

          <div className={classes.icon}>
            {updateData && (
              <Tooltip title={"Edit Address"}>
                <EditOutlined
                  className={classes.icon}
                  onClick={(e) => setShowEdit(true)}
                />
              </Tooltip>
            )}
            {address.status !== "primary" && deleteData && (
              <Tooltip title={"Delete Address"}>
                <DeleteOutlineRounded
                  className={classes.icon}
                  onClick={(e) => deleteData(data.id)}
                />
              </Tooltip>
            )}
          </div>
        </animated.div>
      )}
    </animated.div>
  );
};

const FormCreator = ({ data, updateData, classes }) => {
  const [name, setName] = useState(data?.name);
  const [city, setCity] = useState(data?.city);
  const [country, setCountry] = useState(data?.country);
  const [mobile_number, setMobileNumber] = useState(data?.mobile_number);
  const [postal_code, setPostalCode] = useState(data?.postal_code);
  const [stateName, setStateName] = useState(data?.state);
  const [landmark, setLandmark] = useState(data?.landmark);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateData({
      name,
      city,
      mobile_number,
      country,
      postal_code,
      state: stateName,
      landmark,
    });
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
    </animated.form>
  );
};

export default EditAddressModal;
