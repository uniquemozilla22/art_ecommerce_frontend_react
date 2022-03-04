import { SuccessMessage } from "../Message/Message";
import { USER_LOGOUT } from "../Types/Types";

export const Logout = () => {
  return (dispatch, getState) => {
    dispatch(SuccessMessage({ message: "Logged Out Successful" }));
    return dispatch({
      type: USER_LOGOUT,
    });
  };
};
