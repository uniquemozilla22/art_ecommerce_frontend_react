import axiosBase from "../../../axiosBase";
import { store } from "../../store";
import { hideLoading, showLoading } from "../Loading/Loading";
import {
  SuccessMessage,
  ErrorMessage,
  WarningMessage,
} from "../Message/Message";
import { UPDATE__PROFILE } from "../Types/Types";

const UpdateProfile = (payload) => {
  const state = store.getState();
  return (dispatch) => {
    dispatch(showLoading());

    updateData(state.user.token, payload)
      .then((response) => {
        dispatch(hideLoading());

        dispatch(
          SuccessMessage({
            message: response.statusText + "!" + response.data.message,
          })
        );
        dispatch({
          type: UPDATE__PROFILE,
          payload: {
            [payload.name]: payload.value,
          },
        });
      })
      .catch((error) => {
        dispatch(hideLoading());
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
