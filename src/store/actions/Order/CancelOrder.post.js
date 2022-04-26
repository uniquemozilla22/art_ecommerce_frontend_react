import axiosBase from "../../../axiosBase";
import { showLoading, hideLoading } from "../Loading/Loading";
import { ErrorMessage, WarningMessage } from "../Message/Message";

const CancelOrder = (id) => {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    try {
      const { data } = await postCancelOrder(getState().user.token, id);
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

const postCancelOrder = (token, id) => {
  return axiosBase.put(
    `/orders/${id}/cancel`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export default CancelOrder;
