import axiosBase from "../../../axiosBase";
import { hideLoading, showLoading } from "../Loading/Loading";
import { ErrorMessage, WarningMessage } from "../Message/Message";

const FetchCustomerInfo = () => {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    try {
      const res = await new Promise((resolve) =>
        resolve(fetchCustomer(getState().user.token))
      );
      dispatch(hideLoading());
      return res.data;
    } catch (error) {
      console.log({ ...error });
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

const fetchCustomer = async (token) => {
  return await axiosBase.get("/users/customerInfo", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

export default FetchCustomerInfo;
