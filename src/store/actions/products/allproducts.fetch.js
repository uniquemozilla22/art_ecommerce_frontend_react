import axiosBase from "../../../axiosBase";
import { hideLoading, showLoading } from "../Loading/Loading";
import { ErrorMessage, WarningMessage } from "../Message/Message";
import { ALL_PRODUCTS } from "../Types/Types";
import WishlistData from "./../Wishlist/wishlist.fetch";

const FetchAllProducts = () => {
  return async (dispatch, getState) => {
    if (getState().user.token) dispatch(WishlistData());
    dispatch(showLoading());
    try {
      const res = await new Promise((resolve) => resolve(fetch()));
      dispatch(hideLoading());
      return res.data;
    } catch (err) {
      dispatch(hideLoading());
      if (err.response === undefined) {
        dispatch(
          ErrorMessage({
            message: "Network Error! Check Your Internet Connection",
          })
        );
      }
      if (err.response.status === 400) {
        dispatch(WarningMessage({ message: err.response.data.message }));
      } else {
        dispatch(ErrorMessage({ message: err.response.data.message }));
      }
    }
  };
};

const fetch = () => {
  return axiosBase.get("/products");
};

export default FetchAllProducts;
