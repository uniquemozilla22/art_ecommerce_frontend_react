import axiosBase from "../../../axiosBase";
import { deductBalance } from "../Balance/Balance.action";
import { hideLoading, showLoading } from "../Loading/Loading";
import {
  ErrorMessage,
  SuccessMessage,
  WarningMessage,
} from "../Message/Message";

const BidOnProduct = (auction_id, price) => {
  return (dispatch, getState) => {
    dispatch(showLoading);
    postAmount(auction_id, price, getState().user.token)
      .then((res) => {
        dispatch(deductBalance(price));
        dispatch(hideLoading());
        dispatch(SuccessMessage({ message: res.data.message }));
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

const postAmount = (auction_id, price, token) => {
  return axiosBase.post(
    "bids/create",
    { auction_id, price },
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
};

export default BidOnProduct;
