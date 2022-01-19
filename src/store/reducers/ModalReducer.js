import { CART, CATEGORY, SEARCH } from "../actions/Types/Types";

const initialState = {
  category: false,
  cart: false,
  search: false,
};

const ModalReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART:
      return { ...state, cart: !state.cart };

    case CATEGORY:
      return { ...state, category: !state.category };

    case SEARCH:
      return { ...state, category: !state.category };

    default:
      return state;
  }
};

export default ModalReducer;
