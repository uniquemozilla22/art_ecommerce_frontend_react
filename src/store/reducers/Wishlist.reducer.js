import { FETCH_WISHLIST } from "../actions/Types/Types";
import { ADD_WISHLIST_ITEM } from "./../actions/Types/Types";

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
    case ADD_WISHLIST_ITEM: {
      return {
        ...state,
        wishlistItems: state.wishlistItems.push(action.payload),
      };
    }

    default:
      return state;
  }
};

export default WishListReducer;
