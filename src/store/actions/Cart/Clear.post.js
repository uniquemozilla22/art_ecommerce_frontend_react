import axiosBase from "../../../axiosBase";
import { hideLoading, showLoading } from "../Loading/Loading";
import {
  ErrorMessage,
  SuccessMessage,
  WarningMessage,
} from "../Message/Message";
import { REMOVE_ALL_CART } from "../Types/Types";

const ClearCartGlobally = () => {
  return (dispatch, getState) => {
    dispatch(showLoading());
    ClearCartGloballyRequest(getState().user.token)
      .then((res) => {
        dispatch(hideLoading());
        dispatch(SuccessMessage({ message: res.data.message }));
        dispatch({
          type: REMOVE_ALL_CART,
        });
      })
      .catch((error) => {
        dispatch(hideLoading());
        console.log(error);
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

const ClearCartGloballyRequest = (token) => {
  return axiosBase.delete("carts/clear", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

export default ClearCartGlobally;
