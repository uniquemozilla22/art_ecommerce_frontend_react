import axiosBase from "../../../axiosBase";
import { hideLoading, showLoading } from "../Loading/Loading";
import {
  ErrorMessage,
  SuccessMessage,
  WarningMessage,
} from "../Message/Message";
import { REMOVE_ALL_CART, USER_LOGOUT } from "../Types/Types";

export const Logout = () => {
  return (dispatch, getState) => {
    dispatch(showLoading());
    logoutRequest(getState().user.token)
      .then((res) => {
        dispatch(hideLoading());
        dispatch({ type: REMOVE_ALL_CART });
        dispatch({
          type: USER_LOGOUT,
        });

        dispatch(SuccessMessage({ message: "Logged Out Successful" }));
      })
      .catch((error) => {
        dispatch(hideLoading());
        if (error.response === undefined) {
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
          } else {
            dispatch(
              ErrorMessage({
                message: error.response.data.message,
              })
            );
          }
        }
      });
  };
};

const logoutRequest = (token) => {
  return axiosBase.get("auth/logout", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};
