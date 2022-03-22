import {
  ADD_CART,
  REMOVE_ALL_CART,
  REMOVE_CART,
  UPDATE_CART,
  GET_CART,
} from "../actions/Types/Types";

const initialState = {
  cartItems: [],
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CART: {
      return { ...state, cartItems: action.payload };
    }
    case ADD_CART: {
      const UpdatedCartItems = addToCart(state.cartItems, action.payload);
      return { ...state, cartItems: UpdatedCartItems };
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
  console.log(payload.id, "remove cart");
  const filteredItems = state.cartItems.filter(
    (item) => item.data.id !== payload.id
  );
  return { ...state, cartItems: filteredItems };
};

const addToCart = (cartItems, payload) => {
  cartItems.push({ ...payload });
  return cartItems;
};

const removeAllCart = (state, payload) => {
  const cart = [];
  return { ...state, cartItems: cart };
};

export default CartReducer;
