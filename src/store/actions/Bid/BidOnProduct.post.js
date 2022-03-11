import axiosBase from "../../../axiosBase";
import { hideLoading, showLoading } from "../Loading/Loading";
import { SuccessMessage } from "../Message/Message";

const BidOnProduct = (auction_id, price) => {
  return (dispatch, getState) => {
    dispatch(showLoading);
    postAmount(auction_id, price, getState().user.token).then((res) => {
      dispatch(hideLoading());
      dispatch(SuccessMessage({ message: res.data.message }));
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
