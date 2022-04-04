import {
  Delete,
  DeleteForeverRounded,
  DeleteOutlineRounded,
  Edit,
  EditOutlined,
} from "@mui/icons-material";
import { Modal, Tooltip } from "@mui/material";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
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
  const [addAddress, setAddAddres] = useState(true);
  const [showAddAddress, setShowAddAddress] = useState(false);

  const handleAddData = (data) => addData(data);

  return (
    <Modal open={show} onClose={handleHide}>
      <div className={classes.modal__body}>
        <h2>Address</h2>

        {data.map((address, index) => (
          <EditedClick
            updateData={(id, address) => updateData(index, id, address)}
            key={index}
            address={address}
            deleteData={(id) => deleteData(index, id)}
          />
        ))}

        {data.length <= 1 && (
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

const EditedClick = ({ updateData, address, deleteData }) => {
  const [showEdit, setShowEdit] = useState(false);
  const useAnimationStyle = () => {
    return useSpring({
      loop: false,
      from: { x: 50, opacity: 0 },
      to: { x: 0, opacity: 1 },
      delay: 200,
    });
  };

  return (
    <animated.div style={useAnimationStyle()}>
      {showEdit ? (
        <FormCreator
          data={address}
          updateData={(d) => {
            updateData(address.id, d);
            setShowEdit(false);
          }}
          classes={classes}
        />
      ) : (
        <animated.div className={classes.information__container}>
          <div>
            <h2>{address.address}</h2>
            {address.landmark && (
              <p>
                Landmark : <span>{address.landmark}</span>
              </p>
            )}
          </div>

          <div className={classes.icon}>
            <Tooltip title={"Edit Address"}>
              <EditOutlined
                className={classes.icon}
                onClick={(e) => setShowEdit(true)}
              />
            </Tooltip>
            <Tooltip title={"Delete Address"}>
              <DeleteOutlineRounded
                className={classes.icon}
                onClick={(e) => deleteData(address.id)}
              />
            </Tooltip>
          </div>
        </animated.div>
      )}
    </animated.div>
  );
};

const FormCreator = ({ data, updateData, classes }) => {
  const [address, setAddress] = useState(data?.address);
  const [landmark, setLandmark] = useState(data?.landmark);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateData({ address, landmark });
  };

  return (
    <animated.form
      className={classes.form__modal}
      onSubmit={(e) => handleSubmit(e)}
    >
      <input
        type="text"
        placeholder={address || "Address"}
        name={address}
        value={address}
        onChange={(e) => setAddress(e.target.value)}
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
