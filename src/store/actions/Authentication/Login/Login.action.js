import axiosBase from "../../../../axiosBase";
import { hideLoading } from "../../Loading/Loading";
import {
  ErrorMessage,
  SuccessMessage,
  WarningMessage,
} from "../../Message/Message";
import { RegisterAuthentication } from "../../User/Authenticate";
import { LOGIN_MODAL } from "../../Types/Types";

const LoginAction = (payload) => {
  const { email, password } = payload;

  return (dispatch) => {
    return loginToTheSystem(email, password)
      .then((res) => {
        dispatch(hideLoading());

        dispatch(
          SuccessMessage({
            message: res.statusText + "! Login Successfull.",
          })
        );
        dispatch(
          RegisterAuthentication({
            username: payload.username,
            email: payload.email,
            token: res.data.token,
          })
        );
        dispatch({ type: LOGIN_MODAL });
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
        } else {
          dispatch(ErrorMessage({ message: err.response.data.message }));
        }
      });
  };
};

const loginToTheSystem = (email, password) => {
  return axiosBase.post("/auth/login", { email, password });
};

export default LoginAction;