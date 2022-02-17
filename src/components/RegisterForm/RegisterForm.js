import React, { useEffect, useState } from "react";
import classes from "./RegisterForm.module.css";
import { FacebookOutlined, Google, Twitter } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import RegisterAction from "../../store/actions/Authentication/Register/RegisterAction";
import { hideLoading, showLoading } from "../../store/actions/Loading/Loading";
import { useNavigate } from "react-router";

const RegisterForm = (props) => {
  const [data, setData] = useState({
    username: null,
    email: null,
    password: null,
    first_name: null,
    middle_name: null,
    last_name: null,
    mobile_no: null,
    telephone_no: null,
    alternative_no: null,
    primary_address: null,
    secondary_address: null,
  });
  const [view, setView] = useState(false);

  const [validation, setValidation] = useState({
    email: { validated: null, message: "" },
    password: { validated: null, message: "" },
    username: { validated: null, message: "" },
    mobile_no: { validated: null, message: "" },
  });

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.Loader(true);

    let validationData = validation;
    validationData = EmailHandler(validationData);
    validationData = passwordHandler(validationData);
    validationData = usernameHandler(validationData);
    validationData = numberValidator(validationData);
    setValidation({ ...validationData });

    if (
      validationData.email.validated &&
      validationData.password.validated &&
      validationData.username.validated &&
      validationData.mobile_no.validated
    ) {
      props.Register(data);
    } else {
      props.Loader(false);
    }
  };

  const EmailHandler = (valid) => {
    if (data.email) {
      if (/^\w+([.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email)) {
        valid.email = { validated: true, message: "" };
      } else {
        valid.email = { validated: false, message: "Invalid Email Format" };
      }
    } else {
      valid.email = { validated: false, message: "Email Not Found" };
    }

    return valid;
  };

  const passwordHandler = (valid) => {
    if (data.password) {
      if (
        /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/.test(
          data.password
        )
      ) {
        valid.password = { validated: true, message: "" };
      } else {
        valid.password = {
          validated: false,
          message:
            "Invalid Password format : 8 - 20  characters , one uppercase character ,  one lowercase character & one digit  ",
        };
      }
    } else {
      valid.password = { validated: false, message: "Password Not Found" };
    }
    return valid;
  };

  const usernameHandler = (valid) => {
    if (!data.username) {
      valid.username = { validated: false, message: "Username Required" };
    } else {
      if (/^[a-z0-9_\.]+$/.test(data.username)) {
        valid.username = { validated: true, message: "" };
      } else {
        valid.username = {
          validated: false,
          message:
            "  Usernames can only have: Lowercase Letters (a-z)  , Numbers (0-9), Dots (.), Underscores (_)",
        };
      }
    }

    return valid;
  };

  const numberValidator = (valid) => {
    if (data.mobile_no.length <= 9) {
      valid.mobile_no = { validated: false, message: "Not a 10 digit number" };
    } else {
      valid.mobile_no = { validated: true, message: "" };
    }

    return valid;
  };

  return (
    <div>
      <div className={classes.register__form}>
        <div className={"" + classes.title__register}>
          <h1>Register.</h1>
        </div>
        <form
          className={"row " + classes.register__form__container}
          onSubmit={(e) => handleSubmit(e)}
        >
          <h4>Personal Information</h4>

          <div className={"row " + classes.group}>
            <div
              className={
                "col-xs-12 col-md-4 col-lg-4 " + classes.input__container
              }
            >
              <input
                type="text"
                placeholder="First Name"
                className={classes.input}
                name={"first_name"}
                onChange={(e) => handleInput(e)}
                required
              />
            </div>
            <div
              className={
                "col-xs-12 col-md-4 col-lg-4 " + classes.input__container
              }
            >
              <input
                type="text"
                placeholder="Middle Name"
                className={classes.input}
                name={"middle_name"}
                onChange={(e) => handleInput(e)}
              />
            </div>
            <div
              className={
                "col-xs-12 col-md-4 col-lg-4 " + classes.input__container
              }
            >
              <input
                type="text"
                placeholder="Last Name"
                className={classes.input}
                name={"last_name"}
                onChange={(e) => handleInput(e)}
                required
              />
            </div>
          </div>
          <div className={"row " + classes.group}>
            <div
              className={
                "col-xs-12 col-md-6 col-lg-6 " + classes.input__container
              }
            >
              <input
                type="text"
                placeholder="Username"
                className={classes.input}
                name={"username"}
                onChange={(e) => handleInput(e)}
                required
              />
              {validation?.username?.validated === false ? (
                <p className={classes.error_Message}>
                  {validation.username.message}
                </p>
              ) : null}
            </div>
            <div
              className={
                "col-xs-12 col-md-6 col-lg-6 " + classes.input__container
              }
            >
              <input
                type={view ? "text" : "password"}
                placeholder="Password"
                className={classes.input}
                name={"password"}
                onChange={(e) => handleInput(e)}
                onFocusCapture={(e) => setView(true)}
                onBlur={(e) => setView(false)}
                style={view ? { background: "#ff595920" } : null}
                required
              />
              {validation?.password?.validated === false ? (
                <p className={classes.error_Message}>
                  {validation.password.message}
                </p>
              ) : null}
            </div>
          </div>

          <h4>Contact Information</h4>
          <div className={"row " + classes.group}>
            <div
              className={
                "col-xs-12 col-md-6 col-lg-6 " + classes.input__container
              }
            >
              <input
                type="text"
                placeholder="Address Line 1"
                className={classes.input}
                name={"primary_address"}
                onChange={(e) => handleInput(e)}
              />
            </div>
            <div
              className={
                "col-xs-12 col-md-6 col-lg-6 " + classes.input__container
              }
            >
              <input
                type="text"
                placeholder="Address Line 2"
                className={classes.input}
                name={"secondary_address"}
                onChange={(e) => handleInput(e)}
              />
            </div>
          </div>
          <div className={"row " + classes.group}>
            <div
              className={
                "col-xs-12 col-md-4 col-lg-4 " + classes.input__container
              }
            >
              <input
                type="number"
                placeholder="Phone Number"
                className={classes.input}
                name={"mobile_no"}
                onChange={(e) => handleInput(e)}
                required
              />
              {validation?.mobile_no?.validated === false ? (
                <p className={classes.error_Message}>
                  {validation.mobile_no.message}
                </p>
              ) : null}
            </div>
            <div
              className={
                "col-xs-12 col-md-4 col-lg-4 " + classes.input__container
              }
            >
              <input
                type="number"
                placeholder="Alternative Number"
                className={classes.input}
                name={"alternative_no"}
                onChange={(e) => handleInput(e)}
              />
            </div>
            <div
              className={
                "col-xs-12 col-md-4 col-lg-4 " + classes.input__container
              }
            >
              <input
                type="number"
                placeholder="Telephone"
                className={classes.input}
                name={"telephone_no"}
                onChange={(e) => handleInput(e)}
              />
            </div>
          </div>
          <div className={"col-12 " + classes.input__container}>
            <input
              type="email"
              placeholder="Email Address"
              className={classes.input}
              name={"email"}
              onChange={(e) => handleInput(e)}
              required
            />
            {validation.email.validated === false ? (
              <p className={classes.error_Message}>
                {validation.email.message}
              </p>
            ) : null}
          </div>
          <input
            type="submit"
            placeholder="Register"
            className={classes.submit}
          />
        </form>
        <div className={classes.register__seperator}>
          <p>or</p>
        </div>
        <div className={classes.other__methods}>
          <Link to="/login" className={classes.link}>
            Login to the Account
          </Link>
          <p>Use Alternatives</p>
          <div className={classes.social__alternatives}>
            <div className={classes.icons}>
              <FacebookOutlined />
            </div>
            <div className={classes.icons}>
              <Google />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    ...state,
    ownProps,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    Register: (data) => dispatch(RegisterAction({ ...data })),
    Loader: (data) =>
      data ? dispatch(showLoading()) : dispatch(hideLoading()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
