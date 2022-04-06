import { HIDE_FRAME_MODAL, SHOW_FRAME_MODAL } from "../actions/Types/Types";

const initialState = {
  show: false,
  data: null,
};

const FrameReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SHOW_FRAME_MODAL:
      return {
        ...state,
        show: true,
        data: payload,
      };
    case HIDE_FRAME_MODAL:
      return {
        ...state,
        show: false,
        data: payload,
      };
    default:
      return state;
  }
};

export default FrameReducer;
