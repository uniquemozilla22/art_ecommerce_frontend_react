import axiosBase from "../../../axiosBase";
import { hideLoading, showLoading } from "../Loading/Loading";
import {
  ErrorMessage,
  SuccessMessage,
  WarningMessage,
} from "../Message/Message";

const UpdateOrderAddress = (id, updaingData) => {
  return async (dispatch, getState) => {
    dispatch(showLoading());

    try {
      const { data } = await new Promise((resolve) =>
        resolve(update(getState().user.token, id, updaingData))
      );
      dispatch(hideLoading());
      dispatch(SuccessMessage({ message: data.message }));
      return data.updatedValues;
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

const update = async (token, id, data) => {
  return await axiosBase.put(`address/${id}/update`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export default UpdateOrderAddress;
