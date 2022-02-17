import axiosBase from "../../../axiosBase";
import { store } from "../../store";
import {
  SuccessMessage,
  ErrorMessage,
  WarningMessage,
} from "../Message/Message";

const UpdateProfile = (payload) => {
  const state = store.getState();
  return (dispatch) => {
    updateData(state.user.token, payload)
      .then((response) => {
        dispatch(
          SuccessMessage({
            message: response.statusText + "!" + response.data.message,
          })
        );
      })
      .catch((error) => {
        if (error.response === undefined) {
          dispatch(
            ErrorMessage({
              message: "Network Error! Check Your Internet Connection",
            })
          );
        }
        if (error.response.status === 401) {
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
      });
  };
};

const updateData = (token, payload) => {
  const data = { [payload.name]: payload.value };
  return axiosBase.put("/customers/update", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export default UpdateProfile;
