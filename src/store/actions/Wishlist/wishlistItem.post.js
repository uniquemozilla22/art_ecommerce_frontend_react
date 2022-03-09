import axiosBase from "./../../../axiosBase";
import { showLoading, hideLoading } from "./../Loading/Loading";
import { ADD_WISHLIST_ITEM } from "./../Types/Types";

import {
  HideMessage,
  ErrorMessage,
  SuccessMessage,
  WarningMessage,
} from "./../Message/Message";

const AddWishlistItem = (id) => {
  return (dispatch, getState) => {
    dispatch(showLoading());
    postData(id, getState().user.token)
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

const postData = (id, token) => {
  const data = { product_id: id };
  return axiosBase.post("wishList/add", data, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

export default AddWishlistItem;
