import axiosBase from "../../../axiosBase";
import { hideLoading, showLoading } from "../Loading/Loading";
import { ErrorMessage, WarningMessage } from "../Message/Message";

const FetchPaymentMethods = () => {
  return async (dispatch, getState) => {
    try {
      const res = await new Promise((resolve) => resolve(fetch()));
      return res.data;
    } catch (error) {
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

const fetch = async () => {
  return await axiosBase.get("payment_method");
};

export default FetchPaymentMethods;
