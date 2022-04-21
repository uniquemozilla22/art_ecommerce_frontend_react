import axiosBase from "../../../axiosBase";
import { hideLoading, showLoading } from "../Loading/Loading";
import {
  ErrorMessage,
  SuccessMessage,
  WarningMessage,
} from "../Message/Message";

const AddOrderAddress = (address) => {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    try {
      const { data } = await new Promise((resolve) =>
        resolve(
          Post(getState().user.token, { ...address, status: "secondary" })
        )
      );
      dispatch(hideLoading());
      dispatch(SuccessMessage({ message: data.message }));
      return data.address;
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

const Post = async (token, data) => {
  return await axiosBase.post("address/create", data, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

export default AddOrderAddress;
