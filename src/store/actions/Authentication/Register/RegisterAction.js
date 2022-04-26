import axiosBase from "../../../../axiosBase";
import { hideLoading, showLoading } from "../../Loading/Loading";
import {
  ErrorMessage,
  SuccessMessage,
  WarningMessage,
} from "../../Message/Message";
import { RegisterAuthentication } from "../../User/Authenticate";

const RegisterAction = (payload) => {
  return (dispatch) => {
    dispatch(showLoading());
    return registerUser(payload)
      .then((res) => {
        dispatch(hideLoading());
        dispatch(
          SuccessMessage({
            message: res.statusText + "! Profile Created.",
          })
        );
        dispatch(
          RegisterAuthentication({
            username: payload.username,
            email: payload.email,
            token: res.data.token,
            balance: res.data.userBalance || 0,
            likes: res.data.likes || [],
          })
        );
      })
      .catch((err) => {
        dispatch(hideLoading());

        if (err.response === undefined) {
          dispatch(
            ErrorMessage({
              message: "Network Error! Check Your Internet Connection",
            })
          );
        }
        if (err.response.status === 400) {
          dispatch(WarningMessage({ message: err.response.data.message }));
        } else if (err.response.status === 500) {
          if (
            err.response.data.error.name === "SequelizeUniqueConstraintError"
          ) {
            dispatch(
              WarningMessage({
                message:
                  err.response.data.message + " !  Username Already Exists",
              })
            );
          } else {
            dispatch(
              WarningMessage({
                message: err.response.data.message,
              })
            );
          }
        } else {
          dispatch(ErrorMessage({ message: err.response.data.message }));
        }
        dispatch(hideLoading());
      });
  };
};

const registerUser = (data) => {
  return axiosBase.post("customers/create", { ...data });
};

export default RegisterAction;
