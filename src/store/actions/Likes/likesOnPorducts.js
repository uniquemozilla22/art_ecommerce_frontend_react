import axiosBase from "../../../axiosBase";
import { hideLoading, showLoading } from "../Loading/Loading";
import {
  ErrorMessage,
  SuccessMessage,
  WarningMessage,
} from "../Message/Message";
import { TOOGLE_LIKE_ON_PRODUCT } from "../Types/Types";

const toggleLikeOnProduct = (id) => {
  return (dispatch, getState) => {
    dispatch(showLoading());
    const token = getState().user.token;
    toggleRequest(id, token)
      .then((res) => {
        dispatch(hideLoading());
        dispatch({ type: TOOGLE_LIKE_ON_PRODUCT, payload: id });
      })
      .catch((err) => {
        console.log(err);
        dispatch(hideLoading());

        if (err.response === undefined) {
          dispatch(
            ErrorMessage({
              message: "Network Error! Check Your Internet Connection",
            })
          );
        } else {
          if (err.response.status === 400) {
            dispatch(WarningMessage({ message: err.response.data.message }));
          } else {
            dispatch(ErrorMessage({ message: err.response.data.message }));
          }
        }
      });
  };
};

const toggleRequest = (id, token) => {
  let data = { product_id: id };
  return axiosBase.post("productLikes/create", data, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

export default toggleLikeOnProduct;
