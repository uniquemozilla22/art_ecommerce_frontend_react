import { Edit } from "@mui/icons-material";
import { Modal, Tooltip } from "@mui/material";
import React, { useState } from "react";
import { Button, Modal as Mod } from "react-bootstrap";
import classes from "./EditAddress.module.css";

const EditAddressModal = ({ show, handleHide, updateData, data }) => {
  const [addAddress, setAddAddres] = useState(true);
  const [showAddAddress, setShowAddAddress] = useState(false);

  return (
    <Modal open={show} onClose={handleHide}>
      <div className={classes.modal__body}>
        <h2>Address</h2>

        {data.map((address, index) => (
          <EditedClick
            updateData={(id, address) => updateData(index, id, address)}
            key={index}
            address={address}
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
                    updateData(d);
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

const EditedClick = ({ updateData, address }) => {
  const [showEdit, setShowEdit] = useState(false);

  return showEdit ? (
    <FormCreator
      data={address}
      updateData={(d) => {
        updateData(address.id, d);
        setShowEdit(false);
      }}
      classes={classes}
    />
  ) : (
    <div className={classes.information__container}>
      <h2>{address.address}</h2>
      {address.landmark && <p>{address.landmark}</p>}
      <Tooltip title={"Edit Address"}>
        <Edit className={classes.icon} onClick={(e) => setShowEdit(true)} />
      </Tooltip>
    </div>
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
    <form className={classes.form__modal} onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder={address || "Address"}
        name={address}
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
    </form>
  );
};

export default EditAddressModal;
