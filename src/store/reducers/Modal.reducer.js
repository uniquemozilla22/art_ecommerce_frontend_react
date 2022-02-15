import {
  CART,
  CATEGORY,
  SEARCH,
  HELP_CENTER,
  LOGIN_MODAL,
  FORGOT__MODEL,
} from "../actions/Types/Types";

const initialState = {
  category: false,
  cart: false,
  search: false,
  helpCenter: false,
  login: false,
  forgot: false,
};

const ModalReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART:
      return { ...state, cart: !state.cart };

    case CATEGORY:
      return { ...state, category: !state.category };

    case SEARCH:
      return { ...state, search: !state.search };

    case HELP_CENTER:
      return { ...state, helpCenter: !state.helpCenter };

    case LOGIN_MODAL:
      return { ...state, login: !state.login };

    case FORGOT__MODEL:
      return { ...state, forgot: !state.forgot };

    default:
      return state;
  }
};

export default ModalReducer;
