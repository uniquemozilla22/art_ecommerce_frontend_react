import {
  ADD_CART,
  REMOVE_ALL_CART,
  REMOVE_CART,
  UPDATE_CART,
} from "../actions/Types/Types";

const initialState = {
  cartID: null,
  cartItems: [],
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART: {
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    }
    case REMOVE_ALL_CART: {
      const updatedCart = removeAllCart(state, action.payload);
      return updatedCart;
    }

    case REMOVE_CART: {
      const updatedState = removeCartReducer(state, action.payload);
      return updatedState;
    }
    default:
      return state;
  }
};

const removeCartReducer = (state, payload) => {
  const filteredItems = state.cartItems.filter(
    (item) => item.id !== payload.id
  );
  return { ...state, cartItems: filteredItems };
};

const addCartReducer = (state, payload) => {
  const addedItems = state.cartItems.add(payload);

  return { ...state, cartItems: addedItems };
};

const removeAllCart = (state, payload) => {
  const cart = [];
  return { ...state, cartItems: cart };
};

export default CartReducer;
