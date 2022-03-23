import axiosBase from "../../../axiosBase";
import { hideLoading, showLoading } from "../Loading/Loading";
import {
  ErrorMessage,
  SuccessMessage,
  WarningMessage,
} from "../Message/Message";
import { REMOVE_ALL_CART } from "../Types/Types";

const CreateOrder = () => {
  return (dispatch, getState) => {
    dispatch(showLoading());
    createOrder(getState().user.token)
      .then((res) => {
        dispatch(hideLoading());
        dispatch(SuccessMessage({ message: res.data.message }));
        dispatch({
          type: REMOVE_ALL_CART,
        });
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

const createOrder = (token) => {
  return axiosBase.post(
    "orders/create",
    {},
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
};

export default CreateOrder;
