import axiosBase from "../../../axiosBase";
import { hideLoading, showLoading } from "../Loading/Loading";
import { ErrorMessage, WarningMessage } from "../Message/Message";

const FetchAllBids = () => {
  return async (dispatch, getState) => {
    const token = getState().user.token;
    dispatch(showLoading());
    try {
      const res = await new Promise((resolve) => resolve(fetch(token)));
      dispatch(hideLoading());
      return res.data;
    } catch (error) {
      console.log({ ...error });
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

const fetch = async (token) => {
  return await axiosBase.get("bids/user", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

export default FetchAllBids;
