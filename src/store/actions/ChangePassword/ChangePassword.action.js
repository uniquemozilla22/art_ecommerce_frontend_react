import axiosBase from "../../../axiosBase";
import { store } from "../../store";
import { hideLoading, showLoading } from "../Loading/Loading";
import { ErrorMessage, SuccessMessage } from "../Message/Message";

const ChangePasswordAction = (data) => {
  const state = store.getState();

  return (dispatch) => {
    dispatch(showLoading());

    postRequest(data, state.user.token)
      .then((res) => {
        dispatch(hideLoading());
        dispatch(SuccessMessage({ message: res.data.message }));
      })
      .catch((error) => {
        dispatch(hideLoading());

        if (error.response === undefined) {
          dispatch(ErrorMessage({ message: "Check you Internet Connection" }));
        }

        dispatch(ErrorMessage({ message: error.response.data.message }));
      });
  };
};

const postRequest = (data, token) => {
  return axiosBase.post("/users/changePassword", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export default ChangePasswordAction;
