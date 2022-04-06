import axiosBase from "../../../axiosBase";
import { showLoading, hideLoading } from "../Loading/Loading";
import {
  ErrorMessage,
  SuccessMessage,
  WarningMessage,
} from "../Message/Message";

const PostPayment = (order_id, payment_method_id, address_id) => {
  return async (dispatch, getState) => {
    if (!payment_method_id) {
      dispatch(
        WarningMessage({
          message: "Validation Error !There is no payment Method Selected",
        })
      );
    } else if (!address_id) {
      dispatch(
        WarningMessage({
          message: "Validation Error !There is no address selected",
        })
      );
    } else {
      dispatch(showLoading());
      try {
        const reqData = { order_id, payment_method_id, address_id };
        const { data } = await new Promise((resolve) =>
          resolve(PostPay(getState().user.token, reqData))
        );
        dispatch(hideLoading());
        dispatch(
          SuccessMessage({ message: "Your Payment is completed for the order" })
        );
        let myWindow = window.open("", "_blank");
        myWindow.document.write(data);
        // return data;
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
    }
  };
};

const PostPay = async (token, data) => {
  return await axiosBase.post("checkout", data, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

export default PostPayment;
