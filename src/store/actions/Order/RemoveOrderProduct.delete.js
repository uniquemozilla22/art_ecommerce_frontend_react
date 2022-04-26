import axiosBase from "../../../axiosBase";
import { hideLoading, showLoading } from "../Loading/Loading";
import {
  ErrorMessage,
  SuccessMessage,
  WarningMessage,
} from "../Message/Message";

const RemoveProductOnOrder = (order, product) => {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    try {
      const { data } = await new Promise((resolve) =>
        resolve(deleteRequest(order, product, getState().user.token))
      );
      dispatch(hideLoading());
      dispatch(SuccessMessage({ message: data.message }));
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

const deleteRequest = async (order, product, token) => {
  return await axiosBase.delete("orders/item/delete/" + order + "/" + product, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

export default RemoveProductOnOrder;
