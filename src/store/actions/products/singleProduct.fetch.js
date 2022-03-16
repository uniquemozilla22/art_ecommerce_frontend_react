import axiosBase from "../../../axiosBase";
import { hideLoading, showLoading } from "../Loading/Loading";
import { ErrorMessage, WarningMessage } from "../Message/Message";
import { SINGLE_PRODUCT } from "../Types/Types";

const SingleProductFetchData = (id) => {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const res = await new Promise((resolve) =>
        resolve(FetchSingleProduct(id))
      );
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

const FetchSingleProduct = (id) => {
  return axiosBase.get("/products/" + id);
};

export default SingleProductFetchData;
