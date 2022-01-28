import React from "react";
import classes from "./SingleProduct.module.css";
import art1 from "../../Assets/art1.jpg";
import art2 from "../../Assets/art2.jpg";
import art3 from "../../Assets/art3.jpg";
import {
  ProductInformation,
  BiddingInformation,
} from "../../components/ProductInformation/ProductInformation";
import ProductDescription from "../../components/ProductDescription/ProductDescription";
import ProductSection from "../../components/ProductSection/ProductSection";
import highestbidder from "../../Assets/artist2.png";

const SingleProduct = () => {
  const data = [
    {
      id: 1,
      name: "One",
      description: "this is the description for One",
      image: art1,
      price: 3000,
      time: "Feb 27, 2022 15:37:25",
    },
    {
      id: 2,
      name: "Two",
      description: "this is the description for Two",
      image: art2,
      price: 6000,
      time: "Feb 26, 2022 15:37:25",
    },
    {
      id: 3,
      name: "Three",
      description: "this is the description for Two",
      image: art3,
      price: 6000,
      time: "Feb 26, 2022 15:37:25",
    },
    {
      id: 4,
      name: "Four",
      description: "this is the description for Two",
      image: art1,
      price: 6000,
    },
  ];
  return (
    <div className={classes.product__page}>
      <div className="container">
        <BiddingInformation
          image={art1}
          name="One"
          price={2000}
          supplier={1}
          like={99}
          tags={["Abstract", "Lovely", "Mystical"]}
          categories={["Abstract", "Lovely", "Mystical", "Natural"]}
          time={"Feb 26, 2022 15:37:25"}
          highestbidder={"Ramesh Yadav"}
          highestbidderImage={highestbidder}
        />
        <ProductDescription
          description={"This is the description"}
          additionalInformation={"additional Information"}
        />
        <ProductSection title={"Trending Products"} products={data} />
      </div>
    </div>
  );
};

export default SingleProduct;
