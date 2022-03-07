import {
  ALL_PRODUCTS,
  SINGLE_PRODUCT,
  PRODUCT_BY_CATEGORIES,
  FILTER_DATA_PRICE,
  SORT_BY_NAME_ASCENDING,
  SORT_BY_NAME_DESCENDING,
  SORT_BY_PRICE_ASCENDING,
  SORT_BY_PRICE_DESCENDING,
  SORT_CATEGORY_BY_PRICE_ASCENDING,
  SORT_CATEGORY_BY_NAME_DESCENDING,
  SORT_CATEGORY_BY_NAME_ASCENDING,
  SORT_CATEGORY_BY_PRICE_DESCENDING,
  FETCH_WISHLIST,
} from "../actions/Types/Types";

let initialState = {
  all: null,
  single: null,
  category: null,
};

let ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_PRODUCTS:
      return {
        ...state,
        all: action.payload,
      };
    case SINGLE_PRODUCT:
      return {
        ...state,
        single: action.payload,
      };
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
    case FETCH_WISHLIST: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
};

export default ProductReducer;
