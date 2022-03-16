import axiosBase from "../../../../axiosBase";
import { hideLoading, showLoading } from "../../Loading/Loading";
import {
  ErrorMessage,
  SuccessMessage,
  WarningMessage,
} from "../../Message/Message";

const ForgotPasswordAction = (email) => {
  return (dispatch) => {
    dispatch(showLoading());
    sendMail(email)
      .then((response) => {
        dispatch(hideLoading());
        dispatch(SuccessMessage({ message: response.data.message }));
      })
      .catch((error) => {
        dispatch(hideLoading());
        if (error.response === undefined) {
          dispatch(ErrorMessage({ message: "Check Your Internet Connection" }));
        }
        if (error.response.status === 404) {
          dispatch(ErrorMessage({ message: error.response.data.message }));
        } else {
          dispatch(WarningMessage({ message: error.response.data.message }));
        }
      });
  };
};

const sendMail = (email) => {
  return axiosBase.post("/users/resetPassword", { email });
};

export default ForgotPasswordAction;
