import React from "react";
import classes from "./SingleProduct.module.css";
import art1 from "../../Assets/art1.jpg";
import ProductInformation from "../../components/ProductInformation/ProductInformation";

const SingleProduct = () => {
  return (
    <div className={classes.product__page}>
      <div className="container">
        <ProductInformation
          image={art1}
          name="One"
          price={2000}
          supplier={1}
          like={99}
          tags={["Abstract", "Lovely", "Mystical"]}
          categories={["Abstract", "Lovely", "Mystical", "natural"]}
        />
        <
      </div>
    </div>
  );
};

export default SingleProduct;
