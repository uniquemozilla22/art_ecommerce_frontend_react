import {
  ALL_PRODUCTS,
  SINGLE_PRODUCT,
  PRODUCT_BY_CATEGORIES,
  FILTER_DATA_PRICE,
  FETCH_WISHLIST,
  TRENDING_AUCTION_FETCH,
} from "../actions/Types/Types";

let initialState = {
  all: null,
  single: null,
  category: null,
  trendingAuctions: null,
};

let ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_BY_CATEGORIES: {
      return {
        ...state,
        category: action.payload,
      };
    }
    case FILTER_DATA_PRICE: {
      return {
        ...state,
        ...action.payload,
      };
    }

    case TRENDING_AUCTION_FETCH: {
      return {
        ...state,
        trendingAuctions: action.payload,
      };
    }

    default:
      return state;
  }
};

export default ProductReducer;
