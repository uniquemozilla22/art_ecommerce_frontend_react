import React, { useEffect } from "react";
import ForgetPasswordForm from "../../components/ForgotPasswordForm/ForgetPasswordForm";
import classes from "./ForgetPassword.module.css";
import { useParams } from "react-router";
import EmailVerify from "../../store/actions/ForgotPassword/EmailVerify.action";
import { connect } from "react-redux";

const ForgetPassword = (props) => {
  const { id, token } = useParams();

  useEffect(() => {
    props.verifyToken({ id, token });
  }, []);

  return (
    <div className={classes.forget__password__container}>
      <ForgetPasswordForm />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    verifyToken: (payload) => dispatch(EmailVerify(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgetPassword);
