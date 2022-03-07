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
    case SORT_BY_NAME_ASCENDING: {
      return {
        ...state,
        all: state.all.sort((a, b) =>
          a.data.name > b.data.name ? 1 : b.data.name > a.data.name ? -1 : 0
        ),
      };
    }
    case SORT_BY_NAME_DESCENDING: {
      return {
        ...state,
        all: state.all.sort((a, b) =>
          a.data.name < b.data.name ? 1 : b.data.name < a.data.name ? -1 : 0
        ),
      };
    }
    case SORT_BY_PRICE_ASCENDING: {
      return {
        ...state,
        all: state.all.sort((a, b) =>
          a.data.unit_price > b.data.unit_price
            ? 1
            : b.data.unit_price > a.data.unit_price
            ? -1
            : 0
        ),
      };
    }
    case SORT_BY_PRICE_DESCENDING: {
      return {
        ...state,
        all: state.all.sort((a, b) =>
          a.data.unit_price < b.data.unit_price
            ? 1
            : b.data.unit_price < a.data.unit_price
            ? -1
            : 0
        ),
      };
    }
    case SORT_CATEGORY_BY_NAME_ASCENDING: {
      return {
        ...state,
        category: state.category.sort((a, b) =>
          a.data.name > b.data.name ? 1 : b.data.name > a.data.name ? -1 : 0
        ),
      };
    }
    case SORT_CATEGORY_BY_NAME_DESCENDING: {
      return {
        ...state,
        category: state.category.sort((a, b) =>
          a.data.name < b.data.name ? 1 : b.data.name < a.data.name ? -1 : 0
        ),
      };
    }
    case SORT_CATEGORY_BY_PRICE_ASCENDING: {
      return {
        ...state,
        category: state.category.sort((a, b) =>
          a.data.unit_price > b.data.unit_price
            ? 1
            : b.data.unit_price > a.data.unit_price
            ? -1
            : 0
        ),
      };
    }
    case SORT_CATEGORY_BY_PRICE_DESCENDING: {
      return {
        ...state,
        category: state.category.sort((a, b) =>
          a.data.unit_price < b.data.unit_price
            ? 1
            : b.data.unit_price < a.data.unit_price
            ? -1
            : 0
        ),
      };
    }
    
    default:
      return state;
  }
};

export default ProductReducer;
