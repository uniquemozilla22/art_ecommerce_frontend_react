import axiosBase from "../../../axiosBase";
import { store } from "../../store";
import { SuccessMessage } from "../Message/Message";

const UpdateProfile = (payload) => {
  const state = store.getState();
  return (dispatch) => {
    updateData(state.user.token, payload)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const updateData = (token) => {
  return axiosBase.get("/customers/details", {
    headers: {
      Authorization: `Bearer ${token} `,
    },
  });
};

export default UpdateProfile;
