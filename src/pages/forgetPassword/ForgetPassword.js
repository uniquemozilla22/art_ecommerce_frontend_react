import React, { useEffect } from "react";
import ForgetPasswordForm from "../../components/ForgotPasswordForm/ForgetPasswordForm";
import classes from "./ForgetPassword.module.css";
import { useParams } from "react-router";
import EmailVerify from "../../store/actions/ChangeForgotPassword/EmailVerify.action";
import { connect } from "react-redux";
import { hideLoading, showLoading } from "../../store/actions/Loading/Loading";
import ChangeForgotPassword from "../../store/actions/ChangeForgotPassword/ChangeForgetPassword.action";

const ForgetPassword = (props) => {
  const { id, token } = useParams();

  useEffect(() => {
    props.verifyToken({ id, token });
  }, []);

  return (
    <div className={classes.forget__password__container}>
      <ForgetPasswordForm
        id={id}
        token={token}
        postPasswords={props.postPasswords}
        loader={props.Loader}
      />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    ...state,
    ...ownProps,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    verifyToken: (payload) => dispatch(EmailVerify(payload)),
    postPasswords: (id, token, new_password, confirm_password) =>
      dispatch(
        ChangeForgotPassword({ id, token, new_password, confirm_password })
      ),
    Loader: (data) =>
      data ? dispatch(showLoading()) : dispatch(hideLoading()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgetPassword);
