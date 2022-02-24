import axiosBase from "../../../axiosBase";
import { hideLoading, showLoading } from "../Loading/Loading";
import {
  ErrorMessage,
  SuccessMessage,
  WarningMessage,
} from "../Message/Message";

const ChangeForgotPassword = (payload) => {
  return (dispatch) => {
    dispatch(showLoading());
    postPassword(payload)
      .then((res) => {
        dispatch(hideLoading());
        dispatch(
          SuccessMessage({
            message: "Password Changed ! Login with new password",
          })
        );
      })
      .catch((err) => {
        dispatch(hideLoading());

        if (err.response === undefined) {
          dispatch(
            ErrorMessage({
              message: "Check Your Internet Connection and try again",
            })
          );
        }

        if (err.response.status === 401) {
          dispatch(
            WarningMessage({
              message: err.response.data.message,
            })
          );
        } else if (err.response.status === 500) {
          dispatch(
            WarningMessage({
              message:
                err.response.data.message +
                " ! Check password or resend the request",
            })
          );
        } else {
          dispatch(
            ErrorMessage({
              message: err.response.data.message,
            })
          );
        }
      });
  };
};

const postPassword = (payload) => {
  const { id, token, new_password, confirm_password } = payload;
  return axiosBase.post(`users/resetPassword/${id}/${token}`, {
    new_password,
    confirm_password,
  });
};

export default ChangeForgotPassword;
