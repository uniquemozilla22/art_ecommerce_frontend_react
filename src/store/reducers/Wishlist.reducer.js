import { FETCH_WISHLIST } from "../actions/Types/Types";

const initialState = {
  wishlistItems: [],
};

const WishListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WISHLIST: {
      return {
        ...state,
        wishlistItems: action.payload,
      };
    }

    default:
      return state;
  }
};

export default WishListReducer;
