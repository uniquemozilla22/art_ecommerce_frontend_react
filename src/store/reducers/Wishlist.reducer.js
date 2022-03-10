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
      let wishlistItems = removeList(state.wishlistItems, action.payload);
      return { ...state, wishlistItems };
    }
    default:
      return state;
  }
};

const removeList = (wishlistItems, id) => {
  const filteredItems = wishlistItems.filter((item) => item.data.id !== id);
  console.log(filteredItems);
  return filteredItems;
};

export default WishListReducer;
