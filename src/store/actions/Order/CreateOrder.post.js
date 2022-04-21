import axiosBase from "../../../axiosBase";
import { hideLoading, showLoading } from "../Loading/Loading";
import {
  ErrorMessage,
  SuccessMessage,
  WarningMessage,
} from "../Message/Message";
import { REMOVE_ALL_CART } from "../Types/Types";

const CreateOrder = () => {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    try {
      const { data } = await new Promise((resolve) =>
        resolve(createOrder(getState().user.token))
      );
      dispatch(hideLoading());
      dispatch(SuccessMessage({ message: data.message }));
      dispatch({
        type: REMOVE_ALL_CART,
      });
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
