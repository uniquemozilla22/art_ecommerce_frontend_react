import axiosBase from "../../../axiosBase";
import { hideLoading, showLoading } from "../Loading/Loading";
import {
  ErrorMessage,
  SuccessMessage,
  WarningMessage,
} from "../Message/Message";
import { REMOVE_ORDER_PRODUCT } from "../Types/Types";

const RemoveProductOnOrder = (order, product) => {
  return (dispatch, getState) => {
    dispatch(showLoading());
    deleteRequest(order, product, getState().user.token)
      .then((res) => {
        dispatch(hideLoading());
        dispatch(SuccessMessage({ message: res.data.message }));
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

const deleteRequest = (order, product, token) => {
  return axiosBase.delete("orders/item/delete/" + order + "/" + product, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

export default RemoveProductOnOrder;
