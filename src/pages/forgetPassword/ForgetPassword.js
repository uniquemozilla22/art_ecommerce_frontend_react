import React from "react";
import ForgetPasswordForm from "../../components/ForgotPasswordForm/ForgetPasswordForm";
import Layout from "../../components/Layout";
import classes from "./ForgetPassword.module.css";

const ForgetPassword = () => {
  return (
    <div className={classes.forget__password__container}>
      <ForgetPasswordForm />
    </div>
  );
};

export default ForgetPassword;
