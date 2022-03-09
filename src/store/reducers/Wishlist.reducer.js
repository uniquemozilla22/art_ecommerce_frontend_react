import { DELETE_WISHLIST_ITEM, FETCH_WISHLIST } from "../actions/Types/Types";
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
    case DELETE_WISHLIST_ITEM: {
      return {
        ...state,
        wishlistItems: removeList(state.wishlistItems, action.payload.id),
      };
    }
    default:
      return state;
  }
};

const removeList = (wishlistItems, id) => {
  let index = wishlistItems.findIndex((item) => {
    return item.data.id === id;
  });
  if (index !== -1) wishlistItems.splice(index, 1);

  return wishlistItems;
};

export default WishListReducer;
