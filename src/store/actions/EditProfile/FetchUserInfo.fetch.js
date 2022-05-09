import axiosBase from "../../../axiosBase";
import { hideLoading, showLoading } from "../Loading/Loading";
import { ErrorMessage, WarningMessage } from "../Message/Message";

const FetchUserInfo = () => {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    try {
      const res = await new Promise((resolve) =>
        resolve(FetchUser(getState().user.token))
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

const FetchUser = async (token) => {
  return await axiosBase.get("/users/info", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

export default FetchUserInfo;
