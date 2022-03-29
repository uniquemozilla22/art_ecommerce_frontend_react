import axiosBase from "../../../axiosBase";
import { showLoading, hideLoading } from "../Loading/Loading";
import { ErrorMessage, WarningMessage } from "../Message/Message";

const FetchSupplier = (id) => {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    try {
      const res = await new Promise((resolve) => resolve(fetch(id)));
      dispatch(hideLoading());
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

const fetch = async (id) => {
  return await axiosBase("suppliers/" + id);
};

export default FetchSupplier;
