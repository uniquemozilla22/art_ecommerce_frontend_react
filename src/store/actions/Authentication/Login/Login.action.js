import axiosBase from "../../../../axiosBase";
import { hideLoading } from "../../Loading/Loading";
import {
  ErrorMessage,
  SuccessMessage,
  WarningMessage,
} from "../../Message/Message";
import { RegisterAuthentication } from "../../User/Authenticate";
import { GET_CART, LOGIN_MODAL } from "../../Types/Types";

const LoginAction = (payload) => {
  const { email, password } = payload;

  return (dispatch, getState) => {
    return loginToTheSystem(email, password)
      .then((res) => {
        dispatch(hideLoading());
        console.log(res.data);
        dispatch(
          SuccessMessage({
            message: res.statusText + "! Login Successfull.",
          })
        );
        dispatch(
          RegisterAuthentication({
            email: payload.email,
            token: res.data.token,
            likes: res.data.likedProducts,
          })
        );
        dispatch({ type: GET_CART, payload: res.data.cartItems });
        if (getState().modal.login) dispatch({ type: LOGIN_MODAL });
      })
      .catch((err) => {
        dispatch(hideLoading());

        if (err.response === undefined) {
          dispatch(
            ErrorMessage({
              message: "Network Error! Check Your Internet Connection",
            })
          );
        } else {
          if (err.response.status === 400) {
            dispatch(WarningMessage({ message: err.response.data.message }));
          } else {
            dispatch(ErrorMessage({ message: err.response.data.message }));
          }
        }
      });
  };
};

const loginToTheSystem = (email, password) => {
  return axiosBase.post("/auth/login", { email, password });
};

export default LoginAction;
