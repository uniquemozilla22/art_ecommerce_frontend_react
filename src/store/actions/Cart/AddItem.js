import { ADD_CART } from "../Types/Types";

const addCartItem = (payload) => {
  return {
    type: ADD_CART,
    payload,
  };
};

export default addCartItem;
