import axiosBase from "../../../axiosBase";
import { hideLoading, showLoading } from "../Loading/Loading";
import { ErrorMessage, WarningMessage } from "../Message/Message";

const fetchTrendingAuctions = () => {
  return async (dispatch, getState) => {
    dispatch(showLoading);

    try {
      const response = await new Promise((resolve) => resolve(fetchData()));
      dispatch(hideLoading());
      return response.data;
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

const fetchData = () => {
  return axiosBase.get("products/trending");
};

export default fetchTrendingAuctions;
