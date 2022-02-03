import { ERROR, HIDE_MESSAGE } from "../Types/Types";

export const HideMessage = () => {
  return {
    type: HIDE_MESSAGE,
  };
};

export const ErrorMessage = (payload) => {
  return {
    type: ERROR,
    payload,
  };
};
