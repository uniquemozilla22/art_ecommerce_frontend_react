import axiosBase from "../../../axiosBase";
import { hideLoading, showLoading } from "../Loading/Loading";
import {
  ErrorMessage,
  SuccessMessage,
  WarningMessage,
} from "../Message/Message";

const PaymentMethodSelection = (orderID, payment_type) => {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    console.log(orderID, payment_type);
    try {
      const res = await new Promise((resolve) =>
        resolve(
          postPayment(orderID, getState().user.token, {
            payment_type,
          })
        )
      );
      dispatch(hideLoading());
      dispatch(SuccessMessage({ message: res.data.message }));
      console.log(res.data);
      return res.data;
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

const postPayment = async (id, token, data) => {
  return await axiosBase.put(`/orders/${id}/payment_type/update`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export default PaymentMethodSelection;
