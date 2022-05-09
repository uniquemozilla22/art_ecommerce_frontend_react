import axiosBase from "../../../axiosBase";
import { hideLoading, showLoading } from "../Loading/Loading";
import { ErrorMessage, WarningMessage } from "../Message/Message";
import { GET_CART } from "../Types/Types";

const CartItems = () => {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    try {
      const res = await new Promise((resolve) =>
        resolve(fetchCartItems(getState().user.token))
      );
      console.log("Cart Fetch", res.data);
      dispatch({ type: GET_CART, payload: res.data.cartItems });
      dispatch(hideLoading());
    } catch (error) {
      console.log({ ...error });
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
    }
  };
};

const fetchCartItems = async (token) => {
  return await axiosBase.get("/carts/items", {
    header: {
      Authorization: "Bearer " + token,
    },
  });
};

export default CartItems;
