import art1 from "../../Assets/art1.jpg";
import art2 from "../../Assets/art2.jpg";
import art3 from "../../Assets/art3.jpg";

let initialState = {
  productCount: 0,
  productList: [
    {
      id: 1,
      name: "One",
      description: "this is the description for One",
      image: art1,
      price: 3000,
      time: "Jan 27, 2022 15:37:25",
    },
    {
      id: 2,
      name: "Two",
      description: "this is the description for Two",
      image: art2,
      price: 6000,
      time: "Jan 26, 2022 15:37:25",
    },
    {
      id: 3,
      name: "Three",
      description: "this is the description for Three",
      image: art3,
      price: 2000,
      time: "Jan 24, 2022 15:37:25",
    },
    {
      id: 4,
      name: "Three",
      description: "this is the description for Three",
      image: art3,
      price: 2000,
      time: "Jan 28, 2022 15:37:25",
    },
  ],
};

let ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default ProductReducer;
