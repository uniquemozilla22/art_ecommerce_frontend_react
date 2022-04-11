import axiosBase from "../../../axiosBase";
import { showLoading, hideLoading } from "../Loading/Loading";
import { ErrorMessage, WarningMessage } from "../Message/Message";

const FetchUserAddress = () => {
  return async (dispatch, getState) => {
    try {
      const { data } = await new Promise((resolve) =>
        resolve(fetchData(getState().user.token))
      );
      return data;
    } catch (error) {
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

const fetchData = async (token) => {
  return await axiosBase.get(`address/list`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

export default FetchUserAddress;
