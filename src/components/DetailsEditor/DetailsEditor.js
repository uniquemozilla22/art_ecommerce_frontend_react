import React, { useState } from "react";
import classes from "./DetailsEditor.module.css";
import FeatherIcon from "feather-icons-react";
import { Modal } from "@mui/material";

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
    setOnSubmit(true);
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
                {key}
                <FeatherIcon
                  icon="edit-2"
                  size={"20"}
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
          <h2>{modalData.name}</h2>
          {onSubmit ? <h4>Your data has been updated</h4> : null}

          <form
            className={classes.form__modal}
            onSubmit={(e) => handleSubmit(e)}
          >
            <input
              type="text"
              placeholder={modalData.value}
              onChange={(e) => {}}
              name={modalData.name}
            />
            <div className={classes.buttons__container}>
              <input type="submit" value="Submit" />
              <button
                className={classes.close__button}
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default DetailsEditor;
