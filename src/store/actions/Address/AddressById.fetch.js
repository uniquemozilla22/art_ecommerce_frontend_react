import axiosBase from "../../../axiosBase";
import { hideLoading, showLoading } from "../Loading/Loading";
import { ErrorMessage, WarningMessage } from "../Message/Message";

const AddressById = (id) => {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    try {
      const { data } = await new Promise((resolve) =>
        resolve(fetch(id, getState().user.token))
      );
      dispatch(hideLoading());
      return data;
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

const fetch = async (id, token) => {
  return await axiosBase.get(`address/${id}/detail`);
};

export default AddressById;
