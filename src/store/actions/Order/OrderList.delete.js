import axiosBase from "../../../axiosBase";
import { hideLoading, showLoading } from "../Loading/Loading";
import {
  ErrorMessage,
  SuccessMessage,
  WarningMessage,
} from "../Message/Message";

const DeleteOrderList = (order) => {
  return async (dispatch, getState) => {
    dispatch(showLoading());

    try {
      const res = await new Promise((resolve) =>
        resolve(deleteRequest(order, getState().user.token))
      );
      dispatch(hideLoading());
      dispatch(SuccessMessage({ message: res.data.message }));
      return res.data.success;
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
      return false;
    }
  };
};

const deleteRequest = (id, token) => {
  return axiosBase.delete("/orders/delete/" + id, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

export default DeleteOrderList;
