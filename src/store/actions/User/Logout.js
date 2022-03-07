import { SuccessMessage } from "../Message/Message";
import { REMOVE_ALL_CART, USER_LOGOUT } from "../Types/Types";

export const Logout = () => {
  return (dispatch, getState) => {
    dispatch({ type: REMOVE_ALL_CART });
    dispatch({
      type: USER_LOGOUT,
    });
    dispatch(SuccessMessage({ message: "Logged Out Successful" }));
  };
};
