import { REMOVE_CART } from "../Types/Types";

const removeCartItem = (payload) => {
  const { id } = payload;

  return {
    type: REMOVE_CART,
    payload,
  };
};

export default removeCartItem;
