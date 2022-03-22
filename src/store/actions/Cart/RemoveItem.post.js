import axiosBase from "../../../axiosBase";
import { hideLoading, showLoading } from "../Loading/Loading";
import {
  ErrorMessage,
  SuccessMessage,
  WarningMessage,
} from "../Message/Message";
import { REMOVE_CART } from "../Types/Types";

const removeCartItem = (payload) => {
  return (dispatch, getState) => {
    console.log(payload);
    dispatch(showLoading());
    console.log(getState().user.token);
    removeAction(payload.id, getState().user.token)
      .then((res) => {
        dispatch(hideLoading());
        dispatch(SuccessMessage({ message: res.data.message }));
        dispatch({
          type: REMOVE_CART,
          payload,
        });
      })
      .catch((error) => {
        dispatch(hideLoading());
        console.log({ ...error });
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

const removeAction = (id, token) => {
  const data = { product_id: id };
  return axiosBase.post("carts/remove", data, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};
export default removeCartItem;
