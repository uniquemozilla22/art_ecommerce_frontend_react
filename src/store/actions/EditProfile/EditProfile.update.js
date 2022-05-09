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
  return async (dispatch, getState) => {
    dispatch(showLoading());
    try {
      const res = await new Promise((resolve) =>
        resolve(updateData(getState().user.token, payload))
      );
      dispatch(hideLoading());
      dispatch(
        SuccessMessage({
          message: res.statusText + "!" + res.data.message,
        })
      );
      dispatch({
        type: UPDATE__PROFILE,
        payload: {
          [payload.name]: payload.value,
        },
      });
      return res.data;
    } catch (error) {
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
    }
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
