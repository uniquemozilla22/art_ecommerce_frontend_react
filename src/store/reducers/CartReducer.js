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
      price: "3000",
    },
    {
      id: 2,
      name: "Two",
      description: "this is the description for Two",
      image: art2,
      price: "6000",
    },
    {
      id: 3,
      name: "Three",
      description: "this is the description for Three",
      image: art3,
      price: "2000",
    },
  ],
};
const CartReducer = (state = initialState, action) => {
  const { types, payload } = action;

  switch (types) {
    case ADD_CART:
      return state;

    case REMOVE_ALL_CART:
      return state;

    case REMOVE_CART: {
      return 
    }
    case UPDATE_CART:
      return state;

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

export default CartReducer;
