import axiosBase from "../../../axiosBase";
import { hideLoading, showLoading } from "../Loading/Loading";
import { ErrorMessage, WarningMessage } from "../Message/Message";

const SearchProducts = (data, search) => {
  return async (dispatch, getState) => {
    search && dispatch(showLoading());
    try {
      const res = await new Promise((resolve) => resolve(fetch(data)));
      search && dispatch(hideLoading());
      return res.data;
    } catch (error) {
      search && dispatch(hideLoading());

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

const fetch = async (product_name) => {
  return await axiosBase.post("products/search", { product_name });
};

export default SearchProducts;
