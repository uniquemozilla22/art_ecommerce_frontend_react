import React, { useState } from "react";
import { connect } from "react-redux";
import classes from "./ForgotPasswordForm.module.css";

const ForgetPasswordForm = (props) => {
  const [view, setView] = useState(false);

  const [data, setData] = useState({
    new_password: null,
    confirm_password: null,
  });

  const [error, setError] = useState(false);

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Object.keys(data).forEach((key, index) => {
      let valid = passwordHandler(data[key]);
      if (valid !== true) {
        setError(valid);
      } else setError(false);
    });
    if (
      error === false &&
      data.confirm_password !== null &&
      data.new_password !== null
    ) {
      props.loader(true);
      props.postPasswords(
        props.id,
        props.token,
        data.new_password,
        data.confirm_password
      );
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
    <div className={classes.form__container}>
      <h2>Forgot Password.</h2>
      <p>{error ? error : null}</p>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type={view ? "text" : "password"}
          onChange={(e) => handleInput(e)}
          onClick={(e) => setView(!view)}
          style={view ? { background: "#ff595920" } : null}
          name={"new_password"}
          placeholder={"New Password"}
        />
        <input
          type={view ? "text" : "password"}
          onChange={(e) => handleInput(e)}
          onClick={(e) => setView(!view)}
          style={view ? { background: "#ff595920" } : null}
          name={"confirm_password"}
          placeholder={"Confirm Password"}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default ForgetPasswordForm;
