import axiosBase from "../../../../axiosBase";
import { store } from "../../../store";
import { hideLoading } from "../../Loading/Loading";
import {
  ErrorMessage,
  SuccessMessage,
  WarningMessage,
} from "../../Message/Message";

const SendOTPtoEmail = (payload) => {
  const state = store.getState();

  return (dispatch) => {
    sendOTP(state.user.token, payload)
      .then((res) => {
        dispatch(
          SuccessMessage({
            message: res.data.message,
          })
        );
      })
      .catch((error) => {
        dispatch(hideLoading());
        if (error.response === undefined) {
          dispatch(
            ErrorMessage({
              message: "Network Error! Check Your Internet Connection",
            })
          );
        }
        if (error.response.status === 401) {
          dispatch(
            WarningMessage({
              message: error.response.data.message,
            })
          );
        } else {
          dispatch(
            ErrorMessage({
              message: error.response.data.message,
            })
          );
        }
      });
  };
};

const sendOTP = (token, data) => {
  console.log(token);
  return axiosBase.post("users/verify_email", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export default SendOTPtoEmail;
