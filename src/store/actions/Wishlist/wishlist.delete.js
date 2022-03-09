import { hideLoading } from "../Loading/Loading";
import { ErrorMessage } from "../Message/Message";
import { DELETE_WISHLIST_ITEM } from "../Types/Types";
import axiosBase from "./../../../axiosBase";
import { showLoading } from "./../Loading/Loading";
import { WarningMessage } from "./../Message/Message";

const DeleteWishlist = (id) => {
  return (dispatch, getState) => {
    dispatch(showLoading());
    deleteWishListItem(id, getState().user.token)
      .then((res) => {
        dispatch(hideLoading());
        dispatch({
          type: DELETE_WISHLIST_ITEM,
          payload: { id },
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

const deleteWishListItem = (id, token) => {
  return axiosBase.delete("/wishList/item/" + id, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

export default DeleteWishlist;
