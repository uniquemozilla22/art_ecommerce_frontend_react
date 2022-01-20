import { CART, CATEGORY, SEARCH, HELP_CENTER } from "../actions/Types/Types";

const initialState = {
  category: false,
  cart: false,
  search: false,
  helpCenter: false,
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

    default:
      return state;
  }
};

export default ModalReducer;
