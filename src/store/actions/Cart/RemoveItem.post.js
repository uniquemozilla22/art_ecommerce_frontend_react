import { REMOVE_CART } from "../Types/Types";

const removeCartItem = (payload) => {
  return {
    type: REMOVE_CART,
    payload,
  };
};

export default removeCartItem;
