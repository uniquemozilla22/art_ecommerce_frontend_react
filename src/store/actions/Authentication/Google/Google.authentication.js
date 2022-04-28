import axiosBase from "../../../../axiosBase";
import { hideLoading, showLoading } from "../../Loading/Loading";
import {
  ErrorMessage,
  SuccessMessage,
  WarningMessage,
} from "../../Message/Message";
import { GET_CART, LOGIN_MODAL } from "../../Types/Types";
import { RegisterAuthentication } from "../../User/Authenticate";

const GoogleAuthAction = (info) => {
  return async (dispatch, getState) => {
    console.log("Info to google", info);
    dispatch(showLoading());
    try {
      const res = await authenticateUsingGoogle(info);
      console.log(res.data);
      dispatch(hideLoading());
      dispatch(
        SuccessMessage({
          message: res.statusText + "! Login Successfull.",
        })
      );
      dispatch(
        RegisterAuthentication({
          email: res.data.email,
          token: res.data.token,
          likes: res.data.likedProducts,
          balance: res.data.balance || 0,
          username: res.data.username,
        })
      );
      dispatch({ type: GET_CART, payload: res.data.cartItems });
      if (getState().modal.login) dispatch({ type: LOGIN_MODAL });
    } catch (error) {
      if (error.response === undefined) {
        dispatch(hideLoading());
        dispatch(
          ErrorMessage({
            message: "Network Error! Check Your Internet Connection",
          })
        );
      } else {
        if (error.response?.status === 401) {
          dispatch(
            WarningMessage({
              message: error.response.data.message,
            })
          );
        } else if (error.response?.status === 404) {
          dispatch(
            ErrorMessage({
              message: "Request Not Found ! Try Refreshing the page.",
            })
          );
        } else {
          dispatch(
            ErrorMessage({
              message: error.response.data.message,
            })
          );
        }
      }
    }
  };
};

const authenticateUsingGoogle = (userInfo) => {
  return axiosBase.post("/auth/social", { userInfo });
};

export default GoogleAuthAction;
