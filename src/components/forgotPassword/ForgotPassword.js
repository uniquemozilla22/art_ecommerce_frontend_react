import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import classes from "./ForgotPassword.module.css";

const ForgotPassword = (props) => {
  const [show, setShow] = useState(props.show);

  const [email, setEmail] = useState(null);

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  const submitHandler = (e) => {
    e.preventDefault();
    props.sendMail(email);
  };

  return (
    <Modal
      show={show}
      onHide={() => props.toggleForgetPassword()}
      centered
      className={classes.model_forgot}
    >
      <form className={classes.forgotForm} onSubmit={(e) => submitHandler(e)}>
        <label>Forgot Password?</label>
        <input
          type="email"
          placeholder="Email"
          name="forgot__email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input type="submit" />
      </form>
    </Modal>
  );
};

export default ForgotPassword;
