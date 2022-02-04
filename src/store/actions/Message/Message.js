import { ERROR, HIDE_MESSAGE, SUCCESS, WARNING } from "../Types/Types";

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
export const WarningMessage = (payload) => {
  return {
    type: WARNING,
    payload,
  };
};

export const SuccessMessage = (payload) => {
  return {
    type: SUCCESS,
    payload,
  };
};
