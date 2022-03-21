import { hideLoading, showLoading } from "../Loading/Loading";
import axiosBase from "../../../axiosBase";
import { ErrorMessage, WarningMessage } from "../Message/Message";

const IsBiddingUser = (id) => {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    try {
      const res = await new Promise((resolve) =>
        resolve(checkBidding(id, getState().user.token))
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

const checkBidding = async (id, token) => {
  return await axiosBase.get(`bids/product/${id}/status`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

export default IsBiddingUser;
