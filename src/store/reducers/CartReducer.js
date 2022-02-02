import {
  ADD_CART,
  REMOVE_ALL_CART,
  REMOVE_CART,
  UPDATE_CART,
} from "../actions/Types/Types";
import art1 from "../../Assets/art1.jpg";
import art2 from "../../Assets/art2.jpg";
import art3 from "../../Assets/art3.jpg";

const initialState = {
  cartID: 0,
  cartItems: [
    {
      id: 1,
      name: "One",
      description: "this is the description for One",
      image: art1,
      price: 3000,
    },
    {
      id: 2,
      name: "Two",
      description: "this is the description for Two",
      image: art2,
      price: 6000,
    },
    {
      id: 3,
      name: "Three",
      description: "this is the description for Three",
      image: art3,
      price: 2000,
    },
  ],
};
const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART: {
      const updatedState = addCartReducer(state, action.payload);
      return updatedState;
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
