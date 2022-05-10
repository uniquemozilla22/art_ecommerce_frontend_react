import axiosBase from "../../../axiosBase";
import { showFrame } from "../Frame/Frame.action";
import { hideLoading, showLoading } from "../Loading/Loading";
import {
  ErrorMessage,
  SuccessMessage,
  WarningMessage,
} from "../Message/Message";
import { addBalance } from "./Balance.action";

const LoadBalance = (payment_method_id, amount) => {
  return async (dispatch, getState) => {
    dispatch(showLoading());

    try {
      const { data } = await new Promise((resolve) =>
        resolve(load(getState().user.token, { payment_method_id, amount }))
      );
      dispatch(hideLoading());
      dispatch(showFrame(data));
      // dispatch(addBalance(data.amount));
      // dispatch(SuccessMessage({ message: data.message }));
      // return data.success;
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

const load = async (token, data) => {
  return await axiosBase.post("users/load-fund-initiate", data, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

export default LoadBalance;
