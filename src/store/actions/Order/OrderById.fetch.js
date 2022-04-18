import axiosBase from "../../../axiosBase";
import { hideLoading, showLoading } from "../Loading/Loading";
import { ErrorMessage, WarningMessage } from "../Message/Message";

const FetchOrderById = (id) => {
  return async (dispatch, getState) => {
    dispatch(showLoading());

    try {
      const { data } = await new Promise((resolve) =>
        resolve(fetch(getState().user.token, id))
      );
      dispatch(hideLoading());
      return data;
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
        } else if (error.response?.status === 404) {
          dispatch(
            ErrorMessage({
              message: "Request Not Found ! Try Refreshing the page.",
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

const fetch = async (token, id) => {
  return await axiosBase.get("orders/" + id, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

export default FetchOrderById;
