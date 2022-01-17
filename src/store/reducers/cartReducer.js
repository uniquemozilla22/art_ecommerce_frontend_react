const initialState = {
  products: [],
};

const CartReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
};

export default CartReducer;
