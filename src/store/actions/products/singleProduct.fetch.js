import axiosBase from "../../../axiosBase";
import { hideLoading, showLoading } from "../Loading/Loading";
import { ErrorMessage, WarningMessage } from "../Message/Message";
import { SINGLE_PRODUCT } from "../Types/Types";

const SingleProductFetchData = (id) => {
  return (dispatch) => {
    dispatch(showLoading());
    FetchSingleProduct(id)
      .then((res) => {
        dispatch(hideLoading());
        return dispatch({
          type: SINGLE_PRODUCT,
          payload: res.data.data,
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

const FetchSingleProduct = (id) => {
  return axiosBase.get("/products/" + id);
};

export default SingleProductFetchData;
