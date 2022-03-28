import { HIDE_CONFIRMATION, SHOW_CONFIRMATION } from "../Types/Types";

export const showConfirmation = (title, onAccept) => {
  return {
    type: SHOW_CONFIRMATION,
    payload: {
      title,
      onAccept,
    },
  };
};

export const hideConfirmation = (payload) => {
  return {
    type: HIDE_CONFIRMATION,
  };
};
