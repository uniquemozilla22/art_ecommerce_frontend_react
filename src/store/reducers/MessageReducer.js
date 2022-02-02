import { ERROR, HIDE_MESSAGE, SUCCESS } from "../actions/Types/Types";

const initialState = {
  show: true,
  info: {
    message: "This is the Message",
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

    default:
      return state;
  }
};

export default MessageReducer;
