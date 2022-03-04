import axiosBase from "../../../axiosBase";
import { hideLoading, showLoading } from "../Loading/Loading";
import { ErrorMessage, WarningMessage } from "../Message/Message";
import { PRODUCT_BY_CATEGORIES } from "../Types/Types";

const ProductsByCategories = ({ id }) => {
  return (dispatch) => {
    dispatch(showLoading());
    fetchProductByCategories(id)
      .then((res) => {
        dispatch(hideLoading());
        return dispatch({
          type: PRODUCT_BY_CATEGORIES,
          payload: res.data.products,
        });
      })
      .catch((err) => {
        dispatch(hideLoading());
        if (err.response === undefined) {
          dispatch(
            ErrorMessage({
              message: "Network Error! Check Your Internet Connection",
            })
          );
        }
        if (err.response.status === 400) {
          dispatch(WarningMessage({ message: err.response.data.message }));
        } else {
          dispatch(ErrorMessage({ message: err.response.data.message }));
        }
      });
  };
};

const fetchProductByCategories = (id) => {
  return axiosBase.get("/categories/" + id);
};

export default ProductsByCategories;
