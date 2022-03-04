import axiosBase from "../../../axiosBase";
import { hideLoading, showLoading } from "../Loading/Loading";
import {
  ErrorMessage,
  SuccessMessage,
  WarningMessage,
} from "../Message/Message";
import { ADD_CART } from "../Types/Types";

const AddCartItem = (payload) => {
  return (dispatch, getState) => {
    const token = getState().user.token;
    dispatch(showLoading());
    postCartitem(payload, token)
      .then((res) => {
        dispatch(hideLoading());
        dispatch(SuccessMessage({ message: res.data.message }));
        dispatch({
          type: ADD_CART,
          payload,
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

const postCartitem = (id, token) => {
  const data = { product_id: id };
  return axiosBase.post("carts/add", data, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

export default AddCartItem;
