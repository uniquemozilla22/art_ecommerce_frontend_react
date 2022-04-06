import axiosBase from "../../../axiosBase";
import { showLoading, hideLoading } from "../Loading/Loading";
import {
  ErrorMessage,
  SuccessMessage,
  WarningMessage,
} from "../Message/Message";

const DeleteOrderAddress = (id) => {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    try {
      const { data } = await new Promise((resolve) =>
        resolve(deleteData(getState().user.token, id))
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
        } else if (error.response?.status === 404) {
          dispatch(
            ErrorMessage({
              message: "Request Not Found ! Try Refreshing the page.",
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

const deleteData = async (token, id) => {
  return await axiosBase.delete(`address/${id}/delete`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

export default DeleteOrderAddress;
