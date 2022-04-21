import axiosBase from "../../../axiosBase";
import { hideLoading, showLoading } from "../Loading/Loading";
import {
  ErrorMessage,
  SuccessMessage,
  WarningMessage,
} from "../Message/Message";

const SelectAddressPost = (address, order) => {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    try {
      const { data } = await new Promise((resolve) =>
        resolve(post(address, order, getState().user.token))
      );
      console.log(data);
      dispatch(SuccessMessage({ message: data.message }));
      dispatch(hideLoading());
      return data;
    } catch (error) {
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

const post = async (address_id, order_id, token) => {
  return await axiosBase.post(
    "orders/shipping/apply",
    { address_id, order_id },
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
};

export default SelectAddressPost;
