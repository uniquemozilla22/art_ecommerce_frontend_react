import { HIDE_CONFIRMATION, SHOW_CONFIRMATION } from "../actions/Types/Types";

const initialState = {
  show: false,
  title: null,
  onAccept: null,
};

const ConfirmationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_CONFIRMATION: {
      console.log(action.payload);
      return {
        ...state,
        show: true,
        title: action.payload.title,
        onAccept: action.payload.onAccept,
      };
    }
    case HIDE_CONFIRMATION: {
      return {
        ...state,
        show: false,
        onAccept: null,
      };
    }
    default: {
      return state;
    }
  }
};

export default ConfirmationReducer;
