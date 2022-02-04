import {
  ERROR,
  HIDE_MESSAGE,
  SHOW_MESSAGE,
  SUCCESS,
  WARNING,
} from "../actions/Types/Types";

const initialState = {
  show: false,
  info: {
    message: "",
    alert: SUCCESS,
  },
};

const MessageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ERROR: {
      return {
        ...state,
        show: true,
        info: { message: action.payload.message, alert: ERROR },
      };
    }
    case HIDE_MESSAGE: {
      return {
        ...state,
        show: false,
      };
    }

    case SUCCESS: {
      return {
        ...state,
        show: true,
        info: { message: action.payload.message, alert: SUCCESS },
      };
    }

    case WARNING: {
      return {
        ...state,
        show: true,
        info: { message: action.payload.message, alert: WARNING },
      };
    }

    default:
      return state;
  }
};

export default MessageReducer;
