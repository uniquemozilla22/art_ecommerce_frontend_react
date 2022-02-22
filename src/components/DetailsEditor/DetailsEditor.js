import React, { useState } from "react";
import classes from "./DetailsEditor.module.css";
import FeatherIcon from "feather-icons-react";
import { Modal } from "@mui/material";
import { connect } from "react-redux";

const DetailsEditor = ({
  data,
  updateData,
  postPassword,
  activeStatus,
  email,
  sendOTP,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({ name: "", value: "" });
  const [onSubmit, setOnSubmit] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showVerifyEmailModal, setShowVerifyEmailModal] = useState(false);
  const [sendMail, setSendMail] = useState(false);

  const handleModalOpen = (data) => {
    setModalData(data);
    setShowModal(true);
    setOnSubmit(false);
  };

  const handleSendMail = () => {
    setSendMail(true);
    sendOTP({ email });
  };

  const handleEmailVerifyModal = () => {
    setSendMail(false);
    setShowVerifyEmailModal(false);
  };

  return (
    <>
      <div className={classes.detail__modifier}>
        {Object.keys(data).map((key, value) => (
          <div
            key={value}
            className={classes.detail}
            onClick={() => handleModalOpen({ name: key, value: data[key] })}
          >
            <p>
              {key.charAt(0).toUpperCase() + key.slice(1).split("_").join(" ")}
              <FeatherIcon icon="edit-2" size={"15"} className={classes.icon} />
            </p>
            <h2>{data[key]}</h2>
          </div>
        ))}
      </div>
      <button
        className={classes.extra__button}
        onClick={(e) => setShowPasswordModal(true)}
      >
        Change Password
      </button>
      {!activeStatus ? (
        <button
          className={classes.extra__button}
          onClick={(e) => setShowVerifyEmailModal(true)}
        >
          Verify Email
        </button>
      ) : null}
      <Modal
        open={showPasswordModal}
        onClose={() => setShowPasswordModal(false)}
      >
        <div className={classes.modal__body}>
          <h2>Change Password.</h2>

          <PasswordForm postPassword={postPassword} />
        </div>
      </Modal>
      <Modal
        open={showVerifyEmailModal}
        onClose={() => handleEmailVerifyModal(false)}
      >
        <div className={classes.modal__body}>
          <h2>Verify Email</h2>
          <p>
            Your Email <span>{email}</span> will receive a OTP.{" "}
            <button onClick={(e) => handleSendMail()}>
              {sendMail ? "Didn't Receive ? Send Mail Again" : "Send Mail"}
            </button>
          </p>
        </div>
      </Modal>
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <div className={classes.modal__body}>
          <h2>
            {modalData.name.charAt(0).toUpperCase() +
              modalData.name.slice(1).split("_").join(" ")}
          </h2>
          <FormCreator
            name={modalData.name}
            value={modalData.value}
            updateData={updateData}
          />
        </div>
      </Modal>
    </>
  );
};

const FormCreator = ({ name, value, updateData }) => {
  const [data, setData] = useState({
    name,
    value,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateData(data);
  };

  const handleInput = (e) => {
    setData({ ...data, value: e.target.value });
  };

  if (name === "gender") {
    return (
      <form className={classes.form__modal} onSubmit={(e) => handleSubmit(e)}>
        <select name={name} id={name} onChange={(e) => handleInput(e)}>
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
        <input
          type="number"
          placeholder={value}
          name={name}
          onChange={(e) => handleInput(e)}
        />
        <div className={classes.buttons__container}>
          <input type="submit" value="Submit" />
        </div>
      </form>
    );
  } else {
    return (
      <form className={classes.form__modal} onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder={value}
          name={name}
          onChange={(e) => handleInput(e)}
        />
        <div className={classes.buttons__container}>
          <input type="submit" value="Submit" />
        </div>
      </form>
    );
  }
};

const PasswordForm = ({ postPassword }) => {
  const [data, setData] = useState({
    current_password: null,
    new_password: null,
    confirm_password: null,
  });

  const [error, setError] = useState(false);

  const [view, setView] = useState({
    current_password: false,
    new_password: false,
    confirm_password: false,
  });

  const seeView = (e) => {
    setView({ ...view, [e.target.name]: true });
  };
  const hideView = (e) => {
    setView({ ...view, [e.target.name]: false });
  };

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    Object.keys(data).forEach((key, index) => {
      let valid = passwordHandler(data[key]);
      if (valid !== true) {
        setError(valid);
      } else setError(false);
    });
    if (
      error === false &&
      data.current_password !== null &&
      data.confirm_password !== null &&
      data.new_password !== null
    ) {
      postPassword(data);
    }
  };

  const passwordHandler = (password) => {
    let valid;
    if (password) {
      if (
        /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/.test(
          password
        )
      ) {
        valid = true;
      } else {
        valid =
          "Invalid Password format : 8 - 20  characters , one uppercase character ,  one lowercase character & one digit  ";
      }
    } else {
      valid = "Password Not Found";
    }
    return valid;
  };
  return (
    <>
      <form onSubmit={(e) => submitHandler(e)} className={classes.form__modal}>
        <p className={classes.error_message}>{error ? error : null}</p>
        {Object.keys(data).map((keys, index) => {
          return (
            <input
              key={index}
              type={view[keys] ? "text" : "password"}
              name={keys}
              onChange={(e) => handleInput(e)}
              placeholder={
                keys.charAt(0).toUpperCase() +
                keys.slice(1).split("_").join(" ")
              }
              onFocusCapture={(e) => seeView(e)}
              onBlur={(e) => hideView(e)}
              style={view[keys] ? { background: "#ff595920" } : null}
            />
          );
        })}

        <div className={classes.buttons__container}>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </>
  );
};

export default DetailsEditor;
