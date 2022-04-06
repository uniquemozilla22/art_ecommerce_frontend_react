import { HIDE_FRAME_MODAL, SHOW_FRAME_MODAL } from "../Types/Types";

export const showFrame = (data) => {
  return {
    type: SHOW_FRAME_MODAL,
    payload: data,
  };
};

export const hideFrame = (data) => {
  return {
    type: HIDE_FRAME_MODAL,
    payload: null,
  };
};
