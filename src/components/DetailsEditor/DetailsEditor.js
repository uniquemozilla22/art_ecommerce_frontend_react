import React, { useState } from "react";
import classes from "./DetailsEditor.module.css";
import FeatherIcon from "feather-icons-react";
import { Modal } from "@mui/material";
import { connect } from "react-redux";

const DetailsEditor = ({ data }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({ name: "", value: "" });
  const [onSubmit, setOnSubmit] = useState(false);

  const handleModalOpen = (data) => {
    setModalData(data);
    setShowModal(true);
    setOnSubmit(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className={classes.detail__modifier}>
        {Object.keys(data).map((key, value) => (
          <>
            <div
              className={classes.detail}
              onClick={() => handleModalOpen({ name: key, value: data[key] })}
            >
              <p>
                {key.charAt(0).toUpperCase() +
                  key.slice(1).split("_").join(" ")}
                <FeatherIcon
                  icon="edit-2"
                  size={"15"}
                  className={classes.icon}
                />
              </p>
              <h2>{data[key]}</h2>
            </div>
          </>
        ))}
      </div>
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <div className={classes.modal__body}>
          <h2>
            {modalData.name.charAt(0).toUpperCase() +
              modalData.name.slice(1).split("_").join(" ")}
          </h2>
          <FormCreator name={modalData.name} value={modalData.value} />
        </div>
      </Modal>
    </>
  );
};

const FormCreator = ({ name, value }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  if (name === "gender") {
    return (
      <form className={classes.form__modal} onSubmit={(e) => handleSubmit(e)}>
        <select name={name} id="cars">
          <option value="Male" disabled>
            Select an Option
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Special">Special</option>
        </select>
        <div className={classes.buttons__container}>
          <input type="submit" value="Submit" />
        </div>
      </form>
    );
  } else if (
    name === "phone_no" ||
    name === "telephone_no" ||
    name === "alternative_no" ||
    name === "mobile_no"
  ) {
    return (
      <form className={classes.form__modal} onSubmit={(e) => handleSubmit(e)}>
        <input type="number" placeholder={value} name={name} />
        <div className={classes.buttons__container}>
          <input type="submit" value="Submit" />
        </div>
      </form>
    );
  } else {
    return (
      <form className={classes.form__modal} onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder={value} name={name} />
        <div className={classes.buttons__container}>
          <input type="submit" value="Submit" />
        </div>
      </form>
    );
  }
};

export default DetailsEditor;
