import axiosBase from "../../../axiosBase";
import { hideLoading, showLoading } from "../Loading/Loading";
import { ErrorMessage, WarningMessage } from "../Message/Message";

const GetOrderList = () => {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    try {
      const res = fetchOrderData(getState().user.token);
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

const fetchOrderData = async (token) => [
  axiosBase.get("", {
    headers: {
      Authorization: "Bearer " + token,
    },
  }),
];

export default GetOrderList;
