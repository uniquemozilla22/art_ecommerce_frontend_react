import axiosBase from "../../../axiosBase";
import { hideLoading, showLoading } from "../Loading/Loading";
import { ErrorMessage, WarningMessage } from "../Message/Message";
import { FETCH_WISHLIST } from "../Types/Types";

const WishlistData = () => {
  return (dispatch, getState) => {
    const token = getState().user.token;
    dispatch(showLoading());
    fetchWishlistData(token)
      .then((res) => {
        dispatch(hideLoading());
        dispatch({
          type: FETCH_WISHLIST,
          payload: res.data,
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

const fetchWishlistData = (token) => {
  return axiosBase.get("wishList/items", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

export default WishlistData;
