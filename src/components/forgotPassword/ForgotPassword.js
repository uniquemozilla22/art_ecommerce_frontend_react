import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";

const ForgotPassword = (props) => {
  const [show, setShow] = useState(props.show);

  const [email, setEmail] = useState(null);

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Modal show={show} onHide={() => props.toggleForgetPassword()} centered>
        <form onSubmit={submitHandler}>
          <input
            type="email"
            name="forgot__email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input type="submit" />
        </form>
      </Modal>
    </div>
  );
};

export default ForgotPassword;
