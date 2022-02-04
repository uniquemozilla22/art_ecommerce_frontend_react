import axiosBase from "../../../../axiosBase";
import { hideLoading } from "../../Loading/Loading";
import {
  ErrorMessage,
  SuccessMessage,
  WarningMessage,
} from "../../Message/Message";

const LoginAction = (payload) => {
  const { email, password } = payload;

  return (dispatch) => {
    return loginToTheSystem(email, password)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log({ ...err });
        if (err.response.status === 400) {
          dispatch(WarningMessage({ message: err.response.data.message }));
        } else if (err.response.status === 500) {
        } else {
          dispatch(ErrorMessage({ message: err.response.data.message }));
        }
        dispatch(hideLoading());
      });
  };
};

const loginToTheSystem = (email, password) => {
  return axiosBase.post("/auth/login", { email, password });
};

export default LoginAction;
