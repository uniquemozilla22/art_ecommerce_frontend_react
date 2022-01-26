import React from "react";
import classes from "./register.module.css";
import { FacebookOutlined, Google, Twitter } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className={classes.register__container}>
      <div className={classes.register__form}>
        <div className={"" + classes.title__register}>
          <h1>Register.</h1>
        </div>
        <form className={"row " + classes.register__form__container}>
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
              />
            </div>
            <div
              className={
                "col-xs-12 col-md-6 col-lg-6 " + classes.input__container
              }
            >
              <input
                type="text"
                placeholder="Password"
                className={classes.input}
              />
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
                type="text"
                placeholder="Phone Number"
                className={classes.input}
              />
            </div>
            <div
              className={
                "col-xs-12 col-md-4 col-lg-4 " + classes.input__container
              }
            >
              <input
                type="text"
                placeholder="Alternative Number"
                className={classes.input}
              />
            </div>
            <div
              className={
                "col-xs-12 col-md-4 col-lg-4 " + classes.input__container
              }
            >
              <input
                type="text"
                placeholder="Telephone"
                className={classes.input}
              />
            </div>
          </div>
          <div className={"col-12 " + classes.input__container}>
            <input
              type="text"
              placeholder="Email Address"
              className={classes.input}
            />
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
            <div className={classes.icons}>
              <Twitter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
