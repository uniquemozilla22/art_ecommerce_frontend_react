import art1 from "../../Assets/art1.jpg";
import art2 from "../../Assets/art2.jpg";
import art3 from "../../Assets/art3.jpg";
import { ALL_PRODUCTS } from "../actions/Types/Types";

let initialState = {
  all: null,
};

let ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_PRODUCTS:
      return {
        ...state,
        all: action.payload,
      };
    default:
      return state;
  }
};

export default ProductReducer;
